import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-xl mb-4">
              <span className="text-blue-500">{"<"}</span>
              <span>DevPortfolio</span>
              <span className="text-blue-500">{"/>"}</span>
            </div>
            <p className="text-gray-400">
              Desarrollador web especializado en crear experiencias digitales
              excepcionales.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#inicio" className="hover:text-blue-500 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-blue-500 transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-blue-500 transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-blue-500 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Sígueme</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ejemplo@email.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> por
            Desarrollador Web © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}