import Layout from "@/components/Layout";
const Sobre = () => {
  return <Layout>
      {/* SEO */}
      <title>Sobre a Kronica</title>
      <meta name="description" content="A Kronica é um estúdio de design que desenvolve soluções visuais do físico ao digital, com clareza estratégica e alto nível de refinamento." />

      {/* About Section */}
      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 block">
              Sobre o estúdio
            </span>
            
            
            
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-100">
              <p>A Kronica é um estúdio de design que desenvolve soluções visuais do físico ao digital. Nosso design não foca somente na estética, mas na capacidade de comunicar com clareza, construindo percepção e traduzindo ideias em sistemas visuais bem estruturados.</p>
              
              <p>
                Nosso trabalho abrange projetos de identidade visual, branding e posicionamento, direção criativa, impressos, apresentações institucionais, sistemas para redes sociais e experiências digitais. Atuamos tanto na construção completa de marcas quanto no desenvolvimento de materiais e desdobramentos que fortalecem a comunicação e elevam o padrão visual de um negócio.
              </p>
              
              <p>
                Operando como um modelo independente e próximo. Cada projeto desenvolvido é conduzido de forma direta pela equipe responsável, garantindo envolvimento real do diagnóstico e conceito à criação e aplicação final. Nosso método permite decisões mais consistentes, processos mais bem direcionados e entregas com alto nível de refinamento.
              </p>
              
              <p>
                Com uma abordagem estética contemporânea e olhar estratégico, criamos design com intenção, dando forma, significado e presença para marcas e projetos que precisam ser levados a sério.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Sobre;