
import React from 'react';

interface FeedPostProps {
  username: string;
  message: string;
  timestamp: string;
  className?: string;
}

const FeedPost: React.FC<FeedPostProps> = ({ 
  username, 
  message, 
  timestamp, 
  className = '' 
}) => {
  return (
    <div className={`card-gentle animate-scale-in ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-primary">
              {username.charAt(0)}
            </span>
          </div>
          <span className="font-medium text-primary">{username}</span>
        </div>
        <span className="text-sm text-muted-foreground">{timestamp}</span>
      </div>
      <p className="text-foreground leading-relaxed">{message}</p>
    </div>
  );
};

export default FeedPost;
