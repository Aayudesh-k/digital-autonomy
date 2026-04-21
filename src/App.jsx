import { Link } from 'react-scroll';

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-stone-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-sm border-b border-slate-200 z-50 px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-black tracking-tighter text-slate-900">DF.</div>
        <div className="space-x-8 text-sm font-bold tracking-widest hidden md:block text-slate-600">
          <Link to="threat" smooth={true} duration={500} offset={-70} className="cursor-pointer hover:text-emerald-600 transition-colors">01. PROBLEM</Link>
          <Link to="frameworks" smooth={true} duration={500} offset={-70} className="cursor-pointer hover:text-emerald-600 transition-colors">02. FRAMEWORKS</Link>
          <Link to="solution" smooth={true} duration={500} offset={-70} className="cursor-pointer hover:text-emerald-600 transition-colors">03. SOLUTION</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-8 md:px-24 relative overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://picsum.photos/id/160/2000/1000')" }}
        ></div>
        
        <div className="relative z-10 text-stone-50">
          <h2 className="text-emerald-400 font-bold tracking-widest mb-4">EGS 4034 • TEAM 11</h2>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-tight drop-shadow-lg">
            Digital <br /> Footprints & <br /> <span className="text-emerald-400">Privacy.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl font-light text-stone-300">
            Addressing the unaddressed ethical dilemmas of social media, data risks, and the unconscious acceptance of Terms of Service.
          </p>
        </div>
      </section>

      {/* 01. The Threat (Problem & Ecosystem) */}
      <section id="threat" className="py-24 px-8 md:px-24 min-h-screen flex flex-col justify-center">
        <h2 className="text-5xl font-black tracking-tighter mb-12 border-b-4 border-slate-800 pb-4 uppercase text-slate-900">01. + The Problem</h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 text-lg leading-relaxed text-slate-600">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900">Ignorance is Bliss?</h3>
              <p>As technology rapidly evolves, unaddressed ethical dilemmas emerge. Today, users unconsciously accept massive Terms of Service (ToS) agreements purely out of necessity to participate in modern society. This creates severe security risks and long-term privacy concerns for vulnerable populations.</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900">The Stakeholder Ecosystem</h3>
              {/* FIXED BULLET POINTS ALIGNMENT */}
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-4 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-slate-900">Users:</strong> Trade privacy for social connection and convenience.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-4 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-slate-900">App Developers:</strong> Must balance fiduciary duties to maximize profit via data with ethical duties to users.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-4 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-slate-900">Advertisers:</strong> Capitalize on user data to sell products, driving the financial incentives of platforms.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl relative h-full min-h-[300px] bg-slate-200">
             <img 
              src="https://picsum.photos/id/0/1000/1000" 
              alt="Digital Interface" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 02. The Frameworks (Tables Integrated) */}
      <section id="frameworks" className="py-24 px-8 md:px-24 min-h-screen bg-slate-100 flex flex-col justify-center">
        <h2 className="text-5xl font-black tracking-tighter mb-12 border-b-4 border-slate-800 pb-4 uppercase text-slate-900">02. + Evaluating Frameworks</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Duty-Based Card */}
          <div className="bg-white p-10 rounded-2xl border-t-8 border-rose-600 shadow-lg flex flex-col">
            <h3 className="text-3xl font-black mb-2 text-rose-700 uppercase tracking-wide">Current Practice: Duty-Based</h3>
            <p className="mb-8 text-slate-600">Companies construct ToS agreements to outline user obligations (do's and don'ts) into one massive document before continuing.</p>
            
            <div className="mb-6">
              <h4 className="font-bold text-slate-900 mb-2 border-b pb-1">Pros</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Lots of info consolidated into one document; easy access.</li>
                <li>• Easy framework to provide any legal ordinance and obligations.</li>
                <li>• Provides user with a sense of assurance; user has willingly provided consent.</li>
              </ul>
            </div>
            
            <div className="mt-auto">
              <h4 className="font-bold text-slate-900 mb-2 border-b pb-1">Cons</h4>
              <ul className="space-y-2 text-sm text-rose-700 font-medium">
                <li>• Often hard to read and understand (legalese); feels un-human/cold.</li>
                <li>• Users must comply to continue accessing the application (forced).</li>
                <li>• Most users are actually unaware of what they signed up for; high potential for privacy breaches.</li>
              </ul>
            </div>
          </div>

          {/* Consequentialist Card */}
          <div className="bg-white p-10 rounded-2xl border-t-8 border-emerald-500 shadow-lg flex flex-col">
            <h3 className="text-3xl font-black mb-2 text-emerald-700 uppercase tracking-wide">Alternative: Consequentialist</h3>
            <p className="mb-8 text-slate-600">Companies consider direct/indirect impacts, providing info in a friendly format to leave the user more trustful of the application.</p>
            
            <div className="mb-6 bg-slate-50 p-4 rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2">Implementation Ideas:</h4>
              <ul className="space-y-1 text-sm text-slate-700 list-disc pl-4">
                <li>Provide easy-to-read snippets of info during sign-up.</li>
                <li>Lock specific features behind specific agreements (granular access).</li>
                <li>Provide full legal document at the end for review.</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div>
                <h4 className="font-bold text-slate-900 mb-2 border-b pb-1">Pros</h4>
                <ul className="space-y-2 text-sm text-emerald-700 font-medium">
                  <li>• Users are adequately aware of terms.</li>
                  <li>• Increased trust between user and company.</li>
                  <li>• Info conveyed in readable, human format.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2 border-b pb-1">Cons</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• More development time and resources.</li>
                  <li>• Potential for company to hide "unnecessary" info.</li>
                  <li>• Longer sign-in process for users.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. The Solution & Lesson Learned */}
      <section id="solution" className="py-24 px-8 md:px-24 min-h-screen bg-slate-900 text-stone-50 flex flex-col justify-center">
        <h2 className="text-5xl font-black tracking-tighter mb-12 border-b-4 border-emerald-500 pb-4 uppercase">03. + The Solution</h2>
        
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-10">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-3xl font-bold mb-4 text-emerald-400">Our MVP Deliverable</h3>
              <p className="text-lg text-stone-300 mb-4">
                We built this interactive website to tackle the digital literacy gap. It serves as an educational resource for vulnerable populations and a proof-of-concept for developers.
              </p>
              <p className="text-lg text-stone-300">
                It showcases how an alternative (Consequentialist) framework can be used to handle digital consent, proving that we can prioritize human comprehension over dense legal jargon.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6 space-y-4">
              <h3 className="text-2xl font-bold uppercase tracking-widest text-white">Lesson Learned: Engineering Friction is a Moral Choice</h3>
              <p className="text-stone-400 text-lg">
                UI/UX choices dictate whether a user is an active participant or a passive victim of data extraction. Incorporating <strong>"ethical friction"</strong>—slowing the user down with modular snippets rather than a single "I Agree" button—increases user trust and sets a higher ethical standard for software engineering.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-2xl relative h-full min-h-[400px] bg-slate-800">
             <img 
              src="https://picsum.photos/id/1/1000/1000" 
              alt="Technology Concept" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-8 md:px-24 flex flex-col md:flex-row justify-between items-center text-sm font-bold tracking-widest gap-4">
        <div>EGS 4034 • ENGINEERING ETHICS • TEAM 11</div>
        <div>AAYUDESH • BRAYDEN • ALEX • JIJUN</div>
      </footer>
    </div>
  );
}