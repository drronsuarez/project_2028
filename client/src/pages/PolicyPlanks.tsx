/*
 * PROJECT 2028 — POLICY PLANKS PAGE
 * Design: Democratic Modernism
 * Shows policy areas with sample planks, submission form, and status pipeline
 */
import { useState } from "react";
import { FileText, ChevronDown, ChevronUp, ExternalLink, Plus, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const TEXTURE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117165971/jkGEUfu7KvYaNssvsXEX9Y/democracy_texture-B5wVTWEA69Nsybq7ayFr95.webp";

type PlankStatus = "proposed" | "deliberating" | "consensus" | "ratified";

interface Plank {
  id: string;
  title: string;
  summary: string;
  status: PlankStatus;
  votes: number;
  area: string;
  legalBasis?: string;
}

const statusConfig: Record<PlankStatus, { label: string; color: string; bg: string }> = {
  proposed: { label: "Proposed", color: "#D97706", bg: "#D9770615" },
  deliberating: { label: "In Deliberation", color: "#1B4332", bg: "#1B433215" },
  consensus: { label: "Consensus Reached", color: "#0D2137", bg: "#0D213715" },
  ratified: { label: "Ratified", color: "#059669", bg: "#05966915" },
};

const planks: Plank[] = [
  { id: "HC-001", title: "Medicare Negotiation for All Prescription Drugs", summary: "Expand Medicare's authority to negotiate drug prices for all Americans, not just Medicare enrollees, using the framework established by the Inflation Reduction Act.", status: "ratified", votes: 2847, area: "Healthcare", legalBasis: "IRA §11001 expansion" },
  { id: "HC-002", title: "Mental Health Parity Enforcement Act", summary: "Require insurers to cover mental health and substance use disorder treatment at the same level as physical health conditions, with federal enforcement mechanisms.", status: "consensus", votes: 1923, area: "Healthcare", legalBasis: "Mental Health Parity Act" },
  { id: "CL-001", title: "Clean Electricity Standard (100% by 2035)", summary: "Mandate that 100% of electricity sold by utilities comes from clean sources by 2035, with a just transition fund for fossil fuel workers and communities.", status: "deliberating", votes: 3102, area: "Climate", legalBasis: "Clean Air Act §111" },
  { id: "CL-002", title: "Environmental Justice Screening Tool Mandate", summary: "Require all federal infrastructure spending to use the EPA's EJScreen tool to prioritize historically overburdened communities.", status: "ratified", votes: 1456, area: "Climate", legalBasis: "Executive Order 12898 codification" },
  { id: "HO-001", title: "National Affordable Housing Trust Fund Expansion", summary: "Increase the National Housing Trust Fund from $1.35B to $10B annually, funded by a 0.1% fee on mortgage-backed securities.", status: "proposed", votes: 892, area: "Housing", legalBasis: "Housing and Economic Recovery Act" },
  { id: "ED-001", title: "Universal Pre-K through Title I Expansion", summary: "Extend Title I funding to cover universal pre-kindergarten for all 3- and 4-year-olds, prioritizing high-poverty districts.", status: "deliberating", votes: 2103, area: "Education", legalBasis: "ESEA Title I amendment" },
  { id: "LB-001", title: "PRO Act: Public Sector Expansion", summary: "Extend the Protecting the Right to Organize Act protections to all public sector workers, including gig economy workers classified as employees.", status: "consensus", votes: 1788, area: "Labor", legalBasis: "NLRA §7 expansion" },
  { id: "DM-001", title: "Automatic Voter Registration Nationwide", summary: "Require all states to automatically register eligible citizens to vote when they interact with any government agency, with opt-out provisions.", status: "ratified", votes: 4201, area: "Democracy", legalBasis: "NVRA amendment" },
];

const areas = ["All", "Healthcare", "Climate", "Housing", "Education", "Labor", "Democracy"];

export default function PolicyPlanks() {
  const [selectedArea, setSelectedArea] = useState("All");
  const [expandedPlank, setExpandedPlank] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: "", area: "Healthcare", summary: "", legalBasis: "" });

  const filtered = selectedArea === "All" ? planks : planks.filter(p => p.area === selectedArea);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Plank proposal submitted!", {
      description: "Your proposal will enter the Pol.is consensus phase within 48 hours.",
    });
    setShowForm(false);
    setFormData({ title: "", area: "Healthcare", summary: "", legalBasis: "" });
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FAF7F2" }}>
      <Navigation />

      {/* Header */}
      <section
        className="py-20 bg-[#0D2137] relative overflow-hidden"
        style={{ backgroundImage: `linear-gradient(135deg, #0D2137 60%, #1B4332 100%)` }}
      >
        <div className="container relative z-10">
          <span className="section-label mb-3 block" style={{ color: "#D97706" }}>Policy Platform</span>
          <span className="amber-rule mb-6" />
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
            The Policy Planks
          </h1>
          <p className="text-[#B8C9D8] max-w-2xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Each plank is a specific, legally grounded policy proposal — not a talking point. Proposals are crowdsourced, deliberated through Pol.is and Loomio, and ratified through Decidim. This is the living platform.
          </p>
        </div>
      </section>

      {/* Pipeline legend */}
      <section className="py-6 bg-white border-b border-[#E5DDD0]">
        <div className="container">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs text-[#6B6B6B] mr-2 flex items-center gap-1" style={{ fontFamily: "'DM Mono', monospace" }}>
              <Filter size={12} /> Pipeline:
            </span>
            {(Object.entries(statusConfig) as [PlankStatus, typeof statusConfig[PlankStatus]][]).map(([key, val]) => (
              <span key={key} className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-sm" style={{ backgroundColor: val.bg, color: val.color, fontFamily: "'DM Mono', monospace" }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: val.color }} />
                {val.label}
              </span>
            ))}
            <div className="ml-auto">
              <button
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1B4332] text-white text-sm font-semibold rounded-sm hover:bg-[#2D6A4F] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Plus size={14} /> Propose a Plank
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Submission form */}
      {showForm && (
        <section className="py-8 bg-[#F0EBE0] border-b border-[#E5DDD0]">
          <div className="container max-w-2xl">
            <h3 className="text-xl font-bold text-[#0D2137] mb-4" style={{ fontFamily: "'Fraunces', serif" }}>Submit a Policy Plank</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#1B4332] mb-1 uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace" }}>Plank Title *</label>
                <input
                  required
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E5DDD0] rounded-sm bg-white text-[#1C1C1E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                  placeholder="e.g., Universal Basic Income Pilot Program Act"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#1B4332] mb-1 uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace" }}>Policy Area *</label>
                <select
                  value={formData.area}
                  onChange={e => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E5DDD0] rounded-sm bg-white text-[#1C1C1E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {areas.filter(a => a !== "All").map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#1B4332] mb-1 uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace" }}>Policy Summary *</label>
                <textarea
                  required
                  rows={3}
                  value={formData.summary}
                  onChange={e => setFormData({ ...formData, summary: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E5DDD0] rounded-sm bg-white text-[#1C1C1E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                  placeholder="Describe the specific policy proposal in 2-3 sentences..."
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#1B4332] mb-1 uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace" }}>Legal Basis / Precedent</label>
                <input
                  value={formData.legalBasis}
                  onChange={e => setFormData({ ...formData, legalBasis: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E5DDD0] rounded-sm bg-white text-[#1C1C1E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                  placeholder="e.g., NLRA §7, Clean Air Act §111, existing legislation..."
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="px-6 py-2 bg-[#D97706] text-white text-sm font-semibold rounded-sm hover:bg-[#B45309] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Submit Proposal
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2 border border-[#E5DDD0] text-[#5A5A5A] text-sm rounded-sm hover:bg-[#F0EBE0] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Filter tabs */}
      <section className="py-6 bg-white border-b border-[#E5DDD0]">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {areas.map(area => (
              <button
                key={area}
                onClick={() => setSelectedArea(area)}
                className={`px-4 py-1.5 text-sm rounded-sm transition-colors ${selectedArea === area ? "bg-[#1B4332] text-white" : "bg-[#F0EBE0] text-[#3D3D3D] hover:bg-[#E5DDD0]"}`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Planks list */}
      <section className="py-12">
        <div className="container">
          <div className="space-y-3">
            {filtered.map((plank) => {
              const status = statusConfig[plank.status];
              const isExpanded = expandedPlank === plank.id;
              return (
                <div key={plank.id} className="bg-white rounded-sm border border-[#E5DDD0] shadow-sm overflow-hidden">
                  <button
                    className="w-full text-left p-5 flex items-start gap-4 hover:bg-[#FAF7F2] transition-colors"
                    onClick={() => setExpandedPlank(isExpanded ? null : plank.id)}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-sm" style={{ fontFamily: "'DM Mono', monospace", backgroundColor: "#1B433215", color: "#1B4332" }}>
                        {plank.id}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-bold text-[#0D2137] text-base leading-snug" style={{ fontFamily: "'Fraunces', serif" }}>{plank.title}</h3>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="text-xs px-2 py-0.5 rounded-sm" style={{ backgroundColor: status.bg, color: status.color, fontFamily: "'DM Mono', monospace" }}>
                            {status.label}
                          </span>
                          {isExpanded ? <ChevronUp size={14} className="text-[#B0B0B0]" /> : <ChevronDown size={14} className="text-[#B0B0B0]" />}
                        </div>
                      </div>
                      <p className="text-sm text-[#5A5A5A] mt-1 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{plank.summary}</p>
                    </div>
                  </button>
                  {isExpanded && (
                    <div className="px-5 pb-5 border-t border-[#F0EBE0] pt-4 bg-[#FAF7F2]">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <span className="text-xs text-[#6B6B6B] uppercase tracking-wider block mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>Policy Area</span>
                          <span className="text-sm font-medium text-[#1B4332]">{plank.area}</span>
                        </div>
                        <div>
                          <span className="text-xs text-[#6B6B6B] uppercase tracking-wider block mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>Community Support</span>
                          <span className="text-sm font-medium text-[#0D2137]">{plank.votes.toLocaleString()} votes</span>
                        </div>
                        {plank.legalBasis && (
                          <div>
                            <span className="text-xs text-[#6B6B6B] uppercase tracking-wider block mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>Legal Basis</span>
                            <span className="text-sm font-medium text-[#0D2137]">{plank.legalBasis}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-3">
                        <a
                          href="https://pol.is"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D97706] text-white text-xs font-medium rounded-sm hover:bg-[#B45309] transition-colors"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          Vote on Pol.is <ExternalLink size={10} />
                        </a>
                        <a
                          href="https://www.loomio.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1B4332] text-white text-xs font-medium rounded-sm hover:bg-[#2D6A4F] transition-colors"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          Deliberate on Loomio <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
