const YT_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YT_HOST = import.meta.env.VITE_YOUTUBE_API_HOST;
const API_KEY = import.meta.env.VITE_API_API_KEY;
const API_HOST = import.meta.env.VITE_API_API_HOST;
const MV_KEY = import.meta.env.VITE_MOTIVATION_API_KEY;
const MV_HOST = import.meta.env.VITE_MOTIVATION_API_HOST;
export const fetchData = async (query) => {
  try {
    if (!YT_KEY || !YT_HOST) {
      throw new Error("YouTube API env variables missing");
    }

    const res = await fetch(
      `https://${YT_HOST}/search/?q=${encodeURIComponent(query)}&hl=en&gl=US`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": YT_KEY,
          "x-rapidapi-host": YT_HOST,
        },
      }
    );

    if (!res.ok) throw new Error(`API error: ${res.status}`);

    const data = await res.json();
    return Array.isArray(data.contents) ? data.contents : [];
  } catch (error) {
    console.error("YouTube fetch error:", error.message);
     alert("I have used free API this is all u get for free 😭. Try after sometime it will work 😁.");
    return [];
  }
};

// ------------------------
// BMI fetch function
// ------------------------


export const fetchBMI = async ({ feet, inches, weight }) => {
  try {
    if (!API_KEY) throw new Error(" API key missing");

    const url = `https://${API_HOST}/api/bmi?measurement_units=std&feet=${feet}&inches=${inches}&lbs=${weight}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST,
      },
    });

    if (!res.ok) throw new Error(`BMI API error: ${res.status}`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("BMI fetch error:", error.message);
    alert("I have used free API this is all u get for free 😭. Try after sometime it will work 😁.(BMI API FAILED)");
    return null;
  }
};



// ------------------------
// NUTRITION fetch function
// ------------------------


export const fetchNutrition = async ({ feet, inches, weight,age,sex,activity }) => {
  try {
    if (!API_KEY) throw new Error("API key missing");

const url = `https://nutrition-calculator.p.rapidapi.com/api/nutrition-info?measurement_units=std&sex=${sex}&age_value=${age}&age_type=yrs&feet=${feet}&inches=${inches}&lbs=${weight}&activity_level=${activity}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST,
      },
    });

    if (!res.ok) throw new Error(` API error: ${res.status}`);

    const nutritionData = await res.json();
        console.log("NUTRITION RESPONSE:", nutritionData);
    return nutritionData;

  } catch (error) {
    console.error("Nutrition fetch error:", error.message);
    alert("I have used free API this is all u get for free 😭. Try after sometime it will work 😁.(NUTRITION API FAILED)");

    return null;
  }
};

//Motivation

export const fetchMotivation = async () => {
  try {
    if (!MV_KEY || !MV_HOST)
      throw new Error("Motivation API env variables missing");

    const res = await fetch(`https://${MV_HOST}/quotes`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": MV_KEY,
        "x-rapidapi-host": MV_HOST,
      },
    });

    if (!res.ok) throw new Error(`Motivation API error: ${res.status}`);

    return await res.json(); 
  } catch (error) {
    console.error("Motivation fetch error:", error.message);
    alert("I have used free API this is all u get for free 😭. Try after sometime it will work 😁. Get Motivated after sometime🤗");
    return null;
  }
};

export default fetchData;
