import React from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Zoom } from "react-awesome-reveal";
import { Ghost } from "lucide-react";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white text-center px-5">
      {/* Ghost Icon Animation */}
      <Zoom duration={800}>
        <Ghost className="w-24 h-24 text-purple-500 mx-auto mb-6 animate-bounce" />
      </Zoom>

      {/* Text Animation */}
      <Fade direction="up" delay={200}>
        <h1 className="text-6xl font-extrabold mb-3">404</h1>
        <h2 className="text-2xl font-semibold mb-4">
          <Typewriter
            words={["Oops! Page Not Found", "Lost in the Internet?", "Let's get you home!"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </Fade>

      <Fade delay={500}>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you're looking for doesn’t exist or has been moved.  
          Don’t worry — we’ll guide you back safely. 😅
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-2xl font-semibold shadow-md"
        >
          🔙 Back to Home
        </button>
      </Fade>

      {/* Footer */}
      <Fade delay={1000}>
        <p className="mt-16 text-sm text-gray-500 opacity-70">
          &copy; {new Date().getFullYear()} | Designed by Sojon
        </p>
      </Fade>
    </div>
  );
};

export default Error404;
