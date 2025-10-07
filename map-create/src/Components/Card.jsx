import React from "react";
import { Link } from "react-router-dom";

function Card({ cities }) {
  return (
    <div className="flex justify-center mt-10 min-h-screen">
      <ul className="grid grid-cols-3 gap-8">
        {cities.map((city) => (
          <Link to={`/city/${city.id}`} key={city.id}>
            <li className="w-[310px] h-[250px] 
              flex flex-col justify-end p-4 bg-amber-300 rounded-xl
              hover:bg-amber-800 hover:scale-105 
              transition duration-300 ease-in-out cursor-pointer">
              <div>
                <h1 className="text-lg font-bold">{city.name}</h1>
                <p>Region: {city.category}</p>
                <img src={city.image} alt={city.name} className="w-full h-40 object-cover rounded-lg mt-2" />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Card;