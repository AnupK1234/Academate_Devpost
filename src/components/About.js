import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-blue-300 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            About Academate
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            Academate is an all-in-one student productivity web app designed to
            help students stay organized, motivated, and efficient in their
            academic pursuits. With a range of features tailored to student
            needs, Academate aims to provide a comprehensive solution for
            managing tasks, setting goals, accessing resources, and connecting
            with peers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you're looking to register for events, engage in discussions,
            set and track your goals, read blogs for inspiration, utilize the
            Pomodoro technique for time management, chat with peers in real-time,
            follow subject tutorials with note-taking capabilities, or explore
            roadmaps and utilize a whiteboard for brainstorming and planning,
            Academate has you covered.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our mission is to empower students to succeed academically by
            providing them with the tools and resources they need to excel. With
            Academate, students can streamline their academic journey and make
            the most out of their learning experience.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Join us on this journey towards academic success with Academate!
          </p>
        </div>
        <div className="bg-gray-100 text-center py-4">
          <a
            href="/"
            className="text-gray-600 font-semibold hover:text-gray-900"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
