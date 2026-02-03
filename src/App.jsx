import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Navbar from './components/Navbar';
import BmiCalculator from './pages/BmiCalculator';
import Motivation from './pages/Motivation';
import Footer from './components/Footer'

function App() {
  return (
    <>
    
   
     <div className='w-full h-auto bg-gray-200 box-border m-0 relative'>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetails />} />
      <Route path="/BmiCalculator" element={<BmiCalculator/>}/>
      <Route path="/Motivation" element={<Motivation/>}/>
    </Routes>
    <Footer/>
    
    </div>
    </>
  );
  
}

export default App;
