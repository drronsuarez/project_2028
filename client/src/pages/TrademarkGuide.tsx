/*
 * PROJECT 2028 — TRADEMARK & BRAND GUIDE PAGE
 * Design: Democratic Modernism
 * Documents the USPTO trademark process and brand strategy
 */
import { CheckCircle, AlertCircle, Clock, Scale, FileText, Search, Shield, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TEXTURE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117165971/jkGEUfu7KvYaNssvsXEX9Y/democracy_texture-B5wVTWEA69Nsybq7ayFr95.webp";

const trademarkSteps = [
  {
    num: "01",
    title: "Clearance Search",
    icon: Search,
    timeline: "1–2 weeks",
    status: "immediate",
    description: "Before filing, conduct a comprehensive clearance search to ensure no confusingly similar marks exist in the USPTO database or at common law.",
    actions: [
      "Search the USPTO TESS database (tmsearch.uspto.gov) for 'Project 2028' and phonetic equivalents",
      "Search for 'Planks Not Platitudes' as a separate mark",
      "Conduct a common law search (Google, social media, business registries)",
      "Hire a trademark attorney to conduct a professional clearance search",
      "Review International Class 41 (education/civic services) and Class 42 (technology platforms)",
    ],
    warning: "Domain registration (.com, .org, .net) does NOT confer trademark rights. Your domains are valuable assets but separate from trademark protection.",
    color: "#D97706",
  },
  {
    num: "02",
    title: "Determine Filing Basis",
    icon: FileText,
    timeline: "Before filing",
    status: "immediate",
    description: "Choose between two filing bases: 'Use in Commerce' (if the mark is already in use) or 'Intent to Use' (if the platform is not yet live).",
    actions: [
      "If the website is live and serving users: file under Section 1(a) — Use in Commerce",
      "If the website is not yet live: file under Section 1(b) — Intent to Use",
      "Prepare a specimen showing the mark in use (screenshot of website header, etc.)",
      "Identify all goods and services to be covered (civic platform, educational services, software)",
      "Select the appropriate International Classes (likely Class 41 and/or Class 42)",
    ],
    warning: "Intent to Use applications require a Statement of Use within 6 months of the Notice of Allowance (extendable up to 3 years for a fee).",
    color: "#1B4332",
  },
  {
    num: "03",
    title: "File via USPTO Trademark Center",
    icon: Scale,
    timeline: "1–3 days",
    status: "action_required",
    description: "As of January 18, 2025, all trademark applications must be filed through the USPTO Trademark Center (trademarkcenter.uspto.gov). TEAS is no longer available.",
    actions: [
      "Create a USPTO.gov account with two-step authentication",
      "Log in to Trademark Center at trademarkcenter.uspto.gov",
      "File a TEAS Plus application ($250/class) for the lowest fee, or TEAS Standard ($350/class)",
      "File 'Project 2028' as a standard character mark (word mark, no specific font/design)",
      "File 'Planks Not Platitudes' as a separate standard character mark",
      "Consider also filing a stylized/design mark for your logo once finalized",
    ],
    warning: "Filing fees are non-refundable even if the application is rejected. A trademark attorney can significantly improve your chances of approval.",
    color: "#0D2137",
  },
  {
    num: "04",
    title: "USPTO Examination",
    icon: Clock,
    timeline: "8–12 months",
    status: "waiting",
    description: "After filing, an examining attorney reviews your application for conflicts and compliance. This process currently takes 8–12 months from filing to first action.",
    actions: [
      "Monitor your application status in Trademark Center every 3–4 months",
      "Respond to any Office Actions within 3 months of issue date (or 6 months for Madrid applicants)",
      "An optional 3-month extension can be requested for a fee if more time is needed",
      "The examining attorney will search for conflicting marks and review your specimen",
      "If approved, the mark is published in the Trademark Official Gazette for 30-day opposition",
    ],
    warning: "Missing a response deadline will result in abandonment of your application. Set calendar reminders and monitor the docket actively.",
    color: "#D97706",
  },
  {
    num: "05",
    title: "Publication & Opposition Period",
    icon: Shield,
    timeline: "30 days",
    status: "waiting",
    description: "If the examining attorney approves the mark, it is published in the Trademark Official Gazette. Third parties have 30 days to oppose registration.",
    actions: [
      "Monitor the publication date and watch for opposition filings",
      "If no opposition is filed, the application proceeds to registration (use-based) or Notice of Allowance (intent-to-use)",
      "If opposed, the matter goes to the Trademark Trial and Appeal Board (TTAB)",
      "Consider watching services to monitor for potential infringers after registration",
    ],
    warning: "Given the political nature of 'Project 2028,' be prepared for potential opposition from parties claiming confusion with 'Project 2025' or similar marks.",
    color: "#059669",
  },
  {
    num: "06",
    title: "Registration & Maintenance",
    icon: CheckCircle,
    timeline: "Ongoing",
    status: "future",
    description: "Once registered, you must actively maintain and enforce your trademark. Registration is not permanent — it requires periodic maintenance filings.",
    actions: [
      "File a Section 8 Declaration of Use between years 5–6 after registration",
      "File a Section 9 Renewal between years 9–10 (and every 10 years thereafter)",
      "Actively monitor for infringement and send cease-and-desist letters as needed",
      "Use the ® symbol only after registration is granted (use ™ before registration)",
      "Consider registering in additional classes as the platform expands",
      "Consider international registration via the Madrid Protocol if expanding globally",
    ],
    warning: "Failure to police your trademark can result in genericide (the mark becoming generic) or abandonment. As a 501(c)(3), you are solely responsible for enforcement.",
    color: "#1B4332",
  },
];

const statusConfig = {
  immediate: { label: "Take Action Now", color: "#D97706", bg: "#D9770615" },
  action_required: { label: "Action Required", color: "#DC2626", bg: "#DC262615" },
  waiting: { label: "Pending / Waiting", color: "#6B6B6B", bg: "#6B6B6B15" },
  future: { label: "Future Step", color: "#059669", bg: "#05966915" },
};

const brandAssets = [
  { asset: "Project 2028", type: "Word Mark", classes: "Class 41, 42", priority: "High", notes: "Primary brand name — file first" },
  { asset: "Planks Not Platitudes", type: "Word Mark (Tagline)", classes: "Class 41", priority: "High", notes: "Tagline mark — file simultaneously" },
  { asset: "P2028 Logo (stylized)", type: "Design Mark", classes: "Class 41, 42", priority: "Medium", notes: "File after logo is finalized" },
  { asset: "project2028.com/org/net", type: "Domain Names", classes: "N/A", priority: "Done", notes: "Domains registered — not trademark protection" },
];

export default function TrademarkGuide() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FAF7F2" }}>
      <Navigation />

      {/* Header */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${TEXTURE_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#FAF7F2]/85" />
        <div className="container relative z-10">
          <span className="section-label mb-3 block">Brand & Legal</span>
          <span className="amber-rule mb-6" />
          <h1 className="text-5xl font-bold text-[#0D2137] mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
            Trademark Strategy
          </h1>
          <p className="text-[#3D3D3D] max-w-2xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            You have registered the .com, .org, and .net domains for Project 2028. The next step is securing federal trademark protection for the brand. This guide walks through the complete USPTO process and your recommended filing strategy.
          </p>
          <div className="mt-6 p-4 bg-[#D97706]/10 border border-[#D97706]/30 rounded-sm max-w-2xl">
            <div className="flex items-start gap-3">
              <AlertCircle size={16} className="text-[#D97706] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[#5A5A5A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <strong className="text-[#0D2137]">Important:</strong> Domain registration and trademark registration are entirely separate legal protections. Your domains establish web presence; a federal trademark protects the brand name itself from use by others in commerce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand assets table */}
      <section className="py-12 bg-white border-b border-[#E5DDD0]">
        <div className="container">
          <h2 className="text-2xl font-bold text-[#0D2137] mb-6" style={{ fontFamily: "'Fraunces', serif" }}>Brand Assets Filing Priority</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0D2137] text-white">
                  {["Brand Asset", "Mark Type", "Int'l Classes", "Priority", "Notes"].map(h => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {brandAssets.map((row, i) => (
                  <tr key={row.asset} className={`border-b border-[#E5DDD0] ${i % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"}`}>
                    <td className="px-4 py-3 font-semibold text-[#0D2137]" style={{ fontFamily: "'Fraunces', serif" }}>{row.asset}</td>
                    <td className="px-4 py-3 text-[#3D3D3D]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.type}</td>
                    <td className="px-4 py-3 text-[#3D3D3D]" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem" }}>{row.classes}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-sm font-medium ${
                        row.priority === "High" ? "bg-[#D97706]/15 text-[#D97706]" :
                        row.priority === "Medium" ? "bg-[#1B4332]/15 text-[#1B4332]" :
                        "bg-[#059669]/15 text-[#059669]"
                      }`} style={{ fontFamily: "'DM Mono', monospace" }}>
                        {row.priority}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[#5A5A5A] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Step-by-step process */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#0D2137] mb-10" style={{ fontFamily: "'Fraunces', serif" }}>
            The USPTO Trademark Process — Step by Step
          </h2>
          <div className="space-y-6">
            {trademarkSteps.map((step) => {
              const Icon = step.icon;
              const status = statusConfig[step.status as keyof typeof statusConfig];
              return (
                <div key={step.num} className="bg-white rounded-sm border border-[#E5DDD0] shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${step.color}15` }}>
                        <Icon size={20} style={{ color: step.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-xs font-medium" style={{ fontFamily: "'DM Mono', monospace", color: step.color }}>Step {step.num}</span>
                          <h3 className="text-xl font-bold text-[#0D2137]" style={{ fontFamily: "'Fraunces', serif" }}>{step.title}</h3>
                          <span className="text-xs px-2 py-0.5 rounded-sm" style={{ backgroundColor: status.bg, color: status.color, fontFamily: "'DM Mono', monospace" }}>
                            {status.label}
                          </span>
                          <span className="text-xs text-[#6B6B6B] ml-auto" style={{ fontFamily: "'DM Mono', monospace" }}>
                            <Clock size={10} className="inline mr-1" />{step.timeline}
                          </span>
                        </div>
                        <p className="text-sm text-[#3D3D3D] leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{step.description}</p>
                        <ul className="space-y-1.5 mb-4">
                          {step.actions.map((action, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#3D3D3D]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                              <ArrowRight size={12} className="mt-1 flex-shrink-0" style={{ color: step.color }} />
                              {action}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-start gap-2 p-3 rounded-sm" style={{ backgroundColor: "#FFF3CD", borderLeft: "3px solid #D97706" }}>
                          <AlertCircle size={14} className="text-[#D97706] mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-[#5A5A5A] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{step.warning}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 501c3 considerations */}
      <section className="py-16 bg-[#0D2137]">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
            501(c)(3) Specific Considerations
          </h2>
          <div className="space-y-4 text-[#B8C9D8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <p className="leading-relaxed">
              As a 501(c)(3) nonprofit, your trademark strategy has unique considerations. The organization itself — not any individual — should be the trademark owner. Ensure your articles of incorporation and bylaws clearly establish the organization's ownership of intellectual property.
            </p>
            <p className="leading-relaxed">
              Your 501(c)(3) status does not exempt you from trademark filing fees, but it does establish your credibility as a legitimate civic organization. When describing your goods and services in the trademark application, emphasize the educational and civic engagement nature of the platform (Class 41) rather than purely commercial software (Class 42).
            </p>
            <p className="leading-relaxed">
              Because "Project 2028" is a descriptive phrase (referring to a year and a project), the USPTO may initially reject it as merely descriptive. Be prepared to argue acquired distinctiveness, or consider adding a distinctive logo element to strengthen the mark. "Planks Not Platitudes" is a stronger, more distinctive mark and may face fewer obstacles.
            </p>
            <div className="mt-6 p-4 bg-white/10 rounded-sm border border-white/20">
              <h3 className="text-white font-bold mb-2" style={{ fontFamily: "'Fraunces', serif" }}>Recommended Next Steps</h3>
              <ol className="space-y-2 text-sm">
                {[
                  "Engage a trademark attorney specializing in nonprofit and civic organizations",
                  "Conduct a professional clearance search for both marks simultaneously",
                  "File both 'Project 2028' and 'Planks Not Platitudes' in the same filing session to reduce attorney fees",
                  "Ensure the nonprofit entity is formally incorporated before filing",
                  "Budget approximately $1,500–$3,000 for attorney fees plus $500–$700 in USPTO filing fees for two marks",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#D97706] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
