import React, { ReactNode, useEffect, useRef, useState } from "react";
import { NavBar, PortofolioCard, TechCard } from "./Components";
import {
  IoCodeSlashOutline,
  IoLogoReact,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
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
import porfolioData from "./Data/portofolio.json";
import ImageKeys from "./Data/ImageKeys";
//@ts-ignore
import ImgsViewer from "react-images-viewer";


const images = porfolioData.map(({ image, title }) => ({
  //@ts-ignore
  src: ImageKeys[image],
  caption: title,
}));

const colorCycles = [
  "rgb(103 232 249)", //cyan
  "rgb(190 242 100)", //lime
  "rgb(253 224 71)", //yellow
  "rgb(239 68 68)", //red
  "rgb(216 180 254)", //purple
];

function App() {
  const [active, setActive] = useState(0);
  const [codeHover, setCodeHover] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [view, setView] = useState(false);

  const colorNext = () => {
    const next = colorCycles.length - 1 === active ? 0 : active + 1;
    setActive(next);
  };

  useEffect(() => {
    if (codeHover) {
      const interval = setInterval(colorNext, 500);
      return () => clearInterval(interval);
    }
  }, [colorNext]);

  return (
    <body className="flex flex-col scroll-smooth bg-slate-900">
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
            <div className="flex flex-wrap gap-2 mt-10">
              <button
                onClick={() =>
                  window.location.assign("https://github.com/hikaaam")
                }
                className="group bg-white shadow-md text-black px-5 py-2 rounded-md font-bold text-lg
                cursor-pointer hover:shadow-cyan-300"
              >
                GitHub{" "}
                <IoLogoGithub
                  className="inline-block ml-2 mb-1 group-hover:animate-bounce"
                  size={"2rem"}
                />
              </button>
              <button
                onClick={() =>
                  window.location.assign(
                    "https://www.linkedin.com/in/ilyas-abdurahman-yusuf/"
                  )
                }
                className="group bg-white shadow-md text-black px-5 py-2 rounded-md font-bold text-lg
                cursor-pointer hover:shadow-cyan-300"
              >
                LinkedIn{" "}
                <IoLogoLinkedin
                  className="text-blue-700 inline-block ml-2 mb-1 group-hover:animate-bounce"
                  size={"2rem"}
                />
              </button>
            </div>
          </div>
          <div
            onMouseEnter={() =>
              setCodeHover(() => {
                colorNext();
                return true;
              })
            }
            onMouseLeave={() => setCodeHover(false)}
            className="flex flex-col flex-1 items-center justify-center"
          >
            <div className="w-40 lg:w-64 md:w-64 cursor-pointer">
              <IoCodeSlashOutline
                size={"100%"}
                color={colorCycles[active]}
                onClick={colorNext}
              />
            </div>
            <h1 className="text-white font-mono text-xl text-center w-[80%]">
              {">"} I have 3 years of experience on Mobile Development, and 1
              years of experience on Backend Development.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 bg-white lg:px-32 p-10 md:px-10 min-h-screen">
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

        <div className="flex flex-row justify-center px-1 lg:px-32 items-center gap-2 lg:gap-6 md:gap-4 mt-10 flex-wrap">
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
        <div className="flex flex-col flex-1 bg-white mt-10  lg:px-32 p-1 md:px-24">
          <h1 className="text-black font-bold md:text-4xl lg:text-4xl text-3xl text-center">
            Portofolio
          </h1>
          <p className="text-black  text-lg ls:text-2xl md:text-2xl text-center mt-5 max-w-[60ch] self-center">
            Some of the apps that I've worked on.
          </p>

          <div className="flex flex-row justify-center px-1 md:px-2 lg:px-32 items-center gap-2 lg:gap-6 md:gap-4 mt-10 flex-wrap">
            {porfolioData.map(({ about, image, title }, index) => {
              //@ts-ignore
              const getImage = ImageKeys[image];
              return (
                <PortofolioCard
                  title={title}
                  image={getImage}
                  about={about}
                  onClick={() => {
                    setActiveImage(index);
                    setView(true);
                  }}
                />
              );
            })}
          </div>

          <ImgsViewer
            imgs={images}
            currImg={activeImage}
            isOpen={view}
            onClickPrev={() => {
              const indexLength = porfolioData.length - 1;
              const prevImage =
                activeImage <= 0 ? indexLength : activeImage - 1;
              setActiveImage(prevImage);
            }}
            onClickNext={() => {
              const indexLength = porfolioData.length - 1;
              const nextImage =
                activeImage >= indexLength ? 0 : activeImage + 1;
              setActiveImage(nextImage);
            }}
            onClose={() => setView(false)}
            preloadNextImg
            showImgCount
            backdropCloseable
            showThumbnails
            onClickThumbnail={(i:number) => setActiveImage(i)}
          />
        </div>
      </div>
    </body>
  );
}

export default App;
