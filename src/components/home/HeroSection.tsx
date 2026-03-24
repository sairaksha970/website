import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import sceneFarm from "@/assets/hero-scene-farm.jpg";
import sceneChilling from "@/assets/hero-scene-chilling.jpg";
import sceneProcessing from "@/assets/hero-scene-processing.jpg";
import milkImage from "@/assets/milk.png";
import coldChainImage from "@/assets/coldchain.png";
import sceneFamily from "@/assets/hero-scene-family.jpg";

const AUTOPLAY_MS = 4200;

const scenes = [
  {
    image: sceneFarm,
    label: "Farm Fresh",
    title: "From Trusted Farms",
    highlight: "to Your Home",
    description: "Fresh milk starts with responsible farmers and careful daily collection.",
  },
  {
    image: sceneChilling,
    label: "Instant Chilling",
    title: "Rapid Cooling",
    highlight: "for Lasting Freshness",
    description: "At every village collection point, milk is chilled immediately to preserve natural goodness just as our farmers intend.",
  },
  {
    image: sceneProcessing,
    label: "Pure Processing",
    title: "Modern Dairy Care",
    highlight: "with Strict Quality",
    description: "In our hygienic plant, every batch is tested with care so only pure, safe milk reaches your family.",
  },
  {
    image: milkImage,
    label: "Sealed Hygiene",
    title: "Clean, Secure Packs",
    highlight: "You Can Trust",
    description: "Every pack is sealed with strict hygiene standards, protecting freshness from our dairy to your doorstep.",
  },
  {
    image: coldChainImage,
    label: "Cold Chain",
    title: "Gomukhi Quality",
    highlight: "Every Step of the Way",
    description: "Our disciplined cold chain keeps milk at the right temperature, delivering dependable freshness every single day.",
  },
  {
    image: sceneFamily,
    label: "Your Family",
    title: "Pure Dairy",
    highlight: "for Every Family",
    description: "From our farmer families to yours, Gomukhi brings honest dairy nourishment to your everyday moments.",
  },
];

const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  const [activeScene, setActiveScene] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveScene((prev) => (prev + 1) % scenes.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, []);

  const handleSceneSelect = (index: number) => {
    if (index === activeScene) return;
    setDirection(index > activeScene ? 1 : -1);
    setActiveScene(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={activeScene}
          custom={direction}
          className="absolute inset-0"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * 24, scale: 1.08 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -direction * 24, scale: 1.02 }}
          transition={{ duration: reduceMotion ? 0.25 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={scenes[activeScene].image} alt={scenes[activeScene].label} className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-br from-foreground/85 via-foreground/55 to-foreground/70" />

      <div className="absolute inset-0 z-10 flex items-center">
        <div className="section-padding section-container w-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`content-${activeScene}`}
              className="max-w-2xl"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.4, ease: "easeOut" }}
            >
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 text-background text-sm font-medium mb-6"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : 0.08, duration: 0.4 }}
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {scenes[activeScene].label}
              </motion.span>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-background leading-[1.08] mb-6"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : 0.16, duration: 0.5 }}
              >
                {scenes[activeScene].title}
                <br />
                <span className="text-gradient-gold">{scenes[activeScene].highlight}</span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-background/85 leading-relaxed max-w-xl"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : 0.24, duration: 0.5 }}
              >
                {scenes[activeScene].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {scenes.map((scene, i) => (
          <button
            key={scene.label}
            onClick={() => handleSceneSelect(i)}
            className={`relative h-2 rounded-full overflow-hidden transition-all duration-300 ${
              i === activeScene ? "w-10 bg-background/35" : "w-3 bg-background/35 hover:bg-background/55"
            }`}
            aria-label={scene.label}
          >
            {i === activeScene && (
              <motion.span
                key={`progress-${activeScene}`}
                className="absolute left-0 top-0 h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
