import "./style.css"
import { useState } from "react";
import FilterBtn from './Components/FilterBtn';
import cities from './FilterData/Cities';
import Card from './Components/Card';
import SideBar from "./Sidebar/SideBar";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details";

export default function App() {


  const [filter, setFilter] = useState("all");

  const filteredItems =
  filter === "all" ? cities : cities.filter((city) => city.category === filter);


  return (
    <Routes>
      <Route 
      path="/"
      element={
    <div className="h-screen flex flex-col">

    {/*Header 1/2: City Explorer Pro*/}
    <div className="sticky top-0 z-50 bg-white">
      <h1 className="text-3xl text-center mt-2.5 font-semibold text-black">City Explorer Pro</h1>
      <div className="text-center">
        <h3 className="font-extralight mb-4">By Techweave</h3>
      </div>
    </div>

    {/*Header 2/2: Button and Searchbar*/}
    <div className="sticky top-[70px] z-50 w-full h-[120px] flex items justify-center items-center bg-white border border-black" >
      <div className="flex gap-8">
        <button className="h-[50px] w-[100px] font-regular rounded-2xl bg-blue-500 text-white">Navigation</button>
        <input
        type="text"
        placeholder="Search..."
        className="w-[880px] h-[50px] pl-3 border rounded-2xl bg-white"></input>
      </div>

    </div>

    {/*Body: */}
    <div className="flex flex-1 overflow-hidden bg-white">

      <SideBar />

      <div className="flex flex-col flex-1 p-4 overflow-y-auto">
        {/*Body: Filter buttons called from other file*/}
        <FilterBtn filter={filter} setFilter={setFilter} />

        {/*Body: Cities*/}
      <Card cities={filteredItems}/>
      </div>
    </div>
  </div>
      }
      
      />
      <Route path="/city/:id" element={<Details />} />
    </Routes>
  );
}