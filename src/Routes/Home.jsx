import { useEffect, useState } from "react";
import Card from "../Components/Card";

import { API } from "../Api/api";

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
