import bannerImg from '../../../assets/image/banner.png'

const Banner = () => {
  return (
    <div>
      <div className="relative min-h-155 sm:flex sm:items-center px-6 overflow-hidden">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 max-[500px]:px-3">
            {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium px-5 py-2 rounded-full">
                ✨ Frontier AI Models
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-red-600">
                One Subscription.
                <br />
                <span className="bg-linear-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                All the AIs You Need
                </span>
            </h1>

            <p className="text-lg text-zinc-700 max-w-lg max-[500px]:text-[16px]">
                Experience the full spectrum of frontier intelligence — all the most
                advanced AI models, unified under a single, powerful subscription.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-red-600 hover:bg-red-500 transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-white cursor-pointer">
                Get Unlimited Access
                <span className="group-hover:translate-x-1 transition">→</span>
                </button>
            </div>

            <div className="flex items-center gap-8 text-sm text-zinc-600 pt-6">
                <div>✓ 50+ Frontier Models</div>
                <div>✓ No Usage Limits</div>
                <div>✓ Cancel Anytime</div>
            </div>
          </div>

            {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
                <img
                className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
                src={bannerImg}
                alt="AI Models Banner"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
