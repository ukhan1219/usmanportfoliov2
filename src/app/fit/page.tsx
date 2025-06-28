import React from "react";

export default function Fit() {
  return (
    <div className="md:text-center px-6 md:px-20 text-left mb-12 md:mb-24 py-24 lg:py-48">
      <div className="content md:w-2/3 mx-auto mb-8">
        <h1 className="text-left text-3xl font-medium md:text-7xl mb-4">
          <a
            href="https://github.com/ukhan1219/poosdlarge"
            className="hoverlink"
          >
            Fit{">"}
          </a>
        </h1>
        <p className="text-left mb-8 text-sm font-extralight">
          <strong>Updated:</strong> December 27, 2024
        </p>

        {/* Inspiration */}
        <h2 className="text-left text-2xl font-medium mb-2">Inspiration</h2>
        <p className="text-left mb-4 font-light">
          We created Fit out of a desire to simplify and gamify our personal
          fitness goals. Keeping track of workouts, nutrition, and progress can
          be cumbersome; Fit streamlines these tasks into a single,
          user-friendly interface.
        </p>

        {/* What it does */}
        <h2 className="text-left text-2xl font-medium mb-2">What it does</h2>
        <p className="text-left mb-4 font-light">
          Fit is a fitness tracker and journaling application. Users can log
          their daily workouts, track their health stats (BMI, weight, height),
          and monitor progress over time. By aggregating this data in one place,
          Fit helps users stay organized and motivated to reach their fitness
          goals.
        </p>

        {/* How we built it */}
        <h2 className="text-left text-2xl font-medium mb-2">How we built it</h2>
        <p className="text-left mb-4 font-light">
          We used the MERN stack to build Fit:
        </p>
        <ul className="list-disc text-left ml-8 mb-4 font-light">
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>TypeScript</li>
        </ul>
        <p className="text-left mb-4 font-light">
          The backend code sample (below) demonstrates how we manage RESTful
          endpoints for user authentication, workout logging, and other
          features. Additional technologies used include:
        </p>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>bcrypt for password hashing</li>
          <li>dotenv for environment variables</li>
          <li>body-parser for handling JSON requests</li>
          <li>cors for cross-origin resource sharing</li>
          <li>MongoDB Atlas for database hosting</li>
          <li>Heroku or other hosting platform for deployment</li>
          <li>GitHub for version control</li>
        </ul>

        {/* Challenges */}
        <h2 className="text-left text-2xl font-medium mb-2">
          Challenges we ran into
        </h2>
        <p className="text-left mb-8 font-light">
          Integrating a robust user authentication system was a key challenge,
          especially balancing security (password hashing, secure data handling)
          and ease of use. Additionally, ensuring our date-based workout logging
          worked seamlessly across timezones took a bit of fine tuning.
        </p>

        {/* Accomplishments */}
        <h2 className="text-left text-2xl font-medium mb-2">
          Accomplishments that we&#39;re proud of
        </h2>
        <p className="text-left mb-8 font-light">
          We successfully built an end-to-end CRUD application that enables
          users to sign up, log workouts, update their health data, and view
          historical records. We&#39;ve also implemented a dynamic
          date-filtering feature to make it easy for users to see what they did
          on any given day.
        </p>

        {/* What we learned */}
        <h2 className="text-left text-2xl font-medium mb-2">What we learned</h2>
        <p className="text-left mb-8 font-light">
          Working with the MERN stack taught us the importance of ensuring that
          each layer of the application communicates effectively. We learned
          advanced techniques in state management on the frontend, best
          practices for password handling on the backend, and the pitfalls of
          working with date objects in JavaScript and MongoDB.
        </p>

        {/* What's next */}
        <h2 className="text-left text-2xl font-medium mb-2">
          What&#39;s next for Fit
        </h2>
        <p className="text-left mb-8 font-light">
          We plan to add social features, such as the ability for users to
          follow friends, post updates, and share milestones. We&#39;re also
          exploring integrations with popular fitness wearables and meal-
          planning APIs to offer more robust tracking and journaling
          capabilities.
        </p>

        {/* How to run */}
        <h2 className="text-left text-2xl font-medium mb-2">How to run:</h2>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>
            <code>git clone</code>
          </li>
          <li>
            <code>cd fit</code>
          </li>
          <li>
            <code>npm install</code>
          </li>
          <li>
            <code>npm run start</code>
          </li>
        </ul>
      </div>
    </div>
  );
}
