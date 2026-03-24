import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeading from "../SectionHeading";

import journeyFarmers from "@/assets/journey-farmers.jpg";
import journeyChilling from "@/assets/journey-chilling.jpg";
import journeyProcessing from "@/assets/journey-processing.jpg";
import journeyPackaging from "@/assets/journey-packaging.jpg";
import journeyDelivery from "@/assets/journey-delivery.jpg";
import journeyFamily from "@/assets/journey-family.jpg";

const stages = [
  { image: journeyFarmers, title: "Farm Fresh", desc: "Milk collected from trusted farmer partners at dawn" },
  { image: journeyChilling, title: "Instant Chilling", desc: "Chilled within minutes at village-level centres" },
  { image: journeyProcessing, title: "Pure Processing", desc: "Pasteurised in our FSSAI-certified dairy plant" },
  { image: journeyPackaging, title: "Sealed Hygiene", desc: "Packed on automated lines with zero contamination" },
  { image: journeyDelivery, title: "Cold Chain", desc: "Delivered via refrigerated trucks across 3 states" },
  { image: journeyFamily, title: "Your Family", desc: "Pure, tested milk on your table every morning" },
];

const MilkDrop = () => (
  <svg width="24" height="32" viewBox="0 0 24 32" fill="none" className="drop-shadow-lg">
    <path
      d="M12 0C12 0 0 14 0 21C0 27.075 5.373 32 12 32C18.627 32 24 27.075 24 21C24 14 12 0 12 0Z"
      className="fill-primary"
    />
    <ellipse cx="8.5" cy="19" rx="2.5" ry="3.5" className="fill-primary-foreground/25" />
  </svg>
);

const MilkDropJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.3"],
  });

  // Map scroll progress to active step
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * stages.length), stages.length - 1);
    setActiveIndex(v < 0.02 ? -1 : idx);
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dropLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="py-24 lg:py-32 section-padding bg-gradient-to-b from-background to-secondary overflow-hidden"
    >
      <div className="section-container">
        <SectionHeading
          badge="The Drop of Purity"
          title="Follow the Journey of a Single Drop"
          subtitle="Every drop of Gomukhi milk travels a carefully protected journey from trusted farmers to your family."
        />

        {/* Desktop layout */}
        <div className="relative mt-20 hidden lg:block">
          {/* Track */}
          <div className="absolute top-0 left-[calc(100%/12)] right-[calc(100%/12)] h-[2px] bg-border/60">
            <motion.div
              className="h-full bg-primary origin-left rounded-full"
              style={{ width: progressWidth }}
            />
          </div>

          {/* Milk drop */}
          <motion.div
            className="absolute -top-[15px] z-20 pointer-events-none"
            style={{
              left: dropLeft,
              marginLeft: `calc(100% / 12)`,
              width: `calc(100% - 100% / 6)`,
            }}
          >
            <motion.div
              className="relative -translate-x-1/2"
              style={{ left: dropLeft }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <MilkDrop />
            </motion.div>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-6 gap-5 pt-10">
            {stages.map((stage, i) => {
              const isActive = i <= activeIndex;
              const isCurrent = i === activeIndex;

              return (
                <motion.div
                  key={stage.title}
                  animate={{
                    y: isCurrent ? -8 : 0,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div
                    className={`bg-card rounded-2xl overflow-hidden transition-shadow duration-500 border ${
                      isCurrent
                        ? "shadow-xl border-primary/30"
                        : "shadow-sm border-border/50"
                    }`}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={stage.image}
                        alt={stage.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: isCurrent ? 1.08 : 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-[11px] font-bold text-primary/60 uppercase tracking-wider mb-1">
                        Step {i + 1}
                      </div>
                      <h3 className="font-display font-bold text-foreground text-sm mb-1">
                        {stage.title}
                      </h3>
                      <motion.p
                        className="text-xs text-muted-foreground leading-relaxed"
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.4, delay: isActive ? 0.15 : 0 }}
                      >
                        {stage.desc}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden mt-12 relative">
          {/* Vertical progress line */}
          <div className="absolute top-0 left-5 bottom-0 w-[2px] bg-border/60">
            <motion.div
              className="w-full bg-primary origin-top rounded-full"
              style={{ height: progressWidth }}
            />
          </div>

          <div className="space-y-5">
            {stages.map((stage, i) => {
              const isActive = i <= activeIndex;
              const isCurrent = i === activeIndex;

              return (
                <motion.div
                  key={stage.title}
                  animate={{
                    opacity: isActive ? 1 : 0.35,
                    x: isCurrent ? 4 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex gap-4 items-start"
                >
                  {/* Dot */}
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex-shrink-0 z-10 flex items-center justify-center transition-colors duration-300 ${
                      isCurrent
                        ? "border-primary bg-primary text-primary-foreground"
                        : isActive
                        ? "border-primary bg-background text-primary"
                        : "border-border bg-background text-muted-foreground"
                    }`}
                  >
                    <span className="text-xs font-bold">{i + 1}</span>
                  </div>

                  {/* Card */}
                  <div
                    className={`rounded-2xl overflow-hidden flex-1 flex border transition-shadow duration-300 ${
                      isCurrent
                        ? "shadow-lg border-primary/30 bg-card"
                        : "shadow-sm border-border/50 bg-card"
                    }`}
                  >
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                      <motion.img
                        src={stage.image}
                        alt={stage.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: isCurrent ? 1.1 : 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="p-3 flex-1">
                      <h3 className="font-display font-bold text-foreground text-sm">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilkDropJourney;
