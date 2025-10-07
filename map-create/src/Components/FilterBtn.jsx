function Filter({ filter, setFilter }) {
    return (
      <div className="flex gap-15 items justify-center items-center">
        
        <button onClick={() => setFilter("all")}
        className="w-[120px] h-[50px] hover:bg-blue-900 hover:scale-105 transition duration-300 ease-in-out mt-4 font-medium text-white
           rounded-2xl shadow-xl bg-blue-500">All</button>

        <button onClick={() => setFilter("luzon")}
        className="w-[120px] h-[50px] hover:bg-blue-900 hover:scale-105 transition duration-300 ease-in-out mt-4 font-medium text-white
         rounded-2xl shadow-xl bg-blue-500">Luzon</button>

        <button onClick={() => setFilter("visayas")}
        className="w-[120px] h-[50px] hover:bg-blue-900 hover:scale-105 transition duration-300 ease-in-out mt-4 font-medium text-white
         rounded-2xl shadow-xl bg-blue-500">Visayas</button>

        <button onClick={() => setFilter("mindanao")}
        className="w-[120px] h-[50px] hover:bg-blue-900 hover:scale-105 transition duration-300 ease-in-out mt-4 font-medium text-white
         rounded-2xl shadow-xl bg-blue-500">Mindanao</button>

      </div>
    )
}

export default Filter;