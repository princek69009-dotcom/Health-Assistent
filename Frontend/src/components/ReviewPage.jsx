// TestimonialPage.jsx
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const TestimonialPage = () => {
  const [reviews] = useState([
    { name: "Alice", rating: 5, comment: "Amazing health tips, very helpful!", avatar: "https://i.pravatar.cc/100?img=1" },
    { name: "Bob", rating: 4, comment: "Good guidance, but could add more detail.", avatar: "https://i.pravatar.cc/100?img=2" },
    { name: "Charlie", rating: 5, comment: "Life-changing advice! Highly recommend.", avatar: "https://i.pravatar.cc/100?img=3" },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-10">What Our Users Say</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((rev, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transform transition duration-300"
          >
            <img
              src={rev.avatar}
              alt={rev.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-1">{rev.name}</h3>
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`mr-1 ${i < rev.rating ? "text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <p className="text-gray-600">{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
