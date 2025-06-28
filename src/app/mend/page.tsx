import React from "react";

export default function Mend() {
  return (
    <div className="md:text-center px-6 md:px-20 text-left mb-12 md:mb-24 py-24 lg:py-48">
      <div className="content md:w-2/3 mx-auto mb-8">
        <h1 className="text-left text-3xl font-medium md:text-7xl mb-4">
          <a
            href="https://github.com/ukhan1219/m3nd"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverlink"
          >
            Mend {">"}
          </a>
        </h1>
        <p className="text-left mb-8 text-sm font-extralight">
        <strong>Updated:</strong> December 01, 2024
        </p>

        <p className="text-left mb-4 font-light">
          Mend is a full-stack digital journaling application designed to
          provide a safe, private, and supportive space for users to explore
          their thoughts and emotions. By integrating an AI-powered analysis
          feature, Mend acts as a friendly mental wellness companion, offering
          empathetic insights and practical advice to help users on their
          mental health journey.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">Demo</h2>
        <p className="text-left mb-4 font-light">
          <a
            href="https://youtu.be/IG7M7hiEpI4"
            className="hoverlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch the demo on YouTube{">"}
          </a>
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">Project Purpose</h2>
        <p className="text-left mb-4 font-light">
          Mend was born from a desire to support individuals who face a stigma
          around mental health. It was created to bridge the gap for those in
          unsupportive environments, offering a first step into mental wellness
          in a private and non-judgmental way. The core idea is to provide
          friendly, AI-driven feedback that feels like talking to a
          compassionate friend, preparing users to seek professional therapy
          when they are ready.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">
          How It Works: The Full-Stack Architecture
        </h2>
        <p className="text-left mb-4 font-light">
          Mend is built on a modern, decoupled architecture that separates the
          user-facing application from the core backend logic to ensure a secure,
          scalable, and maintainable system.
        </p>

        <h3 className="text-left text-xl font-medium mb-2">
          1. React Frontend
        </h3>
        <p className="text-left mb-4 font-light">
        A responsive Single-Page Application
            (SPA) built with React and TypeScript, using Vite for a fast
            development experience and styled with Tailwind CSS.
        </p>
        <h3 className="text-left text-xl font-medium mb-2">
          2. Node.js Backend:
        </h3>
        <p className="text-left mb-4 font-light">
        A robust REST API built with
            Node.js and the Express.js framework, handling user authentication
            with Passport.js and secure communication with the OpenAI API.
        </p>
        <h3 className="text-left text-xl font-medium mb-2">
          3. MongoDB Database:
        </h3>
        <p className="text-left mb-4 font-light">
        A NoSQL database hosted on Atlas,
            serving as the application&apos;s data store for user profiles and
            journal entries.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">Technology Stack</h2>
        <ul className="list-disc text-left ml-8 mb-4 font-light space-y-2">
          <li>
            <strong>Frontend:</strong> React 18, TypeScript, Vite, React Router
            v7, Tailwind CSS
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js, Passport.js,
            express-session, bcrypt
          </li>
          <li>
            <strong>Database:</strong> MongoDB (hosted on Atlas)
          </li>
          <li>
            <strong>External APIs:</strong> OpenAI API (gpt-4o-mini)
          </li>
        </ul>

        <h2 className="text-left text-2xl font-medium mb-2">
          Accomplishments & Learnings
        </h2>
        <ul className="list-disc text-left ml-8 mb-4 font-light space-y-2">
          <li>
          The team successfully designed and deployed a full-stack application
          using agile methodologies.
          </li>
          <li>
          A key accomplishment was achieving low
          latency between submitting a journal entry and receiving the AI
          analysis, creating a seamless user experience.
          </li>
          <li>
          The main challenge was
          managing application state across the frontend and ensuring it
          remained synchronized with the backend, which provided a deep dive
          into best practices for building secure and scalable APIs.
          </li>
        </ul>

        <h2 className="text-left text-2xl font-medium mb-2">Future Work</h2>
        <ul className="list-disc text-left ml-8 mb-4 font-light space-y-2">
          <li>
          A key feature planned for a future release is an overall tone
          analysis, which will display a color-coded indicator on the user&apos;s
          dashboard to give them an at-a-glance impression of their emotional
          state over time.
          </li>
        </ul>
      </div>
    </div>
  );
}
