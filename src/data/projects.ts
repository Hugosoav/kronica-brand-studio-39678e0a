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
  brandStory?: {
    history: string;
    voiceTone: string;
    values?: string[];
  };
}


import carolineCover from "@/assets/projects/caroline-rossi/caroline-rossi-cover.jpg";
import caroline01 from "@/assets/projects/caroline-rossi/caroline-rossi-01.jpg";
import caroline02 from "@/assets/projects/caroline-rossi/caroline-rossi-02.jpg";
import caroline03 from "@/assets/projects/caroline-rossi/caroline-rossi-03.jpg";
import caroline04 from "@/assets/projects/caroline-rossi/caroline-rossi-04.jpg";
import caroline05 from "@/assets/projects/caroline-rossi/caroline-rossi-05.jpg";
import caroline06 from "@/assets/projects/caroline-rossi/caroline-rossi-06.jpg";
import caroline07 from "@/assets/projects/caroline-rossi/caroline-rossi-07.jpg";
import caroline08 from "@/assets/projects/caroline-rossi/caroline-rossi-08.jpg";


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
      cover: caroline02,
      gallery: [caroline01, caroline02, caroline03, caroline04, caroline05, caroline06, caroline07, caroline08]
    },
    tags: ["Advocacia", "Jurídico", "Identidade Visual"],
    brandStory: {
      history: "Caroline Rossi construiu sua trajetória no universo jurídico com foco em assessoria personalizada e atendimento humanizado. Após anos atuando em grandes escritórios, decidiu fundar seu próprio espaço, um ambiente onde o Direito encontra a empatia. A marca nasce da necessidade de traduzir essa abordagem única em uma identidade visual que inspire confiança e acolhimento.",
      voiceTone: "O tom de voz da marca é elegante, acessível e empático. A comunicação evita jargões jurídicos excessivos, priorizando clareza e proximidade. O discurso é sempre em terceira pessoa, transmitindo profissionalismo sem frieza, como uma conversa entre aliados.",
      values: ["Confiança", "Sofisticação", "Empatia", "Transparência", "Excelência"]
    }
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
