import Layout from "@/components/Layout";
import InfiniteHero from "@/components/ui/infinite-hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <Layout>
        {/* SEO */}
        <title>Kronica — Branding e Design Estratégico</title>
        <meta name="description" content="A equipe da Kronica cria identidades e sistemas visuais com clareza, consistência e estética, do posicionamento à aplicação." />

        {/* Hero Section */}
        <InfiniteHero 
          title="CONSTRUA SUA HISTÓRIA"
          subtitle="Kronica Studio"
        />

        {/* Projects Showcase */}
        <ProjectShowcase />
      </Layout>
    </PageTransition>
  );
};

export default Index;
