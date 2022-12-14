import classes from "./Card.module.scss";

const Card = (props) => {
  return (
    <div
      className={classes.card}
      style={{
        background: `
    url(${props.review.img})`,
        backgroundSize: "cover",
      }}
    >
      <div className={classes.card__tint}>
        <div className={classes.card__content}>
          <h3>{props.review.name}</h3>
          <p>{props.review.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
