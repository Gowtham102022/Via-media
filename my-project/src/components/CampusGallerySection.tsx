import React from 'react';
// import { images } from '../assets'; // Using placeholders as assets are not available

// Define an interface for the image properties (optional, but good practice)
interface ImageProps {
  src: string;
  alt: string;
}

// Placeholder images - replace with your 'images.xyz' variables
// These pixel values are calculated to match the layout in your image
const img1: ImageProps = { src: 'https://placehold.co/300x228/E2E8F0/475569?text=Campus+Exterior', alt: 'Campus exterior' };
const img2: ImageProps = { src: 'https://placehold.co/300x343/E2E8F0/475569?text=Lobby', alt: 'Campus lobby' };
const img3: ImageProps = { src: 'https://placehold.co/300x285/E2E8F0/475569?text=Library', alt: 'Library' };
const img4: ImageProps = { src: 'https://placehold.co/300x285/E2E8F0/475569?text=Art+Wall', alt: 'Art wall' };
const img5: ImageProps = { src: 'https://placehold.co/300x343/E2E8F0/475569?text=Study+Nook', alt: 'Study nook' };
const img6: ImageProps = { src: 'https://placehold.co/300x228/E2E8F0/475569?text=Commons', alt: 'Commons area' };


const CampusGallerySection: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#f8f8f0] font-['Biryani']">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Gallery Grid */}
          {/* Container with a fixed height and 3 columns. Each column is a flex-col. */}
          <div className="grid grid-cols-3 gap-4 h-[587px]">
            
            {/* Column 1 (Small / Bigger) */}
            <div className="flex flex-col gap-4">
              <div className="w-full h-[228px] overflow-hidden"> {/* Removed rounded-2xl */}
                <img src={img1.src} alt={img1.alt} className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[343px] overflow-hidden"> {/* Removed rounded-2xl */}
                <img src={img2.src} alt={img2.alt} className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Column 2 (Same Size / Same Size) */}
            <div className="flex flex-col gap-4">
              <div className="w-full h-[285px] overflow-hidden"> {/* Removed rounded-2xl */}
                <img src={img3.src} alt={img3.alt} className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[285px] overflow-hidden"> {/* Removed rounded-2xl */}
                <img src={img4.src} alt={img4.alt} className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Column 3 (Bigger / Small) */}
            <div className="flex flex-col gap-4">
              <div className="w-full h-[343px] overflow-hidden"> {/* Removed rounded-2xl */}
                <img src={img5.src} alt={img5.alt} className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[228px] overflow-hidden"> {/* Removed rounded-2xl */}
                <img src={img6.src} alt={img6.alt} className="w-full h-full object-cover" />
              </div>
            </div>

          </div>

          {/* Right Side - Content (from your provided code) */}
          <div className="lg:pl-8">
            <h2 className="text-[45px] font-bold text-[#0e3867] leading-[61px] mb-8">
              Designed with intention, for learning, wellness, and imagination.
            </h2>
            <p className="text-[20px] text-[#737070] leading-[30px] mb-8">
              At Sagehill, the campus isn't just a backdrop — it's a teacher in itself. Every space is designed with intention:
            </p>
            <button className="bg-[#ffb626] text-[#081c31] px-8 py-3 rounded text-[16px] font-bold hover:bg-[#ffb526] transition-colors">
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusGallerySection;