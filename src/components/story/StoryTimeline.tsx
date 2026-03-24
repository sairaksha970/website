import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import milestone2008 from "@/assets/milestone-2008.jpg";
import milestone2012 from "@/assets/milestone-2012.jpg";
import milestone2016 from "@/assets/milestone-2016.jpg";
import milestone2019 from "@/assets/milestone-2019.jpg";
import milestone2023 from "@/assets/milestone-2023.jpg";
import milestone2025 from "@/assets/milestone-2025.jpg";

const milestones = [
  {
    year: "2008",
    title: "Foundation",
    desc: "Sairaksha Dairy Products Pvt Ltd was established in Andhra Pradesh with a vision to deliver pure, unadulterated milk.",
    detail: "Starting with just a handful of farmers and a small collection center, the founders set out to change how dairy reached Indian families. Every drop was tested, every farmer was treated as family.",
    image: milestone2008,
    stat: "50+ Farmers",
  },
  {
    year: "2012",
    title: "Expansion",
    desc: "Expanded our collection network to 2,000+ farmer partners across rural Andhra Pradesh.",
    detail: "With growing trust from farming communities, we built a robust collection infrastructure with chilling centers and quality testing labs at every collection point.",
    image: milestone2012,
    stat: "2,000+ Partners",
  },
  {
    year: "2016",
    title: "New Plant",
    desc: "Commissioned a state-of-the-art processing plant with fully automated production lines.",
    detail: "Our new facility featured international-grade pasteurization, homogenization, and packaging systems — ensuring every product met the highest safety standards.",
    image: milestone2016,
    stat: "₹50Cr Investment",
  },
  {
    year: "2019",
    title: "Multi-State",
    desc: "Extended distribution to Karnataka and Tamil Nadu, serving thousands of new families.",
    detail: "A fleet of refrigerated trucks and a network of distribution partners brought Gomukhi's purity promise to three states, with cold-chain integrity maintained at every mile.",
    image: milestone2019,
    stat: "3 States",
  },
  {
    year: "2023",
    title: "1M Litres",
    desc: "Crossed 1 million litres daily processing capacity — a landmark achievement.",
    detail: "With massive storage tanks and automated lines running 24/7, we became one of South India's largest dairy processors while never compromising on quality testing.",
    image: milestone2023,
    stat: "1M+ Litres/Day",
  },
  {
    year: "2025",
    title: "Premium Brand",
    desc: "Gomukhi recognised as a symbol of purity across South India, trusted by lakhs of families.",
    detail: "From a local dairy to a household name — Gomukhi now represents the gold standard in dairy purity, with products loved by families across three states.",
    image: milestone2025,
    stat: "10,000+ Farmers",
  },
];

const CARD_WIDTH = 480; // px
const CARD_GAP = 24; // px

const MilestoneCard = ({ milestone, index, onOpen }: { milestone: typeof milestones[0]; index: number; onOpen: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className="flex-shrink-0 w-[85vw] sm:w-[420px] lg:w-[480px] cursor-pointer group"
      onClick={onOpen}
    >
      <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <motion.img
            src={milestone.image}
            alt={milestone.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
            className="absolute top-4 left-4 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-xl"
          >
            <span className="text-primary-foreground font-display font-extrabold text-sm">{milestone.year}</span>
          </motion.div>
          <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-xs font-semibold text-primary">
            {milestone.stat}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-1 w-8 rounded-full gradient-primary group-hover:w-12 transition-all duration-300" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Chapter {index + 1}
            </span>
          </div>
          <h3 className="font-display font-extrabold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
            {milestone.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{milestone.desc}</p>
          <div className="mt-4 flex items-center gap-2 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Read more</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FloatingDrops = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-4 rounded-full bg-primary/5"
        style={{
          left: `${10 + i * 12}%`,
          top: `${20 + (i % 3) * 30}%`,
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
        }}
        animate={{
          y: [-20, 20, -20],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 4 + i * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.3,
        }}
      />
    ))}
  </div>
);

const StoryTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedMilestone, setSelectedMilestone] = useState<typeof milestones[0] | null>(null);

  // Total horizontal travel: all cards side by side minus one viewport width
  const totalCards = milestones.length;
  const totalScrollWidth = totalCards * (CARD_WIDTH + CARD_GAP);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll progress to horizontal translateX
  const x = useTransform(scrollYProgress, [0, 1], [0, -(totalScrollWidth - window.innerWidth + 100)]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["5%", "100%"]);

  return (
    <>
      {/* The section height drives the scroll length — taller = more scroll room for horizontal movement */}
      <section
        ref={sectionRef}
        className="relative"
        style={{ height: `${totalScrollWidth}px` }}
      >
        {/* Sticky container that stays in viewport while user scrolls */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
          <FloatingDrops />

          <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-8 lg:mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wider uppercase mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground leading-tight">
                From Local Dairy to{" "}
                <span className="text-gradient-primary">Trusted Brand</span>
              </h2>
              <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                For over a decade, Sairaksha Dairy has grown from a small local milk supplier into a
                trusted dairy brand serving thousands of families across South India.
              </p>
            </motion.div>

            {/* Progress line */}
            <div className="relative mb-6 mx-4">
              <div className="h-1 rounded-full bg-border/50" />
              <motion.div
                className="absolute top-0 left-0 h-1 rounded-full gradient-primary"
                style={{ width: lineWidth }}
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    className="w-3 h-3 rounded-full bg-primary/30 border-2 border-primary/50"
                    whileInView={{ scale: [1, 1.4, 1], backgroundColor: "hsl(var(--primary))" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  />
                ))}
              </div>
            </div>

            {/* Horizontally translating cards */}
            <motion.div
              className="flex gap-6"
              style={{ x }}
            >
              <div className="flex-shrink-0 w-8" />
              {milestones.map((m, i) => (
                <MilestoneCard
                  key={m.year}
                  milestone={m}
                  index={i}
                  onOpen={() => setSelectedMilestone(m)}
                />
              ))}
              <div className="flex-shrink-0 w-8" />
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 text-muted-foreground text-sm mt-6"
            >
              <span>Scroll to explore our journey</span>
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <Dialog open={!!selectedMilestone} onOpenChange={() => setSelectedMilestone(null)}>
        <DialogContent className="sm:max-w-xl rounded-3xl p-0 overflow-hidden">
          {selectedMilestone && (
            <>
              <div className="relative h-56">
                <img
                  src={selectedMilestone.image}
                  alt={selectedMilestone.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <div className="px-3 py-1 rounded-full gradient-primary text-primary-foreground text-sm font-bold inline-block">
                    {selectedMilestone.year}
                  </div>
                </div>
              </div>
              <div className="p-6 pt-2">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl font-extrabold">
                    {selectedMilestone.title}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-relaxed mt-2">
                    {selectedMilestone.detail}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {selectedMilestone.stat}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StoryTimeline;
