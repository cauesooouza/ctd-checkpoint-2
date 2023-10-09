import { useEffect, useState } from "react";
import Card from "../Components/Card.jsx";

import { API } from "../Api/api.js";

const Home = () => {
  const [dentista, setDentista] = useState([]);

  async function getDentist() {

    try {
      const response = await API.get("/dentista")
      setDentista(response.data)
    }
    catch (error) {
      console.log("Erro ao procurrar o dentista");
      console.log("error");
    }
  }


  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
    getDentist();
  }, []);

  const cleanArray = dentista.filter( dentista => dentista.nome !== "Admin");
  
  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">

        {
          cleanArray.map((dentista, id) => 
            <Card
              key={id}
              matricula={dentista.matricula}
              nome={dentista.nome}
              sobrenome={dentista.sobrenome}
            />
          )
        }
      </div>
    </>
  );
};

export default Home;
