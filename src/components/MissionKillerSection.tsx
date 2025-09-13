import { FileText, Calendar, Users, Target, TrendingDown } from "lucide-react";

export function MissionKillerSection() {
  const painPoints = [
    {
      icon: FileText,
      text: "You spend more time writing grant applications than actually delivering programs that help people in your community"
    },
    {
      icon: Calendar,
      text: "Compliance requirements and regulatory reporting consume the hours you wanted to dedicate to direct service and community impact"
    },
    {
      icon: Users,
      text: "Board meetings focus on administrative issues and financial reporting instead of strategic mission advancement and community outcomes"
    },
    {
      icon: Target,
      text: "Fundraising events require months of planning and execution that take you away from the people and causes you're passionate about serving"
    },
    {
      icon: TrendingDown,
      text: "Impact reporting and donor communications demand professional-level marketing and communications work you never trained for"
    }
  ];

  return (
    <section id="mission-killer" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-mission-red mb-6">
              The Org of One Mission Killer
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Mission vs. administrative burden pain points that are stealing your impact:
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {painPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-6 p-6 bg-white rounded-xl soft-shadow smooth-transition hover:warm-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-mission-light rounded-xl p-8 border-l-4 border-mission-orange">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-mission-red mb-4 font-heading">
                  Mission Dilution Statistics
                </h3>
                <div className="space-y-3 text-foreground">
                  <p><span className="font-semibold text-mission-orange">73%</span> of nonprofit leaders report spending more time on administration than mission work</p>
                  <p><span className="font-semibold text-mission-orange">68%</span> say administrative burden is their biggest obstacle to impact</p>
                  <p className="font-medium">Your mission drift isn't unique - it's systemic.</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-mission-red mb-4 font-heading">
                  Emotional Validation
                </h3>
                <p className="text-foreground leading-relaxed">
                  You didn't start this organization to become a bureaucrat. You started it 
                  because you saw problems that needed solving and people who needed help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}