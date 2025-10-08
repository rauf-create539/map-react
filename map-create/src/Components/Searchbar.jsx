import { useState } from "react";

function Searchbar(){

  
  return (
    <div className="sticky top-[70px] z-50 w-full h-[120px] flex items justify-center items-center bg-white border-2 border-black" >
      <form  className="flex gap-8">
        <button className="h-[50px] w-[100px] font-regular rounded-2xl border-2 hover:bg-blue-500 transition ease-in-out hover:text-white">Navigation</button>
        <input
        type="text"
        placeholder="Search and explore..."
        className="w-[880px] h-[50px] pl-3 border rounded-2xl bg-white" />

        <button
          type="submit"
          className="h-[50px] w-[100px] bg-black text-white font-medium rounded-2xl"
        >
          Search
        </button>
      </form>

    </div>
  )
}

export default Searchbar;