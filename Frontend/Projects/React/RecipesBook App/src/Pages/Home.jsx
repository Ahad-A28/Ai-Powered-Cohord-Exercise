import React, { use, useContext } from "react";
import { Link } from "react-router-dom";
import { RecpieContext } from "../Context/RecpieContextWarper";
import Loading from "../components/Loading";
const Home = () => {
  const [recpie] = useContext(RecpieContext);
  console.log(recpie);

  return (
    <div className="Home p-5 flex flex-wrap gap-10 justify-center">
      {recpie.length === 0 ? (
        <Loading />
      ) : (
        recpie.map((item) => (
          <Link
            to={`/details/${item.id}`}
            key={item.id}
            className="card  p-5 bg-gray-700   w-[20rem] rounded-xl shadow-sm shadow-white hover:scale-[1.03] transition-transform"
          >
            <img
              src={item.src}
              alt="Food"
              className=" h-[10rem] w-full object-cover rounded-2xl  "
            />
            <small className="text-red-300">{item.cheif}</small>

            <div className="content flex flex-col gap-3">
              <h1 className="text-4xl font-bold ">{item.title}</h1>
              <p>
                {item.Des?.slice(0, 200)}{" "}
                <small className="text-red-300"> . . .more</small>{" "}
              </p>
              <button className="bg-sky-500 text-white   px-1 py-1 rounded-md cursor-pointer w-[50%]  text-lg font-semibold ">
                Learn More
              </button>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Home;
