import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../assets/academate2.jpg";
import { MdHeight } from "react-icons/md";

const Home = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3">
      <section className="py-16">
        <div className="container mx-auto text-center flex items-center">
          <div>
            <img src={Logo} alt="logo" style={{ height: "500px" }} />
          </div>
          <div className="ml-10">
            {isAuthenticated ? (
              <h1 className="text-5xl font-bold text-black">
                Welcome to Academate, {user.name}!
              </h1>
            ) : (
              <h1 className="text-5xl font-bold text-black">
                Welcome to Academate!
              </h1>
            )}
            <p className="text-2xl font-bold text-gray-800 mt-4">
              All in one productivity platform for Students in once space!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/pomodoro"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold">Pomodoro</h2>
              <p className="mt-4">The Easy Way to Do More...</p>
            </Link>

            <a
              href="http://127.0.0.1:5500/index.html"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold">Chat with your Peer!</h2>
              <p className="mt-4">
                Facilitate communication between You and Your companion to solve
                your doubts
              </p>
            </a>

            <a
              href="https://roadmap.sh/"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold">Roadmaps</h2>
              <p className="mt-4">Your path to success!</p>
            </a>
            <a
              href="https://digi-draw.vercel.app"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold">Whiteboard</h2>
              <p className="mt-4">Show your inner art!</p>
            </a>
            <Link
              to="/notes"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold">Subject Tutorial</h2>
              <p className="mt-4">
                Notedown important points along with interactive Tutorials!
              </p>
            </Link>
            <Link
              to="/chatbot"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold">Wellness AI Chatbot</h2>
              <p className="mt-4">
                Get recommendations as per your mood with AcademateAI!
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-lightGreen-100 py-12 text-center">
        <div className="container mx-auto">
          {isAuthenticated && (
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Welcome, {user.name}!
              </h2>
              <p className="text-lg text-gray-800 mt-2">{user.email}</p>
              <div className="flex justify-center space-x-4 mt-4">
                <Link
                  to="/mentee"
                  className="bg-white text-green-500 py-2 px-6 rounded-lg font-semibold shadow hover:bg-green-500 hover:text-white transition duration-300"
                >
                  Go to Dashboard
                </Link>
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="bg-red-500 text-white py-2 px-6 rounded-lg font-semibold shadow hover:bg-red-600 hover:text-white transition duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
