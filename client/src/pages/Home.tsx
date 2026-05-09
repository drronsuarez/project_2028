/*
 * PROJECT 2028 — HOME PAGE
 * Design: Democratic Modernism
 * Sections: Hero, Mission Statement, Policy Pillars, Tools Integration, How It Works, CTA
 * Color: Forest Green (#1B4332), Amber (#D97706), Parchment (#FAF7F2), Navy (#0D2137)
 * Typography: Fraunces (display), DM Sans (body), DM Mono (labels)
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Users, FileText, Vote, ChevronRight, ExternalLink, Scale, Zap, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117165971/jkGEUfu7KvYaNssvsXEX9Y/hero_banner-Rx5CSiKF7yUfeKPC8LE8zb.webp";
const PLANKS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117165971/jkGEUfu7KvYaNssvsXEX9Y/planks_illustration-7E5ibunDaE2S3dsUQXkpzZ.webp";
const TOOLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117165971/jkGEUfu7KvYaNssvsXEX9Y/tools_integration-9LgUbger6MDwgRT3kiS9WL.webp";
const TEXTURE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117165971/jkGEUfu7KvYaNssvsXEX9Y/democracy_texture-B5wVTWEA69Nsybq7ayFr95.webp";

function useIntersection(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const policyPillars = [
  { id: "01", title: "Healthcare", desc: "Universal access, prescription pricing, mental health parity, and public option frameworks.", color: "#1B4332" },
  { id: "02", title: "Climate & Environment", desc: "Just transition, clean energy mandates, environmental justice, and carbon accountability.", color: "#2D6A4F" },
  { id: "03", title: "Housing", desc: "Affordable housing mandates, anti-displacement protections, and community land trusts.", color: "#D97706" },
  { id: "04", title: "Education", desc: "Universal pre-K, debt-free college, teacher pay equity, and public school investment.", color: "#B45309" },
  { id: "05", title: "Labor & Economy", desc: "Living wage floors, worker ownership, union rights, and anti-monopoly enforcement.", color: "#0D2137" },
  { id: "06", title: "Democracy", desc: "Voting rights expansion, campaign finance reform, and anti-corruption measures.", color: "#1B4332" },
];

const tools = [
  {
    name: "Loomio",
    url: "https://www.loomio.com",
    tagline: "Structured Deliberation",
    description: "Loomio enables structured group decision-making with proposals, discussions, and consent-based voting. We use it for working groups to deliberate on specific plank language before it advances to broader consensus.",
    icon: "🗳️",
    integration: "Embed Loomio groups per policy area. Members join working groups, propose plank language, and vote on amendments before escalating to platform-wide ratification.",
    color: "#1B4332",
  },
  {
    name: "Pol.is",
    url: "https://pol.is",
    tagline: "Opinion Mapping",
    description: "Pol.is uses machine learning to map areas of consensus and division across large populations. It surfaces the statements that most people agree on — cutting through polarization to find common ground.",
    icon: "🧭",
    integration: "Embed Pol.is conversations at the top of each policy area page. Citizens submit and vote on statements, and the AI clusters opinions to reveal where broad consensus already exists.",
    color: "#D97706",
  },
  {
    name: "Decidim",
    url: "https://decidim.org",
    tagline: "Participatory Proposals",
    description: "Decidim is a full-featured open-source participatory democracy platform used by cities and governments worldwide. It supports proposals, participatory budgeting, initiatives, and more.",
    icon: "🏛️",
    integration: "Host the official policy plank submission and ratification process on a self-hosted Decidim instance. Proposals graduate from Pol.is consensus → Loomio working group → Decidim formal ratification.",
    color: "#0D2137",
  },
];

const steps = [
  { num: "01", title: "Propose a Plank", desc: "Any registered participant can submit a policy proposal. Proposals must cite legal precedent, existing legislation, or peer-reviewed research.", icon: FileText },
  { num: "02", title: "Map the Consensus", desc: "Pol.is conversations identify where broad agreement exists across demographics, surfacing the proposals with the widest support.", icon: Vote },
  { num: "03", title: "Deliberate in Working Groups", desc: "Loomio working groups refine plank language, debate tradeoffs, and reach consent decisions on final wording.", icon: Users },
  { num: "04", title: "Ratify the Platform", desc: "Decidim hosts the formal ratification vote. Approved planks become part of the official Project 2028 policy platform.", icon: Scale },
];

export default function Home() {
  const missionSection = useIntersection();
  const pillarsSection = useIntersection();
  const toolsSection = useIntersection();
  const stepsSection = useIntersection();
  const ctaSection = useIntersection();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FAF7F2" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2137]/90 via-[#0D2137]/70 to-transparent" />

        <div className="relative container py-24">
          <div className="max-w-2xl">
            <div className="mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#D97706]/20 border border-[#D97706]/40 rounded-sm text-[#F59E0B] text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse inline-block" />
                501(c)(3) Nonprofit · Est. 2026
              </span>
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 opacity-0 animate-fade-in-up"
              style={{ fontFamily: "'Fraunces', serif", animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Planks,<br />
              <span style={{ color: "#D97706" }}>Not</span><br />
              Platitudes.
            </h1>

            <p
              className="text-lg text-[#C8D8E8] leading-relaxed mb-8 max-w-lg opacity-0 animate-fade-in-up"
              style={{ fontFamily: "'DM Sans', sans-serif", animationDelay: "0.35s", animationFillMode: "forwards" }}
            >
              Project 2028 is a citizen-driven platform for crowdsourcing concrete, legally grounded progressive policy proposals — the democratic counterpoint to Project 2025.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <Link
                href="/planks"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D97706] text-white font-semibold rounded-sm hover:bg-[#B45309] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Explore the Platform <ArrowRight size={16} />
              </Link>
              <Link
                href="/integrations"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-sm hover:bg-white/10 transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                How It Works <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#1B4332]/90 backdrop-blur-sm border-t border-[#2D6A4F]">
          <div className="container py-4">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 text-center">
              {[
                { num: "6", label: "Policy Areas" },
                { num: "3", label: "Deliberation Tools" },
                { num: "2028", label: "Target Year" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Fraunces', serif" }}>{stat.num}</div>
                  <div className="text-xs text-[#74B49B] uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section
        ref={missionSection.ref}
        className="py-24"
        style={{
          backgroundImage: `url(${TEXTURE_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-700 ${missionSection.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <span className="section-label mb-3 block">Our Mission</span>
              <span className="amber-rule mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#0D2137] leading-tight mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
                The antidote to vague promises and empty rhetoric.
              </h2>
              <p className="text-[#3D3D3D] leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Project 2025 produced a 900-page blueprint for dismantling democratic institutions. Project 2028 produces something different: a living, citizen-authored policy platform built through democratic deliberation, not think-tank fiat.
              </p>
              <p className="text-[#3D3D3D] leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                As a 501(c)(3) nonprofit, we do not endorse candidates. We define the agenda. Every plank on this platform is a specific, legally grounded proposal — not a talking point, not a value statement, but an actionable policy with a path to legislation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-start gap-3">
                  <Scale className="text-[#1B4332] mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <div className="font-semibold text-[#0D2137] text-sm">501(c)(3) Status</div>
                    <div className="text-xs text-[#6B6B6B]">Nonpartisan, nonprofit, transparent</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="text-[#1B4332] mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <div className="font-semibold text-[#0D2137] text-sm">Open Platform</div>
                    <div className="text-xs text-[#6B6B6B]">Anyone can propose, anyone can vote</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-700 delay-200 ${missionSection.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#1B4332]/20 rounded-sm" />
                <img
                  src={PLANKS_IMG}
                  alt="Policy planks being assembled — workers building a bridge from policy areas"
                  className="w-full rounded-sm shadow-xl relative"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0D2137]/85 backdrop-blur-sm rounded-sm p-3">
                  <p className="text-white text-sm font-medium" style={{ fontFamily: "'Fraunces', serif" }}>
                    "We are building the platform, plank by plank."
                  </p>
                  <p className="text-[#D97706] text-xs mt-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                    — Project 2028 Mission Statement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POLICY PILLARS ── */}
      <section ref={pillarsSection.ref} className="py-24 bg-white">
        <div className="container">
          <div className={`mb-12 transition-all duration-600 ${pillarsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="section-label mb-3 block">Policy Areas</span>
            <span className="amber-rule mb-6" />
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-4xl font-bold text-[#0D2137] max-w-lg" style={{ fontFamily: "'Fraunces', serif" }}>
                Six pillars. Hundreds of planks. One platform.
              </h2>
              <Link
                href="/planks"
                className="inline-flex items-center gap-2 text-[#1B4332] font-semibold text-sm hover:text-[#D97706] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                View all planks <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {policyPillars.map((pillar, i) => (
              <div
                key={pillar.id}
                className={`plank-card p-6 rounded-sm transition-all duration-600 ${pillarsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  borderLeftColor: pillar.color,
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-sm" style={{ fontFamily: "'DM Mono', monospace", backgroundColor: `${pillar.color}15`, color: pillar.color }}>
                    {pillar.id}
                  </span>
                  <ChevronRight size={14} className="text-[#B0B0B0] mt-0.5" />
                </div>
                <h3 className="text-xl font-bold text-[#0D2137] mb-2" style={{ fontFamily: "'Fraunces', serif" }}>{pillar.title}</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section ref={toolsSection.ref} className="py-24 bg-[#0D2137]">
        <div className="container">
          <div className={`mb-12 transition-all duration-600 ${toolsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="section-label mb-3 block" style={{ color: "#D97706" }}>Deliberation Stack</span>
            <span className="amber-rule mb-6" />
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-4xl font-bold text-white max-w-lg" style={{ fontFamily: "'Fraunces', serif" }}>
                Three tools. One pipeline. Democratic by design.
              </h2>
              <Link
                href="/integrations"
                className="inline-flex items-center gap-2 text-[#D97706] font-semibold text-sm hover:text-[#F59E0B] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Integration guide <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="mb-10">
            <img
              src={TOOLS_IMG}
              alt="Civic participation tools: Propose, Discuss, Decide pipeline diagram"
              className={`w-full rounded-sm shadow-2xl transition-all duration-700 ${toolsSection.visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: "200ms" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className={`rounded-sm p-6 border transition-all duration-600 ${toolsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  backgroundColor: `${tool.color}22`,
                  borderColor: `${tool.color}44`,
                  transitionDelay: `${300 + i * 100}ms`,
                }}
              >
                <div className="text-3xl mb-3">{tool.icon}</div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Fraunces', serif" }}>{tool.name}</h3>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-[#B8C9D8] hover:text-white transition-colors">
                    <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-xs text-[#D97706] mb-3 tracking-wider uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>{tool.tagline}</p>
                <p className="text-sm text-[#B8C9D8] leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{tool.description}</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-[#74B49B] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <span className="font-semibold text-[#D97706]">Integration: </span>
                    {tool.integration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section ref={stepsSection.ref} className="py-24" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="container">
          <div className={`mb-12 transition-all duration-600 ${stepsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="section-label mb-3 block">Process</span>
            <span className="amber-rule mb-6" />
            <h2 className="text-4xl font-bold text-[#0D2137] max-w-lg" style={{ fontFamily: "'Fraunces', serif" }}>
              From citizen idea to ratified policy plank.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className={`relative transition-all duration-600 ${stepsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#E5DDD0] z-0" style={{ width: "calc(100% - 2rem)", left: "calc(100% - 1rem)" }} />
                  )}
                  <div className="bg-white rounded-sm p-6 shadow-sm border border-[#E5DDD0] relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#1B4332] rounded-sm flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-white" />
                      </div>
                      <span className="text-xs font-medium text-[#D97706]" style={{ fontFamily: "'DM Mono', monospace" }}>Step {step.num}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0D2137] mb-2" style={{ fontFamily: "'Fraunces', serif" }}>{step.title}</h3>
                    <p className="text-sm text-[#5A5A5A] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaSection.ref} className="py-24 bg-[#1B4332]">
        <div className="container">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${ctaSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="section-label mb-4 block" style={{ color: "#74B49B" }}>Get Involved</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
              Democracy is a verb.<br />Start building.
            </h2>
            <p className="text-[#A8C5B0] leading-relaxed mb-10 text-lg max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Join thousands of citizens crafting the progressive policy agenda for 2028 and beyond. Every plank starts with a single proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/planks"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D97706] text-white font-semibold rounded-sm hover:bg-[#B45309] transition-colors text-lg"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Zap size={18} /> Submit a Policy Plank
              </Link>
              <Link
                href="/integrations"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-medium rounded-sm hover:bg-white/10 transition-colors text-lg"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Learn About Our Tools <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
