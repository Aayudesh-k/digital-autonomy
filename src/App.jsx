import { Link } from 'react-scroll';

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-stone-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-sm border-b border-slate-200 z-50 px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-black tracking-tighter text-slate-900">DA.</div>
        <div className="space-x-8 text-sm font-bold tracking-widest hidden md:block text-slate-600">
          <Link to="threat" smooth={true} duration={500} offset={-70} className="cursor-pointer hover:text-emerald-600 transition-colors">01. THREAT</Link>
          <Link to="frameworks" smooth={true} duration={500} offset={-70} className="cursor-pointer hover:text-emerald-600 transition-colors">02. FRAMEWORKS</Link>
          <Link to="solution" smooth={true} duration={500} offset={-70} className="cursor-pointer hover:text-emerald-600 transition-colors">03. TOOLKIT</Link>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section 
        className="h-screen flex flex-col justify-center px-8 md:px-24 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80')" }}
        >
          {/* Dark Overlay to make text readable */}
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 text-stone-50">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-tight drop-shadow-lg">
            Reclaiming <br /> Digital <br /> <span className="text-emerald-400">Autonomy.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl font-light text-stone-300">
            Exposing the coercive architecture of Terms of Service agreements and the weaponization of consent fatigue.
          </p>
        </div>
      </section>

      {/* 01. The Threat (Image & Text Layout) */}
      <section id="threat" className="py-24 px-8 md:px-24 min-h-screen flex flex-col justify-center">
        <h2 className="text-5xl font-black tracking-tighter mb-12 border-b-4 border-slate-800 pb-4 uppercase text-slate-900">01. + The Threat</h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-lg leading-relaxed text-slate-600">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900">Surveillance Capitalism</h3>
              <p>The modern digital ecosystem thrives on the unchecked extraction of user data. Algorithms predict, nudge, and manipulate behavior, fundamentally undermining personal agency. The "free" internet is paid for with behavioral profiles.</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900">The Vulnerable</h3>
              <p>This risk is highly unequal. Youth, the elderly, and marginalized communities are disproportionately targeted by algorithmic bias and micro-targeted misinformation. They are coerced into sacrificing privacy for digital participation.</p>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px] relative">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80" 
              alt="Matrix code representation" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 02. The Frameworks (Color Coded Cards) */}
      <section id="frameworks" className="py-24 px-8 md:px-24 min-h-screen bg-slate-100 flex flex-col justify-center">
        <h2 className="text-5xl font-black tracking-tighter mb-12 border-b-4 border-slate-800 pb-4 uppercase text-slate-900">02. + How They Trick You</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Duty-Based Card */}
          <div className="bg-rose-50 p-10 rounded-2xl border border-rose-200 shadow-lg">
            <h3 className="text-3xl font-black mb-4 text-rose-700 uppercase tracking-wide">The Duty-Based Reality</h3>
            <p className="mb-6 text-lg text-slate-700">The industry standard. Companies use monolithic, 50-page Terms of Service documents filled with dense legalese to legally shield themselves.</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-3">✗</span>
                <span className="font-bold text-slate-800">Engineers User Ignorance</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-3">✗</span>
                <span className="font-bold text-slate-800">Forces "All-or-Nothing" Access</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-3">✗</span>
                <span className="font-bold text-slate-800">Weaponizes Consent Fatigue</span>
              </li>
            </ul>
          </div>

          {/* Consequentialist Card */}
          <div className="bg-emerald-50 p-10 rounded-2xl border border-emerald-200 shadow-lg">
            <h3 className="text-3xl font-black mb-4 text-emerald-700 uppercase tracking-wide">The Consequentialist Ideal</h3>
            <p className="mb-6 text-lg text-slate-700">The ethical alternative. Prioritizes genuine human comprehension over absolute corporate liability shielding by designing ethical friction.</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-emerald-500 font-bold mr-3">✓</span>
                <span className="font-bold text-slate-800">Human-Readable Snippets</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 font-bold mr-3">✓</span>
                <span className="font-bold text-slate-800">Granular, Modular Consent</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 font-bold mr-3">✓</span>
                <span className="font-bold text-slate-800">Prioritizes User Trust</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 03. The Solution (Dark Slate Background) */}
      <section id="solution" className="py-24 px-8 md:px-24 min-h-screen bg-slate-900 text-stone-50 flex flex-col justify-center">
        <h2 className="text-5xl font-black tracking-tighter mb-12 border-b-4 border-emerald-500 pb-4 uppercase">03. + The Toolkit</h2>
        
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-10">
            <p className="text-xl leading-relaxed text-stone-300">
              We cannot wait for tech giants to self-regulate. Protecting your digital footprint requires active friction. Here is how you push back against data extraction today.
            </p>
            
            <div className="space-y-8">
              <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-emerald-500">
                <h3 className="text-2xl font-bold mb-2 text-white">1. Limit Ad Tracking</h3>
                <p className="text-stone-300">Navigate to your device settings and disable personalized ads. Force platforms to use contextual advertising rather than behavioral tracking.</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-emerald-500">
                <h3 className="text-2xl font-bold mb-2 text-white">2. Reject Non-Essential Cookies</h3>
                <p className="text-stone-300">Do not click "Accept All." Take the extra 10 seconds to click "Manage Preferences" and turn off targeted and functional cookies.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-2xl relative h-full min-h-[400px]">
             <img 
              src="https://images.unsplash.com/photo-1614064641913-6b71f30165c2?auto=format&fit=crop&w=1000&q=80" 
              alt="Digital Security Lock" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-8 md:px-24 flex flex-col md:flex-row justify-between items-center text-sm font-bold tracking-widest gap-4">
        <div>EGS 4034 • ENGINEERING ETHICS</div>
        <div>UNIVERSITY OF FLORIDA</div>
      </footer>
    </div>
  );
}