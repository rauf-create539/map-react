import "./style.css"
import { useState } from "react";
import Searchbar from "./Components/Searchbar";
import { useSearchParams } from "react-router-dom";
import FilterBtn from './Components/FilterBtn';
import cities from './FilterData/Cities';
import Card from './Components/Card';
import SideBar from "./Components/SideBar";
import { Routes, Route, Link, NavLink } from "react-router-dom";
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
    <div className="h-screen flex flex-col pb-5">

    {/*Header 1/2: City Explorer Pro*/}
    <div className="sticky top-0 z-50 bg-white">
      <h1 className="text-3xl text-center mt-2.5 font-semibold text-black">City Explorer Pro</h1>
      <div className="text-center">
        <h3 className="font-extralight mb-4">By Techweave</h3>
      </div>
    </div>

    {/*Header 2/2: Button and Searchbar*/}
    <Searchbar />

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
      } />
    
    {/*Direct to new page(details)*/}
    <Route path="/cities/:id" element={<Details />} />
    </Routes>
  );
}