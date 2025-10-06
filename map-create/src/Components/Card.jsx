import React from "react";

function Card({ cities }) {
  return (
        <div className="flex justify-center mt-10 min-h-screen">
      <ul className="grid grid-cols-3 gap-8">
        {cities.map((city) => (
          <li key={city.id} className="w-[310px] h-[250px] 
          flex flex-col justify-end p-4 bg-amber-300 rounded-xl
           hover:bg-amber-800 hover:scale-105 
           transition duration-300 ease-in-out 
           ">
            <div>
                <h1 className="text-lg font-bold">{city.name}</h1>
                <p>Region: {city.category}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card;
