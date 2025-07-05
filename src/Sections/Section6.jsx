
import PuzzleBox from '../components/Puzzle'
import AnimatedText from '../components/AnimationText';

const Section6 = () => {
  return (
    <div className='flex justify-center  items-center flex-col my-20'>
      <AnimatedText
        text="DeWorld Use Cases - Game-Changing Internet"
        animation="fade"
        as="h1"
        className="font-extrabold  mx-5 text-2xl mb-14 leading-[40px]  lg:text-start lg:text-3xl   my-5 lg:leading-normal  bg-gradient-to-r from-[#0085a8]  to-[#ad1] bg-clip-text font-orbitron text-transparent"
      />
      <PuzzleBox />
    </div>
  );
}

export default Section6