import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl">
            <span className="text-blue-600">{"<"}</span>
            <span>DevPortfolio</span>
            <span className="text-blue-600">{"/>"}</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection("inicio")}
                className="hover:text-blue-600 transition-colors"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="hover:text-blue-600 transition-colors"
              >
                Sobre Mí
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("habilidades")}
                className="hover:text-blue-600 transition-colors"
              >
                Habilidades
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="hover:text-blue-600 transition-colors"
              >
                Proyectos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contacto")}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contacto
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 flex flex-col gap-4">
            <li>
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left hover:text-blue-600 transition-colors"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="block w-full text-left hover:text-blue-600 transition-colors"
              >
                Sobre Mí
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("habilidades")}
                className="block w-full text-left hover:text-blue-600 transition-colors"
              >
                Habilidades
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="block w-full text-left hover:text-blue-600 transition-colors"
              >
                Proyectos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block w-full text-left px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contacto
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}