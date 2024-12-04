import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm Abdelrahman 👋 <br /> An AI Engineer from Egypt 🇪🇬 🏜️🏺 <br />{" "}
        Let's explore more about me!
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          I specialize in: <br /> 🤖 Machine Learning & Deep Learning <br /> 🌐 Web
          Development (React, Node.js) <br /> 🎮 Game Development (Unity, Blender). <br /> My
          goal is to build intelligent systems that make a difference!
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Beyond technology, I’m passionate about: 🎮 Creating engaging games
          and experiences, 🤖 Exploring AI and creativity. <br /> My goal is to
          🌍 contribute to groundbreaking AI projects that improve lives and
          inspire others
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or a developer? 👨‍💻 <br /> I'm just a few clicks
          away!
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
