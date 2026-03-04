import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { projects } from "@/data/projects";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const Projetos = () => {
  return (
    <PageTransition>
      <Layout>
        <title>Projetos — Kronica</title>
        <meta name="description" content="Portfólio de projetos de branding e design da Kronica." />

        <section className="pt-24 pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default Projetos;
