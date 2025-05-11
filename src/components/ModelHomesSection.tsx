import React from 'react';

interface ModelHomeProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL for the model
}

const ModelHomeCard: React.FC<ModelHomeProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-drah-blue mb-3">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

const modelHomesData: ModelHomeProps[] = [
  {
    title: "Gothic Smart Live-Work Home (3,000 SF)",
    description: "A bold fusion of historic Gothic architecture with modern eco-luxury. Featuring vaulted ceilings, pointed arches, and stone-accented facades, this model offers a dramatic, inspiring space for entrepreneurs and creatives. Integrated with solar panels, smart home automation, and a lush central courtyard for ultimate comfort and sustainability.",
    imageUrl: "/images/gothic-home-placeholder.jpg" // Replace with actual image path
  },
  {
    title: "Hacienda Modern Smart Live-Work Home (3,000 SF)",
    description: "Experience warmth and elegance in this Spanish-inspired design. Stucco walls, terracotta roof tiles, and arched doorways surround a vibrant open-air courtyard. Inside, enjoy modular interiors, energy-efficient systems, and seamless indoor-outdoor living that supports both relaxation and productivity.",
    imageUrl: "/images/hacienda-home-placeholder.jpg" // Replace with actual image path
  },
  {
    title: "Modern Eco Smart Live-Work Home (3,000 SF)",
    description: "Clean lines, minimalist style, and cutting-edge green tech define this sleek model. Floor-to-ceiling windows flood the open-plan interiors with natural light, while the flat solar-integrated roof and smart automation systems ensure top-tier energy performance. Perfect for innovators seeking style and sustainability.",
    imageUrl: "/images/modern-eco-home-placeholder.jpg" // Replace with actual image path
  },
  {
    title: "Shotgun-Style Smart Live-Work Home (3,000 SF)",
    description: "A contemporary twist on the classic shotgun house, designed for efficient urban living. Its linear layout maximizes flow and function, offering flexible live-work zones, a bright great room, and compact modular spaces. Built with eco-friendly materials and designed for affordability without sacrificing comfort.",
    imageUrl: "/images/shotgun-home-placeholder.jpg" // Replace with actual image path
  },
  {
    title: "Mediterranean Smart Live-Work Home (3,000 SF)",
    description: "Bringing timeless Mediterranean charm into the modern era. Featuring balconies, arched windows, stucco walls, and lush landscaping, this model captures the essence of coastal elegance. Advanced insulation, smart climate control, and a rooftop solar array deliver sustainable luxury.",
    imageUrl: "/images/mediterranean-home-placeholder.jpg" // Replace with actual image path
  }
];

export default function ModelHomesSection() {
  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-drah-green mb-12 text-center">
          Explore Our Smart Live-Work Home Models
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modelHomesData.map((model, index) => (
            <ModelHomeCard key={index} title={model.title} description={model.description} imageUrl={model.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}

