import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import sceneFarm from "@/assets/hero-scene-farm.jpg";
import sceneChilling from "@/assets/hero-scene-chilling.jpg";
import sceneProcessing from "@/assets/hero-scene-processing.jpg";
import scenePackaging from "@/assets/hero-scene-packaging.jpg";
import sceneDelivery from "@/assets/hero-scene-delivery.jpg";
import sceneFamily from "@/assets/hero-scene-family.jpg";

const scenes = [
  { image: sceneFarm, label: "Farm Fresh" },
  { image: sceneChilling, label: "Instant Chilling" },
  { image: sceneProcessing, label: "Pure Processing" },
  { image: scenePackaging, label: "Sealed Hygiene" },
  { image: sceneDelivery, label: "Cold Chain" },
  { image: sceneFamily, label: "Your Family" },
];

const HeroSection = () => {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % scenes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background slides */}
      <AnimatePresence mode="sync">
        <motion.img
          key={activeScene}
          src={scenes[activeScene].image}
          alt={scenes[activeScene].label}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/20" />

      {/* Hero content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="section-padding section-container w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 text-background text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                The Flow of Purity
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-background leading-[1.1] mb-6"
            >
              Protecting Purity
              <br />
              <span className="text-gradient-gold">from Farm to Family</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg sm:text-xl text-background/80 leading-relaxed max-w-lg"
            >
              Fresh dairy products sourced from trusted farmers and processed
              with the highest quality standards in South India.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scene indicator dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {scenes.map((scene, i) => (
          <button
            key={scene.label}
            onClick={() => setActiveScene(i)}
            className={`transition-all duration-500 rounded-full ${
              i === activeScene
                ? "w-8 h-2 bg-primary"
                : "w-2 h-2 bg-background/40 hover:bg-background/60"
            }`}
            aria-label={scene.label}
          />
        ))}
      </div>

      {/* Scene label */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeScene}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-background/50">
            {scenes[activeScene].label}
          </span>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
