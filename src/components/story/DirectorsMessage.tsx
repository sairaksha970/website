import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import SectionHeading from "../SectionHeading";

const directors = [
  {
    name: "Mrs. V Anuradha Vinod",
    designation: "Director",
    credential: "MBA in Human Resources - 14 Years Banking Experience",
    message:
      "At Sairaksha, we believe that every family deserves access to pure, unadulterated milk. Our commitment goes beyond business - it is about building trust with the communities we serve and empowering the farmers who make it all possible.",
  },
  {
    name: "Mr. N Lovely Krishna",
    designation: "Director",
    credential: "Dairy Industry Expert - 16 Years in Procurement and Operations",
    message:
      "Quality begins at the source. With over a decade and a half in dairy operations, I ensure that every step - from procurement to processing - upholds the highest standards of purity and freshness that our families expect.",
  },
];

const DirectorCard = ({
  director,
  index,
}: {
  director: (typeof directors)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="relative"
    >
      <div className="bg-card rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/30">
        <div className="p-6 lg:p-8">
          <h3 className="font-display font-extrabold text-xl text-foreground">{director.name}</h3>
          <p className="text-primary text-sm font-semibold bg-primary/10 inline-block px-3 py-1 rounded-full mt-2 mb-4">
            {director.designation}
          </p>

          <p className="text-xs font-medium text-primary tracking-wide uppercase mb-4">{director.credential}</p>

          <div className="relative">
            <Quote size={24} className="text-primary/20 absolute -top-1 -left-1" />
            <p className="text-muted-foreground text-sm leading-relaxed pl-6 italic">"{director.message}"</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DirectorsMessage = () => {
  return (
    <section className="py-24 section-padding bg-secondary">
      <div className="section-container">
        <SectionHeading
          badge="Leadership"
          title="Director's Message"
          subtitle="The vision and commitment driving Sairaksha Dairy's mission of purity."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {directors.map((director, i) => (
            <DirectorCard key={director.name} director={director} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorsMessage;
