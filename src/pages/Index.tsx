
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Play, FileText } from "lucide-react";

const Index = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Box Space */}
        <div className="flex justify-center mb-12">
          <div className="w-32 h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-500 font-montserrat text-sm">LOGO</span>
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center mb-8">
          <h1 className="font-montserrat font-extrabold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-6 max-w-5xl mx-auto">
            America deserves an all in one financial platform. That's{" "}
            <span className="font-montserrat font-extrabold text-transparent bg-america-gradient bg-clip-text">
              O$
            </span>
            .
          </h1>
          <p className="font-nunito text-base sm:text-lg text-muted-foreground mb-2 max-w-3xl mx-auto">
            Built for you. Built for everyone.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <Button variant="outline" className="font-montserrat font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-foreground transition-colors duration-200">
            <Play className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Video
          </Button>
          
          <Dialog open={isLetterOpen} onOpenChange={setIsLetterOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="font-montserrat font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-foreground transition-colors duration-200">
                <FileText className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Letter
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="font-montserrat font-bold text-xl mb-4 text-center">
                  Press Release
                </DialogTitle>
              </DialogHeader>
              <div className="font-nunito text-foreground space-y-4 leading-relaxed">
                <p className="font-semibold">To our clients,</p>
                
                <p>What makes a good business? Is it frontier technology, human capital, or entrepreneurial insight? It's certainly not our cutting-edge investment strategies, youngest founding team in the nation, or most progressive billing structure. Our most important asset is our clients. It's literally you.</p>
                
                <p>We view our work as a relationship of utmost intimacy. Setting one's finances in perfect order requires knowing every piece of information: lifetimes' worth of accumulated capital and earnings, interactions with government agencies like the Social Security Administration and Internal Revenue Service, and everything about your family, relationships, and wishes.</p>
                
                <p>"Our Clients" is a shorthand way of saying our most important asset is all the data we have about you and the power it has when it works together.</p>
                
                <p>The financial industry today does not respect the interconnectedness of this data. You end up frustrated and with less money when your investing, planning, tax, insurance, legacy, and education don't align. We have self-driving cars but not an operating system for financial success that every American can use.</p>
                
                <p>In 2025 alone, we've paid for over 30 pieces of software. Twenty of these directly touched our clients in one form or another. One thing they all have in common is that we have no control. Internally, we've called it SaaS debt. Until now, developing our own tools was prohibitively expensive.</p>
                
                <p>Until now.</p>
                
                <p>Code is just language, and language can be learned. Over the weekend, we made some apps using Lovable.dev. We submitted one of these projects, along with a manifesto about creating a one-login solution for our clients, to season one of their software incubator program. We did it at the last minute with no expectations—and we got in.</p>
                
                <p>The program runs for six weeks, after which we'll present our project in San Francisco to the tech world. It's a once-in-a-lifetime opportunity we thank the good Lord for. It also means that until August 6th, things will be different.</p>
                
                <p>There will be no half-year check-ins in July. If something can wait until August, we'll ask that it does. We expect to be largely offline (both email and text) for the entirety of this period. We have a chance to show the world where fintech is headed and position Macfarlane at its forefront.</p>
                
                <p>We're calling it O$—O$ for Operating $ystem. Within it, you'll be able to do everything from viewing in real-time how market movements impact your retirement success rate, to updating your insurance coverage or trust beneficiaries with a click.</p>
                
                <p>Real-time estimates of your paid and owed taxes throughout the year? Done. Personalized income statements at the click of a button? Done. Document storage, educational resources, and a personal financial AI that knows you in real-time? Yes, please.</p>
                
                <p>All of this can be built, and it's what we will bring to you—our clients, our most important asset. We need full control so we can do an even better job. It's your job to trust us; it's our job to be the best.</p>
                
                <p>If you visit os.financial, you'll be able to keep up with the project in real-time. Maryam and I ask that each of you tells us what a financial success platform looks like to you. Just go to the website, click "contribute," and enter the password MACFARLANE.</p>
                
                <p>We can't wait to show you America's operating system for financial success, powered by Macfarlane.</p>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <p>God bless us all,</p>
                  <p className="font-semibold mt-2">Jarah D. Macfarlane</p>
                  <p className="text-sm text-muted-foreground">Macfarlane Company Founder and CEO</p>
                  <p className="text-sm text-muted-foreground italic">Sent from MacfarlaneHQ</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Index;
