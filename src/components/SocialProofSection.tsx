import { Quote } from "lucide-react";

export function SocialProofSection() {
  const testimonials = [
    {
      name: "Maria Santos",
      organization: "Community Development Org",
      quote: "Doubled our community impact while reducing administrative time by 75% through AI mission operations",
      metric: "200% impact increase"
    },
    {
      name: "David Kim", 
      organization: "Youth Development Organization",
      quote: "Secured $500K in grants while increasing direct service hours by 200% using AI grant management",
      metric: "$500K grants secured"
    },
    {
      name: "Jennifer Rodriguez",
      organization: "Family Services Org", 
      quote: "Grew from serving 50 families to 500 families without adding administrative staff through AI operations",
      metric: "1000% growth"
    }
  ];

  const caseStudies = [
    {
      type: "Education Nonprofit",
      result: "Increased student support services by 300% while reducing administrative overhead by 60%"
    },
    {
      type: "Environmental Organization", 
      result: "Expanded conservation programs to 5 new communities through AI-enabled operations efficiency"
    },
    {
      type: "Social Services Org",
      result: "Achieved 95% grant success rate while tripling direct service delivery through mission-focused AI support"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-mission-red mb-6">
              Mission Leaders Amplifying Their Community Impact
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Mission success stories with passionate organization leaders and community impact metrics
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-mission-light rounded-xl p-8 border border-mission-orange/20 relative"
              >
                <Quote className="w-8 h-8 text-mission-orange mb-4" />
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-mission-orange/20 pt-4">
                  <p className="font-semibold text-mission-red font-heading">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.organization}
                  </p>
                  <div className="mt-2 inline-block bg-mission-warm text-white text-sm px-3 py-1 rounded-full">
                    {testimonial.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="bg-gradient-to-r from-mission-light to-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-mission-red mb-8 font-heading text-center">
              Mission Transformation Case Studies
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 soft-shadow"
                >
                  <h4 className="font-bold text-mission-orange mb-3 font-heading">
                    {study.type}
                  </h4>
                  <p className="text-foreground leading-relaxed">
                    {study.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}