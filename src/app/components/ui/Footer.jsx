import {Mail,Heart } from "lucide-react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { Link } from "react-router";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/imenebaraitame", label: "GitHub" },
  { icon: FaLinkedin, href: "https://dz.linkedin.com/in/imene-baraitame-03280412b", label: "LinkedIn" },
  { icon: Mail, href: "mailto:baraitame.imene@gmail.com", label: "Email" },
];

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "#070510",
        borderTop: "1px solid rgba(192,132,252,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span style={{ color: "#e8e8f0", fontWeight: 600, fontSize: "1.05rem" }}>
              Imene Baraitame<span style={{ color: "#c084fc" }}>.</span>
            </span>
            
            <p className="text-sm text-center md:text-left" style={{ color: "#5a5a7a", maxWidth: "240px" }}>
              Full-Stack Developer crafting beautiful digital experiences.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm transition-colors duration-200 hover:text-[#c084fc]"
                style={{ color: "#5a5a7a" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200
                bg-[rgba(255,255,255,0.04)] boder boder-[rgba(255,255,255,0.06)] text-[#5a5a7a]
                hover:text-[#c084fc] hover:boder-[rgba(192,132,252,0.3) bg-[rgba(192,132,252,0.08)]]"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)", color: "#3a3a5a" }}
        >
          <span>© 2026 Imene. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 mx-1" /> and React
          </span>
        </div>
      </div>
    </footer>
  );
}