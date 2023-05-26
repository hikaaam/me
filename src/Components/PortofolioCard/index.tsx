import React from "react";

const PortofolioCard = ({
  image,
  title,
  about,
  onClick,
}: {
  image: any;
  title: string;
  about: string;
  onClick: Function;
}) => {
  return (
    <div
      className="group flex flex-col bg-white shadow-md p-2 lg:p-4 md:p-2 flex-1 
      items-center justify-center rounded-md min-w-[100%] lg:min-w-[45%] md:min-w-[100%] mt-4"
    >
      <img
        src={image}
        className="min-w-0 cursor-pointer group-hover:scale-110"
        onClick={() => onClick()}
        loading="lazy"
      />
      <h3 className="capitalize mt-2 font-bold  text-xl lg:text-lg text-center group-hover:mt-8">
        {title}
      </h3>
      <p className="text-center p-2 text-sm lg:text-base md:text-base">
        {about}
      </p>
    </div>
  );
};

export default PortofolioCard;
