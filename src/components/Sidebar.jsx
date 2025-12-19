const Sidebar = () => {
  const updates = [
    "Registration is open.",
    "The hackathon will be conducted over a period of 5 months with three rounds of evaluation.",
  ];

  return (
    <div className="space-y-6">
      {/* News and Updates Widget */}
      <div className="bg-[#192f59] text-white p-8 rounded-lg">
        <h3 className="text-[#2c7ec6] text-base font-semibold mb-4">
          News and Updates
        </h3>
        <div className="space-y-4">
          {updates.map((update, index) => (
            <div key={index}>
              <p className="text-sm leading-relaxed">{update}</p>
              {index < updates.length - 1 && (
                <hr className="border-gray-600 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info Widget */}
      <div className="bg-[#192f59] text-white p-8 rounded-lg">
        <h3 className="text-[#2c7ec6] text-base font-semibold mb-2">
          HACKATHON ON MOBILE DEVICE and Application Security
        </h3>
        <p className="text-[#2c7ec6] text-base font-semibold mb-4">
          September 2025
        </p>
        <p className="text-sm">
          Contact:
          <br />
          <a href="mailto:hackathon@nith.ac.in" className="hover:text-[#2c7ec6] transition-colors">
            hackathon@nith.ac.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
