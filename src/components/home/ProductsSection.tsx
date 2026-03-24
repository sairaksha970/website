import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";

import milkImg from "@/assets/product-milk.jpg";
import curdImg from "@/assets/product-curd.jpg";
import paneerImg from "@/assets/product-paneer.jpg";
import butterImg from "@/assets/product-butter.jpg";
import gheeImg from "@/assets/product-ghee.jpg";
import buttermilkImg from "@/assets/product-buttermilk.jpg";
import creamImg from "@/assets/product-cream.jpg";

const products = [
  { name: "Milk", desc: "Farm-fresh pasteurised milk, delivered daily.", image: milkImg },
  { name: "Curd", desc: "Thick, creamy, and naturally set.", image: curdImg },
  { name: "Paneer", desc: "Soft, fresh cottage cheese for every kitchen.", image: paneerImg },
  { name: "Butter", desc: "Rich, golden butter churned to perfection.", image: butterImg },
  { name: "Ghee", desc: "Traditional slow-cooked aromatic ghee.", image: gheeImg },
  { name: "Buttermilk", desc: "Refreshing, probiotic-rich chaas.", image: buttermilkImg },
  { name: "Cream", desc: "Luscious fresh cream for culinary delight.", image: creamImg },
];

const ProductsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 lg:py-20 section-padding bg-background">
      <div className="section-container">
        <div className="flex items-end justify-between mb-10">
          <div className="flex-1">
            <SectionHeading
              badge="Our Products"
              title="Pure Dairy, Premium Quality"
              subtitle="Every Gomukhi product is crafted from the finest milk, processed with care and delivered fresh."
              center={false}
            />
          </div>
          {/* Scroll arrows */}
          <div className="hidden sm:flex items-center gap-2 pb-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} className="text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex-shrink-0 w-[220px] md:w-[250px] snap-start"
            >
              <div className="bg-card border border-border/50 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <Link
            to="/products"
            className="gradient-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            View All Products <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductsSection;
