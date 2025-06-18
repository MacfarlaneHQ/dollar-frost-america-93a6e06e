
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Send, ExternalLink, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Contribute = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [response, setResponse] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const { toast } = useToast();

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "MACFARLANE") {
      setIsAuthenticated(true);
      toast({
        title: "Access Granted",
        description: "Welcome, fellow American.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password. Try again.",
        variant: "destructive",
      });
    }
  };

  const handleResponseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (response.trim()) {
      setShowThankYou(true);
      setResponse("");
      console.log("User response:", response);
    }
  };

  if (showThankYou) {
    return (
      <div className="pt-24 pb-16 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-extrabold text-4xl mb-6 text-transparent bg-america-gradient bg-clip-text">
            We appreciate that.
          </h1>
          <p className="font-nunito text-xl mb-8 text-foreground">
            We are building this for you. It's time.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/updates">
              <Button variant="outline" className="font-montserrat font-semibold rounded-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Follow the Dollar
              </Button>
            </Link>
            
            <Link to="/about">
              <Button variant="outline" className="font-montserrat font-semibold rounded-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                About MACFARLANE
              </Button>
            </Link>
          </div>
          
          <Button 
            onClick={() => setShowThankYou(false)}
            className="mt-6 bg-america-gradient hover:bg-america-gradient-reverse text-white font-montserrat font-semibold rounded-full"
          >
            Contribute Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isAuthenticated ? (
          /* Password Protection */
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <Lock className="h-16 w-16 mx-auto mb-4 text-foreground" />
              <h2 className="font-montserrat font-semibold text-2xl mb-2 text-foreground">
                Restricted Access
              </h2>
              <p className="font-nunito text-muted-foreground">
                Enter password to contribute to O$
              </p>
            </div>
            
            <div className="search-container-gradient">
              <div className="relative flex items-center w-full bg-white/90 dark:bg-black/50 rounded-full backdrop-blur-md">
                <Lock className="absolute left-4 h-5 w-5 text-muted-foreground pointer-events-none" />
                <form onSubmit={handlePasswordSubmit} className="w-full">
                  <input
                    type="password"
                    placeholder="Enter password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-grow h-14 bg-transparent border-none rounded-full pl-12 pr-16 focus:outline-none focus:ring-0 font-montserrat tracking-wider text-foreground placeholder:text-muted-foreground"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground transition-all duration-200 flex items-center justify-center"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          /* Modern Chat Interface */
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-semibold text-3xl sm:text-4xl text-foreground mb-6">
                What does a financial operating system look like to you?
              </h2>
            </div>
            
            <div className="search-container-gradient">
              <div className="relative flex items-center w-full bg-white/90 dark:bg-black/50 rounded-full backdrop-blur-md">
                <HelpCircle className="absolute left-4 h-5 w-5 text-muted-foreground pointer-events-none" />
                <form onSubmit={handleResponseSubmit} className="w-full">
                  <input
                    type="text"
                    placeholder="Type your vision here..."
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    className="flex-grow h-14 bg-transparent border-none rounded-full pl-12 pr-16 focus:outline-none focus:ring-0 font-nunito text-foreground placeholder:text-muted-foreground"
                    required
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground transition-all duration-200 flex items-center justify-center"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              Your input helps shape the future of O$
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contribute;
