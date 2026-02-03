import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Card2 from '../components/Card2';
import fetchData from '../utils/fetchData';
import { exercises } from '../exercises';

function ExerciseDetails() {
  const { id } = useParams(); 
  const [exercise, setExercise] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(true);

  useEffect(() => {
   
    const selected = exercises.find(item => item.id.toString() === id);

    if (!selected) {
      setExercise(null); 
      setVideos([]);
      setLoadingVideos(false);
      return;
    }

    setExercise(selected);

    
    setLoadingVideos(true);
    fetchData(`${selected.name} exercise`)
      .then(data => {
        setVideos(data || []);
        setLoadingVideos(false);
      })
      .catch(() => setLoadingVideos(false));
  }, [id]);

  if (!exercise) return <h1 className="text-center mt-20 text-2xl">Exercise not found</h1>;

  return (
    <div className="p-10 bg-white">
      {/* Exercise Name */}
      <h1 className="text-4xl font-bold mb-6">{exercise.name}</h1>

      {/* Exercise Card */}
      <Card2 exercise={exercise} />

      {/* Videos */}
      <h2 className="text-3xl font-semibold mt-10 mb-5">Related Videos</h2>

      {loadingVideos ? (
        <p>Loading videos...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.slice(0, 6).map((item, index) => (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 hover:scale-105 transition"
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                className="w-full h-[250px] shadow-xl object-cover rounded-lg"
              />
              <p className="text-lg font-medium">{item.video.title}</p>

             <p className="text-sm text-gray-600">
                {item.video.author?.title || "Unknown Channel"}
             </p>
            </a>
          ))}
          {videos.length === 0 && <p>No videos found for this exercise.</p>}
        </div>
      )}
    </div>
  );
}

export default ExerciseDetails;
