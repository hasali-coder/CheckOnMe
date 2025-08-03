// src/pages/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { Users, MessageCircle, BookOpen } from 'lucide-react';
import Logo from '../components/Logo';
import DashboardCard from '../components/DashboardCard';
import DailyReflectionModal from '../components/DailyReflectionModal';
import { supabase } from '../supabase';
import { getAlias } from '../utils/alias';
import { RealtimeChannel } from '@supabase/supabase-js';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { findBuddy } from '../utils/buddy';
import { joinOrCreatePod } from '../utils/pod';

interface Reflection {
  id: string;
  alias: string;
  message: string;
  created_at: string;
}

const Dashboard: React.FC = () => {
  const alias = getAlias();
  const [reflections, setReflections] = useState<Reflection[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReflections = async () => {
      const { data, error } = await supabase
        .from('reflections')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error) {
        setReflections(data as Reflection[]);
      } else {
        console.error('Error fetching reflections:', error);
      }
    };

    fetchReflections();

    const channel: RealtimeChannel = supabase
      .channel('realtime:reflections')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'reflections'
        },
        (payload) => {
          const newPost = payload.new;
          setReflections((prev) => [newPost, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [refreshTrigger]);

  const handleFindBuddy = async () => {
    const roomId = await findBuddy();

    if (roomId === 'waiting') {
      toast.info('Waiting for a buddy...');
    } else if (roomId) {
      toast.success('Buddy found! Redirecting...');
      navigate(`/chat?room_id=${roomId}`);
    } else {
      toast.error('Could not match you. Try again.');
    }
  };

  const handleJoinPod = async () => {
    const podId = await joinOrCreatePod();
    if (podId) {
      toast.success('Joined pod! Redirecting...');
      navigate(`/pod/${podId}`);
    } else {
      toast.error('Unable to join a pod.');
    }
  };

  const handleReflect = () => setShowModal(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <header className="sticky top-0 z-50 bg-white/5 border-b border-white/10 px-4 py-4 shadow-sm backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <Logo size="sm" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white/80">{alias.charAt(0)}</span>
            </div>
            <span className="text-sm text-white/60">
              You're <span className="font-medium text-white">{alias}</span>
            </span>
          </div>
        </div>
      </header>


      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-6">
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

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Community Reflections
            </h2>

            <div className="space-y-4">
              {reflections.map((post) => (
                <div
                  key={post.id}
                  className="bg-white/5 p-5 rounded-xl text-white/80 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">{post.alias}</span>
                    <span className="text-sm text-white/50">
                      {new Date(post.created_at).toLocaleString()}
                    </span>
                  </div>
                  <p className="leading-relaxed whitespace-pre-line">{post.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <DailyReflectionModal
          onClose={() => setShowModal(false)}
          onSubmitted={() => setRefreshTrigger((prev) => prev + 1)}
        />
      )}
    </div>
  );
};

export default Dashboard;
