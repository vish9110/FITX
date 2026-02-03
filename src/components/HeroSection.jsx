import heroImage from "../assets/hero.png"; // example

function HeroSection() {
  return (
    <div className="w-full h-[200px] mt-10 px-4 flex justify-between sm:w-full sm:h-[400px] sm:mt-6 sm:px-10  md:w-full md:h-[500px] lg:w-full lg:h-[500px]  lg:items-center lg:px-10 relative">

      {/* LEFT TEXT */}
      <div className="w-1/2 ml-0 h-auto  md:w-1/2 md:mx-auto  md:ml-0 md:mt-20 md:mr-0 lg:w-1/2 z-10 lg:ml-30 lg:mt-10">
        <h4 className="text-sm sm:text-lg md:text-[20px]   lg:text-lg font-bold text-black">Transform Your Body</h4>
        <p className="text-sm mt-1 sm:text-4xl md:text-5xl font-semibold md:mt-3 text-black ">
           Sweat, Smile <br></br>
           And Repeat
        </p>
        <p className="text-sm mt-4 text-black sm:text-xl sm:mt-8 md:text-[15px] lg:mt-4">Checkout the most effective Exercises</p>

        <div className="mt-1 md:mt-5">
            <button className="text-sm rounded px-1 py-2 bg-red-800 text-white sm:px-10 sm:py-4 md:px-6 md:py-2 md:rounded md:text-xl">EXPLORE EXERCISES</button>
        </div>
      </div>

        {/* RIGHT IMAGE */}
<div className=" w-1/2 h-full  right-5">
            <img  
                src={heroImage} 
                className="h-full w-auto  object-cover  drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                alt="hero-img"
            />
        </div>
        {/* Fitx */}
       <div>
  <p className="hidden xl:block xl:[writing-mode:vertical-rl] xl:rotate-180 xl:font-bold xl:text-[160px] xl:text-red-800 xl:mr-0">
    FITX
  </p>
</div>


    </div>
  );
}
export default HeroSection