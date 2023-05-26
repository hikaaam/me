import React, { ReactNode } from "react";

const TechCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div
      className="group flex flex-col bg-white shadow-md p-2 lg:p-4 md:p-4 flex-1 min-w-[40%]
        lg:min-w-[22%] items-center justify-center rounded-md max-w-[40%] lg:max-w-[25%]"
    >
      <div className="max-w-[80%] lg:max-w-[60%] md:max-w-[40%] group-hover:scale-125 mt-4">
        {children}
      </div>
      <h3
        className="capitalize mt-2 lg:mt-5 md:mt-5 block 
        font-bold font-mono text-[0.7rem] lg:text-xl md:text-lg text-center group-hover:mt-5 lg:group-hover:mt-8
        "
      >
        {title}
      </h3>
    </div>
  );
};

export default TechCard;
