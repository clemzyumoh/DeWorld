import { useState, useEffect } from "react";
//import img from "./NavBar/logo.jpg";
import { FcIdea } from "react-icons/fc";

const CryptoGenerations = () => {
  return (
    <section
      className={`flex flex-col lg:flex-row justify-center items-center mt-8 gap-6 p-8 transition-al`}>
      {/* Bitcoin Card */}
      <div
        className={`flex flex-col items-center text-center p-6 rounded-xl shadow-lg w-72 transition-all`}>
        <h2 className="text-2xl font-bold mt-4">Bitcoin (BTC)</h2>
      </div>

      {/* Arrow */}
      <div className="text-4xl text-gray-500 dark:text-gray-400">
        <span className="hidden lg:block">➝</span>{" "}
        {/* Right arrow for desktop */}
        <span className="block lg:hidden">↓</span> {/* Down arrow for mobile */}
      </div>

      {/* Ethereum Card */}
      <div
        className={`flex flex-col items-center text-center p-6 rounded-xl shadow-lg w-72 transition-all`}>
        <h2 className="text-2xl font-bold mt-4">Ethereum (ETH)</h2>
      </div>

      {/* Arrow */}
      <div className="text-4xl text-gray-500 dark:text-gray-400">
        <span className="hidden lg:block">➝</span>{" "}
        {/* Right arrow for desktop */}
        <span className="block lg:hidden">↓</span> {/* Down arrow for mobile */}
      </div>
      <div className=" rounded-full w-28 h-28 shadow-xl flex justify-center items-center">
        <FcIdea className="w-16 h-16" />
      </div>
      {/* Arrow */}
      <div className="text-4xl text-gray-500 dark:text-gray-400">
        <span className="hidden lg:block">➝</span>{" "}
        {/* Right arrow for desktop */}
        <span className="block lg:hidden">↓</span> {/* Down arrow for mobile */}
      </div>
      {/* DRC (DeppRoots Coin) */}
      <div
        className={`flex flex-col items-center text-center p-6 rounded-lg  shadow-xl w-72 transition-all`}>
        <h2 className="text-2xl font-bold mt-4">DeepRoots (DRC)</h2>
      </div>
    </section>
  );
};

export default CryptoGenerations;
