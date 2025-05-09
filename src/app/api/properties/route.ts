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

async function getPropertiesCollection(): Promise<Collection<Property>> {
  const client = await connectToDatabase();
  const db = client.db('drah'); // Use default DB from connection string
  const collection = db.collection<Property>('properties');
  return collection;
}

export async function GET(request: Request) {
  try {
    const propertiesCollection = await getPropertiesCollection();
    // Add filtering/sorting based on query params later (REQ-FEAT-RE-005)
    const properties = await propertiesCollection.find({}).toArray();
    console.log('API Route: /api/properties fetched from DB');
    console.log('PROPERTIES GK ' + properties.length);
    return NextResponse.json(properties);
  } catch (error) {
    console.error('Failed to fetch properties:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// Add POST, PUT, DELETE later for admin management (REQ-FEAT-ADM-002)
// These will also use the getPropertiesCollection function

