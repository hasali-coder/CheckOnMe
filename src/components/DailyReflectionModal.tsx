// src/components/DailyReflectionModal.tsx
import React, { useState } from 'react';
import { supabase } from '../supabase';
import { getAlias } from '../utils/alias';
import { toast } from 'sonner';

interface Props {
  onClose: () => void;
  onSubmitted: () => void;
}

const DailyReflectionModal: React.FC<Props> = ({ onClose, onSubmitted }) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) return;
    setLoading(true);
    const alias = getAlias();

    const { error } = await supabase.from('reflections').insert({
      alias,
      message: message.trim()
    });

    setLoading(false);
    if (!error) {
      toast.success('Reflection posted!');
      setMessage('');
      onSubmitted();
      onClose();
    } else {
      console.error('Error posting reflection:', error);
      toast.error('Error posting reflection. Try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-lg w-full text-white">
        <h2 className="text-2xl font-bold mb-4">Your Reflection</h2>
        <textarea
          className="w-full bg-white/5 text-white/90 rounded-md p-3 min-h-[120px] mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="What's on your mind today..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded shadow"
            disabled={loading}
          >
            {loading ? 'Posting...' : 'Post'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyReflectionModal;
