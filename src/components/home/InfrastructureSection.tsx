import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, Snowflake, Factory, Truck } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";
import infraImg from "@/assets/infrastructure.jpg";

const features = [
  { icon: Factory, title: "Processing Plant", desc: "FSSAI-certified automated dairy processing facility." },
  { icon: Snowflake, title: "Chilling Centres", desc: "Village-level bulk milk chilling centres for instant preservation." },
  { icon: FlaskConical, title: "Testing Labs", desc: "In-house quality labs testing every batch for purity." },
  { icon: Truck, title: "Cold Chain", desc: "Refrigerated fleet ensuring end-to-end temperature control." },
];

const InfrastructureSection = () => {
  return (
    <section className="py-24 lg:py-32 section-padding bg-secondary">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              badge="Infrastructure"
              title="World-Class Processing, Village-Level Reach"
              center={false}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => (
                <AnimatedSection key={f.title} delay={i * 0.1}>
                  <div className="bg-card rounded-2xl p-5 shadow-sm">
                    <f.icon size={28} className="text-primary mb-3" />
                    <h3 className="font-display font-bold text-foreground mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <Link
              to="/infrastructure"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Explore Infrastructure <ArrowRight size={18} />
            </Link>
          </div>

          <AnimatedSection direction="right">
            <img
              src={infraImg}
              alt="Gomukhi dairy processing plant"
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
