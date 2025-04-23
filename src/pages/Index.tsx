
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const profileImage = "/pic/f2a11f14-d856-4d92-b31c-86e024c84e4a.png";
  
  useEffect(() => {
    document.title = "Kosar Shojaei | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero profileImage={profileImage} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
