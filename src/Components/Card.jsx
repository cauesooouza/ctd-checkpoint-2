import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({matricula, nome, sobrenome}) => {

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link to={`/dentist/${matricula}`}>
            <h5 className={`card-title ${styles.title}`}>{nome} {sobrenome}</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
