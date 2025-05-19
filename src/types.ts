export interface Property {
  _id?: string; // MongoDB adds _id, so it's optional on creation
  id: string; // Main identifier, potentially from an external system or slug
  name?: string; // Optional display name, can be derived from address if missing
  address: string;
  price: number;
  size: number; // Square footage
  bedrooms: number;
  bathrooms: number; // Can be a float for half-baths, e.g., 2.5
  status: string; // e.g., "Available", "Reserved", "Sold", "Pending"
  description: string;
  images: string[]; // Array of URLs or paths to images
  // Optional detailed fields from REQ-FEAT-RE-002 that can be added:
  // propertyType?: string; // e.g., "SingleFamily", "Condo", "Townhouse"
  // lotSizeSqft?: number;
  // yearBuilt?: number;
  // features?: string[]; // e.g., ["Solar Panels", "Smart Home", "Pool"]
  // virtualTourUrl?: string;
  // agent?: {
  //   name: string;
  //   phone?: string;
  //   email?: string;
  // };
  // dateAdded?: string; // ISO date string
  // lastUpdated?: string; // ISO date string
  // location?: {
  //   type: "Point";
  //   coordinates: [number, number]; // [longitude, latitude]
  // };
  // currency?: string; // e.g., "USD"
}

