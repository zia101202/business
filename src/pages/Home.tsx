import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const websites =  [
    {
      title: "E-commerce Store",
      description: "Modern online store with payment integration, inventory management, and responsive design.",
      image: '/ecomerce.webp',
      price: "Rs 1,000",
      category: "E-commerce",
      features: ["Payment Gateway", "Admin Panel", "Mobile Responsive", "SEO Optimized"],
      url: "https://ecomerce-lake-ten.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description: "Professional portfolio showcase with elegant design and smooth animations.",
      image: './porfolio.jpg',
      price: "Rs 1,000",
      category: "Portfolio",
      features: ["Clean Design", "Fast Loading", "Contact Forms", "Gallery Section"],
      url: "https://portfolio-bussines.vercel.app/"
    },
    {
      title: "Blog Platform",
      description: "Feature-rich blog website with CMS integration and social sharing capabilities.",
      image: '/blog.webp',
      price: "Rs 1,000",
      category: "Blog",
      features: ["Content Management", "Social Sharing", "Comment System", "Search Function"],
      url: "https://bloging-business.vercel.app/"
    }
  ];

  const handleViewSite = (url: string) => {
    window.open(url, '_blank');
  };

  const handleBuyNow = () => {
    const phoneNumber = "923296286508";
    const message = "Hi! I'm interested in purchasing a website. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleViewMore = () => {
    navigate('/websites');
  };

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Website Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Website <span className="bg-gradient-primary bg-clip-text text-transparent">Templates</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
              Choose from our collection of professionally designed website templates
            </p>
            <p className="text-lg text-muted-foreground">
              Ready-to-use, fully responsive, and customizable for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {websites.map((website, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-0 shadow-card bg-gradient-to-br from-card to-card/90 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img 
                    src={website.image} 
                    alt={website.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="bg-white/95 hover:bg-white text-foreground shadow-lg backdrop-blur-sm border-white/50"
                        onClick={() => handleViewSite(website.url)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Live Preview
                      </Button>
                      <Button variant="gradient" size="sm" onClick={handleBuyNow} className="shadow-glow">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-primary text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                      {website.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/95 text-primary px-3 py-1.5 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
                      {website.price}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 bg-gradient-to-br from-card via-card to-secondary/30">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">{website.title}</h3>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-4">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Professional Design</span>
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Mobile Ready</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {website.price}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleViewSite(website.url)}
                      className="hover:scale-105 transition-transform text-xs"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="gradient" size="lg" onClick={handleViewMore} className="shadow-glow text-lg px-8 py-3 hover:scale-105 transition-transform">
              Explore All Templates
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;