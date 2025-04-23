
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About <span className="text-portfolio-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue mx-auto my-4"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-portfolio-blue/10 rounded-lg p-6 shadow-inner">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hi, I'm Kosar Shojaei.<br /><br />
                I'm currently pursuing my Master's degree in Artificial Intelligence at Islamic Azad University.<br /><br />
                With a background in Computer Engineering and a strong interest in data-driven solutions,
                I have experience working on real-world projects involving image processing, optimization algorithms,
                and full-stack web development using tools like Python, Django, Laravel, and SQL.<br /><br />
                I'm passionate about learning, building, and contributing to innovative technologies that make a real impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border border-portfolio-blue/20 hover:border-portfolio-blue"
                >
                  <h3 className="font-medium text-gray-800 mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-portfolio-blue h-full rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const skills = [
  { name: "Python", level: 90 },
  { name: "Machine Learning", level: 85 },
  { name: "Django", level: 80 },
  { name: "Laravel", level: 75 },
  { name: "SQL", level: 85 },
  { name: "Web Development", level: 80 },
  { name: "Image Processing", level: 90 },
  { name: "Data Analysis", level: 85 },
];

export default About;
