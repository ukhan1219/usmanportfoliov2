// UCFParking.tsx

import React from 'react';

export default function UCFParking() {
  return (
    <div className="md:text-center px-6 md:px-20 text-left mb-12 md:mb-24 py-24 lg:py-48">
      {/* Use a narrower container for the text on larger screens */}
      <div className="content md:w-1/3 mx-auto mb-8">
        {/* Title */}
        <h1 className="text-left text-3xl font-medium md:text-7xl mb-4">UCFParking</h1>

        {/* Date (mirroring your “Updated:” style) */}
        <p className="text-left mb-8 text-sm font-extralight">
          <strong>Updated:</strong> July 15, 2023
        </p>

        {/* Intro Paragraph */}
        <p className="text-left text-3xl font-medium md:break-words mb-2">
          UCFParking is a project designed to simplify the often frustrating parking situation
          at the University of Central Florida (UCF).
        </p>
        <p className="text-left md:break-words mb-12 font-light">
          By leveraging several APIs and web scraping techniques, this tool helps me identify the
          most efficient parking options on campus, ultimately saving time and reducing stress
          during the parking process.
        </p>

        {/* Project Overview */}
        <h2 className="text-left text-2xl font-medium mb-2">Project Overview</h2>
        <p className="text-left mb-4 font-light">
          The UCFParking project uses the following technologies:
        </p>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>
            <strong>Twilio</strong>: To send SMS notifications directly to my phone with real-time
            parking information.
          </li>
          <li>
            <strong>Life360 API</strong>: To track my current location, allowing the system to tailor
            the parking options based on where I am on campus.
          </li>
          <li>
            <strong>Web Scraping</strong>: The project scrapes data from UCF&#39;s official parking website,
            which provides up-to-date information on the number of available spots in each garage.
          </li>
        </ul>

        {/* How It Works */}
        <h3 className="text-left text-xl font-medium mb-2">How It Works</h3>
        <ol className="list-decimal text-left ml-8 mb-8 font-light">
          <li>
            <strong>Location Tracking</strong>: Using the Life360 API, the project tracks my current
            location on or near UCF&#39;s campus.
          </li>
          <li>
            <strong>Data Scraping</strong>: The system scrapes the latest parking data from UCF&#39;s website,
            which lists available spots in each campus garage.
          </li>
          <li>
            <strong>Data Processing</strong>: The scraped data is converted into a readable format, listing
            all open garages and the number of available spots.
          </li>
          <li>
            <strong>SMS Notification</strong>: Twilio is then used to send a text message to my phone
            with the garage that has the most available spots, saving me time and helping me find
            parking more efficiently.
          </li>
        </ol>

        {/* Why This Project? */}
        <h3 className="text-left text-xl font-medium mb-2">Why This Project?</h3>
        <p className="text-left mb-8 font-light">
          Parking at UCF is notoriously difficult, especially during peak hours. This project aims
          to alleviate some of that stress by providing a quick and easy way to determine which
          garage offers the best chance of finding a spot, all in real-time.
        </p>

        {/* Getting Started */}
        <h2 className="text-left text-2xl font-medium mb-2">Getting Started</h2>
        <p className="text-left mb-2 font-light">
          To use UCFParking, follow these steps:
        </p>
        <ol className="list-decimal text-left ml-8 mb-8 font-light">
          <li>Clone this repository.</li>
          <li>Set up your Twilio and Life360 API keys in the configuration file.</li>
          <li>Run the scripts to begin tracking your location and receiving parking updates.</li>
          <li>
            You&#39;ll receive a text message with the best parking options every time you&#39;re near
            campus.
          </li>
        </ol>

        {/* Prerequisites */}
        <h3 className="text-left text-xl font-medium mb-2">Prerequisites</h3>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>Python 3.x</li>
          <li>Twilio API account and keys</li>
          <li>Life360 API account and keys</li>
          <li>Additional Python libraries: Requests, BeautifulSoup (for web scraping), etc.</li>
        </ul>

        {/* Contributing */}
        <h2 className="text-left text-2xl font-medium mb-2">Contributing</h2>
        <p className="text-left mb-8 font-light">
          Given the evolving nature of UCF&#39;s parking situation and potential updates to their website,
          contributions are welcome to keep this tool effective. Feel free to reach out for
          improvements and advancements.
        </p>
      </div>
    </div>
  );
}
