import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import StoryTimeline from "@/components/story/StoryTimeline";
import DirectorsMessage from "@/components/story/DirectorsMessage";
import infraImg from "@/assets/infrastructure.jpg";
import heroImg from "@/assets/ourstory-hero.jpg";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero - Cinematic full-width with overlay */}
        <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
          <img
            src={heroImg}
            alt="Sairaksha Dairy team"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          <div className="section-padding w-full relative z-10 pb-16 lg:pb-20">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-background/15 backdrop-blur-sm text-background text-xs font-semibold tracking-wider uppercase mb-4 border border-background/20">
                  Our Story
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-background leading-tight max-w-3xl">
                  A Legacy of Purity,<br />Built on Trust
                </h1>
                <p className="mt-4 text-lg text-background/75 max-w-2xl leading-relaxed">
                  From a small milk collection network to South India's premium dairy brand — the Sairaksha journey is one of unwavering commitment to quality.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Directors Message */}
        <DirectorsMessage />

        {/* Timeline */}
        <StoryTimeline />

        {/* Vision */}
        <section className="py-24 section-padding relative overflow-hidden">
          <img src={infraImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
          <div className="section-container relative z-10 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-background mb-6">Our Vision</h2>
              <p className="text-xl text-background/80 max-w-2xl mx-auto leading-relaxed">
                To become India's most trusted dairy brand by setting the gold standard for purity,
                farmer welfare, and sustainable dairy farming — one glass of milk at a time.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OurStory;
