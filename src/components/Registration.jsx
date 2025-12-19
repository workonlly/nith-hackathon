const Registration = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content - Takes 2/3 width on desktop */}
        <main className="lg:w-2/3">
          {/* Registration Button Card */}
          <div className="mb-8">
            <a
              href="https://forms.gle/your-nith-registration-form"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#2c7ec6] hover:bg-[#2570b0] transition-colors rounded-lg p-8 text-center shadow-lg group"
            >
              <div className="relative">
                <h3 className="text-white text-xl font-semibold group-hover:scale-105 transition-transform">
                  Registration
                </h3>
              </div>
            </a>
          </div>

          {/* Registration Guidelines */}
          <div className="space-y-6 text-gray-700">
            <p className="text-base">
              To ensure a smooth and fair competition, all participants must follow these{' '}
              <strong>registration guidelines:</strong>
            </p>

            {/* Eligibility Criteria */}
            <div>
              <p className="font-bold text-lg mb-3">Eligibility Criteria</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Open to <strong>students, professionals, and cybersecurity enthusiasts.</strong>
                </li>
                <li>
                  Participants can register <strong>individually</strong> or in{' '}
                  <strong>teams (2-5 members).</strong>
                </li>
                <li>
                  Participants must be <strong>18 years or older</strong> (or provide parental
                  consent if younger).
                </li>
                <li>
                  Multiple team registrations from the{' '}
                  <strong>same organization/university</strong> are allowed.
                </li>
              </ul>
            </div>

            {/* Registration Process */}
            <div>
              <p className="font-bold text-lg mb-3">Registration Process</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Complete the <strong>registration form</strong> with the registration link.
                </li>
                <li>
                  Provide <strong>accurate details</strong> (name, email, affiliation).
                </li>
              </ul>
            </div>

            {/* Code of Conduct */}
            <div>
              <p className="font-bold text-lg mb-3">Code of Conduct</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>No plagiarism</strong> — all submissions must be original work.
                </li>
                <li>
                  <strong>Respect teammates and opponents</strong> — no harassment, hate speech,
                  or unethical behavior.
                </li>
                <li>
                  Violation of rules may result in <strong>immediate disqualification.</strong>
                </li>
              </ul>
            </div>

            {/* Submission Rules */}
            <div>
              <p className="font-bold text-lg mb-3">Submission Rules</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  All projects must be submitted before the <strong>final deadline.</strong>
                </li>
                <li>
                  Include proper{' '}
                  <strong>documentation, code repository link, and a demo video</strong> (if
                  required).
                </li>
                <li>
                  Judges' decisions are <strong>final and binding.</strong>
                </li>
              </ul>
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

export default Registration;
