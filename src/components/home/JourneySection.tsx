import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "../SectionHeading";

import journeyFarmers from "@/assets/journey-farmers.jpg";
import journeyChilling from "@/assets/journey-chilling.jpg";
import journeyProcessing from "@/assets/journey-processing.jpg";
import journeyPackaging from "@/assets/journey-packaging.jpg";
import journeyDelivery from "@/assets/journey-delivery.jpg";
import journeyFamily from "@/assets/journey-family.jpg";

const steps = [
  { image: journeyFarmers, title: "Farmers", desc: "Fresh milk collected from 10,000+ trusted farmer partners across South India." },
  { image: journeyChilling, title: "Chilling Centres", desc: "Immediately chilled at village-level bulk milk chilling centres to preserve freshness." },
  { image: journeyProcessing, title: "Processing Plant", desc: "Pasteurised and processed in our FSSAI-certified, state-of-the-art dairy plant." },
  { image: journeyPackaging, title: "Packaging", desc: "Hygienically packed using automated filling lines to ensure zero contamination." },
  { image: journeyDelivery, title: "Cold Chain Delivery", desc: "Distributed via refrigerated vehicles maintaining strict cold-chain protocols." },
  { image: journeyFamily, title: "Your Family", desc: "Pure, tested, and trusted dairy products on your table every single day." },
];

const JourneySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 section-padding bg-secondary" ref={sectionRef}>
      <div className="section-container">
        <SectionHeading
          badge="Farm to Family"
          title="The Purity Journey"
          subtitle="Every drop of Gomukhi milk travels a carefully protected journey from trusted farmers to your family."
        />

        <div className="relative">
          {/* Animated horizontal line (desktop) */}
          <div className="absolute top-[72px] left-0 right-0 h-0.5 hidden lg:block">
            <motion.div
              className="h-full bg-primary/30 origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Animated vertical line (mobile) */}
          <div className="absolute top-0 left-[28px] bottom-0 w-0.5 lg:hidden">
            <motion.div
              className="w-full bg-primary/20 origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          {/* Desktop: horizontal grid */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <div className="bg-card rounded-3xl p-5 text-center shadow-sm hover:shadow-lg transition-shadow relative group">
                  <motion.div
                    className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-4"
                    initial={{ scale: 0.8 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.2, type: "spring", stiffness: 200 }}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                  <div className="text-xs font-bold text-primary mb-1">Step {i + 1}</div>
                  <h3 className="font-display font-bold text-foreground mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="flex gap-5 items-start pl-2"
              >
                {/* Dot on line */}
                <motion.div
                  className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 shadow-md z-10"
                  initial={{ scale: 0.7 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.15, type: "spring" }}
                >
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                </motion.div>
                <div className="bg-card rounded-2xl p-5 shadow-sm flex-1">
                  <div className="text-xs font-bold text-primary mb-1">Step {i + 1}</div>
                  <h3 className="font-display font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
