import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Send, Linkedin, Globe, MessageCircle, Sparkles, Rocket } from "lucide-react";
import { profile } from "@/data/profile";

const contactLinks = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
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
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: profile.contact.location,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-sm font-medium text-primary mb-4 backdrop-blur-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Let's Connect
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Get in <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Touch</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Open to senior frontend roles, product partnerships, and collaborations where good taste matters as much as good code.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Let's Talk</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Have a project in mind or want to discuss opportunities? Feel free to reach out through any of these channels. I'm always open to interesting conversations.
                </p>
              </div>

              <div className="space-y-4">
                {contactLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href || '#'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 8, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-4 p-5 rounded-2xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10"
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-semibold truncate">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative rounded-3xl border border-border/60 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Send a Message</h3>
                </div>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </motion.button>
                </form>
              </div>
  </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
