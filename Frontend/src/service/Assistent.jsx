import React from "react";

const features = [
    {
        title: "Personalized Health Tips",
        description: "Get daily health tips tailored to your needs and goals.",
    },
    {
        title: "Activity Tracking",
        description: "Monitor your physical activities and progress easily.",
    },
    {
        title: "Nutrition Guidance",
        description: "Receive meal suggestions and nutrition advice.",
    },
    // Add more features as needed
];

const FeatureCard = React.memo(({ title, description }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">{title}</h2>
        <p className="text-gray-700">{description}</p>
    </div>
));

const Assistant = React.memo(() => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-300 px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6 text-center">
                Health Assistant Features
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl text-center mb-10">
                Explore the powerful features of our Health Assistant App designed to help you maintain a healthy lifestyle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
                {features.map((feature, idx) => (
                    <FeatureCard key={idx} {...feature} />
                ))}
            </div>
        </div>
    );
});

export default Assistant;