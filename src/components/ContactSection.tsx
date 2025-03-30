import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    // In a real app, you would send this data to your backend/email service
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-navy-dark">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2 mb-2">
            <span className="text-highlight font-mono">03.</span> Get In Touch
          </h2>
          <div className="w-16 h-1 bg-highlight rounded"></div>
          <p className="text-slate text-lg max-w-2xl text-center mt-6">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll do my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Send me a message</h3>
            <p className="text-slate">
              Have a project in mind or want to discuss potential opportunities?
              Fill out the form and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-navy-light border-slate-dark focus:border-highlight text-white"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-navy-light border-slate-dark focus:border-highlight text-white"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-navy-light border-slate-dark focus:border-highlight text-white resize-none"
                />
              </div>
              <Button
                type="submit"
                className="bg-highlight text-navy-dark hover:bg-highlight/90 flex items-center gap-2"
              >
                Send Message <Send size={16} />
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">
              Contact information
            </h3>
            <p className="text-slate">
              Feel free to reach out to me directly through email or connect
              with me on various social platforms.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-navy-light p-4 rounded-full text-highlight">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a
                    href="mailto:aayushsenjaliya@gmail.com"
                    className="text-slate-light hover:text-highlight transition-colors"
                  >
                    aayushsenjaliya@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-navy-light p-4 rounded-full text-highlight">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <a
                    href="#"
                    className="text-slate-light hover:text-highlight transition-colors"
                  >
                    linkedin.com/in/ayushsenjaliya
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-navy-light p-4 rounded-full text-highlight">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <a
                    href="#"
                    className="text-slate-light hover:text-highlight transition-colors"
                  >
                    github.com/AyushSenjaliya
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy-light p-6 rounded-lg border border-slate-dark">
              <h4 className="text-white font-semibold mb-2">Availability</h4>
              <p className="text-slate-light mb-4">
                I'm currently available for freelance work and full-time
                opportunities.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-slate-light">Response Time:</span>
                  <span className="text-highlight">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-light">Work Schedule:</span>
                  <span className="text-highlight">Flexible</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-light">Remote Work:</span>
                  <span className="text-highlight">Preferred</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
