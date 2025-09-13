import { Heart, Users, TrendingUp, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-mission-red text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold font-heading mb-4">
                Powered by Utlyze
              </h3>
              <p className="text-white/80 leading-relaxed">
                AI-powered operations for mission-driven organizations. 
                Amplifying community impact, not administrative burden.
              </p>
            </div>

            {/* Mission Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-heading">Mission Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white/80 hover:text-mission-warm smooth-transition">
                  Grant Writing Guides
                </a>
                <a href="#" className="block text-white/80 hover:text-mission-warm smooth-transition">
                  Impact Measurement Frameworks
                </a>
                <a href="#" className="block text-white/80 hover:text-mission-warm smooth-transition">
                  Donor Development Strategies
                </a>
                <a href="#" className="block text-white/80 hover:text-mission-warm smooth-transition">
                  Volunteer Management Tools
                </a>
              </div>
            </div>

            {/* Mission Community */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-heading">Mission Community</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-4 h-4" />
                  <span>800+ mission leaders amplifying their community impact</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <TrendingUp className="w-4 h-4" />
                  <span>Weekly mission optimization strategies</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <BookOpen className="w-4 h-4" />
                  <span>AI-enhanced nonprofit management masterclasses</span>
                </div>
              </div>
            </div>

            {/* Impact Tracking */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-heading">Impact Tracking</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white/80 hover:text-mission-warm smooth-transition">
                  Community Impact Metrics
                </a>
                <a href="#" className="block text-white/80 hover:text-mission-warm smooth-transition">
                  Social Change Measurement
                </a>
                <a href="#" className="block text-white/80 hover:text-mission-warm smooth-transition">
                  Grant Opportunities
                </a>
                <a href="#" className="block text-white/80 hover:text-mission-warm smooth-transition">
                  Mission Progress Monitoring
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-mission-warm" />
                <span className="text-white/80">
                  Supporting mission-driven organizations worldwide
                </span>
              </div>
              <div className="text-white/60 text-sm">
                © 2024 Org of One. Amplifying missions, not administrative burden.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}