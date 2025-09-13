import { Zap, FileSearch, TrendingUp, Heart, Users } from "lucide-react";

export function SolutionSection() {
  const capabilities = [
    {
      icon: Zap,
      title: "Mission Operations AI",
      description: "Handle all administrative overhead so you can focus 80% of your time on direct mission work and community impact"
    },
    {
      icon: FileSearch,
      title: "Grant Management AI",
      description: "Research, apply for, and manage grants with professional-level applications and compliance reporting"
    },
    {
      icon: TrendingUp,
      title: "Impact Measurement AI",
      description: "Track, analyze, and communicate your community impact with compelling data and storytelling"
    },
    {
      icon: Heart,
      title: "Donor Relations AI",
      description: "Manage donor relationships, communications, and stewardship with personalized engagement and appreciation"
    },
    {
      icon: Users,
      title: "Community Engagement AI",
      description: "Coordinate volunteers, manage programs, and engage community members with efficient systems and communications"
    }
  ];

  return (
    <section className="py-20 subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-mission-red mb-6">
              Amplify Your Mission, Not Your Workload
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Mission AI capabilities with social impact focus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 soft-shadow smooth-transition hover:warm-shadow hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-xl hero-gradient flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-mission-red mb-4 font-heading">
                    {capability.title}
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-8 soft-shadow border-l-4 border-mission-warm">
            <h3 className="text-2xl font-bold text-mission-red mb-4 font-heading">
              Mission Transformation Promise
            </h3>
            <p className="text-xl text-foreground leading-relaxed">
              Stop managing an organization. Start leading a movement with AI handling the 
              administrative burden that's stealing your impact time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}