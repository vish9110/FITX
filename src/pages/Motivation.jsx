import React, { useState, useEffect } from "react";
import { fetchMotivation } from "../utils/fetchData";
import motivationimg from "../assets/motivation.png"
const Motivation = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = async () => {
    const data = await fetchMotivation();

    if (!data || !data.quote) return;

    setQuote(data.quote);
    setAuthor(data.author || "Unknown");
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
    {/* Title */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mt-10 mb-4 text-red-600">
      MOTIVATION
    </h1>

    {/* main div */}

    <div className="flex mt-10 justify-around w-[80%] mx-auto sm:mt-20 sm:justify-around sm:w-[80%] sm:mx-auto sm:px-2  md:justify-around md:w-[80%] md:mx-auto md:px-2 md:mt-8 lg:justify-around lg:w-[90%] lg:mx-auto lg:px-10 lg:mt-8   xl:justify-around xl:w-[80%] xl:mx-auto  xl:h-auto xl:px-10 xl:py-10 box-border shadow-2xl bg-blue-50 xl:mt-8 rounded-sm" >
    
    {/* Quote div */}
     <div className=" flex p-4 w-[100%] min-h-[300px] h-auto justify-center p-5 items-center sm:p-4 sm:w-[50%] sm:h-auto sm:items-center sm:justify-center md:p-5 md:w[70%] md:h-auto md:items-center md:justify-center lg:p-5 lg:w-[70%] lg:h-auto lg:items-center lg:justify-center text-center xl:p-5 xl:w-[70%] xl:h-auto xl:items-center xl:justify-center">
      <div className="w-auto h-auto p-5  sm:w-auto sm:h-auto sm:p-5 md:w-auto md:h-[200px] md:p-5 lg:w-auto lg:h-auto xl:w-auto xl:h-auto lg:p-5 border-2 border-black xl:p-5  rounded-xl">

     
      <p className="text-base mb-2   sm:text-lg sm:mb-2 md:text-xl md:mb-2  lg:text-2xl lg:mb-2 xl:text-3xl xl:mb-2 text-black font-serif">
        {quote || "Loading quote..."}
      </p>

      {author && (
        <p className="sm:mb-4  md:mb-4 lg:mb-4 text-sm text-gray-600 xl:mb-4">— {author}</p>
      )}

      <button
        onClick={getQuote}
        className="bg-red-500 px-2 py-1 mt-2  sm:px-4 sm:py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 text-white xl:px-4 xl:py-2 rounded hover:bg-red-600"
      >
        Next
      </button>
      </div>
    </div>
    
    {/* image div */}
    <div className="flex relative   sm:w-[50%]  sm:h-[300px] md:w-[30%] md:h-[300px] md:items-center md:justify-center lg:w-[30%] lg:h-[300px] lg:items-center lg:justify-center xl:w-[30%] xl:h-[400px]   xl:items-center xl:justify-center">
       <img  
                      src={motivationimg} 
                      className=" absolute z-99 h-full object-cover drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                      alt="motivation-img"
                  />
    </div>
    </div>
    </>
   
  );
};

export default Motivation;
