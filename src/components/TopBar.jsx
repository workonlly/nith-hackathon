const TopBar = () => {
  return (
    <div className="hidden lg:block bg-[#192f59] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 text-sm">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-[#96a2b8]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <div>
              <span className="text-[#96a2b8]">hackathon@nith.ac.in</span>
              <br />
              <span className="text-white">
                HACKATHON ON MOBILE DEVICE AND APPLICATION SECURITY | September 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
