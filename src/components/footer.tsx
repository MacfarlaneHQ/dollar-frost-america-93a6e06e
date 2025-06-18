
import { useState } from "react";
import { Instagram, Linkedin, X, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const { toast } = useToast();

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll keep you updated on O$ progress.",
      });
      setEmail("");
    }
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard`,
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <footer className="w-full border-t glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Powered by Macfarlane */}
          <div className="text-center md:text-left">
            <p className="text-sm font-nunito text-muted-foreground">
              Powered by{" "}
              <span className="font-montserrat font-extrabold uppercase text-foreground">
                MACFARLANE
              </span>
            </p>
          </div>

          {/* Waitlist Email */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <form onSubmit={handleWaitlistSubmit} className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter email for waitlist"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-64 rounded-full glass-card border-o-navy/30 focus:border-o-red"
              />
              <Button 
                type="submit"
                className="rounded-full bg-america-gradient hover:bg-america-gradient-reverse text-white font-montserrat font-semibold"
              >
                Join
              </Button>
            </form>
          </div>

          {/* Social Links & Contact */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-o-light dark:hover:bg-o-neutral">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-o-light dark:hover:bg-o-neutral">
                <X className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-o-light dark:hover:bg-o-neutral">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="rounded-full font-montserrat font-semibold">
                  Contact
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-card border-o-navy/30">
                <DialogHeader>
                  <DialogTitle className="font-montserrat font-bold text-center">Contact Macfarlane</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 glass-card rounded-xl">
                    <div>
                      <p className="font-nunito text-sm text-muted-foreground">Phone</p>
                      <p className="font-montserrat font-semibold">2065999770</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard("2065999770", "Phone")}
                      className="rounded-full"
                    >
                      {copied === "Phone" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 glass-card rounded-xl">
                    <div>
                      <p className="font-nunito text-sm text-muted-foreground">Email</p>
                      <p className="font-montserrat font-semibold">info@macfarlanehq.com</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard("info@macfarlanehq.com", "Email")}
                      className="rounded-full"
                    >
                      {copied === "Email" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
}
