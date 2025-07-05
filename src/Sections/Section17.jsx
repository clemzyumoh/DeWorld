
import podcastImage from "../assets/sax.webp";
import AnimateItem from "../components/AnimationItem";


const PodcastSection = () => {
  return (
    <section className="py-12 px-4 bg-gray-400 dark:bg-transparent">
      <h1 className="lg:text-5xl from-neutral-950 to-[#CF9345]  bg-gradient-to-t dark:from-[#FDB91A] dark:to-[#626159] text-transparent bg-clip-text text-4xl font-orbitron font-bold text-center mb-10">
        Our Podcast
      </h1>

      <div className="container lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Side: Details and Button */}
        <div className=" space-y-4">
          <h2 className="text-3xl font-orbitron font-semibold">
            <span className=" from-neutral-950 to-[#CF9345]  bg-gradient-to-t dark:from-[#FDB91A] dark:to-[#626159] text-transparent bg-clip-text">
              Saxophone
            </span>{" "}
            Live Podcast For Blockchain Insights
          </h2>

          <AnimateItem direction="left" delay={0.2}>
            <div className=" lg:hidden flex lg:w-1/2">
              <img
                src={podcastImage}
                alt="Podcast"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </AnimateItem>

          <p className="text-gray-600 dark:text-gray-300">
            Explore Deep Roots and the future of blockchain and DeWorld. Join us
            to shape the future, gain exclusive insights, collaborate with
            innovators, and be part of the community.
          </p>
          <button className="bg-[#CF9345] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#b8833d] transition duration-300">
            Join the Conversation
          </button>
        </div>

        {/* Right Side: Image */}
        <div className=" hidden lg:flex lg:w-1/2"></div>
        <AnimateItem direction="right" delay={0.2}>
          <img
            src={podcastImage}
            alt="Podcast"
            className="w-full hidden lg:flex  h-auto rounded-2xl shadow-lg"
          />
        </AnimateItem>
      </div>
    </section>
  );
};

export default PodcastSection;
