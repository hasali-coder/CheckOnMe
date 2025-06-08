
import React from 'react';
import { Shield, Clock, Heart } from 'lucide-react';
import Logo from '../components/Logo';
import FeatureCard from '../components/FeatureCard';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleJoinAnonymously = () => {
    navigate('/dashboard');
  };

  const handleHowItWorks = () => {
    // Smooth scroll to features section
    document.getElementById('features')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen safe-gradient">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="animate-fade-in">
          <Logo size="xl" className="mb-6" />
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Speak freely. Heal quietly.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={handleJoinAnonymously}
              className="btn-primary"
            >
              Join Anonymously
            </button>
            <button 
              onClick={handleHowItWorks}
              className="btn-secondary"
            >
              How It Works
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="px-4 py-16 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold text-primary text-center mb-12">
          A Safe Space for Mental Wellness
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Shield}
            title="Safe Space"
            description="Complete anonymity with generated usernames. Share your thoughts without judgment or exposure."
          />
          <FeatureCard
            icon={Clock}
            title="When You Need It"
            description="24/7 access to supportive conversations. Connect with others or reflect when it matters most."
          />
          <FeatureCard
            icon={Heart}
            title="Genuine Support"
            description="Real conversations with people who understand. Build connections that help you heal."
          />
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={handleJoinAnonymously}
            className="btn-primary"
          >
            Start Your Journey
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="text-center py-8 px-4 border-t border-border">
        <p className="text-muted-foreground">
          Your privacy and safety are our priority. Always seek professional help for emergencies.
        </p>
      </footer>
    </div>
  );
};

export default Landing;
