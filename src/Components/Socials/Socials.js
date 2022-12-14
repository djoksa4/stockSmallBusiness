import classes from "./Socials.module.scss";
import FacebookSVG from "../../SVGs/FacebookSVG";
import InstagramSVG from "../../SVGs/InstagramSVG";
import TwitterSVG from "../../SVGs/TwitterSVG";

// Possible socials
const socialsSVGs = {
  instagram: <InstagramSVG className={classes.socials__svg} />,
  twitter: <TwitterSVG className={classes.socials__svg} />,
  facebook: <FacebookSVG className={classes.socials__svg} />,
};

const Socials = (props) => {
  // Socials based on input
  const socials = props.socials.map((social) => (
    <a href={social.link} target="_blank" key={social.name}>
      {socialsSVGs[social.name]}
    </a>
  ));

  return (
    <div className={classes.socials}>
      <div className={classes.socials__links}>{socials}</div>
    </div>
  );
};

export default Socials;
