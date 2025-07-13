import React from 'react';
import { Link } from 'react-router-dom';

const Loading = () => {
  return (
 <>
 <div className="flex flex-col gap-10 justify-center items-center mt-10">
  <h1 className='text-4xl font-bold '>No recpie Found !</h1>
  <Link to="/create" className="text-xl font-bold bg-sky-600 rounded text-center px-3 py-3 ">Create Now</Link>
 </div>
 
 
 </>
  );
};

export default Loading;