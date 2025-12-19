import nithLogo from '../assets/nith-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#33110E] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Institute Info */}
          <div>
            <img
              src={nithLogo}
              alt="NIT Hamirpur"
              className="mb-4 h-12"
            />
            <div className="text-sm space-y-1 text-[#E3AFA0]">
              <p>NIT Hamirpur</p>
              <p>Hamirpur, Himachal Pradesh</p>
              <p>177 005, India</p>
              <div className="mt-4">
                <a
                  href="mailto:hackathon@nith.ac.in"
                  className="text-[#F2D5C4] hover:text-[#E8A87C] transition-colors"
                >
                  hackathon@nith.ac.in
                </a>
              </div>
            </div>
            <div className="border-t-2 border-[#E8A87C] mt-4 pt-4"></div>
          </div>

          {/* Column 2 - Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F5D7C8]">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-[#E3AFA0] hover:text-[#E8A87C] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  className="text-[#E3AFA0] hover:text-[#E8A87C] transition-colors"
                >
                  Registration
                </a>
              </li>
              <li>
                <a
                  href="#accommodation"
                  className="text-[#E3AFA0] hover:text-[#E8A87C] transition-colors"
                >
                  Accommodation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Committee */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F5D7C8]">Committee</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#problem-statements"
                  className="text-[#E3AFA0] hover:text-[#E8A87C] transition-colors"
                >
                  Problem Statements
                </a>
              </li>
              <li>
                <a
                  href="#committee"
                  className="text-[#E3AFA0] hover:text-[#E8A87C] transition-colors"
                >
                  Committee
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F5D7C8]">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#contact"
                  className="text-[#E3AFA0] hover:text-[#E8A87C] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#33110E]/80 py-4 border-t border-[#5A2A25]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#E3AFA0]">
            <div>Copyright All Right Reserved 2025, NIT Hamirpur</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
