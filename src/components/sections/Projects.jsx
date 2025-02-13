import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Parking System",
      description: "A comprehensive parking management system designed to streamline vehicle parking operations, track space availability, and manage parking fees efficiently.",
      technologies: ["C++"]
    },
    {
      title: "Khadi",
      description: "An e-commerce platform for traditional Khadi products, featuring product management, user authentication, and secure payment processing.",
      technologies: ["HTML", "CSS", "PHP", "MySQL"]
    },
    {
      title: "Account Management System",
      description: "A robust accounting solution built with CodeIgniter framework, offering features for financial tracking, reporting, and user management with a professional AdminLTE interface.",
      technologies: ["CodeIgniter", "HTML", "CSS", "PHP", "jQuery", "Bootstrap", "MySQL"]
    },
    {
      title: "IOT Based House Security System",
      description: "An advanced home security system simulation using Cisco Packet Tracer, implementing IoT devices for comprehensive home monitoring and security management.",
      technologies: ["Cisco Packet Tracer"]
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="rounded-xl p-6 border border-gray-700/50 bg-gray-900/40 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-gray-700/25"
              >
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gray-800/50 text-gray-300 py-1.5 px-4 rounded-full text-sm
                      hover:bg-gray-800/70 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
                    >
                      {tech}
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

export default Projects;