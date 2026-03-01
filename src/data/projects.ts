export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  concept: string;
  year: string;
  client?: string;
  services: string[];
  images: {
    cover: string;
    gallery: string[];
  };
  tags: string[];
}

import polis01 from "@/assets/projects/polis/polis-01.jpg";
import polis02 from "@/assets/projects/polis/polis-02.jpg";
import polis03 from "@/assets/projects/polis/polis-03.jpg";
import polis04 from "@/assets/projects/polis/polis-04.jpg";
import polis05 from "@/assets/projects/polis/polis-05.jpg";
import polis06 from "@/assets/projects/polis/polis-06.jpg";
import polis07 from "@/assets/projects/polis/polis-07.jpg";
import polis08 from "@/assets/projects/polis/polis-08.jpg";
import polisCover from "@/assets/projects/polis/polis-cover.jpg";

import carolineCover from "@/assets/projects/caroline-rossi/caroline-rossi-cover.jpg";
import caroline01 from "@/assets/projects/caroline-rossi/caroline-rossi-01.jpg";
import caroline02 from "@/assets/projects/caroline-rossi/caroline-rossi-02.jpg";
import caroline03 from "@/assets/projects/caroline-rossi/caroline-rossi-03.jpg";
import caroline04 from "@/assets/projects/caroline-rossi/caroline-rossi-04.jpg";
import caroline05 from "@/assets/projects/caroline-rossi/caroline-rossi-05.jpg";
import caroline06 from "@/assets/projects/caroline-rossi/caroline-rossi-06.jpg";
import caroline07 from "@/assets/projects/caroline-rossi/caroline-rossi-07.jpg";
import caroline08 from "@/assets/projects/caroline-rossi/caroline-rossi-08.jpg";
import caroline09 from "@/assets/projects/caroline-rossi/caroline-rossi-09.jpg";

export const projects: Project[] = [
  {
    id: "caroline-rossi",
    title: "Caroline Rossi",
    category: "Identidade Visual",
    description: "Identidade visual sofisticada e atemporal para escritório de advocacia e assessoria jurídica.",
    fullDescription: "Desenvolvemos uma identidade visual elegante e marcante para Caroline Rossi, advogada especializada em assessoria jurídica. O projeto resultou em uma marca que transmite confiança, sofisticação e profissionalismo no universo jurídico.",
    concept: "O conceito central foi criar uma marca que equilibra tradição e contemporaneidade. O monograma CR combina as iniciais de forma orgânica e distintiva, enquanto a paleta em tons de verde petróleo e bege transmite seriedade e elegância. A tipografia serifada reforça a autoridade e o refinamento da marca.",
    year: "2026",
    client: "Caroline Rossi",
    services: ["Identidade Visual", "Design de Logo", "Papelaria", "Aplicações"],
    images: {
      cover: caroline05,
      gallery: [caroline01, caroline02, caroline03, caroline04, caroline05, caroline06, caroline07, caroline08, caroline09]
    },
    tags: ["Advocacia", "Jurídico", "Identidade Visual"]
  },
  {
    id: "polis-engenharia",
    title: "Pólis Engenharia",
    category: "Identidade Visual",
    description: "Logo simétrico e forte que representa solidez e estrutura para empresa de construção.",
    fullDescription: "Desenvolvemos uma identidade visual robusta e marcante para a Pólis Engenharia, uma empresa do setor de construção civil. O projeto resultou em uma marca que transmite confiança, estabilidade e profissionalismo.",
    concept: "O conceito central foi criar um logo simétrico e forte, representando solidez e estrutura. As formas geométricas precisas refletem a engenharia e a construção, enquanto o elemento triangular adiciona dinamismo e remete ao ícone de uma casa ou telhado. A paleta em tons de azul escuro e laranja transmite profissionalismo e energia.",
    year: "2024",
    client: "Pólis Engenharia",
    services: ["Identidade Visual", "Design de Logo", "Aplicações"],
    images: {
      cover: polis08,
      gallery: [polis01, polis02, polis03, polis04, polis05, polis06, polis07, polis08]
    },
    tags: ["Construção", "Engenharia", "Identidade Visual"]
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
