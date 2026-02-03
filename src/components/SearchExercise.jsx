import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import { IoSearch } from "react-icons/io5";
import { dataContext } from '../context/UserContext';
import { exercises } from '../exercises'; 

function SearchExercise() {
  const { input, setInput } = useContext(dataContext);
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  useEffect(() => {
    const newList = exercises.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredExercises(newList);
  }, [input]);

  return (
    <div className="p-5">
      {/* Header */}
      <div className="mb:4 md:mb-6">
        <h1 className="text-sm mt-8 mb-6 sm:text-3xl md:text-3xl font-bold text-center">Awesome Exercises You Should Know</h1>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <form
          className="w-[90%] h-[60px] md:w-[45%] md:h-[60px] bg-white flex items-center px-5 gap-5 shadow-xl md:w-[70%]"
          onSubmit={(e) => e.preventDefault()}
        >
          <IoSearch className="w-[20px] h-[20px] rounded-md" />
          <input
            type="text"
            placeholder="Search exercises..."
            className="w-[100%] outline-0 text-[14px] md:text-[20px]"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>
      </div>

      {/* Exercise Cards */}
      <div className="w-full flex flex-wrap gap-5 justify-center items-center">
        {filteredExercises.length > 0 ? (
          filteredExercises.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              bodyPart={item.bodyPart}
              equipment={item.equipment}
              Wimages={item.Wimages}
            />
          ))
        ) : (
          <div className="text-gray-700 text-3xl mt-20 font-bold">No exercises found</div>
        )}
      </div>
    </div>
  );
}

export default SearchExercise;
