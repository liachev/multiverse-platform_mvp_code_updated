import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import { Collection } from 'mongodb';

interface Property {
  _id?: string; // MongoDB adds _id
  id: string;
  address: string;
  price: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  status: string;
  description: string;
  images: string[];
  // Add other fields from REQ-FEAT-RE-002 later
}

// Placeholder data - will be inserted on first run if collection is empty
const placeholderProperties: Property[] = [
  {
    id: 'svsuic-001',
    address: '1 Innovation Way, San Jose, CA',
    price: 1200000,
    size: 1800,
    bedrooms: 3,
    bathrooms: 2.5,
    status: 'Available',
    description: 'Modern eco-friendly home in the heart of SVSUIC.',
    images: ['/images/placeholder-property.jpg'],
  },
  {
    id: 'svsuic-002',
    address: '2 Future Drive, San Jose, CA',
    price: 1350000,
    size: 2200,
    bedrooms: 4,
    bathrooms: 3,
    status: 'Reserved',
    description: 'Spacious family home with smart features.',
    images: ['/images/placeholder-property.jpg'],
  },
];

async function getPropertiesCollection(): Promise<Collection<Property>> {
  const client = await connectToDatabase();
  const db = client.db(); // Use default DB from connection string
  const collection = db.collection<Property>('properties');

  // Insert placeholder data if the collection is empty (for initial setup)
  const count = await collection.countDocuments();
  if (count === 0) {
    console.log('Inserting placeholder properties into the database...');
    try {
      await collection.insertMany(placeholderProperties);
      console.log('Placeholder properties inserted.');
    } catch (error) {
      console.error('Failed to insert placeholder properties:', error);
      // Decide if you want to throw or continue if insertion fails
    }
  }

  return collection;
}

export async function GET(request: Request) {
  try {
    const propertiesCollection = await getPropertiesCollection();
    // Add filtering/sorting based on query params later (REQ-FEAT-RE-005)
    const properties = await propertiesCollection.find({}).toArray();
    console.log('API Route: /api/properties fetched from DB');
    return NextResponse.json(properties);
  } catch (error) {
    console.error('Failed to fetch properties:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// Add POST, PUT, DELETE later for admin management (REQ-FEAT-ADM-002)
// These will also use the getPropertiesCollection function

