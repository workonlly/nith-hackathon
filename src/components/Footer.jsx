const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Institute Info */}
          <div>
            <img
              src="/images/nith-footer-logo.png"
              alt="NIT Hamirpur"
              className="mb-4 h-16"
            />
            <div className="text-sm space-y-1 text-gray-300">
              <p>NIT Hamirpur</p>
              <p>Hamirpur, Himachal Pradesh</p>
              <p>177 005, India</p>
              <div className="mt-4">
                <a
                  href="mailto:hackathon@nith.ac.in"
                  className="text-white hover:text-[#2c7ec6] transition-colors"
                >
                  hackathon@nith.ac.in
                </a>
              </div>
            </div>
            <div className="border-t-2 border-[#2c7ec6] mt-4 pt-4"></div>
          </div>

          {/* Column 2 - Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Registration
                </a>
              </li>
              <li>
                <a
                  href="#accommodation"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Accommodation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Committee */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Committee</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#problem-statements"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Problem Statements
                </a>
              </li>
              <li>
                <a
                  href="#committee"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Committee
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black bg-opacity-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>Copyright All Right Reserved 2025, NIT Hamirpur</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
