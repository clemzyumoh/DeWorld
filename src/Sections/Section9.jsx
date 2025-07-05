import { motion } from "framer-motion";
import {
  Zap,
  Eye,
  Lock,
  Link,
  Globe,
  Handshake,
  RefreshCcw,
  Sliders,
  ShieldAlert,
  DollarSign,
  Hourglass,
  Lock as LockOpen,
  BadgeX,
} from "lucide-react";
import AnimatedText from "../components/AnimationText";

const decentralizedData = [
  { word: "Empowered", icon: <Zap size={20} className="text-green-600 mr-5 " /> },
  { word: "Transparent", icon: <Eye size={20} className="text-green-600 mr-5" /> },
  { word: "Secure", icon: <Lock size={20} className="text-green-600 mr-5" /> },
  { word: "Trustless", icon: <Link size={20} className="text-green-600 mr-5" /> },
  { word: "Global", icon: <Globe size={20} className="text-green-600 mr-5" /> },
  {
    word: "Inclusive",
    icon: <Handshake size={20} className="text-green-600 mr-5" />,
  },
  {
    word: "Resilient",
    icon: <RefreshCcw size={20} className="text-green-600 mr-5" />,
  },
];

const centralizedData = [
  { word: "Controlled", icon: <Sliders size={20} className="text-red-600 mr-5" /> },
  { word: "Limited", icon: <ShieldAlert size={20} className="text-red-600 mr-5" /> },
  { word: "Risky", icon: <DollarSign size={20} className="text-red-600 mr-5" /> },
  { word: "Corruptible", icon: <BadgeX size={20} className="text-red-600 mr-5" /> },
  {
    word: "Expensive",
    icon: <DollarSign size={20} className="text-red-600 mr-5" />,
  },
  {
    word: "Inefficient",
    icon: <Hourglass size={20} className="text-red-600 mr-5" />,
  },
  { word: "Exclusive", icon: <LockOpen size={20} className="text-red-600 mr-5" /> },
];

export default function ComparisonSection() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <div className="md:flex justify-around hidden items-center">
        <AnimatedText
          text="Centralized "
          animation="fade"
          as="h1"
          className="font-extrabold text-2xl text-center  md:text-3xl md:mb-20  mb-10  lg:leading-normal  bg-gradient-to-r from-[#0085a8]  to-[#a45204] bg-clip-text font-orbitron text-transparent"
        />{" "}
        <AnimatedText
          text="Comparison"
          animation="fade"
          as="h1"
          className="font-extrabold text-2xl text-center  md:text-3xl md:mb-20  mb-10  lg:leading-normal  bg-gradient-to-r from-[#0085a8]  to-[#a45204] bg-clip-text font-orbitron text-transparent"
        />{" "}
        <AnimatedText
          text="Decentralized "
          animation="fade"
          as="h1"
          className="font-extrabold text-2xl text-center  md:text-3xl md:mb-20  mb-10  lg:leading-normal  bg-gradient-to-r from-[#0085a8]  to-[#a45204] bg-clip-text font-orbitron text-transparent"
        />
      </div>

      <div className="md:grid grid-cols-1 hidden md:grid-cols-3 gap-6">
        {/* Centralized Column */}
      
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-red-100 dark:bg-neutral-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-red-700 dark:text-red-300  mb-8 flex items-center">
            <Sliders size={30} className="mr-6 text-red-600" /> Centralized
          </h3>
          <ul className="space-y-2">
            {centralizedData.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center mb-5 text-red-600 dark:text-red-200 font-medium"
                whileHover={{ scale: 1.1 }}>
                {item.icon} <span>{item.word}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <AnimatedText
          text="VS"
          animation="fade"
          as="h1"
          className="font-extrabold text-6xl text-center   mb-10  lg:leading-normal  bg-gradient-to-r from-[#0085a8]  to-[#a45204] bg-clip-text font-orbitron text-transparent"
        />

      
        {/* Decentralized Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-100 dark:bg-neutral-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-8 flex items-center">
            <Globe size={30} className="mr-6 text-green-600" /> Decentralized
          </h3>
          <ul className="space-y-2">
            {decentralizedData.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center mb-5 text-green-600 dark:text-green-200 font-medium"
                whileHover={{ scale: 1.1 }}>
                {item.icon} <span>{item.word}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:hidden md:grid-cols-3 gap-6">
        {/* Centralized Column */}
        <AnimatedText
          text="Centralized "
          animation="fade"
          as="h1"
          className="font-extrabold text-2xl text-center md:hidden md:text-3xl md:mb-20  mb-10  lg:leading-normal  bg-gradient-to-r from-[#0085a8]  to-[#a45204] bg-clip-text font-orbitron text-transparent"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-red-100 dark:bg-neutral-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-red-700 dark:text-red-300  mb-8 flex items-center">
            <Sliders size={30} className="mr-6 text-red-600" /> Centralized
          </h3>
          <ul className="space-y-2">
            {centralizedData.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center mb-5 text-red-600 dark:text-red-200 font-medium"
                whileHover={{ scale: 1.1 }}>
                {item.icon} <span>{item.word}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <AnimatedText
          text="VS"
          animation="fade"
          as="h1"
          className="font-extrabold text-6xl text-center   mb-10  lg:leading-normal  bg-gradient-to-r from-[#0085a8]  to-[#a45204] bg-clip-text font-orbitron text-transparent"
        />

        <AnimatedText
          text=" Decentralized"
          animation="fade"
          as="h1"
          className="font-extrabold text-2xl text-center md:hidden md:text-3xl md:mb-20  mb-10  lg:leading-normal  bg-gradient-to-r from-[#0085a8]  to-[#a45204] bg-clip-text font-orbitron text-transparent"
        />
        {/* Decentralized Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-100 dark:bg-neutral-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-8 flex items-center">
            <Globe size={30} className="mr-6 text-green-600" /> Decentralized
          </h3>
          <ul className="space-y-2">
            {decentralizedData.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center mb-5 text-green-600 dark:text-green-200 font-medium"
                whileHover={{ scale: 1.1 }}>
                {item.icon} <span>{item.word}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
