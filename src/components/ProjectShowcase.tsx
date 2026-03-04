import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";

const ProjectShowcase = () => {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1, 5);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="mb-12 border-b border-border/30 pb-6 flex items-start justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 block">
                Portfólio
              </span>
            </div>
            <Link
              to="/projetos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
            >
              Ver todos
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </RevealOnScroll>

        {/* Featured Project - Large */}
        <RevealOnScroll>
          <Link to={`/projetos/${featuredProject.id}`} className="group block mb-10">
            <div className="overflow-hidden rounded-sm mb-4">
              <motion.img
                src={featuredProject.images.cover}
                alt={featuredProject.title}
                className="w-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-1 group-hover:text-muted-foreground transition-colors">
              {featuredProject.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-3">
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        </RevealOnScroll>

        {/* Other Projects - Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          {otherProjects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 0.1} direction="up">
              <Link to={`/projetos/${project.id}`} className="group block">
                <div className="overflow-hidden rounded-sm mb-4">
                  <motion.img
                    src={project.images.cover}
                    alt={project.title}
                    className="w-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <h3 className="text-base font-semibold mb-1 group-hover:text-muted-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealOnScroll delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 group"
            >
              <span className="text-sm">Explorar portfólio completo</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ProjectShowcase;
