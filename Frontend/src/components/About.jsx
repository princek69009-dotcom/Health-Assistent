const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100 flex flex-col items-center px-6 py-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
          About Health Assistant
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Your AI-powered wellness companion 💙. Get guidance on nutrition, exercise, sleep, and hydration.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mb-12">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Personalized Wellness Tips</h2>
          <p className="text-gray-700 leading-relaxed">
            Health Assistant provides instant, AI-powered advice tailored to your lifestyle. Whether you want meal plans, workout routines, or sleep optimization tips, we’ve got you covered.
          </p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Track & Improve</h2>
          <p className="text-gray-700 leading-relaxed">
            Monitor your health, track hydration, and follow exercise routines. Get actionable tips to improve your daily wellness habits and maintain a balanced lifestyle.
          </p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">AI-Powered Guidance</h2>
          <p className="text-gray-700 leading-relaxed">
            Leveraging AI, our assistant gives reliable insights and suggestions. Ask questions about nutrition, exercise, sleep, or hydration and receive instant, helpful answers.
          </p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-500">Disclaimer</h2>
          <p className="text-gray-700 leading-relaxed">
            Health Assistant is for educational purposes only and should not replace professional medical advice. Always consult a healthcare provider for personalized guidance.
          </p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center max-w-3xl">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Start Your Wellness Journey Today</h3>
        <p className="text-gray-700 mb-6">
          Ask your Health Assistant questions, track your habits, and get AI-driven tips to live a healthier life.
        </p>
        <button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
          Chat with Health Assistant
        </button>
      </div>
    </div>
  );
};

export default About;
