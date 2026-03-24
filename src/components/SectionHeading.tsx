import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, center = true, light = false }: SectionHeadingProps) => {
  return (
    <AnimatedSection className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wider uppercase mb-4">
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-extrabold leading-tight ${light ? "text-background" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-background/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
};

export default SectionHeading;
