import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { DottedSurface } from "@/components/ui/dotted-surface";
import FloatingCardGallery from "@/components/ui/floating-card-gallery";

const projects = [
  {
    title: "Café Origem",
    description: "Identidade completa para cafeteria artesanal com foco em origens únicas.",
    fullDescription: "Desenvolvemos uma identidade visual que reflete a jornada do grão até a xícara. O projeto incluiu logo, paleta de cores terrosas, tipografia artesanal e sistema de embalagens.",
    category: "Branding Completo",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
    tags: ["Branding", "Identidade Visual", "Embalagens"]
  },
  {
    title: "Studio Arte",
    description: "Rebranding para estúdio de design com proposta minimalista e contemporânea.",
    fullDescription: "O Studio Arte precisava de uma identidade que comunicasse sofisticação e criatividade. Criamos um sistema visual flexível que se adapta a diferentes aplicações.",
    category: "Identidade Visual",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    tags: ["Rebranding", "Design", "Minimalismo"]
  },
  {
    title: "Minimal Store",
    description: "E-commerce de moda sustentável com estética clean e atemporal.",
    fullDescription: "A Minimal Store é uma marca de moda sustentável que valoriza a simplicidade. O projeto envolveu desde o naming até a presença digital completa.",
    category: "Rebranding",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
    tags: ["E-commerce", "Moda", "Sustentabilidade"]
  },
  {
    title: "Nova Arquitetura",
    description: "Escritório de arquitetura com foco em projetos residenciais de alto padrão.",
    fullDescription: "Uma identidade que traduz precisão e sofisticação. O sistema visual utiliza linhas geométricas e uma paleta neutra que reflete a estética dos projetos do escritório.",
    category: "Branding Completo",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    tags: ["Arquitetura", "Premium", "Identidade Visual"]
  },
  {
    title: "Jardim Botânico",
    description: "Identidade para espaço verde urbano focado em educação ambiental.",
    fullDescription: "Projeto que une natureza e design. A identidade traz elementos orgânicos e uma paleta verde vibrante que conecta visitantes ao propósito educativo do espaço.",
    category: "Identidade Visual",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    tags: ["Natureza", "Educação", "Branding"]
  },
  {
    title: "Tech Solutions",
    description: "Startup de tecnologia com presença digital moderna e inovadora.",
    fullDescription: "Uma marca tech que comunica inovação sem perder a humanidade. O projeto incluiu branding completo e diretrizes para presença digital em múltiplas plataformas.",
    category: "Presença Digital",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    tags: ["Tecnologia", "Digital", "Startup"]
  },
];

const Index = () => {
  return (
    <Layout>
      {/* SEO */}
      <title>Kronica — Branding e Design Estratégico</title>
      <meta name="description" content="A equipe da Kronica cria identidades e sistemas visuais com clareza, consistência e estética — do posicionamento à aplicação." />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <DottedSurface className="z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight mb-8 animate-fade-in-up text-primary">
              Marcas que contam histórias
            </h1>
            <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-100">
              Boas histórias não se contam em um único capítulo, mas se sustentam ao longo do tempo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <Button asChild size="lg">
                <Link to="/servicos">
                  Ver serviços
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/contato">Falar com a equipe</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold animate-fade-in-up">Projetos</h2>
            <p className="text-primary/60 mt-4 max-w-xl mx-auto animate-fade-in-up delay-100">
              Marcas que construímos com propósito, personalidade e intenção.
            </p>
          </div>

          <FloatingCardGallery 
            cards={projects} 
            maxCards={6}
            accentColor="rgba(255, 255, 255, 0.1)"
          />

          <div className="text-center mt-8 animate-fade-in-up">
            <Button asChild size="lg" className="group">
              <Link to="/projetos">
                Ver todos os projetos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
