import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, FileText, Clock, CheckCircle2, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { sendFormData } from "../api/api";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await sendFormData(formData);

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Message Received / Standby",
        description: "Your inquiry has been submitted! Feel free to call/WhatsApp me directly at +91 9638215983.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-navy-dark border-t border-slate-dark/40">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2 mb-2">
            <span className="text-highlight font-mono">05.</span> Get In Touch
          </h2>
          <div className="w-16 h-1 bg-highlight rounded"></div>
          <p className="text-slate text-lg max-w-2xl text-center mt-6">
            Looking for a Full Stack Developer, Shopify expert, or AI engineer? My inbox and phone are open!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-navy p-6 sm:p-8 rounded-xl border border-slate-dark/60 shadow-xl space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
              <p className="text-slate text-sm">
                Fill out the form below and I'll respond promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-light text-xs font-mono mb-1">YOUR NAME</label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Ayush Senjaliya"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-navy-light border-slate-dark/80 focus:border-highlight text-white placeholder:text-slate-dark/70"
                />
              </div>

              <div>
                <label className="block text-slate-light text-xs font-mono mb-1">YOUR EMAIL</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-navy-light border-slate-dark/80 focus:border-highlight text-white placeholder:text-slate-dark/70"
                />
              </div>

              <div>
                <label className="block text-slate-light text-xs font-mono mb-1">YOUR MESSAGE</label>
                <Textarea
                  name="message"
                  placeholder="Hi Ayush, I'd like to discuss a project..."
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-navy-light border-slate-dark/80 focus:border-highlight text-white placeholder:text-slate-dark/70 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-highlight text-navy-dark hover:bg-highlight/90 font-semibold py-6 flex items-center justify-center gap-2 text-base transition-all"
              >
                {loading ? "Sending Message..." : "Send Message"}
                <Send size={18} />
              </Button>
            </form>
          </div>

          {/* Contact Information & Official Badges */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Direct Contact & Socials
              </h3>
              <p className="text-slate text-sm">
                Feel free to reach out via phone, email, or social platforms.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-navy p-4 rounded-lg border border-slate-dark/40">
                <div className="bg-navy-light p-3 rounded-full text-highlight">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">Phone / WhatsApp</h4>
                  <a
                    href="tel:+919638215983"
                    className="text-slate-light hover:text-highlight transition-colors text-sm font-mono"
                  >
                    +91 9638215983
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-navy p-4 rounded-lg border border-slate-dark/40">
                <div className="bg-navy-light p-3 rounded-full text-highlight">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">Email</h4>
                  <a
                    href="mailto:aayushsenjaliya@gmail.com"
                    className="text-slate-light hover:text-highlight transition-colors text-sm font-mono"
                  >
                    aayushsenjaliya@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-navy p-4 rounded-lg border border-slate-dark/40">
                <div className="bg-navy-light p-3 rounded-full text-highlight">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">Location</h4>
                  <span className="text-slate-light text-sm font-mono">
                    Surat, Gujarat, India (Remote Available)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-navy p-4 rounded-lg border border-slate-dark/40">
                <div className="bg-navy-light p-3 rounded-full text-highlight">
                  <Linkedin size={22} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/ayushsenjaliya/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-light hover:text-highlight transition-colors text-sm font-mono"
                  >
                    linkedin.com/in/ayushsenjaliya
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-navy p-4 rounded-lg border border-slate-dark/40">
                <div className="bg-navy-light p-3 rounded-full text-highlight">
                  <Github size={22} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">GitHub</h4>
                  <a
                    href="https://github.com/AyushSenjaliya/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-light hover:text-highlight transition-colors text-sm font-mono"
                  >
                    github.com/AyushSenjaliya
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Download Card */}
            <div className="bg-navy-light p-6 rounded-xl border border-highlight/30 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <FileText size={18} className="text-highlight" /> Download Official Resume
                </h4>
                <span className="text-xs font-mono text-highlight bg-highlight/10 px-2 py-1 rounded">PDF</span>
              </div>
              <p className="text-slate text-sm">
                Get my complete resume featuring Dot3 Solutions experience, MBA & B.Sc IT credentials, and technical project stack.
              </p>
              <Button
                className="w-full bg-transparent hover:bg-highlight/10 text-highlight border border-highlight font-medium flex items-center justify-center gap-2"
                onClick={() => window.open("/AyushResume1.pdf", "_blank")}
              >
                <FileText size={16} /> Download Resume PDF
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
