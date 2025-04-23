
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  profileImage: string;
}

const Hero = ({ profileImage }: HeroProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = profileImage;
    img.onload = () => setLoaded(true);
  }, [profileImage]);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-b from-portfolio-blue/20 to-white pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Hello, I'm{" "}
              <span className="text-portfolio-blue font-extrabold">Kosar Shojaei</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              AI Researcher & Full-Stack Developer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#about" 
                className="px-8 py-3 bg-portfolio-blue text-gray-800 rounded-md font-medium hover:bg-portfolio-blue/80 transition-colors"
              >
                Learn More
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-white text-gray-800 border border-portfolio-blue rounded-md font-medium hover:bg-portfolio-blue/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              {loaded ? (
                <img
                  src={profileImage}
                  alt="Kosar Shojaei"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 animate-pulse" />
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
          </div>
          <span className="mt-2 text-sm text-gray-400">Scroll down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
