import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Send, ExternalLink, Code, User, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Partners = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    expertise: ""
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "BUILTUSA") {
      setIsAuthenticated(true);
      toast({
        title: "Access Granted",
        description: "Welcome, partner.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password. Try again.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.expertise.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('partner_submissions')
        .insert([{
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          expertise: formData.expertise.trim()
        }]);

      if (error) {
        console.error('Error saving partner submission:', error);
        toast({
          title: "Error",
          description: "Failed to submit your partnership application. Please try again.",
          variant: "destructive",
        });
      } else {
        setShowThankYou(true);
        setFormData({ name: "", email: "", phone: "", expertise: "" });
        toast({
          title: "Thank you!",
          description: "Your partnership application has been submitted successfully.",
        });
      }
    } catch (error) {
      console.error('Error saving partner submission:', error);
      toast({
        title: "Error",
        description: "Failed to submit your partnership application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showThankYou) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl mb-6 text-transparent bg-america-gradient bg-clip-text">
            Thank you.
          </h1>
          <p className="font-nunito text-lg sm:text-xl mb-8 text-foreground">
            We'll be in touch and we promise you'll want to be a part of this.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
            <Link to="/updates">
              <Button variant="outline" className="font-montserrat font-semibold rounded-full w-full sm:w-auto">
                <ExternalLink className="mr-2 h-4 w-4" />
                Follow the Dollar
              </Button>
            </Link>
            
            <Link to="/about">
              <Button variant="outline" className="font-montserrat font-semibold rounded-full w-full sm:w-auto">
                <ExternalLink className="mr-2 h-4 w-4" />
                About MACFARLANE
              </Button>
            </Link>
          </div>
          
          <Button 
            onClick={() => setShowThankYou(false)}
            className="bg-america-gradient hover:bg-america-gradient-reverse text-white font-montserrat font-semibold rounded-full w-full sm:w-auto"
          >
            Partner Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {!isAuthenticated ? (
          /* Password Protection */
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <Lock className="h-12 sm:h-16 w-12 sm:w-16 mx-auto mb-4 text-foreground" />
              <h2 className="font-montserrat font-semibold text-xl sm:text-2xl text-foreground">
                Restricted Access
              </h2>
            </div>
            
            <div className="search-container-gradient">
              <div className="relative flex items-center w-full bg-white/90 dark:bg-black/50 rounded-full backdrop-blur-md">
                <Lock className="absolute left-4 h-5 w-5 text-muted-foreground pointer-events-none" />
                <form onSubmit={handlePasswordSubmit} className="w-full flex items-center">
                  <input
                    type="password"
                    placeholder="Enter password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-grow h-14 bg-transparent border-none rounded-full pl-12 pr-14 focus:outline-none focus:ring-0 font-montserrat tracking-wider text-foreground placeholder:text-muted-foreground"
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
          /* Partner Contact Form */
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Partner with us to build O$
              </h2>
              <p className="font-nunito text-lg text-muted-foreground">
                Tell us how you can help and how we can reach you
              </p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-montserrat font-semibold">
                    Name *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="pl-10 rounded-full font-nunito"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-montserrat font-semibold">
                    Email *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10 rounded-full font-nunito"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-montserrat font-semibold">
                  Phone <span className="text-muted-foreground">(optional)</span>
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="pl-10 rounded-full font-nunito"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              {/* Expertise Section */}
              <div className="space-y-2">
                <Label htmlFor="expertise" className="font-montserrat font-semibold">
                  How can you help build O$? *
                </Label>
                <div className="search-container-gradient">
                  <div className="relative flex items-center w-full bg-white/90 dark:bg-black/50 rounded-full backdrop-blur-md">
                    <Code className="absolute left-4 h-5 w-5 text-muted-foreground pointer-events-none" />
                    <input
                      id="expertise"
                      type="text"
                      placeholder="Tell us your expertise and why we need it"
                      value={formData.expertise}
                      onChange={(e) => handleInputChange("expertise", e.target.value)}
                      className="flex-grow h-14 bg-transparent border-none rounded-full pl-12 pr-4 focus:outline-none focus:ring-0 font-nunito text-foreground placeholder:text-muted-foreground"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-america-gradient hover:bg-america-gradient-reverse text-white font-montserrat font-semibold rounded-full px-8 py-3 disabled:opacity-50"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Submitting..." : "Submit Partnership"}
                </Button>
              </div>
            </form>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              Your contact information helps us connect and collaborate
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Partners;
