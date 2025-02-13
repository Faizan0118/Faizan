import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-emerald-500/10 border bg-emerald-500/5 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10">
            <p className="text-gray-300 mb-6 leading-relaxed">
              As a Network Engineer and Full Stack Developer, I bring a unique blend of 
              infrastructure and development expertise to every project. With a strong 
              foundation in CCNA and years of hands-on experience, I've developed a 
              comprehensive understanding of both network architecture and web development.
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              My journey in technology has led me to master various aspects of IT, from 
              designing robust network solutions to creating efficient web applications. 
              As a technical writer, I also enjoy sharing knowledge and making complex 
              technical concepts accessible to others.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I'm passionate about creating integrated solutions that combine secure 
              networking principles with modern development practices. Whether it's 
              implementing network infrastructure, developing full-stack applications, 
              or documenting technical processes, I strive for excellence in every 
              endeavor.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;