
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Background gradient animation */}
        <div className="absolute inset-0 bg-america-gradient opacity-5 dark:opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,39,104,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(190,11,49,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Logo/Brand */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <DollarSign className="h-24 w-24 text-transparent bg-america-gradient bg-clip-text" style={{ WebkitBackgroundClip: 'text' }} />
              <div className="absolute inset-0 h-24 w-24 bg-america-gradient opacity-20 blur-xl rounded-full"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-wider mb-6 leading-tight">
            <span className="text-transparent bg-america-gradient bg-clip-text animate-fade-in">
              O$
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="font-montserrat font-semibold text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in">
            America's Financial Operating System
          </h2>

          {/* Description */}
          <p className="font-nunito text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Built for Americans, by Americans. The future of finance is here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in">
            <Link to="/about">
              <Button className="group bg-america-gradient hover:bg-america-gradient-reverse text-white font-montserrat font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/updates">
              <Button variant="outline" className="america-glass border-o-navy/30 hover:border-o-red/50 font-montserrat font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
                Follow the Dollar
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl animate-fade-in">
              <div className="text-3xl font-montserrat font-extrabold text-transparent bg-america-gradient bg-clip-text mb-2">
                100%
              </div>
              <div className="font-nunito text-sm text-muted-foreground">American Built</div>
            </div>
            <div className="glass-card p-6 rounded-2xl animate-fade-in">
              <div className="text-3xl font-montserrat font-extrabold text-transparent bg-america-gradient bg-clip-text mb-2">
                24/7
              </div>
              <div className="font-nunito text-sm text-muted-foreground">Always Available</div>
            </div>
            <div className="glass-card p-6 rounded-2xl animate-fade-in">
              <div className="text-3xl font-montserrat font-extrabold text-transparent bg-america-gradient bg-clip-text mb-2">
                ∞
              </div>
              <div className="font-nunito text-sm text-muted-foreground">Infinite Possibilities</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
