import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Award, Users, Clock } from "lucide-react";

const About = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "923296286508"; // Add your WhatsApp number here
    const message = "Hi! I'm interested in your digital marketing services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const achievements = [
    {
      icon: Award,
      title: "Certified Experts",
      description: "Google & Facebook certified digital marketing professionals"
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "Successfully served businesses across various industries"
    },
    {
      icon: Clock,
      title: "5+ Years Experience",
      description: "Proven track record in digital marketing and web development"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">DigitalCraft</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              We are a passionate team of digital marketing experts and web developers dedicated to helping businesses grow their online presence. With years of experience and a proven track record, we deliver results that matter.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our mission is to provide comprehensive digital solutions that not only look great but also drive real business growth. From stunning websites to effective marketing campaigns, we're your one-stop solution for digital success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="gradient" 
                size="lg"
                onClick={handleWhatsAppClick}
                className="group"
              >
                <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
                Contact on WhatsApp
              </Button>
              
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Achievements */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;