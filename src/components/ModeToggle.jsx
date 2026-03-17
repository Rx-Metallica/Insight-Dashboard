import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const ModeToggle = () => {
  const [mode, setMode] = useState("AUTO");

  return (
    <div className="absolute top-4 right-4 bg-white text-black flex items-center gap-2 px-3 py-2 rounded-full shadow-lg z-50">
      <span className="text-gray-400 text-sm font-medium">MODE</span>
      <div className="flex items-center bg-gray-100 rounded-full p-0.5">
        <button
          onClick={() => setMode("AUTO")}
          className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
            mode === "AUTO" ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-800"
          }`}
        >
          AUTO
        </button>
        <button
          onClick={() => setMode("MANUAL")}
          className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
            mode === "MANUAL" ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-800"
          }`}
        >
          MANUAL
        </button>
      </div>
    </div>
  );
};

export const Initiate = () => {
  return (
    <div className="absolute top-18 right-4 bg-white text-black flex items-center gap-2 px-4 py-2 rounded-full shadow-lg z-50">
      <span className="font-semibold text-sm">INITIATE</span>
      <button className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center ml-1">
        <ArrowRight size={12} className="text-white" />
      </button>
    </div>
  );
};