import React from 'react';
// 'images' is not used in this component, so we can remove the import.
// import { images } from '../assets';

// Define an interface for the program objects for TypeScript
interface Program {
  title: string;
  ageRange: string;
  description: string;
}

const LearningPathwaysSection: React.FC = () => {
  // Apply the Program interface to our programs array
  const programs: Program[] = [
    {
      title: "Play School",
      ageRange: "Ages 2-3",
      description: "First adventures in learning through play, creativity, and gentle exploration in a safe, nurturing environment..",
    },
    {
      title: "Pre-Primary", 
      ageRange: "Ages 3-6",
      description: "Building foundational skills through hands-on activities, storytelling, and creative expression that spark curiosity.",
    },
    {
      title: "Primary School",
      ageRange: "Grades 1-5", 
      description: "Developing core academic skills while fostering critical thinking, creativity, and collaborative learning experiences.",
    },
    {
      title: "Middle School",
      ageRange: "Grades 6-8",
      description: "Preparing young minds for complex challenges while building character, leadership skills, and global awareness.",
    }
  ];

  return (
    // Add font-['Biryani'] to the whole section
    // Use bg-white as a clean base
    <section className="py-20 px-4 bg-white font-['Biryani']">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[45px] font-bold text-[#0e3867] leading-tight max-w-[778px] mx-auto mb-6">
            Creative Learning Pathways
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-[761px] mx-auto">
            Age-appropriate programs creatively put together with modern pedagogy and smart technology integration.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            // CARD IMPLEMENTATION
            // 1. bg-neutral-100 (#f5f5f5) for the card body
            // 2. rounded-2xl for the border radius
            // 3. h-96 for the fixed height from Figma
            // 4. border-t-8 and border-amber-400 (#ffb526) creates the yellow top bar
            // 5. flex flex-col to stack content
            <div 
              key={program.title} // Use a unique string like title for the key instead of index
              className="bg-neutral-100 rounded-2xl h-96 border-t-8 border-amber-400 flex flex-col shadow-sm"
            >
              
              {/* Content Section - No Image Div */}
              {/* Use padding from Figma (px-7 py-12) */}
              <div className="px-7 py-12 flex-1 flex flex-col">
                
                {/* Age Badge - Styled as per Figma */}
                <div className="bg-[#172554] text-white text-lg font-normal leading-7 rounded-full px-5 py-1.5 inline-block w-fit mb-12">
                  {program.ageRange}
                </div>

                {/* Text Block */}
                <div className="flex flex-col">
                  {/* Title - Styled as per Figma */}
                  <h3 className="text-[#0c4a6e] text-3xl font-bold leading-6 mb-4 h-12">
                    {program.title}
                  </h3>
                  
                  {/* Description - Styled as per Figma */}
                  <p className="text-neutral-500 text-base font-normal leading-7">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPathwaysSection;