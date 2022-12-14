import classes from "./Reviews.module.scss";
import Card from "./Card";

const Reviews = (props) => {
  return (
    <div className={classes.reviews} id="reviews">
      <div className={classes.reviews__cardsContainer}>
        <Card review={props.reviews[0]} />
        <Card review={props.reviews[1]} />
      </div>

      <div className={classes.reviews__heroReview}>
        <h1>"BEST DAMN COFFEE I'VE EVER HAD"</h1>
        <h3>- Yvonne Hawthorne</h3>
      </div>

      <div className={classes.reviews__contact}>
        <div className={classes.reviews__contactLink}>
          <a href="#contact">find our locations</a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
