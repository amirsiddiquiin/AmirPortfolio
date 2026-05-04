import { Mail, MapPin, Phone, Github, Send } from "lucide-react";

const contactLinks = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "amirsiddiqui.in@gmail.com",
    href: "mailto:amirsiddiqui.in@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+91 879 198 6707",
    href: "tel:+918791986707",
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    value: "github.com/amirsiddiquiin",
    href: "https://github.com/amirsiddiquiin",
    external: true,
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "India",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3 fade-in">
              // CONTACT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight fade-in delay-100">
              Let's connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto fade-in delay-200">
              Open to collaborations, freelance work, and full-time
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 fade-in">
              {contactLinks.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-xl bg-card border border-border/60 p-4 hover-lift"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
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
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-card border border-border/60 p-6 fade-in delay-200">
              <h3 className="font-semibold mb-4">Send a message</h3>
              <form className="space-y-3">
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
                <input
                  type="email"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your email"
                />
                <textarea
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Your message"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg text-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
