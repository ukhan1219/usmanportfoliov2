// usman-portfolio.tsx

import React from 'react';

export default function UsmanPortfolio() {
  return (
    <div className="md:text-center px-6 md:px-20 text-left mb-12 md:mb-24 py-24 lg:py-48">
      {/* Use a narrower container for the text on larger screens */}
      <div className="content md:w-1/3 mx-auto mb-8">
        
        {/* Title (mirroring the h1 in your MDX) */}
        <h1 className="text-left text-3xl font-medium md:text-7xl mb-4">usmankhan.dev</h1>
        
        {/* Intro block, replicating the "My personal website..." text */}
        <p className="text-left mb-8 text-sm font-extralight">
          My personal website, built with{' '}
          <a
            href="https://nextjs.org/"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Next.js
          </a>
          ,{' '}
          <a
            href="https://tailwindcss.com/"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CSS
          </a>
          ,{' '}
          <a
            href="https://upstash.com?ref=chronark.com"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Upstash
          </a>
          ,{' '}
          <a
            href="https://www.contentlayer.dev/"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Contentlayer
          </a>
          , and deployed to{' '}
          <a
            href="https://vercel.com"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </a>
          .
        </p>

        {/* Vercel Deploy Button */}
        <div className="text-left mb-8">
          <a
            href="https://vercel.com/new/upstash/clone?demo-title=Next.js%20Portfolio%20with%20Pageview%20Counter&demo-description=Portfolio%20site%20with%20pageview%20counter%2C%20built%20with%20Next.js%2013%20App%20Router%2C%20Contentlayer%2C%20and%20Upstash%20Redis.&demo-url=https%3A%2F%2Fchronark.com%2F&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F1DA8n5a6WaP9p1FXf9LmUY%2Fc6264fa2732355787bf657df92dda8a1%2FCleanShot_2023-04-17_at_14.17.37.png&project-name=Next.js%20Portfolio%20with%20Pageview%20Counter&repository-name=nextjs-portfolio-pageview-counter&repository-url=https%3A%2F%2Fgithub.com%2Fchronark%2Fchronark.com&from=templates&integration-ids=oac_V3R1GIpkoJorr6fqyiwdhl17"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://vercel.com/button"
              alt="Deploy with Vercel"
              className="inline-block"
            />
          </a>
        </div>

        {/* Running Locally */}
        <h2 className="text-left text-2xl font-medium mb-2">Running Locally</h2>
        <p className="text-left mb-4 font-light">
          Clone the repository and install dependencies:
        </p>
        <pre className="bg-gray-800 p-4 rounded-md text-sm text-gray-100 mb-4">
          <code>
            git clone &quot;repo link&quot;
            <br />
            cd &quot;directory&quot;
          </code>
        </pre>
        <p className="text-left mb-4 font-light">
          Create a <code>.env</code> file similar to{' '}
          <code>.env.example</code>. Then run the dev server:
        </p>
        <pre className="bg-gray-800 p-4 rounded-md text-sm text-gray-100 mb-8">
          <code>
            pnpm install
            <br />
            pnpm dev
          </code>
        </pre>

        {/* Cloning / Forking */}
        <h2 className="text-left text-2xl font-medium mb-2">Cloning / Forking</h2>
        <p className="text-left font-light">
          Please remove all of my personal information (projects, images, etc.) 
          before deploying your own version of this site.
        </p>
      </div>
    </div>
  );
}
