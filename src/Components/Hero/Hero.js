import classes from "./Hero.module.scss";
import CoffeeBeanSVG from "../../SVGs/CoffeeBeanSVG";

const Hero = () => {
  return (
    <div className={classes.hero} id="home">
      <div className={classes.hero__content}>
        <CoffeeBeanSVG className={classes.hero__svg} />

        <h1 className={classes.hero__title}>Bean</h1>

        <h3 className={classes.hero__subtitle}>
          Everything you need in a cup of coffee.
        </h3>
      </div>

      <div className={classes.hero__fadeBottom}></div>
    </div>
  );
};

export default Hero;
