import { useParams, useNavigate} from "react-router-dom";
import cities from "../FilterData/Cities";
import Searchbar from "./Searchbar";

function Details(){

  const { id } = useParams();
  const navigate = useNavigate();
  const city = cities.find((c) => c.id === parseInt(id));
  if (!city) {
    return <h1>City not found</h1>;
  }

  return (
    <div className="overflow-x-hidden pb-6"> 
      <div className="relative flex justify-center items-center h-[70px] sticky top-0 z-50 bg-white">

        <button
        onClick={() => navigate(-1)} className="bg-black text-white absolute left-5 ml-8 p-2 w-[100px] hover:bg-white hover:text-black hover:border-2 transition ease-in-out">
          Back
        </button>
        
        <h1 className="text-4xl" >City Details</h1>
      </div>

      <Searchbar />
  

    <div className="w-screen flex justify-center items-center mt-8">
      <div className="w-[900px] flex gap-8">
          <img 
          src={city.image}
          alt={city.name}
          className="w-[500px] h-[350px] rounded-2xl border-2 border-black hover:scale-105 transition ease-in-out"/>

          {/*Details */}
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">{city.name}</h2>

            <p>Read: {city.detail}</p>
          </div>
      </div>
    </div>


    {/*Attractions */}
      <div className="flex flex-col items-center mt-10">
        <div className="border-1 border-black w-[900px] h-[60px] flex items-center justify-center mb-4">
        <h1 className="font-bold text-2xl">Top Attractions</h1>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {city.attractions?.map((p) =>(
            <div
              key={p.id}
              className="w-[260px] h-[230px] border border-black rounded-xl overflow-hidden hover:scale-105 transition ease-in-out"
            >
              
              <img 
                src={p.image}
                alt={p.name}
                className="w-full h-[150px] object-cover"
              />
              <div className="p-2 text-center">
                <h3>{p.name}</h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Details;
