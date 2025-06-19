
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [showContactDialog, setShowContactDialog] = useState(false);
  const { toast } = useToast();

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll keep you updated on O$ progress.",
      });
      setEmail("");
      setShowContactDialog(true);
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
                className="w-64 rounded-full bg-background border-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-500 focus-visible:ring-1 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-600 focus-visible:ring-offset-0 transition-colors duration-200"
              />
              <Button 
                type="submit"
                className="rounded-full bg-america-gradient hover:bg-america-gradient-reverse text-white font-montserrat font-semibold"
              >
                Join
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/macfarlanecompany"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full font-montserrat font-semibold text-sm hover:bg-o-light dark:hover:bg-o-neutral transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href="https://x.com/macfarlane_hq"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full font-montserrat font-semibold text-sm hover:bg-o-light dark:hover:bg-o-neutral transition-colors duration-200"
              >
                X
              </a>
              <a
                href="https://linkedin.com/company/macfarlanehq"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full font-montserrat font-semibold text-sm hover:bg-o-light dark:hover:bg-o-neutral transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Dialog - Only shows after form submission */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
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
    </footer>
  );
}
