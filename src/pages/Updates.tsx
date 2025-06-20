
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Updates = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const targetDate = new Date("2025-08-06T00:00:00");
  const startDate = new Date("2025-06-19T00:00:00");
  const currentDate = new Date();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate progress
  const totalDuration = targetDate.getTime() - startDate.getTime();
  const elapsed = currentDate.getTime() - startDate.getTime();
  const progress = Math.max(0, Math.min(100, (elapsed / totalDuration) * 100));

  // Generate days between start and end date
  const generateDays = () => {
    const days = [];
    const current = new Date(startDate);
    
    while (current <= targetDate) {
      const isAvailable = current <= currentDate;
      days.push({
        date: new Date(current),
        isAvailable,
        dayOfWeek: current.toLocaleDateString('en-US', { weekday: 'long' }),
        formatted: current.toLocaleDateString('en-US', { 
          month: 'long', 
          day: 'numeric',
          year: 'numeric'
        })
      });
      current.setDate(current.getDate() + 1);
    }
    return days;
  };

  const days = generateDays();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Section */}
        <div className="america-glass p-8 rounded-3xl mb-12">
          <div className="text-center mb-6">
            <h2 className="font-montserrat font-semibold text-2xl mb-4 text-foreground">
              Countdown to Launch
            </h2>
            <p className="font-nunito text-muted-foreground mb-6">
              Follow the journey to August 6th, 2025
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="glass-card p-4 rounded-xl">
                <div className="text-3xl font-montserrat font-extrabold text-foreground">
                  {timeLeft.days}
                </div>
                <div className="text-sm font-nunito text-muted-foreground">Days</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-3xl font-montserrat font-extrabold text-foreground">
                  {timeLeft.hours}
                </div>
                <div className="text-sm font-nunito text-muted-foreground">Hours</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-3xl font-montserrat font-extrabold text-foreground">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm font-nunito text-muted-foreground">Minutes</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-3xl font-montserrat font-extrabold text-foreground">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm font-nunito text-muted-foreground">Seconds</div>
              </div>
            </div>
            <Progress value={progress} className="h-3 rounded-full" />
            <p className="text-sm font-nunito text-muted-foreground mt-2">
              {progress.toFixed(1)}% Complete
            </p>
          </div>
        </div>

        {/* Daily Updates */}
        <div className="space-y-6">
          <h2 className="font-montserrat font-semibold text-3xl text-center mb-8 text-foreground">
            Where did the dollar go today?
          </h2>
          
          <div className="grid gap-6">
            {days.map((day, index) => (
              <div 
                key={index}
                className={`${
                  day.isAvailable 
                    ? "glass-card" 
                    : "glass-card opacity-40 blur-sm pointer-events-none"
                } p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 america-glass rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xs font-nunito text-muted-foreground uppercase">
                          {day.dayOfWeek.slice(0, 3)}
                        </div>
                        <div className="text-xl font-montserrat font-bold text-foreground">
                          {day.date.getDate()}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-montserrat font-semibold text-lg text-foreground">
                        {day.formatted}
                      </h3>
                      {day.isAvailable ? (
                        <Badge className="bg-america-gradient text-white">Available</Badge>
                      ) : (
                        <Badge variant="secondary">Coming Soon</Badge>
                      )}
                    </div>
                    
                    {day.isAvailable ? (
                      <div className="space-y-2">
                        <p className="font-nunito text-muted-foreground">
                          Today's update will be available here. Check back for OS improvements, 
                          new features, and waitlist growth metrics.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="outline">OS Update</Badge>
                          <Badge variant="outline">New Features</Badge>
                          <Badge variant="outline">Waitlist Growth</Badge>
                        </div>
                      </div>
                    ) : (
                      <p className="font-nunito text-muted-foreground italic">
                        This update will be revealed on {day.formatted}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
