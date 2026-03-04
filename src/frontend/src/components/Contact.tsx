import { useActor } from "@/hooks/useActor";
import { useMutation } from "@tanstack/react-query";
import {
  CheckCircle,
  Coffee,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Send,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { actor } = useActor();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            for (const el of entry.target.querySelectorAll(
              ".animate-in-view",
            )) {
              el.classList.add("visible");
            }
          }
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (data: ContactFormState) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitMessage(data.name, data.email, data.message);
    },
    onSuccess: () => {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent! I'll get back to you soon.");
    },
    onError: () => {
      toast.error("Failed to send message. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    mutate(form);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ganesh.bodakhe@email.com",
      href: "mailto:ganesh.bodakhe@email.com",
      color: "oklch(0.65 0.22 290)",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Mumbai, India",
      href: null,
      color: "oklch(0.7 0.18 200)",
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      label: "Status",
      value: "Available for freelance",
      href: null,
      color: "oklch(0.72 0.2 145)",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Divider */}
      <div className="section-gradient-divider mb-24 mx-16" />

      <div className="absolute top-0 right-0 w-96 h-96 orb orb-violet opacity-15 animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-72 h-72 orb orb-cyan opacity-10 animate-float" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in-view">
          <div className="section-tag mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Contact
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl gradient-text-violet-cyan mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Left info panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact info cards */}
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className="glass card-hover rounded-2xl p-5 flex items-center gap-4 animate-in-view"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${info.color}18`,
                    color: info.color,
                    border: `1px solid ${info.color}35`,
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-sm font-medium text-foreground">
                      {info.value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="glass rounded-2xl p-5 animate-in-view stagger-4">
              <div className="text-xs text-muted-foreground mb-3">
                Find me on
              </div>
              <div className="flex gap-3">
                {[
                  {
                    name: "GitHub",
                    href: "https://github.com",
                    color: "oklch(0.75 0.05 280)",
                  },
                  {
                    name: "LinkedIn",
                    href: "https://linkedin.com",
                    color: "oklch(0.6 0.2 240)",
                  },
                  {
                    name: "Twitter/X",
                    href: "https://twitter.com",
                    color: "oklch(0.85 0.05 280)",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-xl text-center text-xs font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      background: `${social.color}15`,
                      color: social.color,
                      border: `1px solid ${social.color}30`,
                    }}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3 animate-in-view stagger-2">
            <div className="glass rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-40 h-40 orb orb-violet opacity-10 blur-3xl" />

              {/* Success state */}
              {submitted && (
                <div
                  data-ocid="contact.success_state"
                  className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center z-10 glass-violet"
                >
                  <CheckCircle className="w-16 h-16 text-neon-green mb-4" />
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-center max-w-xs">
                    Thanks for reaching out. I&apos;ll get back to you within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 btn-neon-violet px-6 py-2.5 rounded-xl text-sm font-semibold text-white relative z-10"
                  >
                    Send Another
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Ganesh Bodakhe"
                    required
                    data-ocid="contact.name.input"
                    className="w-full glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="hello@example.com"
                    required
                    data-ocid="contact.email.input"
                    className="w-full glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    data-ocid="contact.message.textarea"
                    className="w-full glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Error state */}
                {isError && (
                  <div
                    data-ocid="contact.error_state"
                    className="glass rounded-xl p-3 text-sm text-destructive flex items-center gap-2"
                    style={{ border: "1px solid oklch(0.65 0.22 25 / 0.3)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                    Failed to send message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  data-ocid="contact.submit_button"
                  className="w-full btn-neon-violet py-3.5 rounded-xl text-sm font-semibold text-white relative z-10 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <Loader2
                        className="w-4 h-4 animate-spin"
                        data-ocid="contact.loading_state"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
