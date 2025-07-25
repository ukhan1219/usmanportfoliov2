import Carousel from "./components/Carousel";
export default function Home() {
  return (
    <div className="px-6 md:px-24 text-left mt-8 mb-16 md:mb-36 py-28 lg:py-48 h-[calc(100vh-11rem)]">
      {/* Name Section */}
      <h1 className="text-2xl md:text-4xl font-regular mb-4 md:mb-12 lg:px-1">
        Usman Khan
      </h1>

      {/* One-Liner Section */}
      <h2 className="text-3xl font-medium md:text-5xl lg:text-7xl break-words mb-6 md:mb-8 md:w-3/4">
        Driven by curiosity, growth, and passion—creating solutions, building
        connections, & discovering the world.
      </h2>

      {/* Supporting Description */}
      <p className="text-lg md:text-2xl break-words md:w-2/3 font-extralight">
        developer, polymath, adventurer, gastronome, aesthete, photographer, &
        audiophile looking to sharpen and share my skills with humanity
      </p>

      {/* Carousel Section */}
      <div className="mt-12">
        <Carousel />
      </div>

      <div className="text-left">
        <h1 className="text-3xl mt-12 mb-4 font-medium break-words">about</h1>
      </div>
      <div className="mb-12">
        <div>
          <ul className="space-y-4">
            <li>
              <span className="font-light break-words md:w-2/3">
                i’m a computer science student at UCF aspiring to become a
                full-stack software engineer, driven by a passion for machine
                learning, AI, and investing. <br />
                <br />
                i thrive on problem-solving, collaboration, and innovation,
                aiming to use technology to help others succeed. Dedicated to
                staying at the forefront of AI/ML advancements, i’m always eager
                to integrate these tools into my projects and grow as a
                developer. <br />
                <br />
                outside of tech, i enjoy cooking, traveling, rock climbing,
                exploring new places, photography, fashion, music, and meeting
                new people. let’s connect to chat about tech, life, or exciting
                ideas!
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-left">
        <h1 className="text-3xl mt-4 mb-4 font-medium">work</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 mb-12">
        {/* -- Column 1 -- */}
        <div className="md:col-start-1 md:row-start-1">
          <a href="/mantle" className="font-medium block hoverlink">
            mantle{">"}
          </a>
          <span className="font-extralight block">
            locally hosted 8b parameter llm on ios
          </span>
        </div>
        <div className="md:col-start-1 md:row-start-2">
          <a href="/glance" className="font-medium block hoverlink">
            glance{">"}
          </a>
          <span className="font-extralight block">
            your personal finance at a glance
          </span>
        </div>
        {/* -- Column 2 -- */}
        <div className="md:col-start-2 md:row-start-1">
          <a href="/mend" className="font-medium block hoverlink">
            mend{">"}
          </a>
          <span className="font-extralight block">
            ai powered journaling for mental health
          </span>
        </div>
        <div className="md:col-start-2 md:row-start-2">
          <a href="/fit" className="font-medium block hoverlink">
            fit{">"}
          </a>
          <span className="font-extralight block">
            personal fitness journal and progress tracker
          </span>
        </div>
        {/* -- Column 3 -- */}
        <div className="md:col-start-3 md:row-start-1">
          <a href="/stock" className="font-medium block hoverlink">
            stockBot{">"}
          </a>
          <span className="font-extralight block">
            a robust, adaptable tool for analyzing and predicting market
            movements
          </span>
        </div>
        <div className="md:col-start-3 md:row-start-2">
          <a href="/ceta" className="font-medium block hoverlink">
            ceta{">"}
          </a>
          <span className="font-extralight block">
            ml/ai research leveraging DARPA dataset for corporate entities
          </span>
        </div>
        {/* -- Column 4 -- */}
        <div className="md:col-start-4 md:row-start-1">
          <a href="/portfolio" className="font-medium block hoverlink">
            portfolio{">"}
          </a>
          <span className="font-extralight block">this website</span>
        </div>
        <div className="md:col-start-4 md:row-start-2">
          <a href="/meow" className="font-medium block hoverlink">
            meowBot{">"}
          </a>
          <span className="font-extralight block">
            interactive discord bot
          </span>
        </div>
      </div>
      <p className="flex flex-col items-center text-center py-6">
        if you know what you love, if you know what you are good at, if you know
        what you can be paid for, and if you know what the world needs, you have
        fulfilled the japanese reason for being. <br />{" "}
        <strong>--ikigai, 生きがい</strong>
      </p>
    </div>
  );
}

// Learning, growing, solving problems—exploring the world, connecting with people, and creating through photography and fashion.
// Driven by curiosity, growth, and passion—creating solutions, building connections, and discovering life.
// Committed to learning, growing, and solving meaningful problems—while exploring the world, connecting with people, and creating through photography and fashion.
// Learning, growing, solving problems—exploring the world, & creating through photography and fashion.

// <p className="flex flex-col items-center text-center py-6">“Patience is not sitting and waiting, it is foreseeing. It is looking at the thorn and seeing the rose, looking at the night and seeing the day. Lovers are patient and know that the moon needs time to become full.” <br/> -Rumi</p>
