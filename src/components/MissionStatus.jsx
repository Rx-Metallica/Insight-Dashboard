import { Pause, ArrowRight } from "lucide-react";
import React from 'react';

export const MissionStatus = () => {
  return (
    <div className="absolute top-4 left-24 bg-white text-black flex items-center gap-2 px-4 py-2 rounded-full shadow-lg z-50">
      <span className="text-gray-400 text-sm">Status</span>
      <span className="font-semibold text-sm">On Mission 1234</span>
      <button className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center ml-1">
        <Pause size={10} className="text-white" fill="white" />
      </button>
    </div>
  );
};

export const QuickGoal = () => {
  return (
    <div className="absolute top-16 left-24 bg-white text-black flex items-center gap-2 px-4 py-2 rounded-full shadow-lg z-50">
      <span className="font-semibold text-sm">QUICK GOAL</span>
      <button className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center ml-1">
        <ArrowRight size={12} className="text-white" />
      </button>
    </div>
  );
};