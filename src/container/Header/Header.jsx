import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

import "../Css/Header.css";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Header = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Funkce pro generování náhodného čísla
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    // Generuj náhodné číslo při načítání stránky
    const randomNumber = getRandomInt(0, 1);

    // Na základě náhodného čísla vyber jednu z fotek
    const photoUrl =
      randomNumber === 0
        ? process.env.PUBLIC_URL + "Nobg1.png"
        : process.env.PUBLIC_URL + "NoBg2Resized.png";

    // Nastav vybranou fotku do stavu
    setSelectedPhoto(photoUrl);
  }, []); // Závislosti jsou prázdné, takže se s

  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>💻</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello there!👋</p>
              <h1 className="head-text">I'm&nbsp;Michal</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">🐘 PHP Web Developer | 📆⏳ 15 Years Old</p>
            <p className="p-text">🚀 Project Launcher | 🩸 Czech Blood</p>
            <p className="p-text">🌐 Web enthusiast | 🌌 Infinite coder</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={selectedPhoto} alt="Profile Picture" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.php, images.mysql, images.react].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
