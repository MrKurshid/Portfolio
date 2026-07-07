import {
  Bot,
  Code2,
  Database,
  ArrowRight,
} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">
              Full-Stack Developer
              <br />
              <span className="text-primary">
                Building Intelligent Applications with AI
              </span>
            </h3>

            <p className="text-muted-foreground leading-8 mb-5">
              I'm a Full-Stack Developer passionate about building scalable web
              applications and AI-powered software that solve real-world
              problems. I enjoy transforming ideas into production-ready
              products through clean architecture, efficient backend systems,
              and intuitive user experiences.
            </p>

            <p className="text-muted-foreground leading-8">
              My primary stack includes <b>React</b>, <b>Node.js</b>,
              <b>Express</b>, <b>FastAPI</b>, <b>MongoDB</b>, and
              <b>PostgreSQL</b>. Recently, I've been focusing on
              <span className="text-primary">
                {" "}
                Generative AI, Agentic AI, LangChain, LangGraph, RAG, Vector
                Databases,
              </span>{" "}
              and intelligent autonomous workflows to build the next generation
              of AI applications.
            </p>

            Stats
            <div className="grid grid-cols-2 gap-4 mt-8 ">
              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="text-2xl font-bold text-primary">800+</h4>
                <p className="text-sm text-muted-foreground">
                  Coding Problems Solved
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="text-2xl font-bold text-primary">5+</h4>
                <p className="text-sm text-muted-foreground">
                  Full-Stack Projects
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="text-2xl font-bold text-primary">MERN STACK</h4>
                <p className="text-sm text-muted-foreground mt-4">
                  Primary Tech Stack
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="text-2xl font-bold text-primary">GenAi/ Agentic-Ai</h4>
                <p className="text-sm text-muted-foreground">
                  Current Learning Focus
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Kurshid_Alam_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all"
              >
                Download CV
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Frontend */}
            <div className="gradient-border p-6 card-hover">
              <div className="gap-4 ">
                <div className="flex justify-around mb-4 py-3 shadow-lg">
                  <div className="p-3 rounded-full bg-primary/10 h-fit">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex justify-center items-center">
                    <h4 className="font-semibold text-xl mb-2">
                      Front-End Development
                    </h4>
                  </div>
                </div>

                <div className="flex justify-around py-3 px-3 shadow-lg">
                  <p className="text-muted-foreground">
                    Creating responsive, accessible, and modern user interfaces
                    using React, TypeScript, Tailwind CSS, Next.js, and modern
                    frontend development practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Backend */}

              <div className="gradient-border p-6 card-hover">
              <div className="gap-4 ">
                <div className="flex justify-around mb-4 py-3 shadow-lg">
                  <div className="p-3 rounded-full bg-primary/10 h-fit">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex justify-center items-center">
                    <h4 className="font-semibold text-xl mb-2">
                      Back-End Engineering
                    </h4>
                  </div>
                </div>

                <div className="flex justify-around py-3 px-3 shadow-lg">
                  <p className="text-muted-foreground">
                    Building secure REST APIs, authentication systems,
                    microservices, databases, cloud integrations, and scalable
                    backend architectures with Node.js, Express, FastAPI,
                    MongoDB, PostgreSQL, and Docker.
                  </p>
                </div>
              </div>
            </div>

            {/* AI */}

              <div className="gradient-border p-6 card-hover">
              <div className="gap-4 ">
                <div className="flex justify-around mb-4 py-3 shadow-lg">
                  <div className="p-3 rounded-full bg-primary/10 h-fit">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex justify-center items-center">
                    <h4 className="font-semibold text-xl mb-2">
                      Generative & Agentic AI
                    </h4>
                  </div>
                </div>

                <div className="flex justify-around py-3 px-3 shadow-lg">
                  <p className="text-muted-foreground">
                    Developing intelligent AI applications using LLMs,
                    LangChain, LangGraph, Retrieval-Augmented Generation (RAG),
                    Vector Databases, Ollama, and autonomous AI agents for
                    real-world workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};