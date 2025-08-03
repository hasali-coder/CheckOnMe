import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";

const Pod: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button onClick={() => navigate("/")} className="hover:opacity-80 transition">
            <Logo size="sm" />
          </button>
          <span className="text-sm text-muted-foreground">
            You’re <span className="font-medium text-primary">QuietStorm97</span>
          </span>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-primary mb-6">Join a Pod</h1>
        <div className="rounded-2xl bg-card/60 backdrop-blur-lg p-6 border border-border shadow-md space-y-4">
          <p className="text-muted-foreground">
            Group discussions offer a safe space to talk about things that matter, with people who get it.
          </p>
          <p className="text-sm text-muted-foreground">
            Pods are anonymous, respectful, and centered around mental well-being. Real-time chat coming soon.
          </p>
          <div className="mt-6 text-center">
            <button
              onClick={() => alert("Real-time group chat coming soon.")}
              className="btn-primary px-6 py-2 rounded-xl"
            >
              Enter a Random Pod
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pod;
