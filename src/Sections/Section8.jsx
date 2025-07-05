import AnimateItem from "../components/AnimationItem";
import AnimatedText from "../components/AnimationText";

import img from "../assets/rootopia.jpeg";

import BlurEffect from "../components/BlurEffect";


const Section8 = () => {
  return (
    <main className="my-20 relative  bg-neutral-400 dark:bg-neutral-950 p-10">
      <div className="flex justify-center flex-row items-center w-full"></div>
      <div className="flex justify-center flex-col lg:flex-row rounded-2xl items-center w-full">
        <AnimateItem direction="right" delay={0.2}>
          <div className="w-full lg:flex hidden ">
            <img src={img} alt="" className="rounded-2xl" />
          </div>
        </AnimateItem>
        <div className=" flex justify-center lg:ml-32 items-start w-full  flex-col">
          <div className=" mt-6 ">
            <AnimatedText
              text=" ROOTOPIA RACE"
              animation="fade"
              as="h1"
              className="font-extrabold text-2xl text-center lg:text-start lg:text-4xl  mb-10  lg:leading-normal  bg-gradient-to-r from-[#0085a8]  to-[#a45204] bg-clip-text font-orbitron text-transparent"
            />
            <AnimateItem direction="right" delay={0.2}>
              <div className="w-full  lg:hidden flex ">
                <img src={img} alt="" className="rounded-2xl" />
              </div>
            </AnimateItem>
         
            <h3 className="font-orbitron font-bold text-xl  leading-normal w-full">
              Step into Rootopia World Race
            </h3>
          </div>
          <p className=" font-sans mt-5 lg:w-[500px] md:w-[70vw]">
            Game on! The Ultimate Race Begins Soon- Get Ready to compete! Are
            you ready to claim your victory?
          </p>
          <div className=" flex justify-center lg:mt-6 items-center flex-col md:flex-row">
            <button className="mt-6 lg:mt-10  mr-6 px-6 font-orbitron py-3 text-center border-2 dark:border-[#0085a8] border-[#0085a8] hover:scale-105 hover:text-[#0085a8] transition-all   hover:ease-in-out text-white rounded-lg  text-lg  tracking-wider ">
              Play Now
            </button>
          </div>
        </div>
      </div>

      <div className="z-0 text-lg">
        <BlurEffect
          color="#ad1aa0"
          className="w-72 h-72 absolute top-150 right-200 bg-[#ad1aa0] hidden lg:flex dark:bg-[#0085a8] blur-[300px] rounded-full"
        />
      </div>

      <div className="z-0 text-lg">
        <BlurEffect
          color="#0085a8"
          className="w-60 h-60 absolute lg:top-0 dark:lg:right-0 lg:right-16 bg-neutral-950 dark:bg-[#0085a8] blur-[300px] rounded-full"
        />
      </div>
    </main>
  );
};

export default Section8;
