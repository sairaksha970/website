import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { MapPin, Truck, Store, Clock } from "lucide-react";
import mapImg from "@/assets/distribution-map.jpg";

const Distribution = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 lg:py-32 section-padding gradient-primary">
          <div className="section-container">
            <SectionHeading
              badge="Distribution"
              title="Reaching Every Doorstep"
              subtitle="Our cold chain distribution network spans three states, ensuring fresh Gomukhi products reach millions of families every day."
              light
            />
          </div>
        </section>

        {/* Map & Regions */}
        <section className="py-24 section-padding bg-background">
          <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <img src={mapImg} alt="Gomukhi distribution map" className="rounded-3xl shadow-lg w-full" />
            </AnimatedSection>
            <div>
              <SectionHeading badge="Coverage" title="Three States, One Promise" center={false} />
              {[
                { state: "Andhra Pradesh", cities: "Hyderabad, Vijayawada, Visakhapatnam, Tirupati, Guntur, Nellore, Kurnool", desc: "Our home state with deep urban and rural penetration." },
                { state: "Karnataka", cities: "Bengaluru, Mysuru, Mangaluru, Hubli-Dharwad, Bellary", desc: "Rapidly growing network across all major cities." },
                { state: "Tamil Nadu", cities: "Chennai, Coimbatore, Madurai, Salem, Tiruchirappalli", desc: "Strategic expansion in key urban and semi-urban markets." },
              ].map((r, i) => (
                <AnimatedSection key={r.state} delay={i * 0.15}>
                  <div className="mb-6 p-6 bg-secondary rounded-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin size={20} className="text-primary" />
                      <h3 className="font-display font-bold text-lg text-foreground">{r.state}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{r.desc}</p>
                    <p className="text-xs text-muted-foreground"><strong>Key markets:</strong> {r.cities}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Network Stats */}
        <section className="py-24 section-padding bg-secondary">
          <div className="section-container">
            <SectionHeading badge="Network" title="Our Distribution Strength" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Truck, number: "200+", label: "Refrigerated Vehicles" },
                { icon: Store, number: "5,000+", label: "Retail Touchpoints" },
                { icon: MapPin, number: "3", label: "States Covered" },
                { icon: Clock, number: "24hrs", label: "Farm to Shelf" },
              ].map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 0.1}>
                  <div className="bg-card rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                    <stat.icon size={36} className="text-primary mx-auto mb-4" />
                    <div className="text-3xl font-display font-extrabold text-foreground mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
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

export default Distribution;
