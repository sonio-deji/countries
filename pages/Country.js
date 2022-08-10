import React from "react";
import Image from "next/image";

function Country({ modal, content, onClose, themeChanger }) {
  return (
    modal && (
      <div
        className={`fixed top-0 bottom-0 right-0 left-0 w-full h-screen z-10 bg-black bg-opacity-80 flex justify-center items-center ${
          themeChanger && "dark"
        }`}
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="p-5 w-11/12  lg:w-2/4 mx-auto text-black dark:text-white dark:bg-gray-800 bg-gray-300 rounded-lg md:w-9/12 "
        >
          <div className="">
            <div className="">
              <div>
                <Image
                  alt={content.name}
                  src={content.image}
                  width="100%"
                  height={"70%"}
                  className="rounded-lg"
                  layout="responsive"
                />
              </div>
              <h1 className=" font-bold text-center pb-8 pt-4">
                {content.name}
              </h1>
              <h1 className=" text-sm md:text-base">
                Native Name:{" "}
                <span className="font-light">{content.nativeName}</span>
              </h1>
              <h1 className=" text-sm md:text-base">
                Sub Region:{" "}
                <span className="font-light">{content.subRegion}</span>
              </h1>
              <h1 className=" text-sm md:text-base">
                Capital: <span className="font-light">{content.capital}</span>
              </h1>
              <h1 className=" text-sm md:text-base">
                Population:{" "}
                <span className="font-light">{content.population}</span>
              </h1>
              <h1 className="flex items-baseline">
                Currencies:{" "}
                <span className="font-light pl-2"> {content.currencies}</span>
              </h1>
              <h1 className="flex items-baseline text-sm md:text-base">
                Languages:{" "}
                <span className="flex font-light pl-2">
                  {content.languages}
                </span>
              </h1>
              <h1 className="flex items-baseline  text-sm md:text-base">
                Top level Domain:{" "}
                <span className="font-light pl-2">
                  {content.topLevelDomain}
                </span>
              </h1>
              <h1 className="pt-2 text-center flex flex-col items-center text-sm md:text-base">
                Border Countries:{" "}
                <span className="pt-5 w-full flex items-center justify-evenly">
                  {content.borderCountries}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Country;
