
import {
  FaTelegramPlane,
  
  FaRedditAlien,
  FaDiscord,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Telegram",
    icon: <FaTelegramPlane className="text-[#0088cc]" size={30} />,
    description:
      "Join our Telegram group to chat with the community in real time.",
    link: "https://t.me/DeworldCommunity",
    color: "text-[#0088cc]", // Telegram Blue
  },
  {
    name: "X",
    icon: <BsTwitterX className="text-[#1DA1F2]" size={30}/>,
    description:
      "Follow us on Twitter for the latest updates and announcements.",
    link: "https://twitter.com/Deworld",
    color: "text-[#1DA1F2]", // Twitter Blue
  },
  {
    name: "Reddit",
    icon: <FaRedditAlien className="text-[#FF4500]" size={30} />,
    description:
      "Join discussions and explore trending topics in our subreddit.",
    link: "https://www.reddit.com/r/Deworld",
    color: "text-[#FF4500]", // Reddit Orange
  },
  {
    name: "Discord",
    icon: <FaDiscord className="text-[#5865F2]" size={30} />,
    description:
      "Be part of our Discord server for deeper discussions and live events.",
    link: "https://discord.gg/Deworld",
    color: "text-[#5865F2]", // Discord Purple
  },
];
const Section10 = () => {
  return (
    <section className="py-12 px-6 bg-neutral-100 dark:bg-[#1c1d20]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-orbitron text-gray-900 dark:text-neutral-200">
          Social Media & Community Links
        </h2>
        <p className="text-gray- font-sans dark:text-gray-400 mt-2">
          Engage with the DeepRoots community on your favorite platforms.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 group lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group  bg-white flex justify-center items-start md:items-center md:flex-row flex-col  dark:bg-[#2A2B2E] rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className={`p-5 rounded-lg ${social.color} bg-opacity-10 md:mr-8 group-hover:scale-100 shadow-neutral-100 border-2 border-neutral-100 shadow-lg dark:shadow-[#1c1d20] dark:border-none  inline-block`}>
              {social.icon}
            </motion.div>
            <div className="flex justify-start items-start flex-col">
              <h3 className={`mt-4 text-xl font-semibold ${social.color}`}>
                {social.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {social.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://deeproots.community"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#0085a8] text-white rounded-full text-lg font-semibold shadow-md hover:scale-105 transition">
          Visit Our Official Community
        </a>
      </div>
    </section>
  );
}

export default Section10