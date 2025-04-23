
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact <span className="text-portfolio-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue mx-auto my-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out to me through any of the following channels.
          </p>
        </motion.div>

        <motion.div
          className="bg-portfolio-blue/5 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-portfolio-blue/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactItem 
              icon={<Github size={28} />} 
              title="GitHub" 
              value="kosarshojaei" 
              link="https://github.com/kosarshojaei"
            />
            <ContactItem 
              icon={<Linkedin size={28} />} 
              title="LinkedIn" 
              value="kosar-shojaei" 
              link="https://linkedin.com/in/kosar-shojaei"
            />
            <ContactItem 
              icon={<Mail size={28} />} 
              title="Email" 
              value="kosar@kosar-s.com" 
              link="mailto:kosar@kosar-s.com"
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Looking forward to connecting with you!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
}

const ContactItem = ({ icon, title, value, link }: ContactItemProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-portfolio-blue/10 hover:border-portfolio-blue/30"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-portfolio-blue/20 p-4 rounded-full mb-4">
        <span className="text-portfolio-blue">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{value}</p>
    </motion.a>
  );
};

export default Contact;
