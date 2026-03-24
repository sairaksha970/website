import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Factory, Snowflake, FlaskConical, Truck, Shield, Zap } from "lucide-react";
import infraImg from "@/assets/infrastructure.jpg";

const facilities = [
  { icon: Factory, title: "Processing Plant", desc: "Our fully automated, FSSAI-certified dairy processing plant handles pasteurisation, homogenisation, and packaging with minimal human contact — ensuring maximum hygiene.", stats: "1M+ litres/day capacity" },
  { icon: Snowflake, title: "Bulk Milk Chilling Centres", desc: "Village-level chilling centres rapidly cool milk to 4°C within minutes of collection, preserving freshness and preventing bacterial growth.", stats: "50+ centres across 3 states" },
  { icon: FlaskConical, title: "Quality Testing Labs", desc: "In-house NABL-grade laboratories conduct 50+ tests on every batch — checking for fat content, SNF, adulteration, antibiotics, and microbial contamination.", stats: "50+ tests per batch" },
  { icon: Truck, title: "Cold Chain Logistics", desc: "Our fleet of GPS-tracked, temperature-controlled vehicles ensures unbroken cold chain from plant to point of sale.", stats: "200+ refrigerated vehicles" },
  { icon: Shield, title: "FSSAI Compliance", desc: "Every process adheres to FSSAI standards and is regularly audited. We maintain full traceability from farm to shelf.", stats: "100% compliant" },
  { icon: Zap, title: "Automated Packaging", desc: "High-speed automated filling and packaging lines ensure tamper-proof, hygienic packaging with accurate measurements.", stats: "10,000+ packs/hour" },
];

const Infrastructure = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="relative py-24 lg:py-32 section-padding overflow-hidden">
          <img src={infraImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/75" />
          <div className="section-container relative z-10">
            <SectionHeading
              badge="Infrastructure"
              title="Built for Purity at Scale"
              subtitle="State-of-the-art facilities ensuring every drop meets the highest quality standards."
              light
            />
          </div>
        </section>

        <section className="py-24 section-padding bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-8">
              {facilities.map((f, i) => (
                <AnimatedSection key={f.title} delay={i * 0.1}>
                  <div className="bg-card border border-border/50 rounded-3xl p-8 hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <f.icon size={26} className="text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-foreground mb-2">{f.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{f.desc}</p>
                        <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-bold rounded-full">
                          {f.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Infrastructure;
