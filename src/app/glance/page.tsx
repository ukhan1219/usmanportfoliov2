// glance.tsx

import React from "react";

export default function Glance() {
  return (
    <div className="md:text-center px-6 md:px-20 text-left mb-12 md:mb-24 py-24 lg:py-48">
      <div className="content md:w-1/3 mx-auto mb-8">
        <h1 className="text-left text-3xl font-medium md:text-7xl mb-4">
          <a href="https://github.com/ukhan1219/glance">Glance{">"}</a>
        </h1>
        <p className="text-left mb-8 text-sm font-extralight">
          <strong>Updated:</strong> October 4, 2024
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">Inspiration</h2>
        <p className="text-left mb-4 font-light">
          A love for finance, machine learning and AI
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">What it does</h2>
        <p className="text-left mb-4 font-light">
          Glance allows you to have multiple financial accounts in the same
          place to avoid the redundancy of checking multiple platforms. It also
          provides market information and curated AI insights based on your
          spending habits and investments.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">How we built it</h2>
        <p className="text-left mb-4 font-light">
          We built it using the T3 stack which incorporates:
        </p>
        <ul className="list-disc text-left ml-8 mb-4 font-light">
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>TRPC</li>
        </ul>
        <p className="text-left mb-4 font-light">
          We used other technologies such as:
        </p>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>Next.js</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Prisma</li>
          <li>Heroku</li>
          <li>Figma</li>
          <li>GitHub</li>
          <li>Plaid API</li>
          <li>Gemini AI</li>
          <li>Polygon</li>
        </ul>

        <h2 className="text-left text-2xl font-medium mb-2">
          Challenges we ran into
        </h2>
        <p className="text-left mb-8 font-light">
          Challenges we ran into included attempting to use crypto APIs such as
          Binance, Coinbase, and Robinhood, which proved unfeasible given
          project scope (cost, time constraints, and the need for a registered
          business).
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">
          Accomplishments that we&#39;re proud of
        </h2>
        <p className="text-left mb-8 font-light">
          We successfully incorporated multiple challenging APIs (including
          Polygon and Plaid), experienced very few merge conflicts, securely
          implemented OAuth for user logins, and employed a modern stack (T3)
          despite no prior experience on our team.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">What we learned</h2>
        <p className="text-left mb-8 font-light">
          We learned how powerful frameworks can be for rapidly developing
          applications from scratch, how to route APIs, and that integrating
          certain APIs can be much harder than others.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">
          What&#39;s next for Glance
        </h2>
        <p className="text-left mb-8 font-light">
          We will continue working on Glance because we both have a passion for
          finance and making it more accessible. We&#39;re also deeply
          interested in ML/AI technologies. This project lets us demonstrate
          those interests and skills. Expect new developments, expanded
          features, and broader operations in the near future.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">How to run:</h2>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>
            <code>npm install</code>
          </li>
          <li>
            <code>npm run db:push</code>
          </li>
          <li>
            <code>npm run dev</code>
          </li>
        </ul>
      </div>
    </div>
  );
}
