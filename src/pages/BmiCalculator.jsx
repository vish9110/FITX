import React, { useState } from "react";
import { fetchBMI, fetchNutrition } from "../utils/fetchData"; 

const getStatusMessage = (bmi) => {
  const value = parseFloat(bmi);

  if (value < 16) return "Severely underweight ❗";
  if (value < 17) return "Moderately underweight ⚠️";
  if (value < 18.5) return "Underweight";
  if (value < 25) return "Normal weight ✅";
  if (value < 30) return "Overweight ⚠️";
  if (value < 35) return "Obese (Class I)";
  if (value < 40) return "Obese (Class II)";
  return "Obese (Class III)";
};


const BMICalculator = () => {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [statusMsg, setStatusMsg] = useState("");

  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const [activity, setActivity] = useState("");
  const [nutrition, setNutrition] = useState(null);

  const handleCalculate = async () => {
    if (!feet || !inches || !weight || !age) return;

    const data = await fetchBMI({ feet, inches, weight });
    if (!data) return;


    setBmiResult(data);
    setStatusMsg(getStatusMessage(data.bmi));

     const nutritionData = await fetchNutrition({
      feet:Number(feet),
      inches:Number(inches),
      weight:Number(weight),
      age:Number(age),
      sex,
      activity,
    });

    if (!nutritionData) return;
    setNutrition(nutritionData);


  };



  return (
<>
  {/* Full page wrapper */}
  <div className="w-full h-auto py-5  sm:w-full sm:h-auto sm:py-5 md:w-full md:h-auto md:pt-1 lg:w-full lg:h-auto lg:pt-1 xl:w-full xl:h-auto bg-gray-100 xl:pt-1">

    {/* Centered card container */}
    <div className="w-[90%] h-[400px] mx-auto sm:w-[70%] sm:h-300px sm:mx-auto md:w-[70%] md:h-[400px] md:mx-auto lg:w-[50%] lg:h-[420px] lg:mx-auto lg:my-10 xl:w-[40%] xl:h-[420px] xl:mx-auto bg-white xl:my-10 xl:text-lg text-black border-2  border-black">
      
      {/* Title */}
      <h2 className="py-5 text-md sm:py-5 sm:text-lg md:py-5 lg:text-xl lg:py-5 lg:pb-6 font-bold text-center xl:text-2xl xl:py-5  xl:pb-6  text-red-800 ">
        BMI & NUTRITION CALCULATOR
      </h2>
      
      {/* Form inputs container */}
      <div className="flex flex-col  space-y-7 text-black w-[80%] mx-auto">
        {/* User inputs */}

        <div className="flex items-center ">
        <label className="w-[20%] mr-5 text-[12px] sm:text-sm sm:mr-5 md:text-md lg:text-lg md:mr-10 ">Feet</label>
        <input type="number" placeholder="Feet" value={feet} className="  text-center w-[60%] sm:w-[80%] border border-gray-800 rounded-xl " onChange={(e) => setFeet(e.target.value) } />
         </div> 
          
        <div className="flex items-center "> 
          <label className="w-[20%] text-[12px] mr-5 sm:text-sm sm:mr-5  md:mr-10 lg:text-lg ">Inches</label>
        <input type="number" placeholder="Inches" value={inches}  className=" text-center w-[60%] sm:w-[80%] border border-gray-800 rounded-xl " onChange={(e) => setInches(e.target.value)} />
         </div> 
         
          <div className="flex items-center "> 
          <label className="w-[20%] text-[12px] mr-5 sm:text-sm sm:mr-5 md:mr-9 lg:text-lg ">Weight(lbs)</label>
        <input type="number" placeholder="Weight(lbs)" value={weight}  className=" text-center w-[60%] sm:w-[80%] border border-gray-800 rounded-xl " onChange={(e) => setWeight(e.target.value)} />
         </div> 
          <div className="flex items-center b"> 
           <label className="w-[20%] text-[12px] mr-5 sm:text-sm sm:mr-5 md:mr-10 lg:text-lg ">Age</label>
        <input type="number" placeholder="Age" value={age}  className=" text-center w-[60%] sm:w-[80%] border border-gray-800  rounded-xl" onChange={(e) => setAge(e.target.value)} />
        </div>
        {/* Dropdowns */}

        <div className="flex justify-between w-[50%] mb-8" >

         <select className="bg-gray-100 shadow-2xl  mr-2 sm:mr-4 md:mr-5" value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select className="bg-gray-100 shadow-2xl" value={activity} onChange={(e) => setActivity(e.target.value)}>
            <option value="" disabled>Activity Level</option>
            <option value="Inactive">Inactive</option>
            <option value="Low Active">Low Active</option>
            <option value="Active">Active</option>
            <option value="Very Active">Very Active</option>
        </select>

        </div>
       

        {/* Calculate button */}
        <button className= "mb-3   sm:mb-5 bg-red-800 text-white py-2  w-[30%] mx-auto rounded-xs hover:bg-gray-600" onClick={handleCalculate}>Calculate</button>

       

       

      </div> {/* End of form inputs container */}

    </div> {/* End of centered card container */}

<div className="flex flex-col md:flex-row mt-5 gap-6 w-[90%] mx-auto justify-center">

  {/* BMI result */}
  {bmiResult && (
    <div className="w-full md:w-[45%] text-lg text-black shadow-2xl border-2 border-black rounded-lg">
      <div className="p-4">
        <h3 className="pb-2 font-bold">BMI</h3>
        <hr className="border-2 mb-2" />
        <p>Your BMI: {bmiResult.bmi}</p>
        <p>Health Status: {bmiResult.health}</p>
        <p>{statusMsg}</p>
      </div>
    </div>
  )}

  {/* Nutrition result */}
  {nutrition && (
    <div className="w-full md:w-[45%] text-lg text-black shadow-2xl border-2 rounded-lg">
      <div className="p-4">
        <h3 className="pb-2 font-bold">Daily Nutrition</h3>
        <hr className="border-2 mb-2" />
        <p>Calories: {nutrition.BMI_EER["Estimated Daily Caloric Needs"]}</p>
        {nutrition.macronutrients_table["macronutrients-table"]
          .filter((row) =>
            ["Carbohydrate", "Total Fiber", "Protein", "Fat", "Total Water"].includes(row[0])
          )
          .map((row, index) => (
            <p key={index}>
              {row[0]}: {row[1]}
            </p>
          ))}
      </div>
    </div>
  )}
</div>


  </div> {/* End of full page wrapper */}
</>
  
  );
};

export default BMICalculator;
