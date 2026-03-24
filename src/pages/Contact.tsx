import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, Send, Clock, Building2 } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", city: "", state: "", type: "dealer", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your inquiry has been submitted. Our team will contact you within 24 hours.");
    setForm({ name: "", email: "", phone: "", city: "", state: "", type: "dealer", message: "" });
  };

  const contactCards = [
    { icon: MapPin, title: "Visit Us", lines: ["Sairaksha Dairy Products Pvt Ltd", "Andhra Pradesh, India"] },
    { icon: Phone, title: "Call Us", lines: ["+91 XXXXX XXXXX", "Mon – Sat, 9 AM – 6 PM"] },
    { icon: Mail, title: "Email Us", lines: ["info@gomukhi.in", "We reply within 24 hours"] },
    { icon: Clock, title: "Working Hours", lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"] },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero – compact, typographic */}
        <section className="py-20 lg:py-28 section-padding bg-secondary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/10 translate-y-1/2 -translate-x-1/3" />
          <div className="section-container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-foreground leading-tight">
                Let's Work Together
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                Partner with South India's fastest-growing dairy brand. Whether you're a dealer, distributor, or just curious — we'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="section-padding -mt-8 relative z-10">
          <div className="section-container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {contactCards.map((card, i) => (
                <AnimatedSection key={card.title} delay={i * 0.08}>
                  <div className="bg-card border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <card.icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">{card.title}</h3>
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Map area */}
        <section className="py-20 lg:py-24 section-padding bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left – Info */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                <AnimatedSection>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                      <Building2 size={20} className="text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground">
                      Dealer & Distributor Inquiries
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Become a part of the Gomukhi family. We're expanding across South India and looking for passionate partners who share our commitment to pure, quality dairy products.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Exclusive territory rights",
                      "Marketing & branding support",
                      "Competitive margins",
                      "Cold-chain logistics assistance",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              {/* Right – Form */}
              <div className="lg:col-span-3">
                <AnimatedSection delay={0.15}>
                  <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 shadow-lg">
                    <h3 className="font-display font-bold text-xl text-foreground mb-1">Send us a message</h3>
                    <p className="text-muted-foreground text-sm mb-8">Fill in your details and our team will get back to you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                          <input
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                            placeholder="you@email.com"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                          <input
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">Inquiry Type</label>
                          <select
                            value={form.type}
                            onChange={(e) => setForm({ ...form, type: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                          >
                            <option value="dealer">Dealership</option>
                            <option value="distributor">Distributorship</option>
                            <option value="general">General Inquiry</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">City</label>
                          <input
                            value={form.city}
                            onChange={(e) => setForm({ ...form, city: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                            placeholder="Your city"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">State</label>
                          <select
                            value={form.state}
                            onChange={(e) => setForm({ ...form, state: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                          >
                            <option value="">Select State</option>
                            <option value="AP">Andhra Pradesh</option>
                            <option value="KA">Karnataka</option>
                            <option value="TN">Tamil Nadu</option>
                            <option value="TS">Telangana</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none transition-shadow"
                          placeholder="Tell us about your business and requirements..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="gradient-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
                      >
                        <Send size={18} />
                        Submit Inquiry
                      </button>
                    </form>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
