import React from "react";
import Image from "next/image";

export default function Glance() {
  return (
    <div className="md:text-center px-6 md:px-20 text-left mb-12 md:mb-24 py-24 lg:py-48">
      <div className="content md:w-2/3 mx-auto mb-8">
        <h1 className="text-left text-3xl font-medium md:text-7xl mb-4">
          <a
            href="https://github.com/ukhan1219/personal-finance"
            className="hoverlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Glance{">"}
          </a>
        </h1>
        <p className="text-left mb-8 text-sm font-extralight">
          <strong>Updated:</strong> July 22, 2024
        </p>

        <p className="text-left mb-4 font-light">
          Glance is a beautifully simple iOS application designed to give you an
          at-a-glance overview of your daily, weekly, and monthly spending. By
          securely connecting to your bank accounts, it provides a clean,
          minimalist interface focused on one thing: clarity in your personal
          finances. This project spans the full stack, from a native SwiftUI
          front end to a powerful Go backend, all tied together with modern

          cloud services.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">Demo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Image
            src="/IMG_3952.PNG"
            alt="Login Screen"
            width={400}
            height={800}
            className="rounded-lg"
          />
          <Image
            src="/IMG_3951.PNG"
            alt="Spending Dashboard"
            width={400}
            height={800}
            className="rounded-lg"
          />
          <div className="md:col-span-2">
            <Image
              src="/IMG_3954.PNG"
              alt="Account Linking"
              width={400}
              height={800}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>

        <h2 className="text-left text-2xl font-medium mb-2">
          Project Purpose
        </h2>
        <p className="text-left mb-4 font-light">
          Glance started as a hackathon project and has since evolved into
          a passion project and a powerful portfolio piece. The primary
          motivation was twofold: to build a real-world application that my
          friends and I could use, and to master new technologies like SwiftUI
          and Go. Glance showcases a full-stack skill set, from thoughtful
          UI/UX design on the frontend to secure, performant API development on
          the backend.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">
          How It Works: The Full-Stack Architecture
        </h2>
        <p className="text-left mb-4 font-light">
          Glance is built on a modern, decoupled architecture, ensuring
          security, scalability, and maintainability.
        </p>

        <h3 className="text-left text-xl font-medium mb-2">
          1. iOS Application (Frontend)
        </h3>
        <p className="text-left mb-4 font-light">
          The user-facing component is a native iOS app built entirely with
          SwiftUI. It uses Firebase Authentication for secure sign-in, the Plaid
          Link iOS SDK for connecting financial institutions, and communicates
          with the backend over a secure REST API.
        </p>

        <h3 className="text-left text-xl font-medium mb-2">
          2. Go Backend (API)
        </h3>
        <p className="text-left mb-4 font-light">
          A high-performance server written in Go, using the Gin web framework.
          It exposes REST API endpoints, verifies Firebase ID tokens to
          authenticate users, and securely communicates with the Plaid API to
          fetch and process transaction data.
        </p>

        <h3 className="text-left text-xl font-medium mb-2">
          3. Firebase & Plaid (Backend Services)
        </h3>
        <p className="text-left mb-4 font-light">
          Firebase Authentication acts as the identity provider, while Firestore
          is used to store user data and encrypted Plaid access tokens. Plaid
          acts as the secure bridge to financial institutions.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">Technology Stack</h2>
        <ul className="list-disc text-left ml-8 mb-4 font-light space-y-2">
          <li>
            <strong>iOS Application:</strong> Swift 5, SwiftUI, Plaid Link iOS
            SDK, Firebase SDK (Auth, Firestore), LocalAuthentication.
          </li>
          <li>
            <strong>Backend Server:</strong> Go (Golang), Gin Web Framework,
            Plaid Go Client, Firebase Admin Go SDK.
          </li>
          <li>
            <strong>Cloud & Database:</strong> Firebase Authentication,
            Firestore (NoSQL), Firebase Cloud Functions (TypeScript).
          </li>
        </ul>

        <h2 className="text-left text-2xl font-medium mb-2">
          Accomplishments & Learnings
        </h2>
        <ul className="list-disc text-left ml-8 mb-4 font-light space-y-2">
          <li>
            Successfully built and deployed a full-stack application from
            scratch using a new tech stack (Go and SwiftUI).
          </li>
          <li>
            Architected a secure and robust authentication and data flow,
            following best practices.
          </li>
          <li>
            Learned the intricacies of the Plaid API and the complexities of
            managing financial data integrations securely.
          </li>
        </ul>

        <h2 className="text-left text-2xl font-medium mb-2">Future Work</h2>
        <ul className="list-disc text-left ml-8 mb-4 font-light space-y-2">
          <li>
            Optimize backend calculations and database queries for performance.
          </li>
          <li>
            Enhance UI/UX with more detailed transaction views and date range
            filtering.
          </li>
          <li>
            Explore new features like budget setting and subscription tracking.
          </li>
        </ul>
      </div>
    </div>
  );
}
