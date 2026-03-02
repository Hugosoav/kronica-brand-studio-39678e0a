import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { projects } from "@/data/projects";
import PageTransition from "@/components/PageTransition";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";

const Projetos = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageTransition>
      <Layout>
        <title>Projetos — Kronica</title>
        <meta name="description" content="Portfólio de projetos de branding e design da Kronica." />

        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedText
                as="h1"
                className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
                splitBy="words"
              >
                Histórias construídas
              </AnimatedText>

              {/* Search */}
              <RevealOnScroll delay={0.3}>
                <div className="relative max-w-md mx-auto mt-8">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    type="text"
                    placeholder="Buscar projeto ou categoria..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-11 bg-secondary/50 border-border/30 focus:border-border"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                  }}
                >
                  <Link
                    to={`/projetos/${project.id}`}
                    className="group cursor-pointer block"
                  >
                    <div className="relative overflow-hidden mb-3 rounded-lg">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <motion.img
                        src={project.images.cover}
                        alt={project.title}
                        className="w-full aspect-[3/2] object-contain"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-semibold group-hover:text-muted-foreground transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Nenhum projeto encontrado.</p>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default Projetos;
