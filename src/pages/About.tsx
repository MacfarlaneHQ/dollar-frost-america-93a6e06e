
import { Button } from "@/components/ui/button";
import { Play, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content - No header, no glass box */}
        <div className="text-center mb-16">
          <p className="font-nunito text-xl sm:text-2xl lg:text-3xl leading-relaxed text-foreground mb-12">
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
