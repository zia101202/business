import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Search, Globe, ArrowRight, Instagram, Smartphone } from "lucide-react";

const Services = () => {
  const handleGetStarted = () => {
    const phoneNumber = "923296286508"; // Add your WhatsApp number here
    const message = "Hi! I'm interested in your services. Can you help me get started?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including social media marketing, PPC campaigns, and content marketing to boost your online presence.",
      features: ["Social Media Marketing", "PPC Advertising", "Content Strategy", "Email Marketing"],
      price: "Rs 1,000/month"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Advanced SEO techniques to improve your website's ranking on search engines and drive organic traffic to your business.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"],
      price: "Rs 1,000/month"
    },
    {
      icon: Globe,
      title: "Website Creation",
      description: "Custom website development tailored to your business needs with modern design and optimal performance.",
      features: ["Responsive Design", "E-commerce Integration", "CMS Development", "Performance Optimization"],
      price: "Rs 1,000"
    },
    {
      icon: Instagram,
      title: "Social Media Promotion",
      description: "Instagram, TikTok, and social media promotion services to increase your brand visibility and engagement.",
      features: ["Instagram Marketing", "TikTok Campaigns", "Content Creation", "Influencer Outreach"],
      price: "Rs 1,000/month"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Custom mobile app development for iOS and Android platforms with modern UI/UX design and functionality.",
      features: ["iOS Development", "Android Development", "Cross-platform Apps", "App Store Optimization"],
      price: "Rs 1,500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-4">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <div className="text-lg font-semibold text-primary mb-4">
                    {service.price}
                  </div>
                  <Button variant="gradient" className="w-full group" onClick={handleGetStarted}>
                    Get Started
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;