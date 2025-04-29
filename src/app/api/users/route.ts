import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import { Collection } from 'mongodb';

interface User {
  _id?: string;
  id: string;
  email: string;
  name: string;
  role: string;
  reservations: string[];
  bids: string[];
  // Add password hash later for auth
}

// Placeholder data - will be inserted on first run if collection is empty
const placeholderUsers: User[] = [
  {
    id: 'user-001',
    email: 'buyer@example.com',
    name: 'New Home Buyer',
    role: 'Home Buyer/User',
    reservations: ['svsuic-002'],
    bids: [],
  },
  {
    id: 'user-002',
    email: 'ceo@example.com',
    name: 'Tech CEO',
    role: 'Tech CEO/User',
    reservations: [],
    bids: [],
  },
  {
    id: 'admin-001',
    email: 'admin@drah.tech',
    name: 'DRAH Admin',
    role: 'DRAH Admin',
    reservations: [],
    bids: [],
  },
];

async function getUsersCollection(): Promise<Collection<User>> {
  const client = await connectToDatabase();
  const db = client.db();
  const collection = db.collection<User>('users');

  // Insert placeholder data if the collection is empty
  const count = await collection.countDocuments();
  if (count === 0) {
    console.log('Inserting placeholder users into the database...');
    try {
      // In a real app, hash passwords before inserting
      await collection.insertMany(placeholderUsers);
      console.log('Placeholder users inserted.');
    } catch (error) {
      console.error('Failed to insert placeholder users:', error);
    }
  }

  return collection;
}

export async function GET(request: Request) {
  // WARNING: No authentication implemented yet. Returning all users.
  // Implement proper auth and role checks (REQ-FEAT-UM-008) before production.
  try {
    const usersCollection = await getUsersCollection();
    // Add filtering/specific user fetching based on auth later
    const users = await usersCollection.find({}).toArray();
    console.log('API Route: /api/users fetched from DB');
    // Remove sensitive data like password hashes before returning
    return NextResponse.json(users.map(({ ...user }) => user)); // Basic projection
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// Add POST for registration (REQ-FEAT-UM-001)
// Add PUT for profile updates (REQ-FEAT-UM-005)
// Add specific routes for login/auth later

