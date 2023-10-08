import { useEffect, useState, useContext } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
//import { DarkModeContext } from "../context/darkMode";

import { API } from './../Api/api';



const DetailCard = (props) => {
  //const [darkMode] = useContext(DarkModeContext)
  const { idDentista } = props;
  const [dentista, setDentista] = useState({});


  async function getDentista(){
    try {
      const { data } = await API.get(`/dentista?matricula=${idDentista}`);
      setDentista({nome: data.nome, sobrenome: data.sobrenome, matricula: data.matricula, usuario: data.usuario.username})
    } catch (error) {
      console.log("Erro ao obter dentista:");
      console.log(error);
    }
  }

  useEffect(() => {
    getDentista();
  }, []);
  return (
    <>
      <h1 style={{margin:0}}>Detalhes sobre o dentista {dentista.nome}</h1>
      <div >
      <section className={`card col-sm-12 col-lg-6 containe`}>
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`card-body row `}s
        >
          <div className={`col-sm-12 col-lg-6`}>
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className={`list-group`}>
              <li className={`list-group-item `}>Nome: {dentista.nome}</li>
              <li className={`list-group-item `}>
                Sobrenome: {dentista.sobrenome}
              </li>
              <li className={`list-group-item `}>
                Usuário: {dentista.usuario}
              </li>
            </ul>
            <div className={`text-center`}>
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button
                  }`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
