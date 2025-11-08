import { images } from '../assets';

const LearningPathwaysSection = () => {
  const programs = [
    {
      title: "Play School",
      ageRange: "Ages 2-3",
      description: "First adventures in learning through play, creativity, and gentle exploration in a safe, nurturing environment..",
      image: images.playschool
    },
    {
      title: "Pre-Primary", 
      ageRange: "Ages 3-6",
      description: "Building foundational skills through hands-on activities, storytelling, and creative expression that spark curiosity.",
      image: images.prePrimary
    },
    {
      title: "Primary School",
      ageRange: "Grades 1-5", 
      description: "Developing core academic skills while fostering critical thinking, creativity, and collaborative learning experiences.",
      image: images.primary
    },
    {
      title: "Middle School",
      ageRange: "Grades 6-8",
      description: "Preparing young minds for complex challenges  while building character, leadership skills, and global awareness.",
      image: images.middleSchool
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[45px] font-bold text-[#0e3867] leading-[104px] max-w-[778px] mx-auto mb-8">
            Creative Learning Pathways
          </h2>
          <p className="text-[20px] text-[#737070] leading-[30px] max-w-[761px] mx-auto">
            Age-appropriate programs creatively put together with modern pedagogy and smart technology integration.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="relative">
              {/* Card Background with Shadow Effect */}
              <div className="absolute inset-0 bg-[#ffb526] rounded-[14.5px] transform translate-x-1 translate-y-1"></div>
              
              {/* Main Card */}
              <div className="relative bg-[#f5f6f8] rounded-[14.5px] overflow-hidden h-[367px] flex flex-col border border-gray-100">
                {/* Image Section */}
                <div className="h-[200px] w-full">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Age Badge */}
                  <div className="bg-[#1a365d] text-white px-4 py-2 rounded-full text-center text-[14px] font-normal mb-4 inline-block w-fit">
                    {program.ageRange}
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-[22px] font-bold text-[#0e3867] leading-[25px] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-[14px] text-[#737070] leading-[20px] flex-1">
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