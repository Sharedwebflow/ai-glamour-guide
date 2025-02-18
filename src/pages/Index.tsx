
import { Heart, Sparkles, Zap, Star } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";
import { StepCard } from "@/components/ui/step-card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 text-center">
        <p className="animate-fade-up mb-4 inline-block rounded-full bg-rose-100 px-4 py-1 text-sm text-rose-600">
          AI-Powered Beauty Advice
        </p>
        <h1 className="animate-fade-up mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
          Your Personal Beauty Expert
        </h1>
        <p className="animate-fade-up mb-8 text-lg text-gray-600 md:text-xl">
          Get personalized skincare and makeup recommendations powered by
          advanced AI technology.
        </p>
        <button 
          onClick={() => navigate('/quiz')}
          className="animate-fade-up rounded-full bg-rose-500 px-8 py-3 text-white shadow-lg transition-all hover:bg-rose-600 hover:shadow-xl"
        >
          Try AI Advisor Now
        </button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Key Features
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Sparkles}
            title="Personalized Advice"
            description="Get tailored recommendations based on your unique skin type and concerns."
          />
          <FeatureCard
            icon={Zap}
            title="Smart Analysis"
            description="Advanced AI technology analyzes your skin conditions and needs."
          />
          <FeatureCard
            icon={Heart}
            title="Product Matching"
            description="Find the perfect products that match your skin type and preferences."
          />
          <FeatureCard
            icon={Star}
            title="Expert Results"
            description="Achieve professional-level results with AI-powered guidance."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <StepCard
            number={1}
            title="Take the Quiz"
            description="Answer a few questions about your skin type, concerns, and beauty goals."
          />
          <StepCard
            number={2}
            title="Get Your Plan"
            description="Receive a personalized beauty routine tailored to your needs."
          />
          <StepCard
            number={3}
            title="See Results"
            description="Follow your custom plan and watch your skin transform."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="rounded-2xl bg-gradient-to-br from-rose-100 to-champagne-100 p-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Ready to Transform Your Beauty Routine?
          </h2>
          <p className="mb-8 text-gray-600">
            Join thousands of satisfied users who have discovered their perfect beauty
            routine with our AI advisor.
          </p>
          <button 
            onClick={() => navigate('/quiz')}
            className="rounded-full bg-rose-500 px-8 py-3 text-white shadow-lg transition-all hover:bg-rose-600 hover:shadow-xl"
          >
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
