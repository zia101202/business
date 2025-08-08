import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();

  const websiteTemplates =  [
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
      category: "porfolio",
      features: ["Clean Design", "Fast Loading", "Contact Forms", "Gallery Section"],
      url: "https://portfolio-bussines.vercel.app/"
    },
    {
      title: "Blog Platform",
      description: "Feature-rich blog website with CMS integration and social sharing capabilities.",
      image: './blog.webp',
      price: "Rs 1,000",
      category: "Blog",
      features: ["Content Management", "Social Sharing", "Comment System", "Search Function"],
      url: "https://bloging-business.vercel.app/"
    }
  ];
  const handleExploreServices = () => {
    navigate('/services');
  };

  const handleWatchDemo = () => {
    navigate('/demo');
  };

  const handleViewSite = (url: string) => {
    window.open(url, '_blank');
  };

  const handleBuyNow = () => {
    const phoneNumber = "03296286508";
    const message = "Hi! I'm interested in purchasing a website. Can you help me?";
    const whatsappUrl = `https://wa.me/92${phoneNumber.slice(1)}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Grow Your Business with
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Digital Excellence</span>
          </h1>
          
          {/* Website Templates Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {websiteTemplates.map((website, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden h-40">
                    <img 
                      src={website.image} 
                      alt={website.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-2 left-2">
                      <span className="bg-gradient-primary text-white px-2 py-1 rounded-md text-xs font-medium shadow-lg">
                        {website.category}
                      </span>
                    </div>
                    <div className="absolute top-2 right-2">
                      <div className="bg-gradient-primary text-white px-3 py-2 rounded-lg font-bold text-sm shadow-xl border-2 border-white/20">
                        {website.price}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3">
                    <h3 className="text-sm font-bold mb-1 group-hover:text-primary transition-colors">{website.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{website.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewSite(website.url)}
                        className="text-xs px-2 py-1 h-6"
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      <Button 
                        variant="hero" 
                        size="sm" 
                        onClick={handleBuyNow}
                        className="text-xs px-2 py-1 h-6"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleExploreServices}
              className="group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="group" onClick={handleWatchDemo}>
              <Play className="mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;