const Accommodation = () => {
  const accommodations = [
    { name: 'NIT Hamirpur Guest House', url: null },
    { name: 'NIT Hamirpur Hostels', url: null },
    { name: 'Hotel Parijat', url: 'https://www.hotelparijat.com/' },
    { name: 'Hotel Gulmarg Regency', url: 'https://www.makemytrip.com/hotels/hotel_gulmarg_regency-details-hamirpur.html' },
    { name: 'Hotel Surya', url: null },
    { name: 'Hill View Hotel Hamirpur', url: null },
    { name: 'Hotel Crown', url: null },
    { name: 'Hotel Ashoka', url: null },
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content - Takes 2/3 width on desktop */}
        <main className="lg:w-2/3">
          <div className="space-y-6 text-gray-700">
            <p className="font-bold text-lg">Accommodation Options in Hamirpur</p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {accommodations.map((accommodation, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      } border-b border-gray-200`}
                    >
                      <td className="px-4 py-3">
                        {accommodation.url ? (
                          <a
                            href={accommodation.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2c7ec6] hover:text-[#223d71] underline transition-colors"
                          >
                            {accommodation.name}
                          </a>
                        ) : (
                          <span className="underline">{accommodation.name}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-[#2c7ec6] rounded">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Participants are advised to book accommodation in advance.
                For assistance with on-campus accommodation (Guest House/Hostels), please contact
                the organizing committee.
              </p>
            </div>
          </div>
        </main>

        {/* Sidebar - Takes 1/3 width on desktop */}
        <aside className="lg:w-1/3">
          <div className="lg:sticky lg:top-24">
            <div className="bg-[#192f59] text-white p-8 rounded-lg">
              <h3 className="text-[#2c7ec6] text-base font-semibold mb-2">
                HACKATHON ON MOBILE DEVICE and Application Security
              </h3>
              <p className="text-[#2c7ec6] text-base font-semibold mb-4">September 2025</p>
              <p className="text-sm">
                Contact:
                <br />
                <a
                  href="mailto:hackathon@nith.ac.in"
                  className="hover:text-[#2c7ec6] transition-colors"
                >
                  hackathon@nith.ac.in
                </a>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Accommodation;
