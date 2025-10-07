import { useParams } from "react-router-dom";
import cities from "../FilterData/Cities";

function Details(){

  const { slug } = useParams();
  const city = cities.find((c) => c.slug ===slug);

  if(!city) {
    return <h1 className="text-center mt-10">City not found</h1>;
  }


  return (
    <div>
      
    </div>
  )
}

export default Details;
