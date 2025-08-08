import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, X } from "lucide-react";

const Demo = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleWatchDemo = () => {
    setShowVideo(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Watch Our <span className="bg-gradient-primary bg-clip-text text-transparent">Demo</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                See how our digital solutions can transform your business. Watch our comprehensive demo showcasing our services and capabilities.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative bg-card rounded-2xl shadow-card overflow-hidden border">
                {!showVideo ? (
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-pulse">
                        <Play className="w-12 h-12 text-white ml-1" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Digital Marketing & Website Demo</h3>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Discover how we help businesses grow with our comprehensive digital solutions
                      </p>
                      <Button variant="gradient" size="lg" onClick={handleWatchDemo} className="shadow-glow">
                        <Play className="w-5 h-5 mr-2" />
                        Watch Demo Video
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-video">
                    <button 
                      onClick={() => setShowVideo(false)}
                      className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Demo Video"
                      className="w-full h-full rounded-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-card rounded-xl shadow-card border">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Live Examples</h4>
                  <p className="text-sm text-muted-foreground">
                    See real websites we've created for our clients
                  </p>
                </div>

                <div className="text-center p-6 bg-card rounded-xl shadow-card border">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Step-by-Step Process</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn about our development and marketing process
                  </p>
                </div>

                <div className="text-center p-6 bg-card rounded-xl shadow-card border">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Results & Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    See the impact of our digital marketing strategies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;