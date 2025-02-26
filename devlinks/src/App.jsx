import Profile from "./components/profile/profile";
import Switch from "./components/switch/Switch";

import "./App.css";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div id="App" className="">
      <Profile />
      <Switch />

      <ul>
        <Links />
        <Links />
        <Links />
        <Links />
      </ul>

      <div id="socialLinks">
        <SocialLinks />
        <SocialLinks />
        <SocialLinks />
        <SocialLinks />
      </div>

      <Footer />
    </div>
  );
};

export default App;
