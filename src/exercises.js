import situp34 from "./assets/situp34.jpg"
import airbike from "./assets/airbike.jpg"
import BarbellBenchPress from "./assets/BarbellBenchPress.jpg"
import bentoverrow from "./assets/bentoverrow.jpg"
import bicepcurl from "./assets/bicepcurl.avif"
import burpees from "./assets/burpees.jpg"
import calfraise from "./assets/calfraise.jpg"
import chestflyexercise from "./assets/chestflyexercise.jpg"
import frontraise from "./assets/frontraise.webp"
import jumpingjacks from "./assets/jumpingjacks.jpeg"
import latpulldown from "./assets/latpulldown.webp"
import lateralraise from "./assets/lateralraise.webp"
import legraise from "./assets/legraise.jpg"
import lunge from "./assets/lunge.jpg"
import mountainclimbers from "./assets/mountainclimbers.webp"
import neckextension from "./assets/neckextension.jpg"
import neckflexion from "./assets/neckflexion.jpg"
import overheadpress from "./assets/overheadpress.jpg"
import plank from "./assets/plank.jpg"
import pullups from "./assets/pullups.jpg"
import pushup from "./assets/pushup.avif"
import reversewristcurl from "./assets/reversewristcurl.webp" 
import seatedcalfraise from "./assets/seatedcalfraise.jpg"
import squat from "./assets/squat.avif"
import tricepdip from "./assets/tricepdip.jpg"
import wristcurl from "./assets/wristcurl.webp" 
const images = {
  situp34,
  airbike,
  legraise,
  plank,
  BarbellBenchPress,
  chestflyexercise,
  pushup,
  pullups,
  latpulldown,
  bentoverrow,
  overheadpress,
  lateralraise,
  frontraise,
  bicepcurl,
  tricepdip,
  wristcurl,
  reversewristcurl,
  squat,
  lunge,
  calfraise,
  seatedcalfraise,
  neckflexion,
  neckextension,
  jumpingjacks,
  burpees,
  mountainclimbers,
};

export const exercises = [
  // Waist / Abs
  {
    id: 1,
    name: "3/4 Sit-Up",
    bodyPart: "waist",
    equipment: "body weight",
    Wimages: images.situp34,
    benefits: "Strengthens abdominal muscles and improves core endurance."
  },
  {
    id: 2,
    name: "Air Bike",
    bodyPart: "waist",
    equipment: "body weight",
    Wimages: images.airbike,
    benefits: "Targets abs and obliques while boosting cardiovascular fitness."
  },
  {
    id: 3,
    name: "Leg Raise",
    bodyPart: "waist",
    equipment: "body weight",
    Wimages: images.legraise,
    benefits: "Builds lower abdominal strength and improves hip stability."
  },
  {
    id: 4,
    name: "Plank",
    bodyPart: "waist",
    equipment: "body weight",
    Wimages: images.plank,
    benefits: "Engages the core, improves posture, and supports spinal stability."
  },

  // Chest
  {
    id: 5,
    name: "Barbell Bench Press",
    bodyPart: "chest",
    equipment: "barbell",
    Wimages: images.BarbellBenchPress,
    benefits: "Builds chest, shoulders, and triceps strength."
  },
  {
    id: 6,
    name: "Dumbbell Fly",
    bodyPart: "chest",
    equipment: "dumbbell",
    Wimages: images.chestflyexercise,
    benefits: "Improves chest muscle stretch, definition, and flexibility."
  },
  {
    id: 7,
    name: "Push-Up",
    bodyPart: "chest",
    equipment: "body weight",
    Wimages: images.pushup,
    benefits: "Strengthens chest, arms, shoulders, and core."
  },

  // Back
  {
    id: 8,
    name: "Pull-Up",
    bodyPart: "back",
    equipment: "body weight",
    Wimages: images.pullups,
    benefits: "Builds upper-back strength and improves grip power."
  },
  {
    id: 9,
    name: "Lat Pulldown",
    bodyPart: "back",
    equipment: "cable",
    Wimages: images.latpulldown,
    benefits: "Develops lat muscles and improves upper-back width."
  },
  {
    id: 10,
    name: "Bent Over Row",
    bodyPart: "back",
    equipment: "barbell",
    Wimages: images.bentoverrow,
    benefits: "Strengthens the back, shoulders, and core stability."
  },

  // Shoulders
  {
    id: 11,
    name: "Overhead Press",
    bodyPart: "shoulders",
    equipment: "dumbbell",
    Wimages: images.overheadpress,
    benefits: "Builds shoulder strength and improves upper-body power."
  },
  {
    id: 12,
    name: "Lateral Raise",
    bodyPart: "shoulders",
    equipment: "dumbbell",
    Wimages: images.lateralraise,
    benefits: "Enhances shoulder width and muscle definition."
  },
  {
    id: 13,
    name: "Front Raise",
    bodyPart: "shoulders",
    equipment: "dumbbell",
    Wimages: images.frontraise,
    benefits: "Strengthens the front deltoids and shoulder stability."
  },

  // Upper Arms
  {
    id: 14,
    name: "Bicep Curl",
    bodyPart: "upper arms",
    equipment: "dumbbell",
    Wimages: images.bicepcurl,
    benefits: "Builds bicep strength and arm muscle definition."
  },
  {
    id: 15,
    name: "Tricep Dips",
    bodyPart: "upper arms",
    equipment: "body weight",
    Wimages: images.tricepdip,
    benefits: "Strengthens triceps, shoulders, and chest."
  },

  // Lower Arms
  {
    id: 16,
    name: "Wrist Curl",
    bodyPart: "lower arms",
    equipment: "dumbbell",
    Wimages: images.wristcurl,
    benefits: "Improves forearm strength and grip endurance."
  },
  {
    id: 17,
    name: "Reverse Wrist Curl",
    bodyPart: "lower arms",
    equipment: "dumbbell",
    Wimages: images.reversewristcurl,
    benefits: "Balances forearm muscles and reduces injury risk."
  },

  // Upper Legs
  {
    id: 18,
    name: "Squat",
    bodyPart: "upper legs",
    equipment: "barbell",
    Wimages: images.squat,
    benefits: "Builds leg strength, power, and overall body stability."
  },
  {
    id: 19,
    name: "Lunge",
    bodyPart: "upper legs",
    equipment: "dumbbell",
    Wimages: images.lunge,
    benefits: "Improves leg strength, balance, and coordination."
  },

  // Lower Legs
  {
    id: 20,
    name: "Calf Raise",
    bodyPart: "lower legs",
    equipment: "body weight",
    Wimages: images.calfraise,
    benefits: "Strengthens calf muscles and improves ankle stability."
  },
  {
    id: 21,
    name: "Seated Calf Raise",
    bodyPart: "lower legs",
    equipment: "machine",
    Wimages: images.seatedcalfraise,
    benefits: "Targets the soleus muscle for lower-leg endurance."
  },

  // Neck
  {
    id: 22,
    name: "Neck Flexion",
    bodyPart: "neck",
    equipment: "body weight",
    Wimages: images.neckflexion,
    benefits: "Strengthens neck muscles and improves posture support."
  },
  {
    id: 23,
    name: "Neck Extension",
    bodyPart: "neck",
    equipment: "body weight",
    Wimages: images.neckextension,
    benefits: "Enhances neck strength and reduces injury risk."
  },

  // Cardio
  {
    id: 24,
    name: "Jumping Jacks",
    bodyPart: "cardio",
    equipment: "body weight",
    Wimages: images.jumpingjacks,
    benefits: "Boosts heart rate, coordination, and calorie burn."
  },
  {
    id: 25,
    name: "Burpees",
    bodyPart: "cardio",
    equipment: "body weight",
    Wimages: images.burpees,
    benefits: "Full-body workout that builds strength and endurance."
  },
  {
    id: 26,
    name: "Mountain Climbers",
    bodyPart: "cardio",
    equipment: "body weight",
    Wimages: images.mountainclimbers,
    benefits: "Improves core strength, agility, and cardiovascular fitness."
  },
];

