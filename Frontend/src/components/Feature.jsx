import React from 'react';
import { Heart, Shield, Activity, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "24/7 Health Monitoring",
      description: "Continuous tracking of your vital signs and health metrics with real-time alerts."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "AI-Powered Diagnosis",
      description: "Advanced AI algorithms to help identify potential health issues and provide recommendations."
    },
    {
      icon: <Activity className="w-8 h-8 text-purple-600" />,
      title: "Personalized Care Plans",
      description: "Customized treatment plans and wellness programs tailored to your specific needs."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Expert Consultations",
      description: "Connect with certified healthcare professionals for virtual consultations."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our advanced technology can transform your healthcare experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="mb-6">{feature.icon}</div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;