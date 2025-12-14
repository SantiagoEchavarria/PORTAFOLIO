import { Code2, Network, Palette, Server, Workflow, Zap } from "lucide-react";

export function About() {
  const features = [
      {
      icon: <Server className="w-8 h-8" />,
      title: "Arquitecturas",
      description: (
        <>
          <p>Arquitectura por Capas (Layered Architecture).</p>
          <p>Arquitectura Hexagonal.</p>
          <p>Arquitectura Clean.</p>
        </>
      ),
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Patrones de Diseño",
      description: (
        <>
          <p>MVC (Model–View–Controller).</p>
          <p>MTV (Model–Template–View).</p>
        </>
      ),
    },


    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Automatización con n8n",
      description: "Diseño de flujos automatizados para optimizar procesos, ahorrar tiempo y conectar servicios usando n8n.",
    },

  ];

  return (
    <section id="sobre-mi" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-4">Sobre Mí</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
        <p className="text-gray-700 mb-6">
          Soy desarrollador backend especializado en Spring Boot, 
          enfocado en el diseño y desarrollo de aplicaciones robustas, 
          seguras y escalables, aplicando buenas prácticas de arquitectura y 
          desarrollo.
        </p>
        <p className="text-gray-700 mb-6">
          Cuento con conocimientos en tecnologías complementarias como React y Django, 
          lo que me permite entender el flujo completo de una aplicación y colaborar de manera efectiva entre backend y frontend.
        </p>
        <p className="text-gray-700">
          Además, tengo experiencia en análisis de datos utilizando Power BI y Python, 
          así como en automatización de procesos con n8n, lo que me permite aportar soluciones orientadas tanto al 
          negocio como a la eficiencia operativa.
        </p>
      </div>


          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-3">{feature.icon}</div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
