import { images, graphics } from '../assets';

const HeroSection = () => {
  return (
    <div className="relative h-[900px] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-[111.11%] h-[101.92%] -left-[5.56%] -top-[1.92%]">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src={images.heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-[#26425f]/60 to-[#26425f]/90 mix-blend-multiply" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 -mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-[82px] font-semibold leading-[89px] tracking-[-2.47px] mb-6">
            <span className="block">It's Always</span>
            <span className="block">over the Next Hill</span>
          </h1>
          <p className="text-[19.6px] leading-[29px] mb-8 max-w-2xl">
            <span className="block">Where knowledge transforms lives and every child discovers</span>
            <span className="block">the courage to climb their next summit.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-[#224f7d] text-white px-8 py-3 text-[15px] font-bold hover:bg-[#1a365d] transition-colors flex items-center justify-center">
              Secure your spot
            </button>
            <button className="bg-[#ffb526] text-[#081c31] px-8 py-3 text-[15px] font-bold hover:bg-[#ffb626] transition-colors flex items-center justify-center">
              Discover programs
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Icons - Bottom Positioned */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center justify-center space-x-6">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.6467 0C25.523 0 26.2898 0.766787 26.2898 1.64311V24.6467C26.2898 25.523 25.523 26.2898 24.6467 26.2898H18.0743V16.4311H21.3605L22.2368 12.2686H18.0743V10.735C18.0743 9.0919 18.9506 8.32511 20.4842 8.32511H22.1273V4.16256H18.841C15.7739 4.16256 13.9117 6.57246 13.9117 9.85869V12.2686H10.6255V16.4311H13.9117V26.2898H1.64311C0.766787 26.2898 0 25.523 0 24.6467V1.64311C0 0.766787 0.766787 0 1.64311 0H24.6467Z" fill="white"/>
            </svg>
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.7672 9.17862C11.2385 9.17862 9.17501 11.2422 9.17501 13.7709C9.17501 16.2995 11.2385 18.3631 13.7672 18.3631C16.2958 18.3631 18.3593 16.2995 18.3593 13.7709C18.3593 11.2422 16.2958 9.17862 13.7672 9.17862ZM27.5402 13.7709C27.5402 11.8692 27.5574 9.98476 27.4506 8.08654C27.3438 5.88171 26.8409 3.92493 25.2286 2.31265C23.6129 0.696923 21.6596 0.197392 19.4548 0.0905958C17.5532 -0.0162006 15.6688 0.00102471 13.7706 0.00102471C11.869 0.00102471 9.98458 -0.0162006 8.08639 0.0905958C5.88161 0.197392 3.92486 0.700368 2.31261 2.31265C0.696911 3.92837 0.197388 5.88171 0.0905941 8.08654C-0.0162003 9.98821 0.00102469 11.8726 0.00102469 13.7709C0.00102469 15.6691 -0.0162003 17.557 0.0905941 19.4552C0.197388 21.66 0.700356 23.6168 2.31261 25.2291C3.9283 26.8448 5.88161 27.3443 8.08639 27.4511C9.98802 27.5579 11.8724 27.5407 13.7706 27.5407C15.6722 27.5407 17.5566 27.5579 19.4548 27.4511C21.6596 27.3443 23.6164 26.8414 25.2286 25.2291C26.8443 23.6134 27.3438 21.66 27.4506 19.4552C27.5609 17.557 27.5402 15.6725 27.5402 13.7709ZM13.7672 20.8367C9.85711 20.8367 6.70151 17.681 6.70151 13.7709C6.70151 9.86074 9.85711 6.70508 13.7672 6.70508C17.6772 6.70508 20.8328 9.86074 20.8328 13.7709C20.8328 17.681 17.6772 20.8367 13.7672 20.8367ZM21.1222 8.06587C20.2093 8.06587 19.472 7.32863 19.472 6.4157C19.472 5.50276 20.2093 4.76552 21.1222 4.76552C22.0351 4.76552 22.7723 5.50276 22.7723 6.4157C22.7726 6.63248 22.7301 6.84718 22.6473 7.04751C22.5645 7.24784 22.4429 7.42987 22.2896 7.58315C22.1363 7.73644 21.9543 7.85798 21.754 7.94082C21.5537 8.02365 21.339 8.06614 21.1222 8.06587Z" fill="white"/>
            </svg>
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.2974 3.15478C30.1189 3.68058 28.8093 4.07492 27.6308 4.20637C28.9403 3.41768 29.9879 2.10319 30.5117 0.525797C29.2022 1.31449 27.8927 1.84029 26.4522 2.10319C25.1427 0.788695 23.4403 0 21.607 0C17.9404 0 15.0594 3.02333 15.1904 6.57246C15.1904 7.09825 15.3213 7.62405 15.3213 8.14985C10.0833 7.88695 5.23806 5.38942 2.09522 1.18304C0.392855 4.20637 1.17856 8.14985 4.0595 10.1216C3.01189 9.99014 2.09522 9.72724 1.17856 9.20144V9.33289C1.17856 12.4877 3.40474 15.2481 6.41663 15.7739C5.49996 16.0368 4.45235 16.0368 3.53569 15.9053C4.3214 18.5343 6.80948 20.5061 9.55946 20.5061C6.94043 22.7407 3.40474 23.6608 0 23.2665C2.74998 25.2382 6.28567 26.2898 9.82137 26.2898C21.738 26.2898 28.1546 16.1682 28.1546 7.36115V6.57246C29.3331 5.65231 30.3808 4.46927 31.2974 3.15478Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Hero Wave SVG at the bottom */}
      <div className="absolute -bottom-3 left-0 w-full z-20">
        <img 
          src={graphics.heroWave} 
          alt="" 
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
};

export default HeroSection;