import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local or your hosting provider settings');
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// Use a global variable to maintain a cached connection across hot reloads in development.
// This prevents connections growing exponentially during API Route usage.
let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

async function connectToDatabase(): Promise<MongoClient> {
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      global._mongoClientPromise = client.connect();
      console.log("Creating new MongoDB connection (development)...");
    }
    clientPromise = global._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    if (!clientPromise) {
        client = new MongoClient(uri, {
            serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
            }
        });
        clientPromise = client.connect();
        console.log("Creating new MongoDB connection (production)...");
    }
  }

  try {
    // Send a ping to confirm a successful connection
    // Use clientPromise here as client might be null initially in production
    const connectedClient = await clientPromise;
    await connectedClient.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return connectedClient;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    // If connection fails, reset the promise to allow retries
    clientPromise = null; 
    if (process.env.NODE_ENV === 'development') {
        global._mongoClientPromise = null;
    }
    throw error; // Re-throw the error after logging
  }
}

export default connectToDatabase;

// Extend the NodeJS Global type to include the _mongoClientPromise property
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

