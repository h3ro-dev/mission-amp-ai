import { Heart, Clock, Users, Handshake, BarChart } from "lucide-react";
import communityImage from "@/assets/community-impact.jpg";

export function ImpactFrustrationSection() {
  const frustrations = [
    {
      icon: Heart,
      text: "Community members with urgent needs who can't get help because you're busy completing compliance documentation for existing programs"
    },
    {
      icon: Clock,
      text: "Innovative program ideas that would transform lives sitting in your 'someday' folder because grant reporting deadlines always take priority"
    },
    {
      icon: Users,
      text: "Passionate volunteers who want to help but need training and coordination you don't have time to provide while managing administrative requirements"
    },
    {
      icon: Handshake,
      text: "Community partnerships and collaboration opportunities missed because relationship building takes time you're spending on paperwork"
    },
    {
      icon: BarChart,
      text: "Board members and donors asking about impact metrics while you're too busy with administration to properly measure and communicate your results"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-mission-red mb-6">
              The Heartbreak of Unrealized Impact
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The unique burden of mission-driven leadership with administrative constraints
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              {frustrations.map((frustration, index) => {
                const IconComponent = frustration.icon;
                return (
                  <div 
                    key={index}
                    className="flex gap-4 p-4 rounded-lg smooth-transition hover:bg-mission-light"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <IconComponent className="w-6 h-6 text-mission-orange" />
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {frustration.text}
                    </p>
                  </div>
                );
              })}
            </div>
            
            <div className="relative">
              <img 
                src={communityImage} 
                alt="Diverse community members who need support and services"
                className="w-full rounded-2xl soft-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mission-orange/10 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-mission-light to-white rounded-2xl p-8 border border-mission-orange/20">
            <h3 className="text-2xl font-bold text-mission-red mb-4 font-heading">
              Mission Reality Gap
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              Look at your original vision statement or mission document. Compare it to how you 
              actually spend your time each week. That gap represents the impact you're not having 
              because of administrative burden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}