import React, { use } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Card({ cities }) {
  const navigate = useNavigate();

  return (
        <div className="flex justify-center 
        mt-10 min-h-screen">

      <ul className="grid grid-cols-3 gap-8">
        {cities.map((city) => (
          <li key={city.id} 
          className="w-[310px] h-[250px] 
          flex flex-col 
          justify-end p-4
          border border-black
           bg-white rounded-xl
           hover:bg-green-300 hover:scale-105 
           transition duration-300 ease-in-out 
           ">
        
        <Link to={`/cities/${city.id}`}>
        
          <div className="w-full h-[180px] 
          overflow-hidden 
          rounded-t-xl
          shadow-3xl">
              {/*City images */}
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover pt-3"
              />
          </div>

            <div>
                <h1 className="text-lg font-bold">{city.name}</h1>
                <p>Region: {city.category}</p>
            </div>
        </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card;
