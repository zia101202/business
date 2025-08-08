import Header from "@/components/Header";
import ServicesComponent from "@/components/Services";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <ServicesComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Services;