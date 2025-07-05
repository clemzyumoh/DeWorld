// React component for Section16: SHARE VALUE - DeWorld Education Hub
// Layout: H1 header, Image, Details, and Button (Learn) for all screen sizes
// Features: Responsive design, consistent styling, and animation

import AnimatedText from "../components/AnimationText";
import img from "../assets/share.webp";
import AnimateItem from "../components/AnimationItem";


const Section16 = () => {
  return (
    <main className="my-16 p-6 md:p-10">
      <div className="flex flex-col lg:flex-row items-center justify-center text-center">
        <div className="flex justify-center items-center lg:hidden my-8 flex-col">
          <AnimatedText
            text="SHARE VALUE"
            animation="fade"
            as="h1"
            className="font-extrabold text-2xl lg:text-4xl font-orbitron bg-gradient-to-r from-[#E07C76] to-[#52b797] bg-clip-text text-transparent"
          />
          <AnimatedText
            text="Learn, Create, Innovate – A DeWorld Education Hub"
            animation="fade"
            as="h1"
            className="font-extrabold text-xl mt-3 lg:text-2xl font-orbitron mb-5 bg-gradient-to-r from-[#E07C76] to-[#52b797] bg-clip-text text-transparent"
          />
        </div>

        <AnimateItem direction="left" delay={0.2}>
          <img
            src={img}
            alt="Education Hub"
            className="rounded-2xl  w-full lg:w-[600px]  mb-5"
          />
        </AnimateItem>

        <div className="lg:w-1/2 lg:ml-24">
          <div className="lg:flex justify-center items-start hidden mb-4 flex-col">
            <AnimatedText
              text="SHARE VALUE"
              animation="fade"
              as="h1"
              className="font-extrabold text-2xl lg:text-4xl font-orbitron bg-gradient-to-r from-[#E07C76] to-[#52b797] bg-clip-text text-transparent"
            />
            <AnimatedText
              text="Learn, Create, Innovate – A DeWorld Education Hub"
              animation="fade"
              as="h1"
              className="font-bold text-xl mt-3  font-orbitron  bg-gradient-to-r from-[#E07C76] to-[#52b797] bg-clip-text text-transparent"
            />
          </div>
          <div className="flex text-left flex-col gap-4">
            <p className="font-sans text-lg">
              <span className="font-bold">AI-Powered Learning</span> -
              Empowering anyone, anywhere to learn and innovate in the
              decentralized world.
            </p>
            <p className="font-sans text-lg">
              <span className="font-bold">Decentralized Tech Resources</span> -
              Access tools to build on blockchain and decentralized
              technologies.
            </p>
            <p className="font-sans text-lg">
              <span className="font-bold">Global Access</span> - Programs for
              all sectors, enabling global innovation and contribution to
              DeWorld.
            </p>
            <p className="font-sans text-lg">
              <span className="font-bold">Innovation Hub</span> - A platform for
              hackathons, collaboration, and idea-sharing.
            </p>
            <p className="font-sans text-lg">
              <span className="font-bold">Empowering Creators</span> - Turn
              ideas into reality and shape the future of DeWorld.
            </p>
            <p className="font-sans text-lg">
              <span className="font-bold">Mentorship & Idea Sharing</span> -
              Lead groups, share ideas, and gain knowledge by teaching others.
            </p>
            <p className="font-sans text-lg">
              <span className="font-bold">Knowledge Exchange</span> - Learn by
              teaching, and help grow the DeWorld community.
            </p>
          </div>

          <button className="py-4 font-bold mt-8 font-orbitron text-neutral-200 text-lg px-7 w-1/3 bg-gradient-to-r from-[#E07C76] to-[#52b797]  hover:text-neutral-900 rounded-lg flex justify-center items-center">
            Learn
          </button>
        </div>
      </div>
    </main>
  );
};

export default Section16;
