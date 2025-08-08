import Header from "@/components/Header";
import AboutComponent from "@/components/About";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <AboutComponent />
      </main>
      <Footer />
    </div>
  );
};

export default About;