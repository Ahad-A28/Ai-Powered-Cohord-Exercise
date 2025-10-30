import React, { useContext } from 'react';
import FacialExpression from './FacialExpression';
import { FaCamera } from 'react-icons/fa';
import { CiPlay1 } from "react-icons/ci";
import { FaRegThumbsUp } from "react-icons/fa";
import { expressionContex } from '../context/Expression.context';

const MoodDetection = () => {
  const { expression } = useContext(expressionContex);

  // Mapping of expressions to emojis
  const expressionToEmoji = {
    happy: '😊',
    sad: '😢',
    angry: '😡',
    surprised: '😲',
    neutral: '😐',
    fearful: '😨',
    disgusted: '🤢',
  };
  const colorsoFExpression = {
    happy: 'text-yellow-500',
    sad: 'text-blue-400',
    angry: 'text-red-500',
    surprised: 'text-purple-500',
    neutral: 'text-gray-500',
    fearful: 'text-orange-500',
    disgusted: 'text-green-600',
    'No face detected': 'text-red-400',
  }

  // Capitalize the first letter of the expression
  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <>
      <div className="w-full flex justify-evenly flex-wrap p-10">
        <div className="">
          <h2 className="text-3xl font-bold px-2 py-3">Live Mood Detection</h2>
          <FacialExpression />
        </div>
        <div className="Track mt-5">
          <h1 className={`text-3xl font-bold  w-[25rem] `}>
            Mood Detect:<br className='hidden'/><span className={`Mood px-4   ${colorsoFExpression[expression]}`}>
              
            {expressionToEmoji[expression] || '🤔 '} {capitalizeFirstLetter(expression) } 
              </span> 
          </h1>
          <h2 className="text-xl font-semibold py-3 flex items-center gap-2">
            <span className="text-green-400"><FaRegThumbsUp /></span>Recommended Tracks
          </h2>
          <div className="Songs h-[23rem] flex flex-col gap-3 overflow-auto shadow rounded p-4">
            <div className="flex justify-between items-center shadow rounded px-5 py-2 w-full  hover:scale-103  transition-transform">
              <h1 className="text-lg font-bold flex flex-col">Song Name
                <small className="text-sm font-semibold text-gray-500">Artist</small>
              </h1>
              <div className="controls cursor-pointer  hover:scale-120  hover:bg-gray-100 px-2 py-1 rounded  transition-transform  ">
                <CiPlay1 />
              </div>
            </div>
            <div className="flex justify-between items-center shadow rounded px-5 py-2 w-full hover:scale-103  transition-transform">
              <h1 className="text-lg font-bold flex flex-col">Song Name
                <small className="text-sm font-semibold text-gray-500">Artist</small>
              </h1>
              <div className="controls cursor-pointer hover:scale-120  hover:bg-gray-100 px-2 py-1 rounded  transition-transform "  >
                <CiPlay1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoodDetection;