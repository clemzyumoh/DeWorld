import AnimatedText from "../components/AnimationText";
import { ChevronRight } from "lucide-react";
import img from "../assets/launch.webp";
import AnimateItem from "../components/AnimationItem";
import { GoRocket } from "react-icons/go";

const Section15 = () => {
  return (
    <main className="my-10 p-6 md:p-10 bg-gray-400 dark:bg-transparent">
      <div className="flex justify-center lg:px-20 items-center flex-col lg:flex-row">
        <div className="flex justify-start items-center w-full  md:items-start flex-col">
          <div className="flex justify-start lg:items-start items-center flex-col">
            <AnimatedText
              text="InnoLaunch:"
              animation="fade"
              as="h1"
              className="font-extrabold lg:max-w-[600px]  leading-[40px] lg:text-start text-3xl lg:leading-normal bg-gradient-to-r dark:from-[#F68082] from-[#97f4f3] to-[#97f4f3]  dark:to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
            />
            <AnimatedText
              text="Empowering DeWorld Projects on the Deep Roots Blockchain."
              animation="fade"
              as="h1"
              className="font-extrabold text-center lg:max-w-[600px] text-xl leading-[40px] lg:text-start lg:text-2xl  lg:leading-normal mb-3 bg-gradient-to-r dark:from-[#F68082] from-[#97f4f3] to-[#97f4f3]  dark:to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
            />
          </div>
          <AnimateItem direction="right" delay={0.2}>
            <div className="w-full lg:hidden flex my-5 ">
              <img src={img} alt="" className="rounded-2xl" />
            </div>
          </AnimateItem>
          <div className="flex items-start justify-center  flex-col">
            {[
              "First Round (InnoFi Funding).",
              "Private Foundation Round.",
              "External HNWI Investor Access.",
              "Community Deep Roots Referral System.",
              "Public Launch ON TeleXcoin DEX.",
              "Empowering Innovation.",
            ].map((text, index) => (
              <div key={index} className="flex items-center my-3">
                <AnimateItem direction="top" delay={0.1}>
                  <GoRocket className="w-8 h-8 mr-4  text-[#97F4F3] dark:text-[#F68082]" />
                </AnimateItem>
                <p className="lg:w-[500px] font-sans text-xl md:w-[70vw]">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <button className="py-3 font-bold mt-5 font-sans text-neutral-200 text-lg px-5 bg-[#f68082] hover:bg-[#97F4F3] hover:text-neutral-900 rounded-lg flex justify-center items-center">
            Launch <ChevronRight className="ml-3" />
          </button>
        </div>
        <AnimateItem direction="right" delay={0.2}>
          <div className="w-[600px] h-full lg:flex hidden ">
            <img src={img} alt="" className="rounded-2xl" />
          </div>
        </AnimateItem>
      </div>
    </main>
  );
};

export default Section15;
