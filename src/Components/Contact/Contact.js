import MapComp from "./MapComp";
import classes from "./Contact.module.scss";

const Contact = (props) => {
  // Locations
  const locations = props.locations.map((location) => (
    <div className={classes.contact__location} id="contact" key={location.name}>
      <h2>{location.name}</h2>
      <h4>
        <span className={classes.contact__highlight}>Address: </span>
        {location.address}
      </h4>
      <h4>
        <span className={classes.contact__highlight}>Phone: </span>
        {location.phone}
      </h4>
    </div>
  ));

  return (
    <div className={classes.contact}>
      <div className={classes.contact__info}>{locations}</div>
      <MapComp locations={props.locations} />
    </div>
  );
};

export default Contact;
