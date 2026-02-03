import { useNavigate } from 'react-router-dom';

function Card({ name, bodyPart, equipment, Wimages, id }) {
    const navigate = useNavigate();
    const handleClick = () => {
    navigate(`/exercise/${id}`);
    };
    
  return (
    <div id="exercises-section">
    <div onClick={handleClick} className='w-[300px] h-[300px] flex  sm:w-[280px] sm:h-[300px] sm:gap-[4px] md:w-[600px] md:h-[400px] lg:w-[400px] lg:h-[400px] bg-white my-10 m-5 rounded-sm  flex-col md:gap-[12px] shadow-lg hover:border-2 border-blue-500'>
      {/* GIF Image */}
      <div className='w-[100%] h-[80%] overflow-hidden object-cover p-3 rounded-lg'>
        <img src={Wimages} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <div className='text-2xl font-semibold text-center'>
        {name}
      </div>

      {/* Body Part & Equipment */}
      <div className='text-center font-bold text-gray-700'>
        {bodyPart} | {equipment}
      </div>
    </div>
    </div>
  );
}

export default Card;