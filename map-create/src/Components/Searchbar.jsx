import { useSearchParams } from "react-router-dom";

function Searchbar(){

  return (
    <div className="sticky top-[70px] z-50 w-full h-[120px] flex items justify-center items-center bg-white border border-black" >
      <div className="flex gap-8">
        <button className="h-[50px] w-[100px] font-regular rounded-2xl bg-blue-500 text-white">Navigation</button>
        <input
        type="text"
        placeholder="Search..."
        className="w-[880px] h-[50px] pl-3 border rounded-2xl bg-white"></input>
      </div>

    </div>
  )
}

export default Searchbar;