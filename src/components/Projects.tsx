
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Sport Tracker",
      description: "A comprehensive application for tracking sports activities, workouts, and progress. Features include workout planning, progress visualization, and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnQlMjB0cmFja2VyfGVufDB8fDB8fHww",
      link: "/sport-tracker",
      technologies: ["Python", "React", "Flask", "MongoDB", "Chart.js"],
    },
    {
      title: "Handwritten Digit Classification",
      description: "An AI model that recognizes handwritten digits using convolutional neural networks. Achieved 98.7% accuracy on the MNIST dataset with optimized architecture.",
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXQlMjByZWNvZ25pdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      link: "/digit-classification",
      technologies: ["TensorFlow", "Python", "Keras", "NumPy", "OpenCV"],
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-blue/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            My <span className="text-portfolio-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue mx-auto my-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects and research work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
