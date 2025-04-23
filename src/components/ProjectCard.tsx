
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  index: number;
}

const ProjectCard = ({ title, description, image, link, technologies, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-portfolio-blue/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-portfolio-blue/20 text-gray-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link 
          to={link} 
          className="flex items-center gap-2 text-portfolio-blue hover:text-gray-800 font-medium transition-colors"
        >
          View Project <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
