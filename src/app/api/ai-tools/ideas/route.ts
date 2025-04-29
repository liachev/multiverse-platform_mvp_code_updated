import { NextResponse } from 'next/server';

// Placeholder data - replace with actual AI logic/database interaction later
const businessIdeas = [
  {
    id: 'idea-001',
    title: 'Eco-Friendly Delivery Service',
    description: 'A local delivery service using electric bikes or vehicles, focusing on sustainability.',
    suitability: ['Logistics', 'Sustainability', 'Local Business'],
    guidance_steps: [
      'Market research for local demand.',
      'Develop a business plan focusing on eco-friendly aspects.',
      'Secure funding/resources (e.g., bikes, charging stations).',
      'Register the business and obtain necessary permits.',
      'Develop a simple booking/tracking system.',
      'Launch marketing campaign targeting local businesses and residents.',
    ],
  },
  {
    id: 'idea-002',
    title: 'Smart Home Installation for Seniors',
    description: 'Providing installation and support services for smart home devices tailored to the needs of senior citizens.',
    suitability: ['Technology', 'Home Services', 'Community Support'],
    guidance_steps: [
      'Identify target smart home devices suitable for seniors.',
      'Develop service packages (installation, training, support).',
      'Research local market and potential partnerships (e.g., retirement communities).',
      'Create a business plan and financial projections.',
      'Obtain necessary certifications or training.',
      'Market services through community centers and online channels.',
    ],
  },
  // Add more placeholder ideas later
];

export async function GET(request: Request) {
  // In a real implementation, this might take user input (skills, interests)
  // from the query parameters and use an AI model to generate tailored ideas.
  // For now, just return the placeholder ideas.
  console.log('API Route: /api/ai-tools/ideas called');
  // Simulate filtering based on user input (example)
  const { searchParams } = new URL(request.url);
  const skill = searchParams.get('skill');
  if (skill) {
    const filteredIdeas = businessIdeas.filter(idea => 
      idea.suitability.some(s => s.toLowerCase().includes(skill.toLowerCase()))
    );
    return NextResponse.json(filteredIdeas);
  }

  return NextResponse.json(businessIdeas);
}

// Add POST later if users can submit their own ideas or refine generated ones

