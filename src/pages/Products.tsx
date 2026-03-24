import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import productsHero from "@/assets/products-hero.jpg";

import milkImg from "@/assets/product-milk.jpg";
import curdImg from "@/assets/product-curd.jpg";
import paneerImg from "@/assets/product-paneer.jpg";
import butterImg from "@/assets/product-butter.jpg";
import gheeImg from "@/assets/product-ghee.jpg";
import buttermilkImg from "@/assets/product-buttermilk.jpg";
import creamImg from "@/assets/product-cream.jpg";

const products = [
  { name: "Milk", image: milkImg, desc: "Farm-fresh pasteurised milk collected daily from trusted farmers. Available in Full Cream, Toned, and Double Toned variants.", features: ["Daily Fresh", "Pasteurised", "Multiple Variants"] },
  { name: "Curd", image: curdImg, desc: "Thick, naturally set curd made from fresh whole milk. Rich in probiotics and perfect for daily consumption.", features: ["Naturally Set", "Probiotic Rich", "Fresh Daily"] },
  { name: "Paneer", image: paneerImg, desc: "Soft, fresh cottage cheese made from pure milk. Perfect for curries, tikkas, and salads.", features: ["100% Milk", "Soft Texture", "High Protein"] },
  { name: "Butter", image: butterImg, desc: "Rich, golden butter churned from the freshest cream. Adds flavour and nutrition to every meal.", features: ["Fresh Cream", "Rich Flavour", "Salted & Unsalted"] },
  { name: "Ghee", image: gheeImg, desc: "Traditional slow-cooked ghee with rich aroma. Made using the bilona method for authentic taste.", features: ["Bilona Method", "Rich Aroma", "Pure & Golden"] },
  { name: "Buttermilk", image: buttermilkImg, desc: "Refreshing, naturally fermented buttermilk. A probiotic-rich traditional drink for everyday wellness.", features: ["Probiotic", "Low Fat", "Refreshing"] },
  { name: "Cream", image: creamImg, desc: "Luscious fresh cream skimmed from the finest milk. Ideal for desserts, coffees, and cooking.", features: ["Fresh", "Rich", "Versatile"] },
];

const Products = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 section-padding overflow-hidden">
          <img src={productsHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="section-container relative z-10">
            <SectionHeading
              badge="Products"
              title="Pure Dairy, Premium Quality"
              subtitle="Every Gomukhi product is made from milk sourced directly from our farmer network — tested, processed, and packed with care."
              light
            />
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 section-padding bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <AnimatedSection key={product.name} delay={i * 0.08}>
                  <div className="bg-card border border-border/50 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
                    <div className="aspect-[4/3] overflow-hidden bg-secondary">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="font-display font-bold text-2xl text-foreground mb-3">{product.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((f) => (
                          <span key={f} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Promise */}
        <section className="py-24 section-padding bg-secondary">
          <div className="section-container text-center">
            <SectionHeading
              badge="Quality Promise"
              title="Our Purity Guarantee"
              subtitle="Every Gomukhi product undergoes 50+ quality tests before reaching your family."
            />
            <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { number: "50+", label: "Quality Tests" },
                { number: "0%", label: "Adulteration" },
                { number: "100%", label: "Traceable" },
              ].map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 0.15}>
                  <div className="bg-card rounded-3xl p-8 shadow-sm">
                    <div className="text-4xl font-display font-extrabold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
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

export default Products;
