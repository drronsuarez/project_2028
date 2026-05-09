/*
 * PROJECT 2028 — FOOTER COMPONENT
 * Design: Democratic Modernism — dark navy background, amber accents
 */
import { Link } from "wouter";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D2137] text-[#B8C9D8]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#D97706] flex items-center justify-center rounded-sm flex-shrink-0">
                <span className="text-white font-bold text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>28</span>
              </div>
              <span className="text-white font-bold text-xl" style={{ fontFamily: "'Fraunces', serif" }}>Project 2028</span>
            </div>
            <p className="text-sm leading-relaxed mb-4 max-w-sm">
              A 501(c)(3) nonprofit platform for crowdsourcing progressive policy planks through democratic deliberation. We define the agenda — not the candidates.
            </p>
            <p className="text-xs" style={{ fontFamily: "'DM Mono', monospace", color: "#D97706" }}>
              "Planks Not Platitudes"
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://project2028.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors flex items-center gap-1">
                .com <ExternalLink size={10} />
              </a>
              <a href="https://project2028.org" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors flex items-center gap-1">
                .org <ExternalLink size={10} />
              </a>
              <a href="https://project2028.net" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors flex items-center gap-1">
                .net <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem" }}>Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/planks" className="hover:text-white transition-colors">Policy Planks</Link></li>
              <li><Link href="/integrations" className="hover:text-white transition-colors">Our Tools</Link></li>
              <li><Link href="/trademark" className="hover:text-white transition-colors">Brand & Legal</Link></li>
              <li>
                <a href="https://www.loomio.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  Loomio Deliberation <ExternalLink size={10} />
                </a>
              </li>
              <li>
                <a href="https://pol.is" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  Pol.is Consensus <ExternalLink size={10} />
                </a>
              </li>
              <li>
                <a href="https://decidim.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  Decidim Proposals <ExternalLink size={10} />
                </a>
              </li>
            </ul>
          </div>

          {/* Policy areas */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem" }}>Policy Areas</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Climate & Environment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Housing & Infrastructure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Labor & Economy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Democracy & Voting</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1A3A5C] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
            © 2026 Project 2028. A 501(c)(3) nonprofit organization. Not affiliated with any political party or candidate.
          </p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
