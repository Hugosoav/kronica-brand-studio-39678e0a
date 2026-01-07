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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8 animate-fade-in-up text-primary">
              Branding e design estratégico para marcas que querem ser lembradas.
            </h1>
            <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-100">
              A equipe da Kronica cria identidades e sistemas visuais com clareza, consistência e estética — do posicionamento à aplicação.
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm text-primary/60 uppercase tracking-wider">O que fazemos</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">Três pilares para marcas consistentes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 border border-border/30 hover:border-primary/30 transition-colors">
              <Target className="mx-auto mb-6 text-primary" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Estratégia de marca</h3>
              <p className="text-primary/60">
                Posicionamento, direção e clareza. Definição do que a marca representa antes de qualquer traço visual.
              </p>
            </div>

            <div className="text-center p-8 border border-border/30 hover:border-primary/30 transition-colors">
              <Palette className="mx-auto mb-6 text-primary" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Identidade visual</h3>
              <p className="text-primary/60">
                Sistema completo, não só logo. Paleta, tipografia, elementos e aplicações que funcionam em qualquer contexto.
              </p>
            </div>

            <div className="text-center p-8 border border-border/30 hover:border-primary/30 transition-colors">
              <Globe className="mx-auto mb-6 text-primary" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Presença digital</h3>
              <p className="text-primary/60">
                Consistência e aplicação. A marca traduzida para o digital com coerência e impacto visual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Line */}
      <div className="container mx-auto px-6">
        <div className="editorial-line" />
      </div>

      {/* Serviços em Destaque */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm text-primary/60 uppercase tracking-wider">Serviços</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">Soluções para cada momento da marca</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Compass, title: "Branding Estratégico", desc: "Posicionamento e direção criativa" },
              { icon: Palette, title: "Identidade Visual", desc: "Sistema visual completo" },
              { icon: RefreshCw, title: "Rebranding", desc: "Evolução de marca existente" },
              { icon: Instagram, title: "Gestão Visual Instagram", desc: "Consistência por 6 meses" },
            ].map((service, index) => (
              <div key={index} className="group text-center p-6 border border-border/30 hover:border-primary/50 transition-all duration-300">
                <service.icon className="mx-auto mb-4 text-primary" size={28} strokeWidth={1.5} />
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm text-primary/60 uppercase tracking-wider">Processo</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">Método Kronica</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Lightbulb, step: "01", title: "Diagnóstico", desc: "Briefing aprofundado, objetivos claros e análise do cenário atual." },
              { icon: Target, step: "02", title: "Direção", desc: "Posicionamento, conceito criativo e referências visuais definidas." },
              { icon: Layers, step: "03", title: "Construção", desc: "Identidade visual, sistema completo e peças-chave desenvolvidas." },
              { icon: Rocket, step: "04", title: "Implementação", desc: "Aplicações finais, guia de uso e suporte para o lançamento." },
            ].map((phase, index) => (
              <div key={index} className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                  <phase.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-xs text-primary/40 font-medium mb-2">{phase.step}</div>
                <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                <p className="text-sm text-primary/60">{phase.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Pronto para dar clareza e presença à marca?
            </h2>
            <p className="text-primary/60 mb-8">
              A conversa começa com uma troca simples. Sem compromisso, sem formulários intermináveis.
            </p>
            <Button asChild size="lg">
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
