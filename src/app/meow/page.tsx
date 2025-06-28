// meowBot.tsx
import React from "react";

export default function MeowBot() {
  return (
    <div className="md:text-center px-6 md:px-20 text-left mb-12 md:mb-24 py-24 lg:py-48">
      <div className="content md:w-2/3 mx-auto mb-8">
        <h1 className="text-left text-3xl font-medium md:text-7xl mb-4">
          <a href="https://github.com/ukhan1219/meowbot" className="hoverlink">
            meowBot{">"}
          </a>
        </h1>
        <p className="text-left mb-8 text-sm font-extralight">
          <strong>Updated:</strong> February 10, 2024
        </p>

        <p className="text-left text-3xl font-medium md:break-words mb-2">
          A Discord bot designed to bring fun and interaction to any server
        </p>
        <p className="text-left md:break-words mb-12 font-light">
          meowBot is a Discord bot designed to bring a bit of fun and
          interaction to any server. Hosted on Google Cloud Platform and using
          SQLite for database management, this bot simulates a virtual cat that
          responds to various triggers and allows users to interact with it
          through a petting feature.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">
          Project Overview
        </h2>
        <p className="text-left mb-4 font-light">
          meowBot offers a range of functionalities:
        </p>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>
            <strong>Cat Trigger Responses</strong>: Responds with randomly
            generated cat-related messages when triggered by certain keywords.
          </li>
          <li>
            <strong>Pet Tracker</strong>: Users can “pet” the virtual cat every
            30 minutes, receiving a random number between 1 and 100 with
            different rarities. The bot tracks each user’s total pet counts and
            prevents exploitation with a cooldown.
          </li>
          <li>
            <strong>Leaderboard</strong>: Displays a leaderboard of users with
            the highest pet counts.
          </li>
          <li>
            <strong>Pet Timer</strong>: Notifies users of when they can pet the
            virtual cat again.
          </li>
        </ul>

        <h3 className="text-left text-xl font-medium mb-2">Key Features</h3>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>
            <strong>Random Responses</strong>: The bot generates random
            responses to cat-related triggers like “meow,” “mrow,” and “:3”.
          </li>
          <li>
            <strong>Petting Mechanism</strong>: Each pet command returns a
            randomly generated number of additional pets, tracked per user.
          </li>
          <li>
            <strong>Leaderboard</strong>: Shows the top users with the most pet
            counts in the server.
          </li>
          <li>
            <strong>Cooldown Timer</strong>: Prevents users from spamming pet
            commands by enforcing a 30-minute cooldown.
          </li>
        </ul>

        <h3 className="text-left text-xl font-medium mb-2">How It Works</h3>
        <ol className="list-decimal text-left ml-8 mb-8 font-light">
          <li>
            <strong>Setup:</strong> The bot connects to a SQLite database to
            manage pet statistics. It creates a table to store user data,
            including pet counts and last petting times.
          </li>
          <li>
            <strong>Message Handling:</strong> Responds to commands:
            <ul className="list-disc ml-8 mt-1">
              <li>
                <code>!pet</code> – Allows users to pet the cat and updates
                their pet count.
              </li>
              <li>
                <code>!petleaderboard</code> – Shows the top users with the most
                pets.
              </li>
              <li>
                <code>!pettimer</code> – Informs users when they can pet the cat
                again.
              </li>
            </ul>
          </li>
          <li>
            <strong>Trigger Responses:</strong> Sends a random cat-related
            response when specific triggers are detected in message content.
          </li>
        </ol>

        <h3 className="text-left text-xl font-medium mb-2">Code Explanation</h3>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>
            <strong>Database Management</strong>: Uses SQLite to store and
            retrieve pet statistics. The <code>pet_stats</code> table holds data
            on pet counts and last petting times.
          </li>
          <li>
            <strong>Bot Events</strong>: Listens for messages and handles
            commands to interact with the virtual cat.
          </li>
          <li>
            <strong>Randomness</strong>: Utilizes the <code>random</code> module
            to generate responses and determine the number of pets added.
          </li>
        </ul>

        <h3 className="text-left text-xl font-medium mb-2">Getting Started</h3>
        <ol className="list-decimal text-left ml-8 mb-8 font-light">
          <li>Clone this repository.</li>
          <li>
            Set up a Google Cloud Platform project and configure your
            environment to run the bot.
          </li>
          <li>
            Install required Python libraries:
            <br />
            <code>pip install discord sqlite3 python-dotenv</code>
          </li>
          <li>
            Create a <code>.env</code> file in the root directory and add your
            Discord API key:
            <br />
            <code>DISCORD_API_KEY=your_discord_api_key_here</code>
          </li>
          <li>
            Run the bot:
            <br />
            <code>python meow_bot.py</code>
          </li>
        </ol>

        <h3 className="text-left text-xl font-medium mb-2">Prerequisites</h3>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>Python 3.x</li>
          <li>Discord API account and token</li>
          <li>Google Cloud Platform account for hosting</li>
        </ul>

        <h3 className="text-left text-xl font-medium mb-2">Contributing</h3>
        <p className="text-left mb-8 font-light">
          Contributions to improve meowBot are welcome! Feel free to reach out
          for improvements and advancements.
        </p>
      </div>
    </div>
  );
}
