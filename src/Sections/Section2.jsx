
import { CiWallet } from "react-icons/ci";

import { SiDogecoin } from "react-icons/si";
import { TbCoinTaka } from "react-icons/tb";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import AnimateItem from "../components/AnimationItem";
import BlurEffect from "../components/BlurEffect";

const Section2 = () => {
  return (
    <main className="md:my-10 my-5 relative py-10 md:py-20 flex bg-neutral-400 dark:bg-neutral-950 justify-center flex-col items-center w-full">
      <div className="mt-10 lg:w-[80vw] gap-10 md:gap-x-6 w-full px-4 md:px-4 grid  md:grid-cols-2 grid-cols-1">
        <AnimateItem
          direction="top"
          delay={0.1}
          className="lg:direction-left md:direction-right sm:direction-bottom">
          <div className=" flex items-center cursor-pointer justify-center ">
            <div className="  dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8] rounded-md  ">
              <a href="/#" target="_blank">
                <CiWallet className="w-14 h-14 m-3 dark:text-[#ad1aa0]/80 text-[#0085a8]/80" />{" "}
              </a>
            </div>

            <div className="flex items-start w-[80vw] md:w-[60vw] ml-6 flex-col">
              <h2 className="font-bold text-md md:text-lg text-center  leading-[55px]  lg:leading-normal bg-gradient-to-r from-[#AD1AAF] via-[#0085a8] to-[#0085a8] dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] to-inherit[#0085a8] dark:to-neutral-500 bg-clip-text font-orbitron text-transparent">
                The Address Wallet:
              </h2>
              <p className="font-sans text-sm w-full">
                Register now, Manage assets, build wealth.
              </p>
            </div>
          </div>
        </AnimateItem>
        <AnimateItem
          direction="left"
          delay={0.2}
          className="lg:direction-bottom cursor-pointer md:direction-top sm:direction-right">
          <div className=" flex items-center cursor-pointer justify-center">
            <div className="  dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8] rounded-md  ">
              <a href="/#" target="_blank">
                <SiDogecoin className="w-14 h-14 m-3 dark:text-[#ad1aa0]/80 text-[#0085a8]/80" />{" "}
              </a>
            </div>

            <div className="flex items-start w-[80vw] md:w-[60vw] ml-6 flex-col">
              <h2 className="font-bold text-md md:text-lg  w-full mb-3  lg:leading-normal bg-gradient-to-r from-[#AD1AAF] via-[#0085a8] to-[#0085a8]  dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] to-inherit[#0085a8] dark:to-neutral-500 bg-clip-text font-orbitron text-transparent">
                Get DRC Token (Deeproots Coin):
              </h2>
              <p className="font-sans text-sm w-full">
                Limited Supply, Distributed Over 41 Years - Here to Stay.
              </p>
            </div>
          </div>
        </AnimateItem>
        <AnimateItem
          direction="right"
          delay={0.3}
          className="lg:direction-right md:direction-left sm:direction-top">
          <div className=" flex items-center cursor-pointer justify-center ">
            <div className="  dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8] rounded-md  ">
              <a href="/#" target="_blank">
                <TbCoinTaka className="w-14 h-14 m-3 dark:text-[#ad1aa0]/80 text-[#0085a8]/80" />{" "}
              </a>
            </div>

            <div className="flex items-start w-[80vw] md:w-[60vw] ml-6 flex-col">
              <h2 className="font-bold text-md md:text-lg text-center   leading-[55px]  lg:leading-normal bg-gradient-to-r from-[#AD1AAF] via-[#0085a8] to-[#0085a8]  dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] to-inherit[#0085a8] dark:to-neutral-500 bg-clip-text font-orbitron text-transparent">
                TelexCoin:
              </h2>
              <p className="font-sans text-sm w-full">
                {" "}
                Join and grow the future of trading.
              </p>
            </div>
          </div>
        </AnimateItem>
        <AnimateItem
          direction="bottom"
          delay={0.4}
          className="lg:direction-top md:direction-bottom sm:direction-left">
          <div className=" flex items-center cursor-pointer  justify-center">
            <div className=" dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8] rounded-md  ">
              <a href="/#" target="_blank">
                <LiaNetworkWiredSolid className="w-14 h-14 m-3 dark:text-[#ad1aa0]/80 text-[#0085a8]/80" />{" "}
              </a>
            </div>

            <div className="flex items-start w-[80vw] md:w-[60vw] ml-6 flex-col">
              <h2 className="font-bold md:text-lg text-md text-center   leading-[55px]  lg:leading-normal bg-gradient-to-r from-[#AD1AAF] via-[#0085a8] to-[#0085a8]  dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] to-inherit[#0085a8] dark:to-neutral-500 bg-clip-text font-orbitron text-transparent">
                DeepRoots Network.
              </h2>
              <p className="font-sans w-full text-sm">
                The First Truly Dynamic, Scalable, and Borderless Blockchain.
              </p>
            </div>
          </div>
        </AnimateItem>
      </div>
      <BlurEffect
        color="#ad1aa0"
        className="w-60 h-60 absolute lg:bottom-16 lg:left-0 bg-[#ad1aa0] blur-[300px] md:blur-[300px] hidden lg:flex rounded-full"
      />
    </main>
  );
};

export default Section2;
