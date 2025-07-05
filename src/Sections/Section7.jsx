
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from '../components/AnimationText';
const data = [
  {
    title: "Understand DeepRoots",
    content: "Introduction to the platform mission...",
  },
  { title: "What is DeepRoots?", content: "Overview of the ecosystem..." },
  {
    title: "What is the Address Wallet?",
    content: "Explanation of wallet functionality...",
  },
  {
    title: "What is TelexCoin?",
    content: "Details on the currency...",
  },
  {
    title: "How to Start with DeepRoots",
    content: "Step by step guide to getting started...",
  },
  {
    title: "DeepRoots Whitepaper",
    content: "Link to platform's whitepaper...",
  },
  {
    title: "DeepRoots Roadmap",
    content: "Showcase the platform's future goals...",
  },
  // Add the remaining items here
];

const Section7 = () => {
      const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="max-w-4xl   mx-auto py-12 px-4">
      <AnimatedText
        text=" ABOUT DEWORLD"
        animation="fade"
        as="h1"
        className="font-extrabold  text-2xl text-center lg:text-start lg:text-3xl   my-5 lg:leading-normal mb-10 bg-gradient-to-r from-[#0085a8]  to-orange-400 bg-clip-text font-orbitron text-transparent"
      />
      <div className="md:space-y-6 space-y-4 ">
        {data.map((item, index) => (
          <div key={index} className="border border-[#0085a8] rounded-lg">
            <button
              className="w-full text-left px-4 py-3 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <span className="font-semibold">{item.title}</span>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-4 pb-3">
                {item.content}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section7