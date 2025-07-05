import { useState } from "react";

const Card = ({ icon: Icon, iconColor, title, titleColor, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-6 dark:border-[#0085a8] group border-neutral-200 md:border-2 hover:scale-105 border-b-2  ">
      {/* Icon with Dynamic Color */}
      <div className=" flex items-center justify-start ">
        <div
          className="mb-3  bg-white  mr-3 shadow-[2px_2px_2px_] dark:bg-transparent group-hover:shadow-[2px_2px_2px_,-2px_-2px_2px_] rounded-md   p-3"
          style={{ color: iconColor }}>
          <Icon size={40} />
        </div>

        {/* Title with Dynamic Color */}
        <h2 className="text-xl font-bold mb-2" style={{ color: titleColor }}>
          {title}
        </h2>
      </div>

      {/* Description with Line Clamp */}
      {/* Description with max-height & smooth expand/collapse */}
      <div
        className={`text-gray-600 dark:text-gray-300 transition-all duration-300 overflow-hidden`}
        style={{
          maxHeight: expanded ? "none" : "3.6em", // Adjust to fit ~2 lines
          display: "-webkit-box",
          WebkitLineClamp: expanded ? "unset" : 2,
          WebkitBoxOrient: "vertical",
        }}>
        {description}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline">
        {expanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Card;
