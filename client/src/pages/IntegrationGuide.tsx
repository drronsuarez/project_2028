/*
 * PROJECT 2028 — INTEGRATION GUIDE PAGE
 * Design: Democratic Modernism
 * Documents the Loomio + Pol.is + Decidim integration architecture
 */
import { ExternalLink, Code, GitBranch, Layers, ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TOOLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117165971/jkGEUfu7KvYaNssvsXEX9Y/tools_integration-9LgUbger6MDwgRT3kiS9WL.webp";

const integrations = [
  {
    name: "Pol.is",
    url: "https://pol.is",
    tagline: "Opinion Mapping & Consensus Discovery",
    color: "#D97706",
    bg: "#D9770610",
    icon: "🧭",
    phase: "Phase 1: Broad Sentiment",
    description: "Pol.is uses machine learning to map opinion clusters across large groups. Unlike surveys, it surfaces the statements where broad consensus already exists — cutting through polarization to find common ground before deliberation begins.",
    howItWorks: [
      "Citizens submit short statements about a policy area",
      "Other participants vote agree/disagree/pass on each statement",
      "The AI groups participants into opinion clusters",
      "Statements that bridge clusters (high agreement across groups) are surfaced as consensus points",
      "These consensus points become the foundation for plank language",
    ],
    integrationSteps: [
      { step: "Create a Pol.is conversation for each policy area", detail: "Log in at pol.is, create a new conversation, set the topic and seed statements." },
      { step: "Embed the conversation on your policy page", detail: "Use the iframe embed code: <div class=\"polis\" data-conversation_id=\"YOUR_ID\"></div><script src=\"https://pol.is/embed.js\"></script>" },
      { step: "Configure per-user settings", detail: "Use data-ucw (user can write) and data-ucv (user can vote) attributes to control participant permissions based on authentication state." },
      { step: "Subscribe to vote events", detail: "Use window.addEventListener('message', ...) to capture vote events and sync with your platform's user data." },
      { step: "Export consensus data", detail: "Use the Pol.is API to export participant groups and consensus statements as JSON for use in the next pipeline stage." },
    ],
    apiNote: "Pol.is provides a REST API for reading conversation data. The embed code emits JavaScript events on each vote. Self-hosting is available via the open-source repository at github.com/compdemocracy/polis.",
    embedCode: `<div
  class="polis"
  data-conversation_id="YOUR_CONVERSATION_ID"
  data-ucv="true"
  data-ucw="true"
  data-show_vis="true"
  data-auth_needed_to_vote="true"
></div>
<script async src="https://pol.is/embed.js"></script>`,
  },
  {
    name: "Loomio",
    url: "https://www.loomio.com",
    tagline: "Structured Group Deliberation",
    color: "#1B4332",
    bg: "#1B433210",
    icon: "🗳️",
    phase: "Phase 2: Working Group Deliberation",
    description: "Loomio enables structured group decision-making with proposals, threaded discussions, and consent-based voting. Working groups use it to refine plank language based on the consensus points surfaced by Pol.is.",
    howItWorks: [
      "Working groups are formed for each policy area (Healthcare, Climate, etc.)",
      "Pol.is consensus points are imported as seed proposals",
      "Group members deliberate on specific plank language through threaded discussion",
      "Proposals are put to a vote using Loomio's consent or consensus decision tools",
      "Approved plank language is exported to Decidim for formal ratification",
    ],
    integrationSteps: [
      { step: "Create a Loomio group for each policy area", detail: "Set up groups at loomio.com. Configure membership policies (open, invite-only, or request-to-join)." },
      { step: "Use the Loomio API to create proposals programmatically", detail: "POST to /api/v1/proposals with your API key to create proposals from Pol.is consensus data automatically." },
      { step: "Configure webhooks for status updates", detail: "Set up Loomio webhooks to notify your platform when proposals are approved, rejected, or reach quorum." },
      { step: "Embed Loomio discussions on policy pages", detail: "Link directly to specific Loomio threads from your policy plank pages using the group/thread URL structure." },
      { step: "Export approved plank language", detail: "Use the API to export approved proposal text as JSON for import into Decidim." },
    ],
    apiNote: "Loomio provides a REST API accessible via user API keys (found in Account > API Keys). Webhooks are available for real-time event notifications. Zapier integration is also available for no-code workflows.",
    embedCode: `// Loomio API: Create a proposal
fetch('https://www.loomio.com/api/v1/proposals', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    group_id: YOUR_GROUP_ID,
    title: 'Plank: Medicare Negotiation Expansion',
    details: 'Based on Pol.is consensus: ...',
    closing_at: '2026-12-31T00:00:00Z'
  })
})`,
  },
  {
    name: "Decidim",
    url: "https://decidim.org",
    tagline: "Formal Participatory Ratification",
    color: "#0D2137",
    bg: "#0D213710",
    icon: "🏛️",
    phase: "Phase 3: Formal Ratification",
    description: "Decidim is a full-featured open-source participatory democracy platform used by cities and governments worldwide. It hosts the formal ratification process where planks that have achieved Loomio working group approval are put to a platform-wide vote.",
    howItWorks: [
      "Approved Loomio proposals are imported as Decidim proposals",
      "The broader Project 2028 community votes on formal ratification",
      "Ratified planks are published to the official policy platform",
      "Accountability module tracks implementation progress over time",
      "Citizens can follow and comment on ratified planks",
    ],
    integrationSteps: [
      { step: "Self-host a Decidim instance", detail: "Deploy Decidim on your own server or use a managed hosting provider. The platform is built on Ruby on Rails and requires PostgreSQL." },
      { step: "Configure participatory processes", detail: "Create a participatory process for each policy area with phases: Proposal Submission → Deliberation → Voting → Results." },
      { step: "Use the Decidim GraphQL API", detail: "Decidim exposes a full GraphQL API for reading and writing proposals, votes, and comments programmatically." },
      { step: "Import planks from Loomio via API", detail: "Use the GraphQL API to create proposals from Loomio-approved plank language, preserving the deliberation history." },
      { step: "Enable the Accountability module", detail: "Track the implementation status of ratified planks over time, showing citizens which proposals have become law." },
    ],
    apiNote: "Decidim provides a GraphQL API (decidim-api module) for all platform interactions. The API supports authentication via OAuth2. A REST API wrapper is also available via community modules.",
    embedCode: `# Decidim GraphQL API: Create a proposal
query {
  component(id: "COMPONENT_ID") {
    ... on Proposals {
      proposals {
        nodes {
          id
          title { translation(locale: "en") }
          body { translation(locale: "en") }
          state
          voteCount
        }
      }
    }
  }
}`,
  },
];

const pipeline = [
  { tool: "Pol.is", action: "Broad opinion mapping across all participants", output: "Consensus statements", color: "#D97706" },
  { tool: "Loomio", action: "Working group deliberation on plank language", output: "Approved plank text", color: "#1B4332" },
  { tool: "Decidim", action: "Platform-wide formal ratification vote", output: "Ratified policy plank", color: "#0D2137" },
  { tool: "Project 2028", action: "Published to the official policy platform", output: "Living policy platform", color: "#059669" },
];

export default function IntegrationGuide() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FAF7F2" }}>
      <Navigation />

      {/* Header */}
      <section className="py-20 bg-[#0D2137]">
        <div className="container">
          <span className="section-label mb-3 block" style={{ color: "#D97706" }}>Technical Integration</span>
          <span className="amber-rule mb-6" />
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
            Our Deliberation Stack
          </h1>
          <p className="text-[#B8C9D8] max-w-2xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Project 2028 integrates three best-in-class civic technology tools into a single democratic pipeline. Each tool serves a distinct phase of the deliberation process, from broad opinion mapping to formal ratification.
          </p>
        </div>
      </section>

      {/* Pipeline overview */}
      <section className="py-16 bg-white border-b border-[#E5DDD0]">
        <div className="container">
          <h2 className="text-2xl font-bold text-[#0D2137] mb-8" style={{ fontFamily: "'Fraunces', serif" }}>The Deliberation Pipeline</h2>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-10">
            {pipeline.map((stage, i) => (
              <div key={stage.tool} className="flex items-center gap-4 flex-1">
                <div className="flex-1 p-4 rounded-sm border" style={{ backgroundColor: `${stage.color}10`, borderColor: `${stage.color}30` }}>
                  <div className="text-xs font-medium mb-1" style={{ fontFamily: "'DM Mono', monospace", color: stage.color }}>{stage.tool}</div>
                  <div className="text-sm text-[#0D2137] font-medium mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{stage.action}</div>
                  <div className="flex items-center gap-1 text-xs text-[#6B6B6B]" style={{ fontFamily: "'DM Mono', monospace" }}>
                    <CheckCircle size={10} style={{ color: stage.color }} /> {stage.output}
                  </div>
                </div>
                {i < pipeline.length - 1 && (
                  <ArrowRight size={16} className="text-[#B0B0B0] flex-shrink-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>
          <img src={TOOLS_IMG} alt="Civic participation pipeline diagram" className="w-full rounded-sm shadow-lg" />
        </div>
      </section>

      {/* Tool integrations */}
      {integrations.map((tool, i) => (
        <section key={tool.name} className={`py-16 ${i % 2 === 0 ? "bg-[#FAF7F2]" : "bg-white"}`}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Tool overview */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-3xl font-bold text-[#0D2137]" style={{ fontFamily: "'Fraunces', serif" }}>{tool.name}</h2>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-[#1B4332] transition-colors">
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <p className="text-xs mb-3 tracking-wider uppercase" style={{ fontFamily: "'DM Mono', monospace", color: tool.color }}>{tool.tagline}</p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs mb-4" style={{ backgroundColor: tool.bg, color: tool.color, fontFamily: "'DM Mono', monospace" }}>
                    <Layers size={10} /> {tool.phase}
                  </div>
                  <p className="text-sm text-[#3D3D3D] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{tool.description}</p>
                </div>
              </div>

              {/* How it works + integration steps */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[#0D2137] mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                    <GitBranch size={16} style={{ color: tool.color }} /> How It Works in Our Pipeline
                  </h3>
                  <ol className="space-y-2">
                    {tool.howItWorks.map((step, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#3D3D3D]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5" style={{ backgroundColor: tool.color, fontFamily: "'DM Mono', monospace" }}>{j + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[#0D2137] mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                    <Code size={16} style={{ color: tool.color }} /> Integration Steps
                  </h3>
                  <div className="space-y-3">
                    {tool.integrationSteps.map((s, j) => (
                      <div key={j} className="p-4 rounded-sm border" style={{ backgroundColor: tool.bg, borderColor: `${tool.color}20` }}>
                        <div className="flex items-start gap-3">
                          <span className="text-xs font-bold px-1.5 py-0.5 rounded-sm text-white flex-shrink-0" style={{ backgroundColor: tool.color, fontFamily: "'DM Mono', monospace" }}>{j + 1}</span>
                          <div>
                            <div className="text-sm font-semibold text-[#0D2137] mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.step}</div>
                            <div className="text-xs text-[#5A5A5A] leading-relaxed" style={{ fontFamily: "'DM Mono', monospace" }}>{s.detail}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[#0D2137] mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
                    <Code size={16} style={{ color: tool.color }} /> Sample Code / Embed
                  </h3>
                  <pre className="bg-[#0D2137] text-[#74B49B] p-4 rounded-sm text-xs overflow-x-auto leading-relaxed" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {tool.embedCode}
                  </pre>
                  <p className="text-xs text-[#6B6B6B] mt-3 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <strong>API Note:</strong> {tool.apiNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Self-hosting note */}
      <section className="py-16 bg-[#1B4332]">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>Open Source & Self-Hostable</h2>
          <p className="text-[#A8C5B0] leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            All three tools in our stack are open-source and can be self-hosted. This is critical for a 501(c)(3) that must maintain independence, transparency, and data sovereignty. We recommend self-hosting Decidim and Pol.is for the official ratification process, while using Loomio's hosted service for working groups.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Pol.is", repo: "github.com/compdemocracy/polis", license: "AGPL-3.0" },
              { name: "Loomio", repo: "github.com/loomio/loomio", license: "AGPL-3.0" },
              { name: "Decidim", repo: "github.com/decidim/decidim", license: "AGPL-3.0" },
            ].map(tool => (
              <a
                key={tool.name}
                href={`https://${tool.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="text-white font-bold mb-1" style={{ fontFamily: "'Fraunces', serif" }}>{tool.name}</div>
                <div className="text-xs text-[#74B49B] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>{tool.repo}</div>
                <div className="text-xs text-[#A8C5B0]" style={{ fontFamily: "'DM Mono', monospace" }}>License: {tool.license}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
