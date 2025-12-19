const HeroSlider = () => {
  return (
    <div className="relative w-full bg-[#192f59]">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[713px] overflow-hidden">
        <img
          src="/images/slider/cyber-security.png"
          alt="Hackathon - Mobile Device and Application Security"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSlider;
