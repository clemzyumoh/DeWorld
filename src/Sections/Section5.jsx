import AnimatedText from "../components/AnimationText";
import { ChevronRight } from "lucide-react";
import img from "../assets/asset5.jpeg"
import AnimateItem from "../components/AnimationItem";
import { IoDiamond } from "react-icons/io5";

const Section5 = () => {
  return (
    <main className="my-10  p-6 md:p-10">
      <div className=" flex justify-center items-center">
        <div className="flex justify-start  items-center w-full lg:mr-16 md:items-start flex-col">
          <AnimatedText
            text="Deep Assets: Transforming Real-World Assets into digital Value."
            animation="fade"
            as="h1"
            className="font-extrabold lg:max-w-[600px] text-2xl leading-[40px]  lg:text-start lg:text-3xl   my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#0085a8]  to-orange-800 bg-clip-text font-orbitron text-transparent"
          />
          <AnimateItem direction="right" delay={0.2}>
            <div className="w-full  lg:hidden flex my-5 ">
              <img src={img} alt="" className="rounded-2xl" />
            </div>
          </AnimateItem>
          <div className="flex items-start justify-center flex-col">
            <div className="flex items-center  my-4">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left   md:direction-right sm:direction-bottom">
                <IoDiamond className="w-10 h-10 mr-4 dark:text-amber-800 text-[#0085a8]" />
              </AnimateItem>
              <p className="  lg:w-[500px]  font-sans md:w-[70vw]">
                <span className="font-orbitron  font-bold">Tokenization</span> -
                Convert real-world value into digital ownership.
              </p>
            </div>
            <div className="flex items-center  my-4">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left   md:direction-right sm:direction-bottom">
                <IoDiamond className="w-10 h-10 mr-4 dark:text-amber-800 text-[#0085a8]" />
              </AnimateItem>
              <p className="  lg:w-[500px]  font-sans md:w-[70vw]">
                <span className="font-orbitron  font-bold">DeFi Access</span> -
                Unlock global financial.
              </p>
            </div>
            <div className="flex items-center  my-4">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left   md:direction-right sm:direction-bottom">
                <IoDiamond className="w-10 h-10 mr-4 dark:text-amber-800 text-[#0085a8]" />
              </AnimateItem>
              <p className="  lg:w-[500px]  font-sans md:w-[70vw]">
                <span className="font-orbitron  font-bold">
                  Secure Transactions
                </span>{" "}
                - Powering real estate, supply transaction.
              </p>
            </div>
            <div className="flex items-center  my-4">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left   md:direction-right sm:direction-bottom">
                <IoDiamond className="w-10 h-10 mr-4 dark:text-amber-800 text-[#0085a8]" />
              </AnimateItem>
              <p className="  lg:w-[500px]  font-sans md:w-[70vw]">
                <span className="font-orbitron  font-bold">
                  Transparency & Trust
                </span>{" "}
                - Ensure authenticity in every transaction.
              </p>
            </div>
            <div className="flex items-center  my-4">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left   md:direction-right sm:direction-bottom">
                <IoDiamond className="w-10 h-10 mr-4 dark:text-amber-800 text-[#0085a8]" />
              </AnimateItem>
              <p className="  lg:w-[500px]  font-sans md:w-[70vw]">
                <span className="font-orbitron  font-bold">Digital Identity</span> -
                Secure, verifiable records for a trusted future
              </p>
            </div>
          </div>
          <div className="mt-4 mb-6 font-sans ">
            <p>
              The DeepRoots Protocol makes real-world assets smarter, safer, and more accessible.
            </p>
          </div>
          <button className="py-3 font-sans text-neutral-200 text-lg px-5 bg-[#0085a8] dark:bg-amber-600  hover:bg-amber-800 rounded-lg flex justify-center items-center">
            Explore <ChevronRight className="ml-3" />
          </button>
        </div>
        <AnimateItem direction="right" delay={0.2}>
          <div className="w-full  lg:flex hidden ">
            <img src={img} alt="" className="rounded-2xl" />
          </div>
        </AnimateItem>
      </div>
    </main>
  );
};

export default Section5;
