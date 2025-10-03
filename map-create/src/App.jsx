import "./style.css"

export default function App() {
  return <form className="min-h-screen flex flex-col">
    <div className="w-screen h-[120px] flex items justify-center items-center bg-green-600">
      <div className="flex gap-8">
        <button className="h-[60px] w-[100px] font-semibold rounded-2xl bg-amber-100">Navigation</button>
        <input
        type="text"
        placeholder="Search..."
        className="w-[880px] h-[60px] pl-2 border-0 rounded-2xl bg-white"></input>
      </div>
    </div>

    <div className="flex-1 bg-white">
      <div className="flex gap-15 flex items justify-center items-center">
        
        <button className="w-[120px] h-[50px] mt-4 font-medium text-white
           rounded-2xl  bg-blue-500">All</button>
        <button className="w-[120px] h-[50px] mt-4 font-medium text-white
         rounded-2xl bg-blue-500">Luzon</button>
        <button className="w-[120px] h-[50px] mt-4 font-medium text-white
         rounded-2xl bg-blue-500">Visayas</button>
        <button className="w-[120px] h-[50px] mt-4 font-medium text-white
         rounded-2xl bg-blue-500">Mindanao</button>

      </div>

      <div className="flex gap-10 flex items justify-center items-center mt-8">

        <div className="w-[400px] h-[200px] bg-gray-100 rounded-2xl">
        <div className="body"></div>
        <div className="bg-black">
          <h2>Davao City</h2>
        </div>
      </div>

      <div className="w-[400px] h-[200px] bg-gray-100 rounded-2xl">
        <div className="body"></div>
        <div className="bg-black">
          <h2>Davao City</h2>
        </div>
      </div>

      <div className="w-[400px] h-[200px] bg-gray-100 rounded-2xl">
        <div className="body"></div>
        <div className="bg-black">
          <h2>Davao City</h2>
        </div>
      </div>

      </div>

      <div className="flex gap-10 flex items justify-center items-center mt-8">

        <div className="w-[400px] h-[200px] bg-gray-100 rounded-2xl">
        <div className="body"></div>
        <div className="bg-black">
          <h2>Davao City</h2>
        </div>
      </div>

      <div className="w-[400px] h-[200px] bg-gray-100 rounded-2xl">
        <div className="body"></div>
        <div className="bg-black">
          <h2>Davao City</h2>
        </div>
      </div>

      <div className="w-[400px] h-[200px] bg-gray-100 rounded-2xl">
        <div className="body"></div>
        <div className="bg-black ">
          <h2>Davao City</h2>
        </div>
      </div>

      </div>
    </div>
  </form>
}