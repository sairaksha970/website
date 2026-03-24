import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Our Story", path: "/our-story" },
  { label: "Products", path: "/products" },
  { label: "Farmers", path: "/farmers" },
  { label: "Contact", path: "/contact" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <nav className="section-padding section-container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Gomukhi - Sairaksha Dairy" className="h-14 w-auto" />
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
          <li key={item.path}>
              <Link
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
              location.pathname === item.path ? "text-primary" : "text-foreground/70"}`
              }>
              
                {item.label}
              </Link>
            </li>
          )}
        </ul>

        




        

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background border-b border-border overflow-hidden">
          
            <div className="section-padding py-6 flex flex-col gap-4">
              {navItems.map((item) =>
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`text-base font-medium py-2 ${
              location.pathname === item.path ? "text-primary" : "text-foreground/70"}`
              }>
              
                  {item.label}
                </Link>
            )}
              <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="gradient-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold text-center mt-2">
              
                Become a Dealer
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

};

export default Navbar;