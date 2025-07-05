import { motion } from "framer-motion";
import {
  
  FaUsers,
  
 
  
} from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { GoGift } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { CiWallet } from "react-icons/ci";

import img from "../assets/the foundation.jpeg"
import BlurEffect from "../components/BlurEffect";
import { IoGameControllerOutline } from "react-icons/io5";

const foundationItems = [
  {
    icon: GoRocket,
    title: "Earn from Every Project",
    description: "Get a percentage of all new projects.",
  },
  {
    icon: GoGift,
    title: "Passive Rewards (12%)",
    description: "Automatically earn ecosystem rewards.",
  },
  {
    icon: FaUsers,
    title: "Referral Rewards",
    description: "Earn by inviting users to join with multi-user referrals.",
  },
  {
    icon: IoMdTime,
    title: "Early Access",
    description: "Exclusive whitelist and private project opportunities.",
  },
  {
    icon: IoGameControllerOutline,
    title: "RootOpia Game",
    description: "Play and win BIG blockchain rewards.",
  },
  {
    icon: CiWallet ,
    title: "Full Wallet Access",
    description: "Unlock staking, launchpad, and ecosystem updates.",
  },
];

const Section11 = () => {
    return (
      <section className="w-full bg-gray-400 dark:bg-gray-900 py-20 px-6 md:px-16 flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-[800px] h-[500px] mt-36 hidden lg:flex justify-center py-72 items-center flex-col  ">
          <img
            src={img}
            alt="Foundation"
            className="w-full rounded-lg shadow-lg"
          />
          <button className="mt-6 font-bold lg:mt- border-2 hidden md:flex hover:scale-105 dark:hover:border-2 dark:bg-gradient-to-r from-[#0085a8] to-amber-700 mr-6 px-6 font-orbitron py-3 text-center hover:border-2 dark-hover:border-[#0085a8] border-[#0085a8]  dark:hover:bg-none dark:hover:text-[#0085a8] transition-all   hover:ease-in-out  rounded-lg  text-2xl tracking-wider ">
            Join The Future
          </button>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl mb-5 font-bold font-orbitron text-gray-900 dark:text-white">
            THE FOUNDATION SEATS
          </h2>
          <div className="w-full lg:hidden ">
            <img
              src={img}
              alt="Foundation"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            {foundationItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 hover:scale-105 bg-white/70 dark:bg-gray-800 rounded-lg shadow-md">
                <item.icon className="text-5xl text-[#0085a5]" />
                <div>
                  <h3 className="text-lg font-semibold font-orbitron text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <button className="mt-6 font-bold lg:mt- border-2  lg:hidden hover:scale-105 dark:hover:border-2 dark:bg-gradient-to-r from-[#0085a8] to-amber-700 mr-6 px-6 font-orbitron py-3 text-center hover:border-2 dark-hover:border-[#0085a8] border-[#0085a8]  dark:hover:bg-none dark:hover:text-[#0085a8] transition-all   hover:ease-in-out  rounded-lg  text-lg tracking-wider ">
              Join The Future
            </button>
          </motion.div>
        </div>
        <div className="z-0 text-lg">
          <BlurEffect
            color="#0085a8"
            className="w-60 h-60 absolute lg:bottom-16 lg:right-0 bg-[#0085a8] blur-[300px] lg:dark:blur-[250px] rounded-full"
          />
        </div>
      </section>
    );
};

export default Section11;
