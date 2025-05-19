'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Tool card component
const ToolCard = ({ title, description, icon, features }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-drah-blue bg-opacity-10 p-3 rounded-full mr-4">
            <span className="text-drah-blue text-2xl">{icon}</span>
          </div>
          <h3 className="text-xl font-semibold text-drah-blue">{title}</h3>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-drah-green hover:text-drah-blue flex items-center font-medium"
        >
          {isExpanded ? 'Show less' : 'Learn more'}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Use case component
const UseCase = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/3 relative">
        <div className="h-48 md:h-full relative">
          <Image 
            src={image} 
            alt={title}
            fill
            style={{objectFit: 'cover'}}
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      <div className="md:w-2/3 p-6">
        <h3 className="text-xl font-semibold text-drah-blue mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default function AIToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-drah-blue mb-6">AI Business Tools</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-10">
        <p className="text-lg text-gray-700 mb-4">
          Our AI-powered business tools are designed to help entrepreneurs, small businesses, and startups 
          leverage cutting-edge artificial intelligence to streamline operations, make data-driven decisions, 
          and unlock new growth opportunities.
        </p>
        <p className="text-lg text-gray-700">
          These tools integrate seamlessly with the residential lifestyle and workspace environment of SVS properties, 
          creating a unique ecosystem where living and business innovation coexist.
        </p>
      </div>
      
      <h2 className="text-2xl font-semibold text-drah-green mb-6">Tools & Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <ToolCard 
          title="AI Matchmaker" 
          icon="🤝" 
          description="Connect with potential business partners, investors, and collaborators through our AI-powered matching algorithm."
          features={[
            "Smart profile matching based on business goals and complementary skills",
            "Recommendation engine for potential partnerships",
            "Secure communication channels for initial discussions",
            "Partnership opportunity scoring and compatibility analysis",
            "Network visualization and relationship mapping"
          ]}
        />
        
        <ToolCard 
          title="Financial Modeling AI" 
          icon="📊" 
          description="Leverage automated financial modeling tools inspired by Warren Buffett's investment principles."
          features={[
            "Cash flow projection and analysis",
            "Value investing metrics and indicators",
            "Risk assessment and mitigation strategies",
            "Long-term growth modeling and scenario planning",
            "Investment opportunity evaluation with Buffett-inspired metrics"
          ]}
        />
        
        <ToolCard 
          title="Agentic AI Assistant" 
          icon="🤖" 
          description="Deploy AI agents to handle business planning, marketing strategies, and operational efficiency."
          features={[
            "Automated market research and competitor analysis",
            "Content generation for marketing campaigns",
            "Process optimization and workflow automation",
            "Customer sentiment analysis and feedback processing",
            "Predictive analytics for business decision-making"
          ]}
        />
      </div>
      
      <h2 className="text-2xl font-semibold text-drah-green mb-6">Use Case Scenarios</h2>
      
      <div className="space-y-6 mb-12">
        <UseCase 
          title="Startup Acceleration" 
          description="A tech startup used our AI Matchmaker to find complementary talent and our Financial Modeling AI to create a compelling pitch deck, securing $1.2M in seed funding within 3 months of joining the SVS community."
          image="/images/ai-tools/startup-acceleration.jpg" 
        />
        
        <UseCase 
          title="Small Business Transformation" 
          description="A family-owned retail business leveraged our Agentic AI Assistant to optimize inventory management and create targeted marketing campaigns, resulting in a 40% increase in monthly revenue and 65% reduction in operational overhead."
          image="/images/ai-tools/small-business.jpg" 
        />
        
        <UseCase 
          title="Cross-Industry Collaboration" 
          description="A healthcare innovator and software developer were matched through our AI platform, leading to the development of a revolutionary patient monitoring system now being piloted in three major hospitals."
          image="/images/ai-tools/collaboration.jpg" 
        />
      </div>
      
      <h2 className="text-2xl font-semibold text-drah-green mb-6">Integration with SVS Properties</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
        <p className="text-gray-700 mb-4">
          Our AI Business Tools are seamlessly integrated with the residential lifestyle and workspace environment 
          of SVS properties, creating a unique ecosystem where living and business innovation coexist.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-drah-blue mb-2">Smart Home Integration</h3>
            <p className="text-gray-700">
              Access business insights and run AI tools through voice commands in your SVS smart home environment.
            </p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-drah-green mb-2">Community Collaboration</h3>
            <p className="text-gray-700">
              Connect with fellow entrepreneurs in the SVS community through AI-facilitated networking events and projects.
            </p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-700 mb-2">Workspace Optimization</h3>
            <p className="text-gray-700">
              AI tools adapt to your work patterns, optimizing your home office environment for maximum productivity.
            </p>
          </div>
        </div>
        
        <p className="text-gray-700">
          By combining cutting-edge AI business tools with innovative living spaces, SVS properties offer a truly 
          integrated experience where your home becomes a catalyst for business success and innovation.
        </p>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-drah-blue mb-4">Ready to Transform Your Business?</h3>
        <p className="text-gray-700 mb-4">
          Our AI Business Tools are available exclusively to SVS UIC property owners and residents. 
          Experience the future of integrated living and business innovation.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-drah-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Request Demo
          </button>
          <button className="border border-drah-blue text-drah-blue px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
