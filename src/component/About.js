import React from "react";
import { BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <div className="gap-2 mt-5 md:m-8 md:mt-10 about-scroll" >
      <h1 className="text-lg md:text-2xl font-semibold mb-3">
        Welcome to Foodie!
      </h1>
      <ul className="flex flex-col gap-3 md:gap-4 mb-3 text-sm md:text-xl font-medium">
        <li className="">
          <span className="text-green-700">◉</span> A delightful culinary
          experience with a <span className="font-bold">responsive</span> user interface and cutting-edge
          technology.
        </li>
        <li>
          <span className="text-green-700">◉</span> Used <span className="font-bold">Tailwind CSS</span> - A
          seamless and efficient way to design a visually appealing user
          interface.
        </li>
        <li>
          <span className="text-green-700">◉</span> Utilizes the <span className="font-bold">Swiggy API</span> to
          offer an extensive list of restaurants for you to explore.
        </li>
        <li>
          <span className="text-green-700">◉</span> Incorporates <span className="font-bold">geolocation</span> to
          provide instant access to nearby restaurants from your current
          location.
        </li>
        <li>
          <span className="text-green-700">◉</span> <span className="font-bold">Custom hooks</span> to improve code
          readability, modularity, and maintainability, making development a
          breeze.
        </li>
        <li>
          <span className="text-green-700">◉</span> Enhanced data management
          with <span className="font-bold">Redux Toolkit</span>, ensuring efficient state management and smooth
          data flow throughout the application.
        </li>
        <li>
          <span className="text-green-700">◉</span> Employs the <span className="font-bold">OpenWeather API </span>
          to discover restaurants based on other locations' latitude and
          longitude, ensuring diverse choices wherever you go.
        </li>

        <li className="flex">
          <span className="text-green-700">◉&nbsp;</span> 
          <a
            className="flex w-fit items-center gap-2 text-blue-800"
            href="https://github.com/rakhikeshri/Foodie-react-app"
            target="_blank"
          >
            <p className="hover:font-bold transition-all">
              Source Code here!
            </p>
            <BsGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
