'use client';

import { useState, useEffect, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';

// Radix UI Components
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import * as Label from '@radix-ui/react-label';
import * as Separator from '@radix-ui/react-separator';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

// Icons
import {
  X,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  BedDouble,
  Bath,
  Square,
  Calendar,
  Map,
  Home,
  Tag,
} from 'lucide-react';

// Form schema
const filterSchema = z.object({
  search: z.string().optional(),
  bedrooms: z.string().optional(),
  status: z.string().optional(),
});

type Property = {
  id: string;
  address: string;
  price: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  status: 'Pending' | 'Sold' | 'Available';
  description: string;
  images: string[];
  url: string;
  property_type: string;
  latitude: number;
  longitude: number;
  lot_size: string;
  year_built: number;
};

export default function PropertiesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // States
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form setup
  const { register, handleSubmit, watch, setValue, reset } = useForm({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      search: searchParams.get('search') || '',
      bedrooms: searchParams.get('bedrooms') || '',
      status: searchParams.get('status') || '',
    },
  });

  const search = watch('search');
  const bedrooms = watch('bedrooms');
  const status = watch('status');
  const itemsPerPage = 6;

  // Fetch properties data
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/properties');

        if (!res.ok) {
          throw new Error('Failed to fetch properties');
        }
        debugger;
        const data = await res.json();
        setProperties(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Apply filters and pagination
  useEffect(() => {
    debugger
    let filtered = [...properties];

    // Apply search filter
    if (search) {
      filtered = filtered.filter(property =>
        property.address.toLowerCase().includes(search?.toLowerCase() || '')
      );
    }

    // Apply bedroom filter
    if (bedrooms && bedrooms !== 'any') {
      const bedroomCount = parseInt(bedrooms);
      filtered = filtered.filter(property => property.bedrooms === bedroomCount);
    }

    // Apply status filter
    if (status && status !== 'any') {
      filtered = filtered.filter(property => property.status === status);
    }

    setFilteredProperties(filtered);
    setTotalPages(Math.max(1, Math.ceil(filtered.length / itemsPerPage)));

    // Reset to first page when filters change
    setCurrentPage(1);
  }, [properties, properties, search, bedrooms, status, itemsPerPage]);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProperties.slice(startIndex, endIndex);
  };

  // Handle property selection
  const handlePropertySelect = (property: Property) => {
    setSelectedProperty(property);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  // Navigate through property images
  const nextImage = () => {
    if (selectedProperty && currentImageIndex < selectedProperty.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedProperty && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Apply filters
  const onSubmit = (data: z.infer<typeof filterSchema>) => {
    // Update URL with filters
    const params = new URLSearchParams();
    if (data.search) params.set('search', data.search);
    if (data.bedrooms) params.set('bedrooms', data.bedrooms);
    if (data.status) params.set('status', data.status);

    router.push(`?${params.toString()}`);
  };

  // Reset filters
  const handleReset = () => {
    reset({
      search: '',
      bedrooms: '',
      status: '',
    });
    router.push('');
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl text-gray-600">Loading properties...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <Suspense>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-8">Real Estate Listings</h1>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Label.Root className="block text-sm font-medium text-gray-700 mb-1" htmlFor="search">
                Address
              </Label.Root>
              <div className="relative">
                <input
                  id="search"
                  type="text"
                  placeholder="Search address..."
                  className="pl-9 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  {...register('search')}
                />
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Bedrooms Filter */}
            <div>
              <Label.Root className="block text-sm font-medium text-gray-700 mb-1" htmlFor="bedrooms">
                Bedrooms
              </Label.Root>
              <Select.Root
                value={bedrooms}
                onValueChange={(value) => setValue('bedrooms', value)}
              >
                <Select.Trigger
                  id="bedrooms"
                  aria-label="Bedrooms"
                  className="flex items-center justify-between w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <Select.Value placeholder="Any bedrooms" />
                  <Select.Icon>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="overflow-hidden bg-white rounded-md shadow-md border border-gray-200 z-50">
                    <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white text-gray-700 cursor-default">
                      <ChevronLeft className="h-4 w-4" />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="p-1">
                      <Select.Item value="any" className="flex items-center h-8 px-6 py-0 text-sm rounded-md relative select-none hover:bg-blue-50 data-[highlighted]:bg-blue-100 data-[highlighted]:text-blue-900">
                        <Select.ItemText>Any</Select.ItemText>
                        <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                          <Check className="h-4 w-4" />
                        </Select.ItemIndicator>
                      </Select.Item>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <Select.Item
                          key={num}
                          value={String(num)}
                          className="flex items-center h-8 px-6 py-0 text-sm rounded-md relative select-none hover:bg-blue-50 data-[highlighted]:bg-blue-100 data-[highlighted]:text-blue-900"
                        >
                          <Select.ItemText>{num}</Select.ItemText>
                          <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                            <Check className="h-4 w-4" />
                          </Select.ItemIndicator>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                    <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white text-gray-700 cursor-default">
                      <ChevronRight className="h-4 w-4" />
                    </Select.ScrollDownButton>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>

            {/* Status Filter */}
            <div>
              <Label.Root className="block text-sm font-medium text-gray-700 mb-1" htmlFor="status">
                Status
              </Label.Root>
              <Select.Root
                value={status}
                onValueChange={(value) => setValue('status', value)}
              >
                <Select.Trigger
                  id="status"
                  aria-label="Status"
                  className="flex items-center justify-between w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <Select.Value placeholder="Any status" />
                  <Select.Icon>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="overflow-hidden bg-white rounded-md shadow-md border border-gray-200 z-50">
                    <Select.Viewport className="p-1">
                      <Select.Item value="any" className="flex items-center h-8 px-6 py-0 text-sm rounded-md relative select-none hover:bg-blue-50 data-[highlighted]:bg-blue-100 data-[highlighted]:text-blue-900">
                        <Select.ItemText>Any</Select.ItemText>
                        <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                          <Check className="h-4 w-4" />
                        </Select.ItemIndicator>
                      </Select.Item>
                      {['Available', 'Pending', 'Sold'].map((status) => (
                        <Select.Item
                          key={status}
                          value={status}
                          className="flex items-center h-8 px-6 py-0 text-sm rounded-md relative select-none hover:bg-blue-50 data-[highlighted]:bg-blue-100 data-[highlighted]:text-blue-900"
                        >
                          <Select.ItemText>{status}</Select.ItemText>
                          <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                            <Check className="h-4 w-4" />
                          </Select.ItemIndicator>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-end gap-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Apply Filters
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* Results count */}
        <div className="mb-4 text-gray-600">
          Found {filteredProperties.length} properties
        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {getCurrentPageItems().map((property) => (
              <div
                key={property.id}
                onClick={() => handlePropertySelect(property)}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <AspectRatio.Root ratio={4 / 3}>
                    <Image
                      src={property.images[0]}
                      alt={property.address}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </AspectRatio.Root>
                  <div className="absolute top-2 right-2">
                    <span className={`
                    inline-block px-2 py-1 text-xs font-bold rounded
                    ${property.status === 'Available' ? 'bg-green-500 text-white' : ''}
                    ${property.status === 'Pending' ? 'bg-yellow-500 text-white' : ''}
                    ${property.status === 'Sold' ? 'bg-red-500 text-white' : ''}
                  `}>
                      {property.status}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{property.address}</h3>
                  <p className="text-xl font-bold text-blue-600 mb-3">{formatCurrency(property.price)}</p>

                  <div className="flex justify-between text-gray-600 text-sm">
                    <div className="flex items-center">
                      <BedDouble className="h-4 w-4 mr-1" />
                      <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.size.toLocaleString()} sqft</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-100 rounded-lg p-8 text-center mb-8">
            <p className="text-lg text-gray-600">No properties found matching your criteria.</p>
            <button
              onClick={handleReset}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md ${currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-300 hover:bg-gray-100'
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Property Detail Modal */}
        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-50">
              {selectedProperty && (
                <>
                  {/* Image carousel */}
                  <div className="relative">
                    <AspectRatio.Root ratio={16 / 9} className="bg-gray-100">
                      <Image
                        src={selectedProperty.images[currentImageIndex]}
                        alt={`Property image ${currentImageIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </AspectRatio.Root>

                    {/* Image navigation arrows */}
                    {selectedProperty.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => { e.stopPropagation(); prevImage(); }}
                          disabled={currentImageIndex === 0}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); nextImage(); }}
                          disabled={currentImageIndex === selectedProperty.images.length - 1}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          {selectedProperty.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                              className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                                }`}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    {/* Close button */}
                    <Dialog.Close className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white">
                      <X className="h-5 w-5" />
                    </Dialog.Close>

                    {/* Status badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`
                      inline-block px-3 py-1 text-sm font-bold rounded
                      ${selectedProperty.status === 'Available' ? 'bg-green-500 text-white' : ''}
                      ${selectedProperty.status === 'Pending' ? 'bg-yellow-500 text-white' : ''}
                      ${selectedProperty.status === 'Sold' ? 'bg-red-500 text-white' : ''}
                    `}>
                        {selectedProperty.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-2"><Dialog.DialogTitle>{selectedProperty.address}</Dialog.DialogTitle></h2>
                          <p className="text-3xl font-bold text-blue-600">{formatCurrency(selectedProperty.price)}</p>
                        </div>
                        <div className="flex items-center text-sm bg-blue-50 text-blue-800 px-3 py-1 rounded-full">
                          <Home className="h-4 w-4 mr-1" />
                          <span>{selectedProperty.property_type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Property specs */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="text-gray-500 text-sm mb-1 flex items-center">
                          <BedDouble className="h-4 w-4 mr-1" /> Bedrooms
                        </div>
                        <div className="font-bold text-lg">{selectedProperty.bedrooms}</div>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="text-gray-500 text-sm mb-1 flex items-center">
                          <Bath className="h-4 w-4 mr-1" /> Bathrooms
                        </div>
                        <div className="font-bold text-lg">{selectedProperty.bathrooms}</div>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="text-gray-500 text-sm mb-1 flex items-center">
                          <Square className="h-4 w-4 mr-1" /> Square Feet
                        </div>
                        <div className="font-bold text-lg">{selectedProperty.size.toLocaleString()}</div>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="text-gray-500 text-sm mb-1 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" /> Year Built
                        </div>
                        <div className="font-bold text-lg">{selectedProperty.year_built}</div>
                      </div>
                    </div>

                    <Separator.Root className="h-px bg-gray-200 my-6" />

                    {/* Description */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold mb-3">Description</h3>
                      <p className="text-gray-700">{selectedProperty.description}</p>
                    </div>

                    <Separator.Root className="h-px bg-gray-200 my-6" />

                    {/* Additional details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="text-lg font-bold mb-3">Property Details</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Tag className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                            <div>
                              <span className="block text-sm text-gray-500">Property ID</span>
                              <span className="font-medium">{selectedProperty.id}</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Map className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                            <div>
                              <span className="block text-sm text-gray-500">Lot Size</span>
                              <span className="font-medium">{selectedProperty.lot_size}</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-3">Location</h3>
                        <div className="bg-gray-100 rounded-lg p-4 flex items-center">
                          <Map className="h-5 w-5 mr-2 text-gray-500" />
                          <span>
                            {selectedProperty.latitude.toFixed(6)}, {selectedProperty.longitude.toFixed(6)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3 mt-6">
                      <a
                        href={selectedProperty.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        View on Website
                      </a>
                      <Dialog.Close asChild>
                        <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                          Close
                        </button>
                      </Dialog.Close>
                    </div>
                  </div>
                </>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </Suspense>
  );
}