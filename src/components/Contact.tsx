import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Send, Linkedin, Globe } from "lucide-react";
import { profile } from "@/data/profile";

const contactLinks = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: profile.contact.phone,
    href: "tel:+918791986707",
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    value: "github.com/amirsiddiquiin",
    href: profile.contact.github,
    external: true,
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/amirsiddiquiin",
    href: profile.contact.linkedin,
    external: true,
  },
  {
    icon: <Globe className="h-5 w-5" />,
    label: "Website",
    value: "amirsiddiqui.in",
    href: profile.contact.website,
    external: true,
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: profile.contact.location,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3 fade-in">
              // CONTACT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight fade-in delay-100">
              Let's connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto fade-in delay-200">
              Open to senior frontend roles, product partnerships, and collaborations where good taste matters as much as good code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-6">
            <div className="space-y-3 fade-in">
              {contactLinks.map((item, index) => (
                <motion.div
                  key={index}
                  className="tilt-card flex items-center gap-4 rounded-[1.5rem] bg-card/85 border border-border/60 p-4 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
                  whileHover={{ y: -6, rotateX: 3, rotateY: index % 2 === 0 ? -3 : 3 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                >
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium hover:text-primary transition-colors truncate block"
                        {...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className="tilt-card rounded-[1.75rem] bg-background/80 border border-border/60 p-6 shadow-2xl shadow-primary/10 fade-in delay-200 panel-3d"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                Fast contact route
              </p>
              <h3 className="text-2xl font-bold mb-3">{profile.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                If you want a frontend engineer who cares about product sense, motion, accessibility, and getting Web3 UI right, let’s talk.
              </p>
              <form className="space-y-3">
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your email"
                />
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Your message"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-primary text-primary-foreground font-medium rounded-xl text-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
