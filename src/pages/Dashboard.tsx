
import React from 'react';
import { Users, MessageCircle, BookOpen } from 'lucide-react';
import Logo from '../components/Logo';
import DashboardCard from '../components/DashboardCard';
import FeedPost from '../components/FeedPost';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // Mock data for the reflection feed
  const feedPosts = [
    {
      username: "QuietStorm97",
      message: "Feeling off today. Needed to say that somewhere. Thanks for listening.",
      timestamp: "2h ago"
    },
    {
      username: "MindfulOtter42",
      message: "Small wins matter. Finally had a conversation with my dad about how I've been feeling.",
      timestamp: "4h ago"
    },
    {
      username: "CalmSail88",
      message: "Some days are harder than others. Grateful for this space to be honest.",
      timestamp: "6h ago"
    },
    {
      username: "SilentStrength",
      message: "Been working on setting boundaries. It's tough but necessary.",
      timestamp: "8h ago"
    }
  ];

  const handleFindBuddy = () => {
    console.log('Finding a buddy...');
  };

  const handleJoinPod = () => {
    console.log('Joining a pod...');
  };

  const handleReflect = () => {
    console.log('Opening reflection...');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Logo size="sm" />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-primary">Q</span>
            </div>
            <span className="text-sm text-muted-foreground">
              You're <span className="font-medium text-primary">QuietStorm97</span>
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Actions */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              How can we help today?
            </h2>
            
            <DashboardCard
              icon={Users}
              title="Find a Buddy"
              description="Connect one-on-one with someone who gets it"
              buttonText="Start Matching"
              onClick={handleFindBuddy}
            />
            
            <DashboardCard
              icon={MessageCircle}
              title="Join a Pod"
              description="Join group discussions on topics that matter"
              buttonText="Browse Pods"
              onClick={handleJoinPod}
            />
            
            <DashboardCard
              icon={BookOpen}
              title="Daily Reflection"
              description="Share your thoughts with the community"
              buttonText="Write Something"
              onClick={handleReflect}
            />
          </div>

          {/* Feed */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Community Reflections
            </h2>
            
            <div className="space-y-4">
              {feedPosts.map((post, index) => (
                <FeedPost
                  key={index}
                  username={post.username}
                  message={post.message}
                  timestamp={post.timestamp}
                />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="btn-secondary">
                Load More Reflections
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
