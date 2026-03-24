import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";
import mapImg from "@/assets/distribution-map.jpg";

const DistributionSection = () => {
  return (
    <section className="py-24 lg:py-32 section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          badge="Distribution"
          title="Serving Millions Across South India"
          subtitle="Our robust distribution network ensures fresh dairy reaches every corner of Andhra Pradesh, Karnataka, and Tamil Nadu."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <img
              src={mapImg}
              alt="Gomukhi distribution network across South India"
              className="rounded-3xl shadow-lg w-full"
            />
          </AnimatedSection>

          <div>
            {[
              { state: "Andhra Pradesh", desc: "Our home state with the deepest penetration — from major cities to rural mandals.", color: "bg-primary" },
              { state: "Karnataka", desc: "Expanding network covering Bengaluru, Mysuru, and surrounding districts.", color: "gradient-gold" },
              { state: "Tamil Nadu", desc: "Growing presence in Chennai, Coimbatore, and key urban centres.", color: "bg-primary" },
            ].map((region, i) => (
              <AnimatedSection key={region.state} delay={i * 0.15}>
                <div className="flex gap-4 mb-6 p-5 bg-secondary rounded-2xl">
                  <div className={`w-12 h-12 ${region.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <MapPin size={22} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg">{region.state}</h3>
                    <p className="text-sm text-muted-foreground">{region.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={0.5}>
              <Link
                to="/distribution"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                View Distribution Network <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributionSection;
