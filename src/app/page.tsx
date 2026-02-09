"use client";

import { useState } from "react";
import { Bird, Bot, Heart, Sparkles } from "lucide-react";

export default function BridgePage() {
  const [persona, setPersona] = useState("owl");
  const [age, setAge] = useState("7");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleBuildBridge = async () => {
    setIsLoading(true);

    setTimeout(() => {
      setOutput("This is where your simplified story will appear. We'll connect the AI in the next step!");
      setIsLoading(false);
    }, 1500);
  };

  return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
        {/* Header */}
        <header className="max-w-4xl mx-auto py-12 px-4 text-center">
          <div className="flex justify-center mb-4 text-indigo-600">
            <Sparkles size={40} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Bridge AI</h1>
          <p className="mt-2 text-slate-500 text-lg">Simplifying complex worlds for curious minds.</p>
        </header>

        <main className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 pb-20">
          {/* Left Side: Controls */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-3">1. Explain to a...</label>
              <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option value="3">Toddler (2-5 years)</option>
                <option value="7">Child (7-10 years)</option>
                <option value="15">Teenager (15+ years)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">2. Choose your Guide (Persona)</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'owl', icon: <Bird size={18}/>, label: 'Wise Owl' },
                  { id: 'bot', icon: <Bot size={18}/>, label: 'Tech Bot' },
                  { id: 'heart', icon: <Heart size={18}/>, label: 'Kind Soul' }
                ].map((p) => (
                    <button
                        key={p.id}
                        onClick={() => setPersona(p.id)}
                        className={`flex flex-col items-center p-3 rounded-xl border transition-all ${
                            persona === p.id ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-slate-100 hover:border-indigo-200'
                        }`}
                    >
                      {p.icon}
                      <span className="text-xs mt-1 font-medium">{p.label}</span>
                    </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">3. Complex Content</label>
              <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Paste a complex topic, news or a hard question..."
                  className="w-full h-40 p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
              />
            </div>

            <button
                onClick={handleBuildBridge}
                disabled={isLoading || !input}
                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Building the bridge..." : "Build the Bridge"}
            </button>
          </div>

          {/* Right Side: Output */}
          <div className="bg-white p-8 rounded-2xl shadow-inner border border-slate-100 min-h-[400px] relative">
            <div className="absolute top-4 left-6 text-[10px] font-bold uppercase tracking-widest text-slate-300">Simple Version</div>
            <div className="mt-6 text-slate-700 leading-relaxed text-lg italic">
              {output || "Your story will appear here after you build the bridge..."}
            </div>
          </div>
        </main>

        {/* Footer / Watermark */}
        <footer className="text-center py-10 text-slate-400 text-sm">
          Developed in high-focus windows between motherhood and work.<br/>
          <span className="font-semibold">Bridge AI © 2026</span>
        </footer>
      </div>
  );
}