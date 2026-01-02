import { ExternalLink, Github } from "lucide-react";
import { ImageSlider } from "./ui/ImageSlider";

export function Projects() {
  const projects = [
    {
      title: "Veta",
      description:
        "Veta es una plataforma que te permite registrar tus medicamentos, recibir notificaciones programadas y visualizar análisis de tu salud mediante un dashboard.",
      images: [
        "/PORTAFOLIO/imagen/veta/captura-de-pantalla-(5).png",
        "/PORTAFOLIO/imagen/veta/captura-de-pantalla-(6).png",
        "/PORTAFOLIO/imagen/veta/captura-de-pantalla-(7).png",
        "/PORTAFOLIO/imagen/veta/captura-de-pantalla-(8).png",
        "/PORTAFOLIO/imagen/veta/captura-de-pantalla-(9).png",
        "/PORTAFOLIO/imagen/veta/captura-de-pantalla-(10).png",
      ],
      technologies: ["Django", "React", "PostgreSQL"],
      // demoUrl: "#",
      githubUrl: "https://github.com/SantiagoEchavarria/Veta",
    },
    {
      title: "Comercial",
      description:
        "Comercial es una plataforma de control de inventarios y generación de reportes, desarrollada para reforzar y practicar los conceptos clave de Spring Boot.",
      images: [
        "/PORTAFOLIO/imagen/comercial/captura-de-pantalla-(17).png",
        "/PORTAFOLIO/imagen/comercial/captura-de-pantalla-(18).png",
        "/PORTAFOLIO/imagen/comercial/captura-de-pantalla-(20).png",
        "/PORTAFOLIO/imagen/comercial/captura-de-pantalla-(21).png",
        "/PORTAFOLIO/imagen/comercial/captura-de-pantalla-(22).png",
        "/PORTAFOLIO/imagen/comercial/captura-de-pantalla-(23).png",
        "/imagen/comercial/captura-de-pantalla-(24).png",
      ],
      technologies: ["Spring boot", "Jaspersoft", "Mysql"],
      demoUrl: "https://comercial.santiagoechavarria.online/",
      githubUrl: "https://github.com/SantiagoEchavarria/comercial",
    },
    {
      title: "Gestión Eléctrica",
      description:
        "Gestión Eléctrica es una plataforma que permite simular el consumo eléctrico de dispositivos domésticos y visualizar dashboards con análisis realistas del uso energético.",
      images: [
        "/PORTAFOLIO/imagen/gestionelectrica/captura-de-pantalla-(1).png",
        "/PORTAFOLIO/imagen/gestionelectrica/captura-de-pantalla-(2).png",
        "/PORTAFOLIO/imagen/gestionelectrica/captura-de-pantalla-(3).png",
        "/PORTAFOLIO/imagen/gestionelectrica/captura-de-pantalla-(4).png",
      ],
      technologies: ["Django", "React", "PostgreSQL"],
      // demoUrl: "#",
      githubUrl: "https://github.com/SantiagoEchavarria/GestionElectrica",
    },
    {
      title: "EcoVidrio",
      description:
        "Ecovidrio es una plataforma que gestiona los horarios y las horas de trabajo de los operarios de una máquina trituradora de vidrio desarrollada en la universidad.",
      images: [
        "/PORTAFOLIO/imagen/ecovidrio/captura-de-pantalla-(12).png",
        "/PORTAFOLIO/imagen/ecovidrio/captura-de-pantalla-(13).png",
        "/PORTAFOLIO/imagen/ecovidrio/captura-de-pantalla-(14).png",
        "/PORTAFOLIO/imagen/ecovidrio/captura-de-pantalla-(15).png",
        "/PORTAFOLIO/imagen/ecovidrio/captura-de-pantalla-(16).png",
      ],
      technologies: ["SpringBoot", "Mysql"],
      // demoUrl: "#",
      githubUrl: "https://github.com/SantiagoEchavarria/EcoVidrioSpring",
    },
  ];

  return (
    <section id="proyectos" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-4 text-3xl font-bold text-gray-800">
          Proyectos
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow group/card"
            >
              {/* Pon el carrusel de imagenes */}
              <div className="relative w-full h-56 overflow-hidden">

            <ImageSlider images={project.images} />
            </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Demo</span>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}