import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mission-leader.jpg";
import missionPattern from "@/assets/mission-pattern.jpg";

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('conversion-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
      style={{
        backgroundImage: `url(${missionPattern})`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                You Started This Organization to{" "}
                <span className="text-mission-warm">Change the World.</span>{" "}
                You're Spending 80% of Your Time on Paperwork.
              </h1>
              
              <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-body">
                Your mission is being suffocated by grant applications, compliance reports, 
                and administrative overhead. The people you want to help are waiting while 
                you're drowning in bureaucracy.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-lg font-medium text-mission-warm">
                  Mission Reality Check:
                </p>
                <p className="text-white/90 mt-2">
                  "When did serving your community become serving administrative 
                  requirements instead of serving people in need?"
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-mission-warm hover:bg-mission-orange text-white font-semibold text-lg px-8 py-4 mission-shadow smooth-transition"
                onClick={scrollToForm}
              >
                Amplify My Mission Impact
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-4"
                onClick={() => document.getElementById('mission-killer')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How We Help
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden mission-shadow">
              <img 
                src={heroImage} 
                alt="Mission-driven leader overwhelmed by paperwork while community waits for help"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mission-red/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}