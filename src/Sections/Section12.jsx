
import img from "../assets/lightc.png"
import img1 from "../assets/darkc.png"
const Section12 = () => {
  return (
    <main>
      <img
        src={img}
        alt=""
        className="dark:hidden  scale-110 lg:scale-105  w-full"
      />
      <img
        src={img1}
        alt=""
        className="hidden scale-110 lg:scale-105 dark:flex w-full"
      />
    </main>
  );
}

export default Section12