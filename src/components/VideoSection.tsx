import { Play, Volume2 } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="teletherapy" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-light text-secondary text-sm font-medium">
            <Play className="w-4 h-4" />
            <span>Our Story</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            See How We{" "}
            <span className="text-gradient">Make a Difference</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Watch how Wellspring helps families navigate their therapy journey with compassion and expertise.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-lifted bg-card">
            {/* Video */}
            <div className="relative aspect-video">
              <video
                className="w-full h-full object-cover"
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23f0f9ff' width='1920' height='1080'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' fill='%2320b2aa'%3EWellspring Video%3C/text%3E%3C/svg%3E"
                src="https://cdn.midjourney.com/video/cb84f296-92a0-4a37-a0e3-1c9c95299488/0.mp4"
                controls={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              
              {/* Play Button Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-foreground/10 cursor-pointer group"
                  onClick={() => {
                    const video = document.querySelector('video');
                    if (video) {
                      video.play();
                      setIsPlaying(true);
                    }
                  }}
                >
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Video Info Bar */}
            <div className="p-6 flex items-center justify-between border-t border-border">
              <div>
                <h3 className="font-heading font-semibold text-foreground">Welcome to Wellspring</h3>
                <p className="text-sm text-muted-foreground">Discover our approach to speech therapy and rehabilitation</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Volume2 className="w-5 h-5" />
                <span className="text-sm">3:45</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
