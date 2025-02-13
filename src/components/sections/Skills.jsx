import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Network Engineering",
      skills: ["CCNA", "Network Security", "Infrastructure Design", "Network Optimization"]
    },
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "Bootstrap", "WordPress"]
    },
    {
      title: "Backend Development",
      skills: ["PHP", "Python", "MySQL", "Java", "CodeIgniter"]
    },
    {
      title: "Other Skills",
      skills: ["Technical Writing", "XML", "System Administration", "Documentation"]
    }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent text-center">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="rounded-xl p-6 border border-gray-700/50 bg-gray-900/40 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-gray-700/25"
              >
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-gray-800/50 text-gray-300 py-1.5 px-4 rounded-full text-sm
                      hover:bg-gray-800/70 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Skills;