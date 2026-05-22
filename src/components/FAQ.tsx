import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "¿Qué servicios ofrece INNOVATECH?",
    answer: "Ofrecemos desarrollo de software a medida, aplicaciones web y móviles, integración de sistemas y soluciones tecnológicas para empresas.",
    value: "item-1",
  },
  {
    question: "¿Cuánto cuesta desarrollar un proyecto?",
    answer:
      "El costo depende del alcance, funcionalidades y complejidad. Contáctanos y te daremos una cotización personalizada sin compromiso.",
    value: "item-2",
  },
  {
    question:
      "¿Cuánto tiempo tarda un proyecto?",
    answer:
      "El tiempo varía según el tipo de proyecto. Puede ir desde unas semanas hasta varios meses, dependiendo de los requerimientos.",
    value: "item-3",
  },
  {
    question: "¿Trabajan con empresas pequeñas o solo grandes?",
    answer: "Trabajamos con startups, pequeñas, medianas y grandes empresas. Adaptamos nuestras soluciones a cada necesidad.",
    value: "item-4",
  },
  {
    question:
      "¿Ofrecen soporte después de entregar el proyecto?",
    answer:
      "Sí, brindamos soporte, mantenimiento y mejoras continuas para asegurar el correcto funcionamiento de tu sistema.",
    value: "item-5",
  },

  {
    question:
      "¿Puedo solicitar cambios durante el desarrollo?",
    answer:
      "Sí, mantenemos comunicación constante para ajustar el proyecto según tus necesidades.",
    value: "item-6",
  },

  {
    question:
      "¿Cómo puedo iniciar un proyecto con ustedes?",
    answer:
      "Solo contáctanos mediante el formulario o botón de contacto y te responderemos lo antes posible.",
    value: "item-7",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container pt-24  sm:py-24"
    >
      <h1 className="text-center text-3xl lg:text-4xl font-bold mb-8">
        <span className="text-white">Preguntas </span>
        <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
          frecuentes
        </span>
      </h1>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
