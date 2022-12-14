import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Images.module.scss";
import NextSVG from "../../SVGs/NextSVG";
import PreviousSVG from "../../SVGs/PreviousSVG";

const Images = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
  };

  const imagesArray = [
    "imgs/caro1.jpg",
    "imgs/caro3.jpg",
    "imgs/caro4.jpg",
    "imgs/caro5.jpg",
    "imgs/caro6.jpg",
    "imgs/caro7.jpg",
  ];

  const imageElements = imagesArray.map((img) => (
    <div className={classes.images__itemContainer} key={Math.random()}>
      <img className={classes.images__img} src={img} alt="carousel image" />
    </div>
  ));

  return (
    <div className={classes.images} id="gallery">
      <button
        className={`${classes.images__buttonPrev} ${classes.images__button}`}
        onClick={sliderRef?.slickPrev}
      >
        <PreviousSVG className={classes.images__svg} />
      </button>
      <button
        className={`${classes.images__buttonNext} ${classes.images__button}`}
        onClick={sliderRef?.slickNext}
      >
        <NextSVG className={classes.images__svg} />
      </button>
      <Slider ref={setSliderRef} {...settings}>
        {imageElements}
      </Slider>

      <div className={classes.images__fadeTop}></div>
      <div className={classes.images__fadeBottom}></div>
    </div>
  );
};

export default Images;
