import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { getProjectById, projects } from "@/data/projects";
import PageTransition from "@/components/PageTransition";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";

const ProjetoDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Projeto não encontrado</h1>
            <Button asChild>
              <Link to="/projetos">Voltar aos projetos</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <PageTransition>
      <Layout>
        <title>{`${project.title} — Kronica`}</title>
        <meta name="description" content={project.description} />

        {/* Hero */}
        <section className="pt-24 pb-12">
          <div className="container mx-auto px-6">
            <RevealOnScroll>
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="mb-8 -ml-4 text-primary/60 hover:text-primary"
              >
                <ArrowLeft size={18} className="mr-2" />
                Voltar
              </Button>
            </RevealOnScroll>

            <div className="max-w-4xl">
              <RevealOnScroll delay={0.1}>
                <span className="text-sm text-primary/50 uppercase tracking-wider">
                  {project.category}
                </span>
              </RevealOnScroll>
              <AnimatedText
                as="h1"
                className="text-4xl md:text-5xl lg:text-6xl font-light mt-2 mb-6"
                splitBy="chars"
                delay={0.15}
              >
                {project.title}
              </AnimatedText>
              <RevealOnScroll delay={0.3}>
                <p className="text-xl text-primary/70 leading-relaxed">
                  {project.fullDescription}
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <RevealOnScroll>
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  src={project.images.cover}
                  alt={project.title}
                  className="w-full object-contain"
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
                />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Project Info */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <RevealOnScroll>
                  <h2 className="text-2xl font-semibold mb-6">Conceito</h2>
                </RevealOnScroll>
                <RevealOnScroll delay={0.15}>
                  <p className="text-primary/70 leading-relaxed text-lg">
                    {project.concept}
                  </p>
                </RevealOnScroll>
              </div>
              <div className="space-y-8">
                {[
                  { label: "Cliente", value: project.client || project.title },
                  { label: "Ano", value: project.year },
                ].map((item, i) => (
                  <RevealOnScroll key={item.label} delay={0.1 * i} direction="right">
                    <div>
                      <h3 className="text-sm text-primary/50 uppercase tracking-wider mb-2">{item.label}</h3>
                      <p className="text-primary">{item.value}</p>
                    </div>
                  </RevealOnScroll>
                ))}
                <RevealOnScroll delay={0.2} direction="right">
                  <div>
                    <h3 className="text-sm text-primary/50 uppercase tracking-wider mb-2">Serviços</h3>
                    <ul className="space-y-1">
                      {project.services.map((service, index) => (
                        <li key={index} className="text-primary/80">{service}</li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <RevealOnScroll>
              <h2 className="text-2xl font-semibold mb-8">Galeria</h2>
            </RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-lg"
                  initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                  }}
                >
                  <motion.img
                    src={image}
                    alt={`${project.title} - Imagem ${index + 1}`}
                    className="w-full object-contain"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tags */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <RevealOnScroll>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-secondary/50 text-primary/70 text-sm rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Navigation */}
        <section className="pb-24 border-t border-primary/10 pt-12">
          <div className="container mx-auto px-6">
            <RevealOnScroll>
              <div className="flex justify-between items-center">
                {prevProject ? (
                  <Link
                    to={`/projetos/${prevProject.id}`}
                    className="group flex items-center gap-3 text-primary/60 hover:text-primary transition-colors"
                  >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <div>
                      <span className="text-xs uppercase tracking-wider block">Anterior</span>
                      <span className="font-medium">{prevProject.title}</span>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {nextProject ? (
                  <Link
                    to={`/projetos/${nextProject.id}`}
                    className="group flex items-center gap-3 text-primary/60 hover:text-primary transition-colors text-right"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wider block">Próximo</span>
                      <span className="font-medium">{nextProject.title}</span>
                    </div>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default ProjetoDetalhe;
