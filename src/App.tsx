import React, { ReactNode, useEffect, useState } from "react";
import { NavBar } from "./Components";
import { IoCodeSlashOutline, IoLogoReact, IoLogoGithub } from "react-icons/io5";
import {
  SiGraphql,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Juber } from "./assets";

const colorCycles = [
  "rgb(103 232 249)", //cyan
  "rgb(190 242 100)", //lime
  "rgb(253 224 71)", //yellow
  "rgb(239 68 68)", //red
  "rgb(216 180 254)", //purple
];

const TechCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div
      className="flex flex-col bg-white shadow-md p-2 lg:p-4 md:p-4 flex-1 min-w-[30%]
    lg:min-w-[22%]
     items-center justify-center rounded-md max-w-[30%] lg:max-w-[25%]"
    >
      <div className="max-w-[80%] lg:max-w-[60%] md:max-w-[60%]">
        {children}
      </div>
      <h3
        className="capitalize lg:mt-5 md:mt-5 hidden lg:block md:block
       font-bold font-mono text-[0.5rem] lg:text-lg text-center"
      >
        {title}
      </h3>
    </div>
  );
};

const PortofolioCard = () => {
  return (
    <div
      className="flex flex-col bg-white shadow-md p-2 lg:p-4 md:p-4 flex-1 
    items-center justify-center rounded-md min-w-[60%] lg:min-w-[30%] md:min-w-[40%]"
    >
      <img src={Juber} className="min-w-0 cursor-pointer hover:scale-110"  onClick={()=>{window.open(Juber)}} />
      <h3
        className="capitalize mt:5
        font-bold  text-base lg:text-lg text-center"
      >
        Juber Super APP
      </h3>
      <p className="text-center p-2 text-base">An About bla bla bla asdsaldjasodnaosn</p>
    </div>
  );
};

function App() {
  const [active, setActive] = useState(0);

  const colorNext = () => {
    const next = colorCycles.length - 1 === active ? 0 : active + 1;
    setActive(next);
  };

  return (
    <body className="flex flex-col scroll-smooth">
      <div className="lg:px-32 px-10 md:px-24">
        {/* <NavBar /> */}

        <div className="flex flex-row flex-wrap min-h-screen justify-between items-center py-10">
          <div className="flex-2">
            <p className="text-white text-2xl lg:text-3xl md:text-3xl font-bold">
              Hey, I am
            </p>
            <h1 className="text-white font-bold md:text-6xl lg:text-7xl mt-4 max-w-[16ch] leading-20 lg:leading-tight md:leading-tight text-5xl">
              Ilyas Abdurahman Yusuf
            </h1>
            <p className="text-white mt-5 text-1xl lg:text-2xl md:text-2xl max-w-[60ch]">
              Software Engineer from Indonesia, I make Mobile Apps, Backend and
              other Magic Stuffs ✨
            </p>
            <button
              className="bg-white shadow-md text-black px-5 py-2 rounded-md font-bold text-lg
              mt-10 cursor-pointer hover:shadow-cyan-300"
            >
              Checkout My GitHub{" "}
              <IoLogoGithub className="inline-block ml-2 mb-1" size={"2rem"} />
            </button>
          </div>
          <div className="flex flex-col flex-1 items-center justify-center">
            <div className="w-40 lg:w-64 md:w-64 cursor-pointer">
              <IoCodeSlashOutline
                size={"100%"}
                color={colorCycles[active]}
                onClick={colorNext}
              />
            </div>
            <h1 className="text-white font-mono text-2xl text-center">
              {`>`}Programming Is My Passion{" "}
              <span style={{ color: colorCycles[active] }}>❤</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 bg-white lg:px-32 p-10 md:px-24 min-h-screen">
        <h1 className="text-black font-bold md:text-4xl lg:text-4xl text-3xl text-center">
          My Technology Stack
        </h1>
        <p className="text-black  text-lg ls:text-2xl md:text-2xl text-center mt-5 max-w-[60ch] self-center">
          I like learning new technology, because technology keeps getting more
          advance everyday, so my tech stack may add in the future.
        </p>
        <blockquote
          className="relative p-5  mt-10 text-base
            italic border-l-[3px] bg-neutral-100 rounded-md shadow-md
           text-neutral-600 border-neutral-500 quote self-center min-w-[60%] text-center"
        >
          "I could either watch it happen or be a part of it."
          <span className="font-bold"> - Elon Musk</span>
        </blockquote>

        <div className="flex flex-row justify-center px-10 lg:px-32 items-center gap-2 lg:gap-6 md:gap-4 mt-10 flex-wrap">
          <TechCard
            title="TypeScript"
            children={<SiTypescript className="text-blue-900" size={"100%"} />}
          />
          <TechCard
            title="React Native"
            children={<IoLogoReact className="text-cyan-500" size={"100%"} />}
          />
          <TechCard
            title="Redux"
            children={<SiRedux className="text-purple-600" size={"100%"} />}
          />
          <TechCard
            title="PHP"
            children={<SiPhp className="text-blue-900" size={"100%"} />}
          />
          <TechCard
            title="Express JS"
            children={<SiNodedotjs className="text-green-600" size={"100%"} />}
          />
          <TechCard
            title="Laravel"
            children={<SiLaravel className="text-red-400" size={"100%"} />}
          />
          <TechCard
            title="SQL"
            children={<SiMysql className="text-blue-500" size={"100%"} />}
          />
          <TechCard
            title="Graphql"
            children={<SiGraphql className="text-pink-600" size={"100%"} />}
          />
          <TechCard
            title="Tailwind"
            children={<SiTailwindcss className="text-cyan-500" size={"100%"} />}
          />
          <TechCard
            title="Javascript"
            children={
              <SiJavascript className="text-yellow-200" size={"100%"} />
            }
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 bg-white  lg:px-32 p-10 md:px-24 min-h-screen">
        <h1 className="text-black font-bold md:text-4xl lg:text-4xl text-3xl text-center">
          Portofolio
        </h1>
        <p className="text-black  text-lg ls:text-2xl md:text-2xl text-center mt-5 max-w-[60ch] self-center">
          Some of the apps that I've worked on.
        </p>
        <div className="flex flex-row justify-center px-10 lg:px-32 items-center gap-2 lg:gap-6 md:gap-4 mt-10 flex-wrap">
          <PortofolioCard />
          <PortofolioCard />
          <PortofolioCard />
          <PortofolioCard />
          <PortofolioCard />
        </div>
      </div>
    </body>
  );
}

export default App;
