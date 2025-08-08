import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";


const Portfolio = () => {
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
      image: './blog.webp',
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
    const phoneNumber = "923296286508"; // Add your WhatsApp number here
    const message = "Hi! I'm interested in purchasing a website. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Websites</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of professionally designed websites available for purchase
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {websites.map((website, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
              <div className="relative overflow-hidden">
                <img 
                  src={website.image} 
                  alt={website.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-white/90 hover:bg-white"
                    onClick={() => handleViewSite(website.url)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {website.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{website.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{website.description}</p>
                
                <div className="space-y-2 mb-4">
                  {website.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">
                    {website.price}
                  </div>
                  <div className="space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleViewSite(website.url)}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button variant="accent" size="sm" onClick={handleBuyNow}>
                      Buy Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gradient" size="lg">
            View More Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;