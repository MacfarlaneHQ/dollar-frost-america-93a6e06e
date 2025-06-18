
import { Button } from "@/components/ui/button";
import { Play, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Box Space */}
        <div className="flex justify-center mb-12">
          <div className="w-32 h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-500 font-montserrat text-sm">LOGO</span>
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground mb-12 max-w-5xl mx-auto">
            America deserves an all in one financial platform. That's{" "}
            <span className="font-montserrat font-extrabold text-transparent bg-america-gradient bg-clip-text">
              O$
            </span>
            . Built and powered by{" "}
            <span className="font-montserrat font-extrabold uppercase text-foreground">
              MACFARLANE
            </span>
            {" "}for everyone.
          </h1>
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

export default Index;
