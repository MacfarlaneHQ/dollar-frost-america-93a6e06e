
import { Button } from "@/components/ui/button";
import { Play, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider mb-8 text-transparent bg-america-gradient bg-clip-text">
            About O$
          </h1>
        </div>

        {/* Main Content */}
        <div className="america-glass p-8 sm:p-12 lg:p-16 rounded-3xl mb-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-america-gradient opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-america-gradient-reverse opacity-10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 text-center">
            <p className="font-nunito text-xl sm:text-2xl lg:text-3xl leading-relaxed text-foreground mb-8">
              America deserves an all in one financial platform. That's{" "}
              <span className="font-montserrat font-extrabold text-transparent bg-america-gradient bg-clip-text">
                O$
              </span>
              . Built and powered by{" "}
              <span className="font-montserrat font-semibold text-foreground">
                Macfarlane
              </span>
              {" "}for everyone.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <Button className="group bg-america-gradient hover:bg-america-gradient-reverse text-white font-montserrat font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <BookOpen className="mr-3 h-5 w-5" />
            Learn More
          </Button>
          
          <Button variant="outline" className="group america-glass border-o-navy/30 hover:border-o-red/50 font-montserrat font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 text-foreground">
            <Play className="mr-3 h-5 w-5" />
            Manifesto Video
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
