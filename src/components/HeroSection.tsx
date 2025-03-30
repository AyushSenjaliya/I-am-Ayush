import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-navy pt-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6 animate-fade-in">
            <h3 className="text-highlight font-mono">Hi, my name is</h3>
            <h1 className="text-4xl sm:text-6xl font-bold text-white">
              Ayush Senjaliya
            </h1>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate">
              I build things for the web.
            </h2>
            <p className="text-slate max-w-xl text-lg">
              I'm a full-stack developer specializing in building exceptional
              digital experiences. Currently, I'm focused on building
              accessible, human-centered products that solve real-world
              problems.
            </p>

            <div className="flex space-x-4 pt-4">
              <Button className="bg-highlight text-navy-dark hover:bg-highlight/90 px-6 py-6">
                Hire Me
              </Button>
              <Button className="border border-highlight text-highlight bg-transparent hover:bg-highlight/10 px-6 py-6">
                See My Work
              </Button>
            </div>
          </div>

          <div
            className="lg:col-span-2 animate-fade-in-right"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-highlight/20 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-navy-light/80 rounded-lg transform -rotate-3"></div>
              <div className="relative bg-navy-light rounded-lg p-6 border border-highlight/20 shadow-xl">
                <code className="font-mono text-sm text-slate-light block">
                  <span className="text-highlight-dark">const</span>{" "}
                  <span className="text-highlight">developer</span> = {"{"}
                  <br />
                  &nbsp;&nbsp;name:{" "}
                  <span className="text-highlight-dark">'Ayush Senjaliya'</span>
                  ,<br />
                  &nbsp;&nbsp;role:{" "}
                  <span className="text-highlight-dark">
                    'Full Stack Developer'
                  </span>
                  ,<br />
                  &nbsp;&nbsp;languages: [
                  <span className="text-highlight-dark">
                    'JavaScript'
                  </span>,{" "}
                  <span className="text-highlight-dark">'TypeScript'</span>
                  ],
                  <br />
                  &nbsp;&nbsp;frontend: [
                  <span className="text-highlight-dark">'React'</span>,{" "}
                  <span className="text-highlight-dark">'Next.js'</span>,{" "}
                  <span className="text-highlight-dark">'Tailwind'</span>],
                  <br />
                  &nbsp;&nbsp;backend: [
                  <span className="text-highlight-dark">'Node.js'</span>,{" "}
                  <span className="text-highlight-dark">'Express'</span>,{" "}
                  <span className="text-highlight-dark">'NestJS'</span>],
                  <br />
                  &nbsp;&nbsp;database: [
                  <span className="text-highlight-dark">'MongoDB'</span>,{" "}
                  <span className="text-highlight-dark">'MySQL'</span>,{" "}
                  <span className="text-highlight-dark">'Redis'</span>],
                  <br />
                  &nbsp;&nbsp;devOps: [
                  <span className="text-highlight-dark">'Docker'</span>,{" "}
                  <span className="text-highlight-dark">'Kafka'</span>,{" "}
                  <span className="text-highlight-dark">'AWS'</span>],
                  <br />
                  &nbsp;&nbsp;passions: [
                  <span className="text-highlight-dark">
                    'Clean Code'
                  </span>, <span className="text-highlight-dark">'UX'</span>,{" "}
                  <span className="text-highlight-dark">'Performance'</span>,{" "}
                  <span className="text-highlight-dark">'Scalability'</span>]
                  <br />
                  {"}"};
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-highlight hover:text-highlight-dark transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
