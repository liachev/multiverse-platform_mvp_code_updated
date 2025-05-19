import React from 'react';

// Reflecting the structure from the API route
interface Property {
  _id?: string;
  id: string;
  name?: string; // Adding name, as it's good for display
  address: string;
  price: number;
  size: number; // Using 'size' as per API
  bedrooms: number;
  bathrooms: number; 
  status: string;
  description: string;
  images: string[]; // API provides an array of images
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  // Use the first image from the array, or a placeholder if no images
  const imageUrl = property.images && property.images.length > 0 ? property.images[0] : '/images/placeholder-property.jpg';
  const displayName = property.name || property.address || property.id;

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 m-4 max-w-sm flex flex-col">
      <img className="w-full h-56 object-cover" src={imageUrl} alt={displayName} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-drah-blue mb-2 truncate" title={displayName}>{displayName}</h3>
        <p className="text-gray-700 text-sm mb-1 truncate" title={property.address}>
          {property.address}
        </p>
        <p className="text-2xl font-bold text-drah-green mb-3">
          ${property.price.toLocaleString()}
        </p>
        <div className="flex justify-between text-sm text-gray-600 mb-3">
          <span>Beds: {property.bedrooms}</span>
          <span>Baths: {property.bathrooms}</span>
          <span>Size: {property.size} sqft</span>
        </div>
        <p className="text-gray-600 text-xs mb-3 h-10 overflow-hidden flex-grow">
          {property.description}
        </p>
        <div className="mt-auto">
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${ 
              property.status === 'Available' ? 'bg-green-200 text-green-800' :
              property.status === 'Reserved' ? 'bg-yellow-200 text-yellow-800' :
              property.status === 'Pending' ? 'bg-blue-200 text-blue-800' :
              'bg-gray-200 text-gray-800'
            }`}
          >
            {property.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

