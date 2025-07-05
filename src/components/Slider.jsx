import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { BookOpen, Feather, Star, Sun } from "lucide-react";

const cards = [
  {
    image: "/book1.jpg",
    icon: BookOpen,
    title: "Book One",
    description: "A journey through the unknown.",
    bgColor: "#ff9f43",
  },
  {
    image: "/book2.jpg",
    icon: Feather,
    title: "Feathered Tales",
    description: "Stories that touch the heart.",
    bgColor: "#00cec9",
  },
  {
    image: "/book3.jpg",
    icon: Star,
    title: "The Rising Star",
    description: "A guide to success.",
    bgColor: "#6c5ce7",
  },
  {
    image: "/book4.jpg",
    icon: Sun,
    title: "Morning Glory",
    description: "Awaken your potential.",
    bgColor: "#fab1a0",
  },
  {
    image: "/book3.jpg",
    icon: Star,
    title: "The Rising Star",
    description: "A guide to success.",
    bgColor: "#6c5ce7",
  },
];

const BookSlider = () => {
  return (
    <div className="w-full max-w-4xl  mx-auto py-10 relative">
      {/* Swiper */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={window.innerWidth >= 1024 ? 3 : 1}
        loop={true}
        loopFillGroupWithBlank={false}
        autoplay={{
          delay: 2500, // Auto-slide every 2.5 seconds
          disableOnInteraction: false, // Keeps auto-play even after user interaction
        }}
        navigation={
          window.innerWidth >= 1024
            ? { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
            : false
        }
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
        className="book-slider">
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="w-[300px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-2xl shadow-lg text-white text-center flex flex-col items-center justify-center gap-4"
              style={{ background: card.bgColor, minHeight: "350px" }}>
              <img
                src={card.image}
                alt={card.title}
                className="w-32 h-32 rounded-lg object-cover"
              />
              <card.icon size={32} className="mb-2" />
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="mt-2">{card.description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      
      <div className="hidden lg:flex">
        <div className="swiper-button-prev left-[-50px]  text-gray-700 hover:text-gray-900 transition"></div>

        <div className="swiper-button-next right-[-50px] text-gray-700 hover:text-gray-900 transition"></div>
      </div>

      {/* Custom Pagination Dots */}
      <div className="swiper-pagination  text-[#ad1aa0] mt-8"></div>
    </div>
  );
};

export default BookSlider;
