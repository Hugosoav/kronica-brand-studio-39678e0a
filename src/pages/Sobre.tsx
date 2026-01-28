import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Sobre = () => {
  return (
    <Layout>
      {/* SEO */}
      <title>Sobre a Kronica — Marcas com Enredo</title>
      <meta name="description" content="A Kronica é um estúdio de design que constrói marcas a partir de narrativa, estratégia e consistência. Cada projeto é desenvolvido em capítulos." />

      {/* Hero Editorial */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 block">
              Sobre o estúdio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] mb-8 animate-fade-in-up">
              Marcas com enredo.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up delay-100">
              A Kronica é um estúdio de design contemporâneo que constrói marcas e sistemas visuais a partir de narrativa, estratégia e consistência. Cada projeto é desenvolvido como um livro — com início, desenvolvimento e continuidade.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border/30" />
      </div>

      {/* Por que a Kronica existe */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Capítulo 01
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                Por que a Kronica existe
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg leading-relaxed">
                O mercado está cheio de marcas bonitas sem direção. Logotipos bem desenhados que não sustentam uma história. Identidades visuais que funcionam no primeiro mês e se perdem no terceiro.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A Kronica nasceu de uma visão diferente: a de que branding não é uma peça isolada, mas um sistema vivo. Uma marca precisa de raiz, de lógica interna, de uma narrativa que guie cada decisão visual e verbal. Sem isso, não existe consistência — e sem consistência, não existe marca.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A equipe da Kronica acredita que o visual é consequência. Antes de desenhar, é preciso entender, posicionar e direcionar. O design vem depois — como tradução de algo que já existe em essência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border/30" />
      </div>

      {/* Como a Kronica trabalha - Método em Capítulos */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16 md:mb-24">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Capítulo 02
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-6">
              Como a Kronica trabalha
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cada projeto da Kronica segue uma estrutura narrativa. Não é um processo genérico de "briefing, criação e entrega" — é uma construção em capítulos, onde cada etapa prepara a próxima.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Prólogo */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-5xl md:text-6xl font-light text-muted-foreground/30">01</span>
                <div>
                  <h3 className="text-xl font-semibold">Prólogo</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Origem</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Antes de criar, a equipe escuta. Entende o cenário, mapeia o contexto e identifica o ponto de partida. É aqui que se define o que a marca precisa ser — e o que ela nunca deve parecer.
              </p>
            </div>

            {/* Capítulos */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-5xl md:text-6xl font-light text-muted-foreground/30">02</span>
                <div>
                  <h3 className="text-xl font-semibold">Capítulos</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Direção + Forma</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Com a direção definida, começa a construção. Estratégia vira sistema. Conceito vira identidade. Cada elemento é pensado para conversar com o todo — nome, símbolo, tipografia, cor, tom de voz.
              </p>
            </div>

            {/* Epílogo */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-5xl md:text-6xl font-light text-muted-foreground/30">03</span>
                <div>
                  <h3 className="text-xl font-semibold">Epílogo</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Continuidade</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Uma marca não termina na entrega. A Kronica desenvolve sistemas replicáveis, feitos para crescer. Guias, templates, desdobramentos — tudo pensado para manter a consistência ao longo do tempo.
              </p>
            </div>
          </div>

          <div className="mt-16 md:mt-24 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground italic">
              "Moral da história: marca boa não é a mais bonita — é a que faz sentido."
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border/30" />
      </div>

      {/* O que a Kronica constrói */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Capítulo 03
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                O que a Kronica constrói
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg leading-relaxed mb-12">
                A Kronica não se limita à criação de marcas. É um estúdio multidisciplinar de design que trabalha em diferentes frentes — sempre mantendo o mesmo fio narrativo.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-3">
                  <h3 className="font-semibold">Branding & Identidade</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Construção de marcas do zero ou reposicionamento de marcas existentes. Estratégia, naming, identidade visual completa.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Sistemas de Design</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Criação de sistemas visuais escaláveis, pensados para manter consistência em qualquer aplicação ou canal.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Digital & Interfaces</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Design de sites, landing pages e experiências digitais que traduzem a marca para o ambiente online.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Campanhas & Produção</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Direção de arte para campanhas, peças de comunicação e produção contínua de conteúdo visual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border/30" />
      </div>

      {/* Parcerias com Agências */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Capítulo 04
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                Para agências
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg leading-relaxed">
                A Kronica também atua como parceira de agências — sendo o braço de design, branding e direção de arte para projetos que exigem profundidade visual e consistência.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Para agências de publicidade, comunicação ou marketing que precisam de um estúdio de confiança para executar campanhas, criar sistemas visuais ou dar suporte contínuo em produção, a Kronica oferece a mesma qualidade e rigor aplicados aos projetos próprios.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A dinâmica é simples: a agência mantém o relacionamento com o cliente, e a Kronica entra como extensão criativa — com entregas consistentes, prazos respeitados e comunicação direta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assinatura Conceitual - CTA */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-secondary-foreground/50 mb-8 block">
              Epílogo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-secondary-foreground">
              Direção. Narrativa. Sistema.
            </h2>
            <p className="text-secondary-foreground/70 mb-10 leading-relaxed">
              Se a sua marca precisa de mais do que um logo — precisa de enredo — a Kronica pode ajudar a construir esse capítulo.
            </p>
            <Button asChild size="lg" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
              <Link to="/contato">
                Iniciar uma conversa
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
