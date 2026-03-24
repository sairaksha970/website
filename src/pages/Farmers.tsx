import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Users, HandCoins, GraduationCap, Stethoscope, TrendingUp, Heart } from "lucide-react";
import farmersHeroImg from "@/assets/farmers-hero.jpg";
import farmersImg from "@/assets/farmers-story.jpg";

const Farmers = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="relative py-24 lg:py-32 section-padding overflow-hidden">
          <img src={farmersHeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="section-container relative z-10">
            <SectionHeading
              badge="Our Farmers"
              title="The Heart of Gomukhi"
              subtitle="Behind every glass of Gomukhi milk is a dedicated farmer partner. We believe that when farmers thrive, families get the purest dairy."
              light
            />
          </div>
        </section>

        {/* Farmer Model */}
        <section className="py-24 section-padding bg-background">
          <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading badge="Our Model" title="Empowering Rural Communities" center={false} />
              <AnimatedSection>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our farmer procurement model is built on the principle of mutual growth. We work directly with 
                  10,000+ small and marginal dairy farmers across Andhra Pradesh, Karnataka, and Tamil Nadu, 
                  eliminating middlemen and ensuring fair prices.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Through our village-level collection centres, we pick up fresh milk twice daily, ensuring 
                  farmers never face wastage. Our transparent pricing model, based on fat and SNF content, 
                  guarantees every farmer gets fair value for their produce.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "10,000+", label: "Farmer Partners" },
                  { number: "500+", label: "Collection Points" },
                  { number: "2x", label: "Daily Collection" },
                  { number: "100%", label: "Fair Trade" },
                ].map((stat, i) => (
                  <AnimatedSection key={stat.label} delay={i * 0.1}>
                    <div className="bg-secondary rounded-2xl p-5 text-center">
                      <div className="text-2xl font-display font-extrabold text-primary">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <AnimatedSection direction="right">
              <img src={farmersImg} alt="Gomukhi farmer partner" className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover" />
            </AnimatedSection>
          </div>
        </section>

        {/* Support */}
        <section className="py-24 section-padding bg-secondary">
          <div className="section-container">
            <SectionHeading badge="Farmer Support" title="How We Support Our Farmers" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: HandCoins, title: "Fair Pricing", desc: "Transparent, competitive pricing based on quality parameters. No middlemen, no exploitation." },
                { icon: GraduationCap, title: "Training Programs", desc: "Regular workshops on cattle management, feed optimisation, and clean milking practices." },
                { icon: Stethoscope, title: "Veterinary Support", desc: "Free veterinary camps and on-call support for cattle health and breeding assistance." },
                { icon: TrendingUp, title: "Growth Partnerships", desc: "Micro-loans and support for farmers to expand their herds and improve yield." },
                { icon: Users, title: "Community Building", desc: "Farmer cooperatives and women's dairy groups fostering collective growth." },
                { icon: Heart, title: "Insurance Support", desc: "Cattle insurance schemes protecting farmers from unforeseen losses." },
              ].map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                    <item.icon size={32} className="text-primary mb-4" />
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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

export default Farmers;
