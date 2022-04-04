import React from "react";

const PortofolioCard = ({
  image,
  title,
  about,
}: {
  image: string;
  title: string;
  about: string;
}) => {
  return (
    <div
      className="flex flex-col bg-white shadow-md p-2 lg:p-4 md:p-4 flex-1 
      items-center justify-center rounded-md min-w-[60%] lg:min-w-[30%] md:min-w-[40%]"
    >
      <img
        src={image}
        className="min-w-0 cursor-pointer hover:scale-110"
        onClick={() => {
          window.open(image);
        }}
      />
      <h3
        className="capitalize mt:5
          font-bold  text-base lg:text-lg text-center"
      >
        {title}
      </h3>
      <p className="text-center p-2 text-base">{about}</p>
    </div>
  );
};

export default PortofolioCard;
