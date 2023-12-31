import { useEffect, useState } from "react";
import styles from "./ScheduleForm.module.css";
import { API } from "../Api/api.js";
import { useNavigate, useParams } from "react-router-dom";
import { APIPOST } from "../Api/api-post";

const ScheduleForm = () => {
  const [dentistas, setDentistas] = useState({});
  const [pacientes, setPacientes] = useState([]);
  const [campoPaciente, setCampoPaciente] = useState('');
  const [campoHorario, setCampoHorario] = useState('');
  const navigate = useNavigate();
  const dentistaId = useParams();
  const token = localStorage.getItem("user-token");

  const getDentistas = async () => {
    const { data } = await API.get(`/dentista?matricula=${dentistaId.id}`);
    setDentistas(data)
  };
  const getPacientes = async () => {
    const { data } = await API.get("/paciente");
    setPacientes(data.body);
  };

  useEffect(() => {
    getDentistas();
    getPacientes();

    //Nesse useEffect, você vai fazer um fetch na api buscando TODOS os dentistas
    //e pacientes e carregar os dados em 2 estados diferentes
  }, []);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dadosConsulta = {
      "paciente": {
        "nome": "string",
        "sobrenome": "string",
        "matricula": "string",
        "usuario": {
          "username": "string"
        },
        "endereco": {
          "id": 0,
          "logradouro": "string",
          "numero": "string",
          "complemento": "string",
          "bairro": "string",
          "municipio": "string",
          "estado": "AC",
          "cep": "string",
          "pais": "string"
        },
        "dataDeCadastro": "2023-10-09T02:28:40.898Z"
      },
      "dentista": {
        "nome": "string",
        "sobrenome": "string",
        "matricula": "string",
        "usuario": {
          "username": "string"
        }
      },
      "dataHoraAgendamento": "2023-10-09T02:28:40.898Z"
    };
    

    

    try {
      await APIPOST.post("/consulta", dadosConsulta, { headers: {Authorization: `Bearer ${token}`}});
      // alert("Consulta agendada");
      console.log(token)
      navigate("/home");
    } catch (error) {
      // alert("Erro ao agendar consulta!");
    }

    //Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`text-center container}`}>
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>
              <select className="form-select" name="dentist" id="dentist">
                <option
                  key={"dentista selecionado"}
                  value={`${dentistas.nome} ${dentistas.sobrenome}`}
                >
                  {`${dentistas.nome} ${dentistas.sobrenome}`}
                </option>
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              <select
                className="form-select"
                name="patient"
                id="patient"
                value={campoPaciente}
                onChange={(event) => setCampoPaciente(event.target.value)}
              >
                <option key="default" value="">
                  Selecione um paciente
                </option>
                {pacientes.map((paciente) => (
                  <option key={paciente.matricula} value={paciente.matricula}>
                    {`${paciente.nome} ${paciente.sobrenome}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
                value={campoHorario}
                onChange={(event) => setCampoHorario(event.target.value)}
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button className={`btn btn-light ${styles.button}`} type="submit">
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
