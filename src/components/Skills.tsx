
export function Skills() {

 
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        {
          name: " Spring",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: " Django",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          name: " n8n",
          logo: "https://images.seeklogo.com/logo-png/61/1/n8n-icon-logo-png_seeklogo-619411.png",
        },
      ],
    },
    {
      title: "Frontend",
      skills: [
        {
          name: " React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: " HTML",
          logo: "https://images.seeklogo.com/logo-png/18/1/css3-logo-png_seeklogo-186678.png",
        },
        {
          name: " CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
      ],
    },
    {
      title: "Herramientas & Datos",
      skills: [
        {
          name: " Power BI",
          logo: "https://images.seeklogo.com/logo-png/44/1/power-bi-logo-png_seeklogo-441021.png",
        },
        {
          name: " Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: " Mysql",
          logo: "https://images.seeklogo.com/logo-png/27/1/mysql-logo-png_seeklogo-273735.png",
        },
      ],
    },
  ];

  return (
    <section id="habilidades" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-4">Habilidades</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="mb-6 text-blue-600">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
