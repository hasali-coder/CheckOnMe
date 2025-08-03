// src/pages/Chat.tsx
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Chat: React.FC = () => {
  const [params] = useSearchParams();
  const roomId = params.get('room_id');
  const [status, setStatus] = useState('Connecting...');

  useEffect(() => {
    // TODO: Replace with real WebSocket or Supabase real-time connection
    const timer = setTimeout(() => setStatus('Connected'), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Buddy Chat Room</h1>
        <p className="text-sm text-muted-foreground mb-6">🔗 {status}</p>

        <div className="bg-white/5 rounded-lg p-4">
          <p className="mb-1 text-white/80">Room ID:</p>
          <code className="block bg-white/10 px-3 py-2 rounded font-mono text-sm text-white">
            {roomId || 'Unknown'}
          </code>
        </div>

        <p className="text-sm mt-6 text-muted-foreground">
          Real-time chat between matched buddies will appear here soon.
        </p>
      </div>
    </div>
  );
};

export default Chat;