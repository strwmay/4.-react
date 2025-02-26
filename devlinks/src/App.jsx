import "./App.css";
import darkPic from "./img/wb.png";
import lightPic from "./img/bw.png";

import Profile from "./components/profile/profile";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Footer from "./components/footer/Footer";
import { useState } from "react";

const App = () => {
  const [isLight,setIsLight] = useState(true);

  const troca = () => {
    setIsLight(!isLight);
  };

  return (
    <div id="App" className={isLight && "light"}>
      <div id="container">
      <Profile profilepic={isLight ? lightPic : darkPic}>May</Profile>

      <Switch troca={troca} isLight={isLight}/>
      <div id="links">
      <ul>
        <Links link={"https://strwmay.carrd.co/"}>My Carrd.co</Links>
        <Links link={"https://open.spotify.com/playlist/7Jr20kssSbaXGWARh84hZd?si=9tcAZ5qESYqeb-MzGGVHGg"}>Listen to my Playlist !</Links>
        <Links link={"https://br.pinterest.com/strwmaay/_profile/"}>My Pinterest</Links>
        <Links link={"https://nubank.com.br/cobrar/18yxeq/661fd915-1d87-4dc2-84c6-f68e4a715ca0"}>Buy me a Coffee ~</Links>
      </ul>
      </div>

      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/strwmay?tab=stars"}
          icon={"logo-github"}
          />
        <SocialLinks
          link={"https://www.instagram.com/strwmay/"}
          icon={"logo-instagram"}
          />
        <SocialLinks
          link={"https://www.youtube.com/@strwmay"}
          icon={"logo-youtube"}
          />
        <SocialLinks
          link={"https://wa.me/5511939400324"}
          icon={"logo-whatsapp"}
          />
      </div>
          </div>

      <Footer>@strwmay</Footer>
    </div>
  );
};

export default App;
