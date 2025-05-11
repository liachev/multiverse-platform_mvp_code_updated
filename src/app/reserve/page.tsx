import React from 'react';

export default function ReservePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-drah-blue mb-8 text-center">
        Reserve Your Smart Home at SVSUIC
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Complete the form below to express your interest and take the first step towards securing your innovative live-work home at the Silicon Valley South Unicorn Incubation Campus.
      </p>
      <div className="max-w-4xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-xl">
        <iframe
          id="JotFormIFrame-250896626150158"
          title="Pre-Order Form"
          // onLoad="window.parent.scrollTo(0,0)" // This might cause issues in Next.js, can be omitted or handled differently
          allowTransparency={true}
          allowFullScreen={true}
          allow="geolocation; microphone; camera;"
          src="https://form.jotform.com/250896626150158"
          frameBorder="0"
          style={{ minWidth: '100%', height: '1200px', border: 'none' }} // Adjusted height
          scrolling="yes"
        >
        </iframe>
      </div>
      <p className="text-sm text-gray-600 mt-8 text-center">
        Submitting this form indicates your interest in reserving a home. A member of our team will contact you with further details. All reservations are subject to availability and final agreement.
      </p>
    </div>
  );
}

