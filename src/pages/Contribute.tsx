
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Send, ExternalLink, MessageCircle } from "lucide-react";
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
            <Card className="border border-border bg-card">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Lock className="h-12 w-12 mx-auto mb-4 text-foreground" />
                  <h2 className="font-montserrat font-semibold text-2xl mb-2 text-foreground">
                    Restricted Access
                  </h2>
                  <p className="font-nunito text-muted-foreground">
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
          /* ChatGPT-style Interface */
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <MessageCircle className="h-16 w-16 mx-auto mb-4 text-foreground" />
              <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl text-foreground mb-4">
                What does a financial operating system look like to you?
              </h2>
              <p className="font-nunito text-muted-foreground">
                Share your vision for the future of American finance
              </p>
            </div>
            
            <form onSubmit={handleResponseSubmit} className="relative">
              <div className="flex items-end space-x-4 p-4 border border-border rounded-2xl bg-card shadow-lg">
                <div className="flex-1">
                  <textarea
                    placeholder="Type your vision here..."
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    className="w-full resize-none border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none font-nunito text-base leading-relaxed"
                    rows={4}
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  size="sm"
                  className="bg-america-gradient hover:bg-america-gradient-reverse text-white rounded-full px-6 py-2 font-montserrat font-semibold transition-all duration-200"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              Your input helps shape the future of O$
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contribute;
