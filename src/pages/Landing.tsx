// src/pages/Landing.tsx
import React from 'react';
import { Shield, Clock, Heart } from 'lucide-react';
import Logo from '../components/Logo';
import FeatureCard from '../components/FeatureCard';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleJoinAnonymously = () => {
    navigate('/dashboard');
  };

  const handleHowItWorks = () => {
    document.getElementById('features')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden">
      {/* Ambient floating visuals */}
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-pink-600 rounded-full mix-blend-overlay opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-overlay opacity-20 blur-3xl animate-pulse"></div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center z-10">
        <motion.p 
          className="text-sm text-gray-300 mb-2"
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3 }}>
          Your Safe Space Starts Here
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          CheckOnMe
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Speak freely. Heal quietly.
        </motion.p>

        <motion.p 
          className="text-sm text-gray-400 text-center max-w-md mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Find support, share reflections, and connect with others
          completely anonymously. No pressure. No judgment.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <button 
            onClick={handleJoinAnonymously}
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl shadow-lg transition duration-200"
          >
            Join Anonymously
          </button>
          <button 
            onClick={handleHowItWorks}
            className="px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-black transition duration-200"
          >
            How It Works
          </button>
        </motion.div>

        <motion.div
          className="text-gray-400 text-sm animate-bounce cursor-pointer"
          onClick={handleHowItWorks}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          ↓ Learn more
        </motion.div>
      </div>

      {/* Features Section */}
      <div id="features" className="px-4 py-16 max-w-5xl mx-auto z-10">
        <h3 className="text-3xl font-semibold text-white text-center mb-12">
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
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg transition duration-200"
          >
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 px-4 border-t border-white/10">
        <p className="text-gray-400 text-sm">
          Your privacy and safety are our priority. Always seek professional help for emergencies.
        </p>
      </footer>
    </div>
  );
};

export default Landing;
