import { images, icons } from '../assets';

const ExcellenceSection = () => {
  return (
    <section className="py-20 px-4">
      {/* Main Heading */}
      <div className="text-center mb-16">
        <h2 className="text-[45px] font-bold text-[#0e3867] leading-[104px] max-w-[1000px] mx-auto">
          What Makes Excellence Inevitable
        </h2>
        <p className="text-[20px] text-[#737070] leading-[30px] max-w-[939px] mx-auto mt-8">
          Most schools focus on one thing well. A few excel at two. But true transformation requires mastering all three dimensions of learning. At Sagehill, we've designed a deliberate integration that makes excellence not just possible, but inevitable.
        </p>
      </div>

      {/* Three Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* Knowledge Column */}
        <div className="text-center">
          <div className="h-[417px] w-full mb-0 overflow-hidden relative">
            <img 
              src={images.knowledge} 
              alt="Knowledge" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-end mb-4 mr-4">
            <img src={icons.checkmark} alt="Checkmark" className="w-6 h-7" />
          </div>
          <h3 className="text-[28px] font-bold text-[#0e3867] leading-[28px] mb-4">
            Knowledge
          </h3>
          <p className="text-[18px] text-[#737070] leading-[30px]">
            Rigorous academics that spark critical thinking and unleash creativity. Our carefully designed curriculum builds strong foundations while nurturing curiosity.
          </p>
        </div>

        {/* Skill Column */}
        <div className="text-center">
          <div className="h-[417px] w-full mb-0 overflow-hidden relative">
            <img 
              src={images.skill} 
              alt="Skill" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-end mb-4 mr-4">
            <img src={icons.checkmark} alt="Checkmark" className="w-6 h-7" />
          </div>
          <h3 className="text-[28px] font-bold text-[#0e3867] leading-[28px] mb-4">
            Skill
          </h3>
          <p className="text-[18px] text-[#737070] leading-[30px]">
            Hands-on learning through innovation labs, leadership challenges, and real-world projects. We transform potential into practical power.
          </p>
        </div>

        {/* Experience Column */}
        <div className="text-center">
          <div className="h-[417px] w-full mb-0 overflow-hidden relative">
            <img 
              src={images.experience} 
              alt="Experience" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-end mb-4 mr-4">
            <img src={icons.checkmark} alt="Checkmark" className="w-6 h-7" />
          </div>
          <h3 className="text-[28px] font-bold text-[#0e3867] leading-[28px] mb-4">
            Experience
          </h3>
          <p className="text-[18px] text-[#737070] leading-[30px]">
            Character-building experiences through community service, cultural immersion, and adventures that forge resilient, compassionate leaders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;