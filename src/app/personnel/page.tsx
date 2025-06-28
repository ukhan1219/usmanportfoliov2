// personnelManagement.tsx

import React from "react";

export default function PersonnelManagement() {
  return (
    <div className="md:text-center px-6 md:px-20 text-left mb-12 md:mb-24 py-24 lg:py-48">
      <div className="content md:w-2/3 mx-auto mb-8">
        <h1 className="text-left text-3xl font-medium md:text-7xl mb-4">
          <a
            href="https://github.com/ukhan1219/personnelManagement"
            className="hoverlink"
          >
            Personnel Management{">"}
          </a>
        </h1>

        <p className="text-left mb-8 text-sm font-extralight">
          <strong>Updated:</strong> November 15, 2023
        </p>

        <p className="text-left text-3xl font-medium md:break-words mb-2">
          Java-based application leveraging OOP for managing students, faculty,
          and staff
        </p>
        <p className="text-left md:break-words mb-12 font-light">
          PersonnelManagement is a Java-based application designed using
          Object-Oriented Programming (OOP) principles to manage and organize
          information about students, faculty, and staff. The script handles
          various details and provides outputs in both console and file formats.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">
          Project Overview
        </h2>
        <p className="text-left mb-4 font-light">
          The PersonnelManagement application is structured to store and manage
          information in a clear and organized manner. It uses arrays to hold
          data for three distinct categories:
        </p>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>
            <strong>Students</strong>: Contains information such as GPA, credit
            hours, name, ID, and tuition due.
          </li>
          <li>
            <strong>Faculty</strong>: Holds details like department, rank, name,
            and ID.
          </li>
          <li>
            <strong>Staff</strong>: Includes data on department, status, name,
            and ID.
          </li>
        </ul>

        <h3 className="text-left text-xl font-medium mb-2">Features</h3>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>
            <strong>User Input</strong>: The application allows users to input
            data for students, faculty, and staff.
          </li>
          <li>
            <strong>Data Storage</strong>: Information is stored in respective
            arrays for easy management and retrieval.
          </li>
          <li>
            <strong>Output</strong>: The program provides a console and file
            output of the details for each entity, using an overridden print
            function to format data.
          </li>
          <li>
            <strong>Error Handling</strong>: Utilizes try-catch statements to
            handle potential errors during input and processing.
          </li>
          <li>
            <strong>Iterative Input</strong>: Implements do-while loops to allow
            multiple entries until the user decides to stop.
          </li>
        </ul>

        <h3 className="text-left text-xl font-medium mb-2">How It Works</h3>
        <ol className="list-decimal text-left ml-8 mb-8 font-light">
          <li>
            <strong>Input Collection</strong>: Users input details for students,
            faculty, and staff. The data is stored in arrays based on the entity
            type.
          </li>
          <li>
            <strong>Data Output</strong>: Once complete, the program displays
            information using an overridden print function, both in the console
            and in a file.
          </li>
          <li>
            <strong>Error Handling</strong>: The application uses try-catch
            blocks to manage exceptions and ensure smooth operation.
          </li>
          <li>
            <strong>Iterative Process</strong>: The do-while loops allow
            repeated data entry until the user completes the process.
          </li>
        </ol>

        <h3 className="text-left text-xl font-medium mb-2">Getting Started</h3>
        <ol className="list-decimal text-left ml-8 mb-8 font-light">
          <li>Clone this repository.</li>
          <li>Compile the Java project in your preferred IDE.</li>
          <li>
            Run the application and follow the prompts to input data for
            students, faculty, and staff.
          </li>
          <li>
            Review the console and file outputs for detailed information on the
            entered entities.
          </li>
        </ol>

        <h3 className="text-left text-xl font-medium mb-2">Prerequisites</h3>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>Java Development Kit (JDK)</li>
          <li>A Java IDE such as IntelliJ IDEA, Eclipse, or NetBeans</li>
        </ul>

        <h3 className="text-left text-xl font-medium mb-2">Contributing</h3>
        <p className="text-left mb-8 font-light">
          If you have suggestions for enhancing the application or adding new
          features, feel free to reach out for improvements and advancements.
          Contributions to improve the functionality or usability of
          PersonnelManagement are welcome.
        </p>
      </div>
    </div>
  );
}
