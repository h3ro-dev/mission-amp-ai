import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { FormField } from "@/components/ui/form-field";
import { useToast } from "@/hooks/use-toast";
import { Heart, Shield, Clock } from "lucide-react";

export function ConversionForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organizationName: "",
    missionFocus: "",
    organizationType: "",
    annualBudget: "",
    teamSize: "",
    adminBurden: [60],
    missionChallenges: [] as string[],
    missionVision: ""
  });

  const handleSliderChange = (value: number[]) => {
    setFormData(prev => ({ ...prev, adminBurden: value }));
  };

  const handleCheckboxChange = (challenge: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      missionChallenges: checked 
        ? [...prev.missionChallenges, challenge]
        : prev.missionChallenges.filter(c => c !== challenge)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.organizationName) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and organization name are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mission optimization consultation requested!",
      description: "We'll be in touch within 24 hours to discuss amplifying your mission impact.",
    });

    console.log("Form submitted:", formData);
  };

  const missionFocusOptions = [
    "Education", "Healthcare", "Environment", "Social Services", 
    "Community Development", "Arts/Culture", "Human Rights", 
    "Youth Development", "Senior Services", "Other"
  ];

  const organizationTypes = [
    "501(c)(3) Nonprofit", "Community Organization", "Social Enterprise", 
    "Foundation", "Association", "Religious Organization", "Other"
  ];

  const budgetRanges = [
    "<$50K", "$50K-$250K", "$250K-$1M", "$1M+", "All-volunteer"
  ];

  const teamSizes = [
    "Just me", "2-5 people", "6-15 people", "15+ people", "All volunteers"
  ];

  const challenges = [
    "Grant writing and management",
    "Impact measurement and reporting", 
    "Donor relations and fundraising",
    "Volunteer coordination",
    "Program delivery",
    "Community engagement"
  ];

  return (
    <section id="conversion-form" className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
              Amplify Your Mission Impact
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Mission optimization consultation with someone who understands the tension 
              between administrative demands and community impact
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 md:p-12 soft-shadow">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Full Name" required>
                  <Input 
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    placeholder="Enter your full name"
                    className="border-mission-orange/20 focus:border-mission-orange"
                  />
                </FormField>

                <FormField label="Organization Email" required>
                  <Input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@organization.org"
                    className="border-mission-orange/20 focus:border-mission-orange"
                  />
                </FormField>
              </div>

              <FormField label="Organization Name" required>
                <Input 
                  value={formData.organizationName}
                  onChange={(e) => setFormData(prev => ({ ...prev, organizationName: e.target.value }))}
                  placeholder="Your Organization Name"
                  className="border-mission-orange/20 focus:border-mission-orange"
                />
              </FormField>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Mission Focus">
                  <Select value={formData.missionFocus} onValueChange={(value) => setFormData(prev => ({ ...prev, missionFocus: value }))}>
                    <SelectTrigger className="border-mission-orange/20 focus:border-mission-orange">
                      <SelectValue placeholder="Select your mission focus" />
                    </SelectTrigger>
                    <SelectContent>
                      {missionFocusOptions.map(option => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormField>

                <FormField label="Organization Type">
                  <Select value={formData.organizationType} onValueChange={(value) => setFormData(prev => ({ ...prev, organizationType: value }))}>
                    <SelectTrigger className="border-mission-orange/20 focus:border-mission-orange">
                      <SelectValue placeholder="Select organization type" />
                    </SelectTrigger>
                    <SelectContent>
                      {organizationTypes.map(option => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormField>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Annual Budget">
                  <Select value={formData.annualBudget} onValueChange={(value) => setFormData(prev => ({ ...prev, annualBudget: value }))}>
                    <SelectTrigger className="border-mission-orange/20 focus:border-mission-orange">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map(option => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormField>

                <FormField label="Team Size">
                  <Select value={formData.teamSize} onValueChange={(value) => setFormData(prev => ({ ...prev, teamSize: value }))}>
                    <SelectTrigger className="border-mission-orange/20 focus:border-mission-orange">
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent>
                      {teamSizes.map(option => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormField>
              </div>

              <FormField label={`Administrative Burden: ${formData.adminBurden[0]}% admin vs ${100 - formData.adminBurden[0]}% mission work`}>
                <div className="px-4">
                  <Slider
                    value={formData.adminBurden}
                    onValueChange={handleSliderChange}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>0% Admin</span>
                    <span>100% Admin</span>
                  </div>
                </div>
              </FormField>

              <FormField label="Mission Challenges (check all that apply)">
                <div className="grid md:grid-cols-2 gap-4">
                  {challenges.map(challenge => (
                    <div key={challenge} className="flex items-center space-x-2">
                      <Checkbox 
                        id={challenge}
                        checked={formData.missionChallenges.includes(challenge)}
                        onCheckedChange={(checked) => handleCheckboxChange(challenge, checked as boolean)}
                      />
                      <label htmlFor={challenge} className="text-sm text-foreground">
                        {challenge}
                      </label>
                    </div>
                  ))}
                </div>
              </FormField>

              <FormField label="Mission Vision">
                <Textarea 
                  value={formData.missionVision}
                  onChange={(e) => setFormData(prev => ({ ...prev, missionVision: e.target.value }))}
                  placeholder="What impact would you have if you could focus 80% of your time on mission work instead of administration?"
                  rows={4}
                  className="border-mission-orange/20 focus:border-mission-orange"
                />
              </FormField>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-mission-warm hover:bg-mission-orange text-white font-bold text-lg py-4 mission-shadow smooth-transition"
              >
                Amplify My Mission Impact
              </Button>

              <div className="flex items-start gap-3 p-4 bg-mission-light rounded-lg border border-mission-orange/20">
                <Shield className="w-5 h-5 text-mission-orange mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">
                  Your mission, community information, and impact strategies remain completely 
                  confidential and are treated with the respect your work deserves.
                </p>
              </div>
            </form>
          </div>

          {/* Urgency */}
          <div className="mt-12 text-center space-y-4">
            <div className="flex items-center justify-center gap-6 text-white flex-wrap">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-mission-warm" />
                <span>Only 6 mission amplification consultations available this week</span>
              </div>
            </div>
            <p className="text-white/90">
              Your community needs your leadership and vision, not your administrative skills
            </p>
            <p className="text-mission-warm font-medium">
              Every day spent on paperwork is a day not spent changing lives in your community
            </p>
          </div>

          {/* Risk Reversal */}
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-white font-heading">
                Risk Reversal Guarantee
              </h3>
              <div className="space-y-2 text-white/90">
                <p>✓ Complimentary mission optimization consultation with community impact guarantee</p>
                <p>✓ If we can't identify ways to reclaim 20+ hours per week for direct mission work, the consultation is completely free</p>
                <p>✓ Your mission success and community impact are our primary objectives and measures of success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}