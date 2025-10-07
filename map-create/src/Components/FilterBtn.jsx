function Filter({ filter, setFilter }) {
  const buttons = ["all", "Luzon", "Visayas", "Mindanao"]

    return (
      <div className="flex gap-15 flex items justify-center items-center">
        
        {buttons.map((region) => (
          <button
          key={region}
          onClick={() => setFilter(region)}
          className={`w-[120px] h-[50px] border transition duration-300 ease-in-out mt-4 font-medium 
          rounded-2xl shadow-xl bg-blue-500
          ${filter === region ? "bg-blue-500 text-white scale-105" : "bg-white hover:bg-blue-500 hover:text-white hover:scale-105"}`}
          >
            {region.charAt(0).toUpperCase() + region.slice(1)}
          </button>
        ))}


      </div>
    )
}

export default Filter;