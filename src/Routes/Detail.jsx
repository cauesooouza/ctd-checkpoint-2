import { useParams } from "react-router-dom";
import DetailCard from "../Components/DetailCard";

const Detail = () => {
  const {id} = useParams();

  return (
    <>
      <DetailCard 
        idDentista={id}
      />
    </>
  )
}

export default Detail