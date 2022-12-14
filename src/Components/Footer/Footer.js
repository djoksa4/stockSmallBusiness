import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      ©{" "}
      <a href="https://djordjevodovar.netlify.app/" target="_blank">
        Djordje Vodovar
      </a>
      . All rights reserved.
    </div>
  );
};

export default Footer;
