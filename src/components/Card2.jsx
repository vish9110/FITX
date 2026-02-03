import React from 'react'

function Card2({ exercise }) {
  return (
    <>
     <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row bg-gray-300 gap-10  p-6 rounded-xl shadow-lg w-full">
      <img
        src={exercise.Wimages}
        alt={exercise.name}
        className="w-[300px]"
      />

      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl  lg:text-3xl font-bold">{exercise.name}</h2>
        <p className="mt-3 text-sm sm:text-lg md:text-lg  lg:text-xl ">
          Body Part: <span className="text-sm sm:text-lg md:text-lg  lg:text-xl  font-semibold">{exercise.bodyPart}</span>
        </p>
        <p className="mt-2 text-sm sm:text-lg md:text-lg  lg:text-xl ">
          Equipment: <span className="text-sm sm:text-lg md:text-lg  lg:text-xl  font-semibold">{exercise.equipment}</span>
        </p>
        <p className='mt-2 text-sm sm:text-lg md:text-lg  lg:text-xl '>
        Effects:<span className='text-sm sm:text-lg md:text-lg  lg:text-xl  font-semibold'>{exercise.benefits}</span>
        </p>
      </div>
    </div>
    </>
   
  )
}

export default Card2;
