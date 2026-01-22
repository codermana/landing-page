export default function TheHourCTA() {
  return (
    <section className="mb-0">
        <div className="bg-gradient-to-br from-yellow-500 to-orange-500  p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%222%22 height=%222%22 fill=%22white%22/%3E%3C/svg%3E')", backgroundRepeat: 'repeat'}}></div>

            <div className="relative z-10">
                <div className="text-4xl md:text-6xl font-black mb-3 drop-shadow-lg">THE CODERMANA HOUR</div>
                <div className="text-xl md:text-2xl mb-5 opacity-95">Live Tech Sessions Every Other Thursday</div>
                <div className="text-lg md:text-xl mb-8 opacity-90">
                    🗓️ Fortnightly • ⏰ 7-8 PM IST • 🌏 Free & Open to All
                </div>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Distributed Systems</span>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Security</span>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">LLMs</span>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Programming Languages</span>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Open Source</span>
                </div>
                <a href="https://thehour.codermana.com/" target="_blank" className="inline-block bg-white text-orange-500 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:-translate-y-1 transition-transform">
                    Join Next Session
                </a>
            </div>
        </div>
    </section>

  );
}
