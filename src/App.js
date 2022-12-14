import "./App.css";

import Nav from "./Components/Nav/Nav";
import Socials from "./Components/Socials/Socials";
import Hero from "./Components/Hero/Hero";
import Reviews from "./Components/Reviews/Reviews";
import Images from "./Components/Images/Images";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const reviews = [
  {
    id: 1,
    name: "Eileen Schommer",
    comment: '"Exactly what I need in the morning."',
    img: "/imgs/PHimage.jpg",
  },
  {
    id: 2,
    name: "Desmond Miles",
    comment: '"Delicious and gets me going, its perfect!"',
    img: "/imgs/PHimage2.jpg",
  },
];

const locations = [
  {
    name: "Location 1",
    position: [47.62555, -122.34924],
    address: "366 Roy St, Seattle",
    phone: "999-123-4444",
  },
  {
    name: "Location 2",
    position: [47.62531, -122.32081],
    address: "700 Broadway E Suite A, Seattle",
    phone: "999-555-4321",
  },
];

const socials = [
  {
    name: "instagram",
    link: "https://www.instagram.com/",
  },
  {
    name: "twitter",
    link: "https://twitter.com",
  },
  {
    name: "facebook",
    link: "https://facebook.com",
  },
];

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Socials socials={socials} />
      <Hero />
      <Reviews reviews={reviews} />
      <Images />
      <Contact locations={locations} />
      <Footer />
    </div>
  );
};

export default App;
