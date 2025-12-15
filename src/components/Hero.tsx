import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Typewriter } from "./ui/type-writer";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("proyectos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl mx-auto">
              SE
            </div>
          </div>

          <h1 className="mb-4">
          Hola, soy{" "}
          <Typewriter text="Santiago Echavarria, Desarrollador Backend" />
        </h1>



          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
             Desarrollo soluciones digitales modernas y eficientes. Estoy enfocado en 
             backend con Spring y Django, además de crear automatizaciones inteligentes con n8n 
             para optimizar procesos.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="https://github.com/SantiagoEchavarria"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:santiago.echavarria.3344@miremington.edu.co"
              className="p-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver Proyectos
            </button>
            <a
              href="#contacto"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Contáctame
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
