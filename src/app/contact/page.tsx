import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="px-6 md:px-20 text-left mb-12 md:mb-24 py-24 lg:py-48">
      {/* Heading Section */}
      <div className="md:text-center md:w-1/3 mx-auto mb-8">
        <h1 className="text-left text-7xl font-medium mb-4">contact</h1>
        <p className="mb-8 text-left text-sm font-regular">I am always looking for new connections and people to talk to, so feel free to reach out!</p>

        {/* Github Link */}
        <div className="flex items-center text-left md:break-words mb-12 mt-12">
          <Github size={24} className="mr-4" />
          <a
            href="https://github.com/ukhan1219"
            target="_blank"
            rel="noopener noreferrer"
            className="font-light text-lg"
          >
            github{">"}
          </a>
        </div>

        {/* Email Link */}
        <div className="flex items-center text-left md:break-words mb-12">
          <Mail size={24} className="mr-4" />
          <a
            href="mailto:usman@usmankhan.dev"
            className="font-light text-lg"
          >
            email{">"}
          </a>
        </div>

        {/* LinkedIn Link */}
        <div className="flex items-center text-left md:break-words mb-12">
          <Linkedin size={24} className="mr-4" />
          <a
            href="https://linkedin.com/in/khanu/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-light text-lg"
          >
            linkedin{">"}
          </a>
        </div>
      </div>

      {/* <p className="text-left md:break-words mt-12">
        <a href="/" className="underline">
          &lt;home
        </a>
      </p> */}
    </div>
  );
};

export default Contact;
