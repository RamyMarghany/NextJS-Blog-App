import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/ramy.JPG'
          alt='profile picture'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ramy</h1>
      <p>I am a software engineering specialist at frontend side</p>
    </section>
  );
};

export default Hero;
