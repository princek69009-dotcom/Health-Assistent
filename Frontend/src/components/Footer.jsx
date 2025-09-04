import React from 'react';
import { Heart, Phone, Clock, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold">HealthAssist</h4>
            </div>
            <p className="text-gray-400">
              Your trusted partner in health and wellness, powered by advanced AI technology.
            </p>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Features</h5>
            <ul className="space-y-2 text-gray-400">
              <li>Health Monitoring</li>
              <li>AI Diagnosis</li>
              <li>Care Plans</li>
              <li>Consultations</li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Support</h5>
            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                <span>1-800-HEALTH</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-3" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 HealthAssist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;