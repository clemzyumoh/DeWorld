import { motion } from "framer-motion";
import {
  FaExchangeAlt,
  FaCubes,
  FaMoneyBillWave,
  FaShieldAlt,
  FaGamepad,
  FaSeedling,
  FaUsers,
  FaWallet,
  FaCoins,
  FaGlobe,
  FaGraduationCap,
  FaInnosoft,
} from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { RiSlideshow3Line } from "react-icons/ri";
import { LuVote } from "react-icons/lu";

// Puzzle Items
const puzzleItems = [
  {
    icon: FaExchangeAlt,
    title: "High-Frequency Trading & DEX",
    description: "Lightning-fast execution.",
  },
  {
    icon: FaCubes,
    title: "Asset Tokenization",
    description: "Trade fractional real-world assets.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Low-Cost Transactions",
    description: "Micro-payments with minimal fees.",
  },
  {
    icon: FaShieldAlt,
    title: "Truly Dynamic Blockchain",
    description: "Borderless, scalable, and adaptable.",
  },
  {
    icon: FaGamepad,
    title: "GameFi with Rootopia",
    description: "Elevating blockchain gaming.",
  },
  {
    icon: FaSeedling,
    title: "Seeding & Foundation",
    description: "Fueling ecosystem growth.",
  },
  {
    icon: FaUsers,
    title: "Referral & Rewards",
    description: "Earn by expanding the network.",
  },
  {
    icon: FaWallet,
    title: "Secure Digital Wallet",
    description: "Manage DRC, RWA & more.",
  },
  {
    icon: FaCoins,
    title: "Limited Coin Utility",
    description: "Exclusive access & governance.",
  },
  {
    icon: FaGlobe,
    title: "Cross-Border Payments",
    description: "Fast, low-cost global transfers.",
  },
  {
    icon: FaGraduationCap,
    title: "Education & AI Tools",
    description: "Learning, AI solutions, and tools.",
  },
  {
    icon: GiClothes,
    title: "NFTs & Fashion",
    description: "Digital art, trends, and style.",
  },
  {
    icon: RiSlideshow3Line,
    title: "DeWorld Show",
    description: "Web3 discussions and insights.",
  },
  {
    icon: FaInnosoft,
    title: "Fuel Innovation & More",
    description: "Tech, creativity, and growth.",
  },
  {
    icon: LuVote,
    title: "Vote & Fund",
    description: "Support, invest, and decide.",
  },
];

const CardList = () => {
  return (
    <div className="relative">
      {/* Desktop View: Grid Layout */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {puzzleItems.slice(0, 15).map((card, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white shadow-lg rounded-lg flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}>
            <card.icon className="text-3xl text-gray-700 mb-2" />
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile & Tablet View: Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto whitespace-nowrap flex space-x-4 p-4">
        {puzzleItems.slice(0, 15).map((card, index) => (
          <motion.div
            key={index}
            className="w-64 bg-white shadow-lg rounded-lg p-4 flex-shrink-0 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}>
            <card.icon className="text-3xl text-gray-700 mb-2" />
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
