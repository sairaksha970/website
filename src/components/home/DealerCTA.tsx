import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const DealerCTA = () => {
  return (
    <section className="py-24 lg:py-32 section-padding gradient-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-background/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-background/5 translate-y-1/2 -translate-x-1/2" />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-background/10 text-primary-foreground text-xs font-semibold tracking-wider uppercase mb-4">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary-foreground mb-6">
            Become a Gomukhi Dealer
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10">
            Join our growing network of distributors and dealers across South India. 
            Partner with the region's most trusted dairy brand.
          </p>
          <Link
            to="/contact"
            className="bg-background text-primary px-8 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 hover:bg-background/90 transition-colors"
          >
            Apply for Dealership <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DealerCTA;
