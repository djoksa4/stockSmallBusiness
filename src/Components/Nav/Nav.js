import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import ReactDOM from "react-dom";

import classes from "./Nav.module.scss";
import MenuSVG from "../../SVGs/MenuSVG";

const Nav = () => {
  // States
  const isMobile = useMediaQuery({ query: "(max-width: 1200px)" });
  const [solidNav, setSolidNav] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  // Make Nav bar solid on scrolldown
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 65) {
        setSolidNav(true);
      } else {
        setSolidNav(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setSolidNav(true);
        } else {
          setSolidNav(false);
        }
      });
    };
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    menuVisible && (document.body.style.overflow = "hidden");
    !menuVisible && (document.body.style.overflow = "unset");
  }, [menuVisible]);

  // Links
  const links = !isMobile ? (
    <>
      <a href="#home">Home</a>
      <a href="#reviews">Reviews</a>
      <a href="#gallery">Gallery</a>
    </>
  ) : (
    <>
      <a href="#home" onClick={() => setMenuVisible(false)}>
        Home
      </a>
      <a href="#reviews" onClick={() => setMenuVisible(false)}>
        Reviews
      </a>
      <a href="#gallery" onClick={() => setMenuVisible(false)}>
        Gallery
      </a>
      <a href="#contact" onClick={() => setMenuVisible(false)}>
        Contact
      </a>
    </>
  );

  // JSX
  return (
    <div className={`${classes.nav} ${solidNav && classes.nav__solid}`}>
      {/* LOGO */}
      {
        <div className={classes.nav__logo}>
          <a href="#home">Bean</a>
        </div>
      }
      {/* LINKS */}
      {/* Desktop */}
      {!isMobile && (
        <>
          <div className={classes.nav__linksContainer}>{links}</div>
          <div className={classes.nav__contact}>
            <a href="#contact">Contact</a>
          </div>
        </>
      )}

      {/* Mobile */}
      {isMobile && (
        <>
          <div
            onClick={() => {
              setMenuVisible(true);
            }}
            className={classes.nav__svgContainer}
          >
            <MenuSVG className={classes.nav__menuSVG} />
          </div>

          {/* Menu */}
          {menuVisible &&
            ReactDOM.createPortal(
              <div className={classes.nav__linksContainerMobile}>
                <>
                  <div
                    className={
                      classes.nav__linksContainerMobile__CloseButtonContainer
                    }
                  >
                    <button
                      onClick={() => {
                        setMenuVisible(false);
                      }}
                      className={classes.nav__linksContainerMobile__CloseButton}
                    >
                      X
                    </button>
                  </div>

                  {links}
                </>
              </div>,
              document.getElementById("overlays")
            )}
        </>
      )}
    </div>
  );
};

export default Nav;
