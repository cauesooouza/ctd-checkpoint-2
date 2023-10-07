import { useEffect, useState } from "react";
import Card from "../Components/Card";

import { API } from "../Api/api";

const Home = () => {
  const [dentista, setDentista] = useState([]);



  useEffect(() => {
    async function getDentist() {
      const response = await API.get("/dentista")
      setDentista(response.data)
    }

    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
    getDentist();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">

      {
        dentista.map((dentista) =>
        <Card 
        key={dentista}
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
