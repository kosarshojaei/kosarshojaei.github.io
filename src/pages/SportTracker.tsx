
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const SportTracker = () => {
  useEffect(() => {
    document.title = "Sport Tracker | Kosar Shojaei";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-portfolio-blue hover:text-gray-800 mb-8"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Homepage
          </Link>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Sport Tracker
          </h1>

          <div className="h-72 md:h-96 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&auto=format&fit=crop&q=80"
              alt="Sport Tracker" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600">
              This project page is currently under construction. More details about the Sport Tracker project will be available soon.
            </p>

            <div className="mt-12 p-8 rounded-xl bg-gray-50 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
              <p>Coming soon...</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SportTracker;
