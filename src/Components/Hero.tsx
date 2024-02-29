import style from "./Hero.module.css";
import heroImage from "../assets/images/desktop/image-header.jpg";
import test from "../assets/images/icon-arrow-down.svg";
const Hero = () => {
  return (
    <section className={style.hero}>
      <img src={heroImage} alt="hero image" className={style.heroImage} />
      <h1> We are creatives</h1>
      <img src={test} alt="arrow image" className={style.arrow} />
    </section>
  );
};

export default Hero;
