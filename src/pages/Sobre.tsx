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

      {/* About Section */}
      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 block">
              Sobre o estúdio
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] mb-8 animate-fade-in-up">
              Marcas com enredo.
            </h1>
            
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-100">
              <p>
                A Kronica é um estúdio de design contemporâneo que constrói marcas e sistemas visuais a partir de narrativa, estratégia e consistência. Cada projeto é desenvolvido como um livro, com início, desenvolvimento e continuidade.
              </p>
              
              <p>
                Antes de criar, a equipe escuta. Entende o cenário, mapeia o contexto e identifica o ponto de partida. É assim que se define o que a marca precisa ser e o que ela nunca deve parecer. Com a direção definida, começa a construção: estratégia vira sistema, conceito vira identidade. Cada elemento é pensado para conversar com o todo, seja nome, símbolo, tipografia, cor ou tom de voz.
              </p>
              
              <p>
                A Kronica não se limita à criação de marcas. É um estúdio multidisciplinar que trabalha com branding, sistemas de design, interfaces digitais, campanhas e produção visual. Tudo sempre mantendo o mesmo fio narrativo e a mesma base estratégica.
              </p>
              
              <p>
                O visual é consequência. A base do trabalho está em clareza estratégica, posicionamento e narrativa. Uma marca não termina na entrega, então a Kronica desenvolve sistemas replicáveis, feitos para crescer e manter consistência ao longo do tempo.
              </p>
              
              <p>
                A Kronica também atua como parceira de agências, sendo o braço de design, branding e direção de arte para projetos que exigem profundidade visual e consistência. A dinâmica é simples: a agência mantém o relacionamento com o cliente, e a Kronica entra como extensão criativa, com entregas consistentes, prazos respeitados e comunicação direta.
              </p>
            </div>

            <div className="mt-12 animate-fade-in-up delay-200">
              <Button asChild size="lg">
                <Link to="/servicos">
                  Conhecer os serviços
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>

            <div className="mt-16 pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground italic">
                "Moral da história: marca boa não é a mais bonita, é a que faz sentido."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
