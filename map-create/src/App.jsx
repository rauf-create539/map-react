import "./style.css"
import Citypics from '../src/assets/Citypics.jpg'
import { useState } from "react";
import FilterBtn from './Components/FilterBtn';

export default function App() {

  const cities = [
    { id: 1, category: "luzon", name: "Manila"},
    { id: 2, category: "luzon", name: "Quezon_City"},
    { id: 3, category: "luzon", name: "Baguio"},
    { id: 4, category: "visayas", name: "Cebu City"},
    { id: 5,  category: "visayas", name: "Tacloban City"},  
    { id: 6,  category: "visayas", name: "Iloilo City"},
    { id: 7,  category: "mindanao", name: "Davao City"},
    { id: 8,  category: "mindanao", name: "Butuan City"},
    { id: 9,  category: "mindanao", name: "General Santos"},
    { id: 10, category: "mindanao", name: "Zamboanga City"},
    { id: 11, category: "mindanao", name: "Cagayan de Oro"},
  ];

  const [filter, setFilter] = useState("all");

  const filteredItems =
  filter === "all" ? cities : cities.filter((city) => city.category === filter);


  return <form className="min-h-screen flex flex-col">
    <div className="bg-green-600">
      <h1 className="text-3xl text-center mt-2.5 font-semibold text-black">City Explorer Pro</h1>
      <div className="text-center">
        <h3 className="text-white font-extralight">By Techweave</h3>
      </div>
    </div>

    <div className="w-screen h-[120px] flex items justify-center items-center bg-green-600" >
      <div className="flex gap-8">
        <button className="h-[50px] w-[100px] font-semibold rounded-2xl bg-amber-100">Navigation</button>
        <input
        type="text"
        placeholder="Search..."
        className="w-[880px] h-[50px] pl-3 border-0 rounded-2xl bg-white"></input>
      </div>
    </div>

    <div className="flex-1 bg-white">

      <FilterBtn filter={filter} setFilter={setFilter} />
      <div className="flex gap-10 flex items justify-center items-center mt-8">

        <div className="w-[400px] h-[200px] bg-gray-100 rounded-2xl shadow-2xl">
        <div className="body"></div>
        <div className="bg-black">
          <h2>Davao City</h2>
        </div>
      </div>

      <div className="w-[400px] h-[200px] bg-gray-100 rounded-2xl shadow-2xl">
        <div className="body"></div>
        <div className="bg-black">
          <h2>Davao City</h2>
        </div>
      </div>

      <div className="w-[400px] h-[200px] bg-gray-100 rounded-2xl shadow-2xl">
        <div className="body"></div>
        <div className="bg-black">
          <h2>Davao City</h2>
        </div>
      </div>

      </div>

      <div className="flex gap-10 items justify-center items-center mt-8">

        <div className="w-[400px] h-[200px] bg-gray-100 rounded-2xl shadow-2xl">
        <div className="body"></div>
        <div className="bg-black">
          <h2>Davao City</h2>
        </div>
      </div>

      <div className="w-[400px] h-[200px] bg-gray-100 rounded-2xl shadow-2xl">
        <div className="body"></div>
        <div className="bg-black">
          <h2>Davao City</h2>
        </div>
      </div>

      <div className="w-[400px] h-[200px] bg-gray-100 rounded-2xl shadow-2xl">
        <div className="body"></div>
        <div className="bg-black ">
          <h2>Davao City</h2>
        </div>
      </div>

      </div>
    </div>
  </form>
}