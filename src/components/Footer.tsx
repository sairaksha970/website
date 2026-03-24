import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ShieldCheck, Snowflake, Award } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="section-padding section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1 — Brand */}
          <div>
            <img src={logo} alt="Gomukhi" className="h-14 w-auto mb-4" />
            <p className="text-gold font-display font-semibold text-sm mb-3">
              Protecting Purity from Farm to Family.
            </p>
            <p className="text-background/50 text-sm leading-relaxed">
              Fresh dairy products sourced from trusted farmers and processed with the highest quality standards in South India.
            </p>
          </div>

          {/* Column 2 — Explore */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Our Story", path: "/our-story" },
                { label: "Products", path: "/products" },
                { label: "Farmers", path: "/farmers" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/50 hover:text-background text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-background/50 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-background/40" />
                <span>
                  Sairaksha Dairy Products Pvt Ltd
                  <br />
                  Kuppam, Andhra Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3 text-background/50 text-sm">
                <Phone size={16} className="flex-shrink-0 text-background/40" />
                +91 XXXXX XXXXX
              </li>
              <li className="flex items-center gap-3 text-background/50 text-sm">
                <Mail size={16} className="flex-shrink-0 text-background/40" />
                info@gomukhi.in
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-background/10 mt-14 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center">
              <p className="text-background/35 text-xs">
                © {new Date().getFullYear()} Sairaksha Dairy Products Pvt Ltd. All rights reserved.
              </p>
              <p className="text-background/35 text-xs">
                Brand: <span className="text-gold font-semibold">Gomukhi</span>
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-background/40">
                <ShieldCheck size={16} />
                <span className="text-xs font-medium">FSSAI</span>
              </div>
              <div className="flex items-center gap-1.5 text-background/40">
                <Award size={16} />
                <span className="text-xs font-medium">Quality</span>
              </div>
              <div className="flex items-center gap-1.5 text-background/40">
                <Snowflake size={16} />
                <span className="text-xs font-medium">Cold Chain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
