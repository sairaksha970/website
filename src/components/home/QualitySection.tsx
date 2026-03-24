import { motion } from "framer-motion";
import { ShieldCheck, Thermometer, FlaskConical, Package, CheckCircle } from "lucide-react";
import SectionHeading from "../SectionHeading";

const checkpoints = [
  {
    icon: ShieldCheck,
    title: "Antibiotic-Free Testing",
    desc: "Every batch is screened to ensure zero antibiotic residues before processing begins.",
    stat: "100%",
    statLabel: "Tested",
  },
  {
    icon: Thermometer,
    title: "Pasteurization Safety Check",
    desc: "Milk is pasteurised at precise temperatures to eliminate harmful bacteria while preserving nutrition.",
    stat: "72°C",
    statLabel: "Precision",
  },
  {
    icon: FlaskConical,
    title: "Quality Lab Inspection",
    desc: "Our in-house lab tests for fat content, SNF, adulteration, and microbial safety.",
    stat: "50+",
    statLabel: "Tests",
  },
  {
    icon: Package,
    title: "Hygienic Automated Packaging",
    desc: "Sealed on fully automated lines with zero human contact to guarantee purity.",
    stat: "0%",
    statLabel: "Contact",
  },
];

const QualitySection = () => {
  return (
    <section className="py-16 lg:py-20 section-padding relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-background to-accent/[0.05]" />
      
      <div className="section-container relative z-10">
        <SectionHeading
          badge="Quality Promise"
          title="Only the Purest Milk Reaches Your Family."
          subtitle="Before Gomukhi milk reaches your home, it goes through multiple quality checks for safety, freshness, and purity. If it doesn't meet our standards, it never leaves the plant."
        />

        {/* Connected checkpoint cards */}
        <div className="relative mt-12">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {checkpoints.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative"
              >

                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-card border border-border/60 rounded-2xl p-6 pt-8 h-full transition-shadow duration-300 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden"
                >
                  {/* Decorative gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Icon + Stat row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-right">
                        <div className="font-display font-extrabold text-2xl text-primary leading-none">{item.stat}</div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{item.statLabel}</div>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-foreground text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {item.desc}
                    </p>

                    {/* Check mark */}
                    <div className="flex items-center gap-1.5 text-primary/60">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
