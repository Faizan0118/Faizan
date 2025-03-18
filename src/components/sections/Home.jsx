import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent leading-tight">
              Hello, I'm Asma Ali
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
{/*               A Network Engineer and Full Stack Developer with a passion 
              for building secure, scalable solutions. I combine networking expertise 
              with development skills and technical writing to create comprehensive 
              IT solutions. Focused on network optimization, web development, and 
              sharing knowledge through technical documentation. */}
            </p>
            
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-emerald-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:bg-emerald-500"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-emerald-600/50 text-emerald-400 py-3 px-6 rounded-lg font-medium transition-all duration-300 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:bg-emerald-600/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-2xl -z-10 blur-xl transform rotate-3"></div>
              <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-emerald-500/20 relative">
                <img
{/*                   src="https://res.cloudinary.com/diwerulix/image/upload/v1739447416/fai_m1txbt.jpg"
                  alt="Muhammad Faizan - Network Engineer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-105" */}
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Home;
