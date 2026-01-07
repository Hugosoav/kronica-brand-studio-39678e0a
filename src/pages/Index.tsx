import { Link } from "react-router-dom";
import { ArrowRight, Target, Palette, Globe, Compass, Layers, RefreshCw, Instagram, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { DottedSurface } from "@/components/ui/dotted-surface";

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

      {/* Editorial Line */}
      <div className="container mx-auto px-6">
        <div className="editorial-line" />
      </div>

      {/* O que a Kronica Faz */}
      <section className="py-24 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm text-primary/60 uppercase tracking-wider animate-fade-in">O que fazemos</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 animate-fade-in-up">Três pilares para marcas consistentes</h2>
            <p className="text-primary/60 mt-4 max-w-xl mx-auto animate-fade-in-up delay-100">
              A base do trabalho da Kronica está em unir estratégia, estética e aplicação em um sistema coeso.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: Target, 
                title: "Estratégia de marca", 
                desc: "Posicionamento, direção e clareza. Definição do que a marca representa antes de qualquer traço visual.",
                detail: "Diagnóstico • Proposta de valor • Tom de voz"
              },
              { 
                icon: Palette, 
                title: "Identidade visual", 
                desc: "Sistema completo, não só logo. Paleta, tipografia, elementos e aplicações que funcionam em qualquer contexto.",
                detail: "Logo • Cores • Tipografia • Elementos"
              },
              { 
                icon: Globe, 
                title: "Presença digital", 
                desc: "Consistência e aplicação. A marca traduzida para o digital com coerência e impacto visual.",
                detail: "Redes sociais • Web • Templates"
              },
            ].map((pillar, index) => (
              <div 
                key={index} 
                className="group text-center p-8 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:bg-secondary/30 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/50 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="text-primary" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-primary/60 mb-4">{pillar.desc}</p>
                <span className="text-xs text-primary/40 uppercase tracking-wider">{pillar.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-6">
        <div className="editorial-line" />
      </div>

      {/* Serviços em Destaque */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm text-primary/60 uppercase tracking-wider animate-fade-in">Serviços</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 animate-fade-in-up">Soluções para cada momento da marca</h2>
            <p className="text-primary/60 mt-4 max-w-xl mx-auto animate-fade-in-up delay-100">
              Do zero ao reposicionamento, cada serviço é pensado para entregar clareza e consistência visual.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Compass, title: "Branding Estratégico", desc: "Posicionamento e direção criativa para marcas que precisam de clareza" },
              { icon: Palette, title: "Identidade Visual", desc: "Sistema visual completo: logo, cores, tipografia e aplicações" },
              { icon: RefreshCw, title: "Rebranding", desc: "Evolução de marca existente mantendo a essência e atualizando a presença" },
              { icon: Instagram, title: "Gestão Visual Instagram", desc: "Consistência visual por 6 meses com direção criativa" },
            ].map((service, index) => (
              <div 
                key={index} 
                className="group text-center p-6 border border-primary/10 hover:border-primary/40 transition-all duration-500 hover:bg-gradient-to-b hover:from-secondary/40 hover:to-transparent animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" size={28} strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-primary/60 mb-4">{service.desc}</p>
                <Link 
                  to="/servicos" 
                  className="text-sm font-medium inline-flex items-center gap-1 text-primary/80 hover:text-primary hover:gap-2 transition-all"
                >
                  Saiba mais <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-6">
        <div className="editorial-line" />
      </div>

      {/* Método Kronica */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm text-primary/60 uppercase tracking-wider animate-fade-in">Processo</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 animate-fade-in-up">Método Kronica</h2>
            <p className="text-primary/60 mt-4 max-w-xl mx-auto animate-fade-in-up delay-100">
              Um processo claro em 4 etapas que garante entregas consistentes e alinhadas com os objetivos de cada marca.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Lightbulb, step: "01", title: "Diagnóstico", desc: "Briefing aprofundado, objetivos claros e análise do cenário atual.", detail: "1-2 semanas" },
              { icon: Target, step: "02", title: "Direção", desc: "Posicionamento, conceito criativo e referências visuais definidas.", detail: "1-2 semanas" },
              { icon: Layers, step: "03", title: "Construção", desc: "Identidade visual, sistema completo e peças-chave desenvolvidas.", detail: "2-4 semanas" },
              { icon: Rocket, step: "04", title: "Implementação", desc: "Aplicações finais, guia de uso e suporte para o lançamento.", detail: "1-2 semanas" },
            ].map((phase, index) => (
              <div 
                key={index} 
                className="relative text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <phase.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-xs text-primary/40 font-medium mb-2">{phase.step}</div>
                <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                <p className="text-sm text-primary/60 mb-3">{phase.desc}</p>
                <span className="text-xs text-primary/40 uppercase tracking-wider">{phase.detail}</span>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-b from-secondary/50 to-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 animate-fade-in-up">
              Pronto para dar clareza e presença à marca?
            </h2>
            <p className="text-primary/60 mb-8 animate-fade-in-up delay-100">
              A conversa começa com uma troca simples. Sem compromisso, sem formulários intermináveis.
            </p>
            <Button asChild size="lg" className="animate-fade-in-up delay-200">
              <Link to="/contato">
                Entrar em contato
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
