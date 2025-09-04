const About = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-emerald-50 to-blue-200 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-4 text-center">
          About Health Assistant
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Your AI-powered wellness companion 💙
        </p>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Health Assistant is designed to help you maintain a balanced and
            healthy lifestyle. You can ask questions about{" "}
            <span className="font-semibold text-blue-600">nutrition</span>,{" "}
            <span className="font-semibold text-emerald-600">exercise</span>,{" "}
            <span className="font-semibold text-purple-600">sleep</span>, and{" "}
            <span className="font-semibold text-teal-600">hydration</span>.
          </p>

          <p>
            Powered by <span className="font-semibold">AI</span>, it provides
            instant tips and guidance to support your wellness journey. Whether
            you’re tracking your BMI, planning meals, or setting up workout
            routines, Health Assistant is here to guide you.
          </p>

          <p>
            <span className="font-semibold text-blue-700">Disclaimer:</span>{" "}
            This assistant is for <span className="underline">educational</span>{" "}
            purposes only and should not replace professional medical advice.
            Always consult a doctor for health-related concerns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
