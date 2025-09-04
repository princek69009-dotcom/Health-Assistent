import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Activity } from 'lucide-react';

const Hero = () => {
const Navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Your Personal
          <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent block">
            Health Assistant
          </span>
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Experience the future of healthcare with AI-powered monitoring, personalized care plans, 
          and 24/7 support. Take control of your health journey today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center"
          onClick={()=>Navigate('/assisten')}>
            Start Free Trial
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center">
            Watch Demo
            <Activity className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;