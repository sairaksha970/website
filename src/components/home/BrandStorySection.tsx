import { Link } from "react-router-dom";
import { ArrowRight, Shield, Heart, Leaf } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";
import farmersImg from "@/assets/farmers-story.jpg";

const BrandStorySection = () => {
  return (
    <section className="py-16 lg:py-20 section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <img
                src={farmersImg}
                alt="Sairaksha Dairy farmer partners"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 gradient-gold rounded-2xl p-6 shadow-xl hidden md:block">
                <div className="text-foreground font-display font-extrabold text-3xl">15+</div>
                <div className="text-foreground/80 text-sm font-medium">Years of Trust</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <div>
            <SectionHeading
              badge="Our Story"
              title="From a Vision of Purity to South India's Trusted Dairy"
              subtitle=""
              center={false}
            />
            <AnimatedSection delay={0.2}>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sairaksha — meaning "protection" — was born from a simple yet powerful belief: every family deserves 
                access to pure, unadulterated dairy. What started as a small milk collection network in Andhra Pradesh 
                has grown into one of the region's most trusted dairy enterprises.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Today, Gomukhi products reach millions of households across Andhra Pradesh, Karnataka, and Tamil Nadu, 
                powered by a network of 10,000+ dedicated farmer partners and state-of-the-art processing infrastructure.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Shield, label: "Quality Assured", desc: "Every batch tested" },
                  { icon: Heart, label: "Farmer First", desc: "Fair trade always" },
                  { icon: Leaf, label: "100% Natural", desc: "No preservatives" },
                ].map((item) => (
                  <div key={item.label} className="bg-secondary rounded-2xl p-4 text-center">
                    <item.icon size={24} className="text-primary mx-auto mb-2" />
                    <div className="font-display font-bold text-sm text-foreground">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>

              <Link
                to="/our-story"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Read Our Full Story <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
