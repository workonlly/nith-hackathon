import { useState } from 'react'

function Prizes() {
  const [hoveredPrize, setHoveredPrize] = useState(null)

  const tracks = [
    {
      id: 'aiml',
      title: 'AI/ML Track',
      icon: '🧠',
      total: '₹30,000',
      description: 'Outstanding performance and creative solutions in AI/ML',
      prizes: [
        { position: '🥇 1st', amount: '₹15,000' },
        { position: '🥈 2nd', amount: '₹10,000' },
        { position: '🥉 3rd', amount: '₹5,000' }
      ]
    },
    {
      id: 'blockchain',
      title: 'Blockchain & DeFi Track',
      icon: '⛓️',
      total: '₹30,000',
      description: 'Excellence in execution of Blockchain & DeFi',
      prizes: [
        { position: '🥇 1st', amount: '₹15,000' },
        { position: '🥈 2nd', amount: '₹10,000' },
        { position: '🥉 3rd', amount: '₹5,000' }
      ]
    },
    {
      id: 'innovation',
      title: 'Open Innovation',
      icon: '💡',
      total: '₹30,000',
      description: 'Innovative solutions and creative problem-solving',
      prizes: [
        { position: '🥇 1st', amount: '₹15,000' },
        { position: '🥈 2nd', amount: '₹10,000' },
        { position: '🥉 3rd', amount: '₹5,000' }
      ]
    }
  ]

  const specialPrizes = [
    {
      title: 'Best All Girls Team',
      icon: '💎',
      amount: '₹5,000',
      description: 'The team should be composed entirely of girls, ensuring full female representation.'
    },
    {
      title: 'Best Beginners Hack',
      icon: '🎓',
      amount: '₹5,000',
      description: 'The team should consist entirely of first-year students, ensuring equal experience among members.'
    }
  ]

  const sponsorTracks = [
    {
      title: 'Ethereum',
      icon: '💰',
      amount: '₹8,500+',
      description: 'Innovative solutions and projects built on Ethereum'
    },
    {
      title: 'Best use of GitHub',
      icon: '⚙️',
      amount: 'Exciting Prizes',
      description: 'Chance to win Excited Prizes by GitHub'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#5A2A25]">
          Prize <span className="text-[#E8A87C]">Pool</span>
        </h1>
        <div className="w-20 h-1 bg-[#E8A87C] mx-auto mb-6"></div>
        <p className="text-xl max-w-2xl mx-auto text-gray-700">
          Celebrating excellence with substantial rewards for groundbreaking achievements
        </p>
      </div>

      {/* Grand Prize */}
      <div className="max-w-sm mx-auto mb-12">
        <div className="bg-gradient-to-br from-[#F2D5C4] to-[#E3AFA0] rounded-lg border-2 border-[#E8A87C] p-8 text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg">
          <div className="bg-[#5A2A25] p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🏆</span>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-[#5A2A25]">Grand Prize</h3>
          <div className="text-4xl font-bold text-[#E8A87C] mb-4">₹40,000</div>
          <p className="text-gray-700">Grand prize for exceptional achievement and innovation</p>
        </div>
      </div>

      {/* Track Prizes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="relative"
            onMouseEnter={() => setHoveredPrize(track.id)}
            onMouseLeave={() => setHoveredPrize(null)}
          >
            <div className="bg-gradient-to-br from-[#F2D5C4] to-[#E3AFA0] rounded-lg border border-[#5A2A25] p-8 text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg h-full">
              {/* Default View */}
              <div className={`transition-opacity duration-300 ${hoveredPrize === track.id ? 'opacity-0 absolute inset-0' : 'opacity-100'}`}>
                <div className="bg-[#5A2A25] p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">{track.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#5A2A25]">{track.title}</h3>
                <div className="text-4xl font-bold text-[#E8A87C] mb-4">{track.total}</div>
                <p className="text-gray-700">{track.description}</p>
              </div>

              {/* Hover View */}
              {hoveredPrize === track.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A1C18] to-[#3E1714] rounded-lg flex flex-col justify-center items-center p-8 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-[#E8A87C]">{track.title}</h3>
                  <div className="space-y-4 w-full">
                    {track.prizes.map((prize, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-[#E8A87C]/20 pb-2">
                        <span className="text-lg font-bold text-white">{prize.position}</span>
                        <span className="text-lg font-bold text-white">{prize.amount}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-gray-400">Total: {track.total}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Special Prizes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {specialPrizes.map((prize, index) => (
          <div key={index} className="bg-gradient-to-br from-[#F2D5C4] to-[#E3AFA0] rounded-lg border border-[#5A2A25] p-8 text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg">
            <div className="bg-[#5A2A25] p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">{prize.icon}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#5A2A25]">{prize.title}</h3>
            <div className="text-4xl font-bold text-[#E8A87C] mb-4">{prize.amount}</div>
            <p className="text-gray-700">{prize.description}</p>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="text-center mb-12">
        <h2 className="text-xl text-gray-700 mb-8">Includes Prizes Worth 7k-10k</h2>
        <h2 className="text-4xl md:text-5xl mb-4 font-bold text-[#5A2A25]">
          Sponsor <span className="text-[#E8A87C]">Tracks</span>
        </h2>
      </div>

      {/* Sponsor Tracks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sponsorTracks.map((track, index) => (
          <div key={index} className="bg-gradient-to-br from-[#F2D5C4] to-[#E3AFA0] rounded-lg border border-[#5A2A25] p-8 text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg">
            <div className="bg-[#5A2A25] p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">{track.icon}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#5A2A25]">{track.title}</h3>
            <div className="text-4xl font-bold text-[#E8A87C] mb-4">{track.amount}</div>
            <p className="text-gray-700">{track.description}</p>
          </div>
        ))}
      </div>

      {/* Sidebar - aligned with Registration page */}
      <div className="mt-12 lg:mt-16">
        <div className="bg-[#3E1714] text-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-bold mb-4 pb-3 border-b-2 border-[#E8A87C]">
            Important Dates
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-600">
              <span className="font-semibold">Hackathon Launch:</span>
              <span>January 15, 2026</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-600">
              <span className="font-semibold">Registration Deadline:</span>
              <span>February 15, 2026</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-600">
              <span className="font-semibold">Grand Finale:</span>
              <span>March 14-15, 2026</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F5D7C8] to-[#E3AFA0] p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 pb-3 border-b-2 border-[#E8A87C] text-[#5A2A25]">
            Prize Pool Details
          </h3>
          <div className="space-y-4 text-gray-800">
            <div className="flex items-start space-x-3">
              <span className="text-[#E8A87C] mt-1">💰</span>
              <div>
                <h4 className="font-bold">Total Prize Pool:</h4>
                <p className="text-sm">₹1,50,000+ in cash prizes and rewards</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-[#E8A87C] mt-1">🎯</span>
              <div>
                <h4 className="font-bold">Multiple Tracks:</h4>
                <p className="text-sm">Prizes for AI/ML, Blockchain, and Open Innovation</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-[#E8A87C] mt-1">🎁</span>
              <div>
                <h4 className="font-bold">Special Categories:</h4>
                <p className="text-sm">Additional prizes for Best All Girls Team and Best Beginners Hack</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-[#E8A87C] mt-1">🏅</span>
              <div>
                <h4 className="font-bold">Sponsor Prizes:</h4>
                <p className="text-sm">Win exclusive prizes from Ethereum and GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prizes
