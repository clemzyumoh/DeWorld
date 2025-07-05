import AnimateItem from "../components/AnimationItem";
import AnimatedText from "../components/AnimationText";
import { GoRocket } from "react-icons/go";
import img from "../assets/section3-img.jpeg";
import BlurEffect from "../components/BlurEffect";
import { IoMdCheckboxOutline } from "react-icons/io";
import { GiTrophyCup } from "react-icons/gi";
import { GiBullseye } from "react-icons/gi";
import { IoBarChartOutline } from "react-icons/io5";
import { SiOpenaccess } from "react-icons/si";
import { IoStarOutline } from "react-icons/io5";
//import { BookOpen, Feather, Star } from "lucide-react";
import Card from "../components/Card";
//import BookSlider from "../components/Slider";
const Section3 = () => {
  return (
    <main id="address" className="my-20 relative md:p-10  p-5">
      <div className="flex justify-center flex-col md:flex-row items-center w-full">
        <div className="flex justify-start w-full text- md:items-center lg:ml-10 lg:items-start lg:text-start items-start flex-col">
          <AnimatedText
            text=" THE ADDRESS WALLET"
            animation="fade"
            as="h1"
            className="font-extrabold text-2xl text-center lg:text-start lg:text-3xl   my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#0085a8]  to-orange-400 bg-clip-text font-orbitron text-transparent"
          />
          <div className="w-full  lg:hidden my-10">
            <img src={img} alt="" className="rounded-lg" />
          </div>
          <div className="flex justify-center  mt-6 items-center">
            <AnimateItem
              direction="top"
              delay={0.1}
              className="lg:direction-left  md:direction-right sm:direction-bottom">
              <GoRocket className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
            </AnimateItem>
            <AnimatedText
              text=" Start Earning Today!"
              animation="fade"
              as="h4"
              className="font-sans font-bold text-[#0085a8] ml-3 text-lg"
            />
          </div>
          <p className=" font-sans mt-5 lg:w-[500px] md:w-[70vw]  ">
            <span className="font-orbitron mb-5 font-bold">
              Warp Around Wealth - 9 Layers of Dynamic Finance.
            </span>
            {"  "}
          </p>
          <p className="font-sans my-3">
            More Than a Wallet, It's an Earning Machine. Activate & Begin Your
            Journey to wealth!
          </p>
          <p className=" font-sans mt-2 lg:w-[500px] md:w-[70vw] ">
            <span className="font-orbitron font-bold">
              Manage Asset | SEED | FOUNDATION | Refferal | Gaming & More.
            </span>{" "}
          </p>
          <div className=" flex justify-center lg:mt-6 items-center flex-col md:flex-row">
            <button className="mt-6 font-bold lg:mt-10 bg-gradient-to-r from-[#0085a8] to-orange-400 mr-6 px-6 font-orbitron py-3 text-center hover:bg-none hover:border-2 dark:border-[#0085a8] border-[#0085a8]  dark:hover:text-[#0085a8] transition-all   hover:ease-in-out  rounded-lg  text-lg  tracking-wider ">
              Activate Wallet
            </button>
          </div>
        </div>

        <AnimateItem direction="right" delay={0.2}>
          <div className="w-full hidden mr-20 lg:flex">
            <img src={img} alt="" className="w-full rounded-2xl" />
          </div>
        </AnimateItem>
      </div>
      <div className="hidden">
        <div className=""></div>
        <div className=" grid my-10 lg:grid-cols-3 md:gap-10 gap-6 md:grid-cols-2 grid-cols-1">
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <IoStarOutline className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text=" Referral Rewards."
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Share your wallet link with friends and split the rewards! your
              referral link stays active for anyone who joins and activates
              their wallet. Earn rewards continuosly as your network grows-until
              the limited token run out.
            </p>
          </div>
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <IoMdCheckboxOutline className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text=" Be an Early Bird!"
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Join the Foundation as an early supporter and earn loyalty rewards
              from every project built on the Deep Roots Blockchain. Limited
              spots available, so act fast!
            </p>
          </div>
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <SiOpenaccess className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text=" Exclusive Access"
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Get early access to new features, private events, and token
              launches. Limited minting opportunities in the first year-SUPPLY
              IS LIMITED
            </p>
          </div>
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <IoBarChartOutline className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text=" Manage Your Assets Efficiently"
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Set up your personal dashboard to easily track assets, monitor
              earnings, and view rewards.Earn a percentage of every token
              launched on the Deep Roots blockchain.
            </p>
          </div>
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <GiBullseye className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text="Don't Miss Out!"
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Total supply of Deep Roots Coin: 26.2 million, distributed over 25
              years. Secure your place now to maximize your rewards. Limited
              seats & limited supply-JOIN BEFORE IT'S TOO LATE.
            </p>
          </div>
          <div className="flex justify-start items-start flex-col dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aa0]  shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8]  w-fit backdrop-blur-md  transition-opacity bg-transparent px-4 my-6 rounded-2xl">
            <div className="flex justify-center  mt-6 items-center">
              <AnimateItem
                direction="top"
                delay={0.1}
                className="lg:direction-left  md:direction-right sm:direction-bottom">
                <GiTrophyCup className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]" />
              </AnimateItem>
              <AnimatedText
                text="RootOpia World Race Referral DashBoard."
                animation="fade"
                as="h4"
                className="font-sans ml-3 text-lg"
              />
            </div>
            <p className=" my-5">
              Complete in the world's biggest referral race & win from the
              million Pool!.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <BookSlider bg="bg-red-500" />
      </div> */}

      <div className="z-0 text-lg">
        <BlurEffect
          color="#0085a8"
          className="w-60 h-60 absolute lg:top-0 dark:lg:right-0 lg:right-16 bg-neutral-950 dark:bg-[#0085a8] blur-[300px] rounded-full"
        />
      </div>

      <div className="flex-wrap hidden gap-6  lg:grid-cols-3 p-3 md:p-10 md:grid-cols-2 grid-cols-1 bg-white mt-10 dark:bg-gray-800 rounded-lg shadow-lg w-full ">
        <AnimateItem
          delay={0.2}
          direction="left"
          className=" md:direction-left sm:direction-left">
          <Card
            icon={IoStarOutline}
            iconColor="#ff9f43"
            title="Referral Rewards."
            titleColor="#d63031"
            description="Share your wallet link with friends and split the rewards! your
              referral link stays active for anyone who joins and activates
              their wallet. Earn rewards continuosly as your network grows-until
              the limited token run out."
          />
        </AnimateItem>

        <AnimateItem
          delay={0.2}
          direction="top"
          className=" md:direction-right sm:direction-right">
          <Card
            icon={IoMdCheckboxOutline}
            iconColor="#00cec9"
            title=" Be an Early Bird!"
            titleColor="#0984e3"
            description="Join the Foundation as an early supporter and earn loyalty rewards
              from every project built on the Deep Roots Blockchain. Limited
              spots available, so act fast!"
          />
        </AnimateItem>

        <AnimateItem
          delay={0.2}
          direction="right"
          className="md:direction-left sm:direction-left">
          <Card
            icon={SiOpenaccess}
            iconColor="#f1c40f"
            title="Exclusive Access"
            titleColor="#2ecc71"
            description="Get early access to new features, private events, and token
              launches. Limited minting opportunities in the first year-SUPPLY
              IS LIMITED"
          />
        </AnimateItem>
        <AnimateItem
          delay={0.2}
          direction="left"
          className="md:direction-right sm:direction-right">
          <Card
            icon={IoBarChartOutline}
            iconColor="#d63031"
            title="Manage Your Assets Efficiently"
            titleColor="#ff9f43"
            description="  Set up your personal dashboard to easily track assets, monitor
              earnings, and view rewards.Earn a percentage of every token
              launched on the Deep Roots blockchain."
          />
        </AnimateItem>
        <AnimateItem
          delay={0.2}
          direction="bottom"
          className="md:direction-left sm:direction-left">
          <Card
            icon={GiBullseye}
            iconColor="#00cec9"
            title="Don't Miss Out!"
            titleColor="#0984e3"
            description=" Total supply of Deep Roots Coin: 26.2 million, distributed over 25
              years. Secure your place now to maximize your rewards. Limited
              seats & limited supply-JOIN BEFORE IT'S TOO LATE."
          />
        </AnimateItem>

        <AnimateItem
          delay={0.2}
          direction="right"
          className="md:direction-right sm:direction-right ">
          <Card
            icon={GiTrophyCup}
            iconColor="#f1c40f"
            title="RootOpia World Race Referral DashBoard."
            titleColor="#2ecc71"
            description=" Complete in the world's biggest referral race & win from the
              million Pool!."
          />
        </AnimateItem>
      </div>
    </main>
  );
};

export default Section3;
