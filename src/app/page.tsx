import Carousel from "./components/Carousel"
export default function Home() {
  return (
    <div className="px-6 md:px-24 text-left mt-8 mb-16 md:mb-36 py-28 lg:py-48 h-[calc(100vh-11rem)]">
      {/* Name Section */}
      <h1 className="text-2xl md:text-4xl font-regular mb-4 md:mb-12 lg:px-1">
        Usman Khan
      </h1>

      {/* One-Liner Section */}
      <h2 className="text-3xl font-medium md:text-7xl break-words mb-6 md:mb-8 md:w-3/4">
        Driven by curiosity, growth, and passion—creating solutions, building connections, & discovering the world.
      </h2>

      {/* Supporting Description */}
      <p className="text-lg md:text-2xl break-words md:w-2/3 font-extralight">
        developer, polymath, adventurer, gastronome, aesthete, photographer, & audiophile  looking to sharpen and share my skills with humanity
      </p>

      {/* Carousel Section */}
      <div className="mt-4">
        <Carousel />
      </div>

      <div className="text-left">
        <h1 className="text-3xl mt-4 mb-4 font-medium break-words">about</h1>
      </div>
      <div className="mb-12">
        <div>
          <ul className="space-y-4">
            <li>
              <span className="font-light break-words md:w-2/3">
                I’m a Computer Science student at UCF aspiring to become a full-stack software engineer, driven by a passion for machine learning, AI, and investing. <br /><br />
                I thrive on problem-solving, collaboration, and innovation, aiming to use technology to help others succeed. Dedicated to staying at the forefront of AI/ML advancements, I’m always eager to integrate these tools into my projects and grow as a developer. <br /><br />
                Outside of tech, I enjoy cooking, traveling, rock climbing, exploring new places, photography, fashion, music, and meeting new people. Let’s connect to chat about tech, life, or exciting ideas!
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-left">
        <h1 className="text-3xl mt-4 mb-4 font-medium">work</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <ul className="space-y-4">
            <li>
              <a href="/stock" className="font-medium block underline">
                stockBot
              </a>
              <span className="font-normal">a robust, adaptable tool for analyzing and predicting market movements</span>
            </li>
            <li>
              <a href="/glance" className="font-medium block underline">
                Glance
              </a>
              <span className="font-normal">your personal finance at a Glance</span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <a href="/ceta" className="font-medium block underline">
                ceta
              </a>
              <span className="font-normal">ml/ai research leveraging DARPA dataset for corporate entities</span>
            </li>
            <li>
              <a href="/portfolio" className="font-medium block underline">
                portfolio
              </a>
              <span className="font-normal">this website</span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <a href="/meow" className="font-medium block underline">
                meowBot
              </a>
              <span className="font-normal">interactive discord bot</span>
            </li>
            <li>
              <a href="/cre" className="font-medium block underline">
                cre underwriter
              </a>
              <span className="font-normal">underwriter for commercial real estate deals</span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <a href="/personnel" className="font-medium block underline">
                personnel management
              </a>
              <span className="font-normal">personnel manager and tracker</span>
            </li>
            <li>
              <a href="/parking" className="font-medium block underline">
                ucf parking
              </a>
              <span className="font-normal">find the ideal parking spot at ucf</span>
            </li>
          </ul>
        </div>
      </div>
      <p className="flex flex-col items-center text-center py-6">if you know what you love, if you know what you are good at, if you know what you can be paid for, and if you know what the world needs, you have fulfilled the japanese reason for being.  <br/> <strong>--ikigai, 生きがい</strong></p>
    </div>
  );
}


// export default function Home() {
//   return (
//     <div className="font-manrope px-6 md:px-12 lg:px-24 py-36 lg:py-48">
      
//       <section className="font-medium text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-8">
//         Usman Khan
//       </section>

//       <section className="font-medium text-4xl md:text-5xl lg:text-6xl mt-8 md:mt-12">
//       Learning, growing, solving problems—exploring the world, connecting with people, and creating through photography & fashion.
//       </section>

//       <section className="font-extrabold text-4xl md:text-5xl lg:text-6xl mt-4 md:mt-8">
      
//       </section>
//     </div>
//   );
// }

// Learning, growing, solving problems—exploring the world, connecting with people, and creating through photography and fashion.
// Driven by curiosity, growth, and passion—creating solutions, building connections, and discovering life.
// Committed to learning, growing, and solving meaningful problems—while exploring the world, connecting with people, and creating through photography and fashion.
// Learning, growing, solving problems—exploring the world, & creating through photography and fashion.

// <p className="flex flex-col items-center text-center py-6">“Patience is not sitting and waiting, it is foreseeing. It is looking at the thorn and seeing the rose, looking at the night and seeing the day. Lovers are patient and know that the moon needs time to become full.” <br/> -Rumi</p>