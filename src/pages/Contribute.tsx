
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Send, ExternalLink } from "lucide-react";
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
          <div className="america-glass p-12 rounded-3xl">
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
                  About Macfarlane
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
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider mb-8 text-transparent bg-america-gradient bg-clip-text">
            Contribute
          </h1>
          <p className="font-nunito text-xl text-foreground">
            Help us build America's financial future
          </p>
        </div>

        {!isAuthenticated ? (
          /* Password Protection */
          <div className="max-w-md mx-auto">
            <Card className="america-glass border-o-navy/30">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Lock className="h-12 w-12 mx-auto mb-4 text-o-navy dark:text-o-red" />
                  <h2 className="font-montserrat font-semibold text-2xl mb-2 text-foreground">
                    Restricted Access
                  </h2>
                  <p className="font-nunito text-foreground">
                    Enter password to contribute to O$
                  </p>
                </div>
                
                <form onSubmit={handlePasswordSubmit}>
                  <Input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4 rounded-full text-center font-montserrat tracking-wider"
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-america-gradient hover:bg-america-gradient-reverse text-white font-montserrat font-semibold rounded-full"
                  >
                    Access
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Main Contribution Form */
          <div className="max-w-2xl mx-auto">
            <div className="america-glass p-8 sm:p-12 rounded-3xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-america-gradient opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-america-gradient-reverse opacity-10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl text-center mb-8 text-foreground">
                  What does a financial operating system look like to you, fellow American?
                </h2>
                
                <form onSubmit={handleResponseSubmit} className="space-y-6">
                  <Textarea
                    placeholder="Share your vision for O$..."
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    className="min-h-[200px] resize-none rounded-2xl glass-card border-o-navy/30 focus:border-o-red font-nunito text-lg"
                    required
                  />
                  
                  <Button 
                    type="submit"
                    className="w-full bg-america-gradient hover:bg-america-gradient-reverse text-white font-montserrat font-semibold py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Your Vision
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contribute;
