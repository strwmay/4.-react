import styles from "./MovieCard.module.css";

const MovieCard = (props) => {
// props: propriedades ou argumentos que são passados para um componente
  return (
    <div className={styles.movie} >
      <div>
        <p>{props.Year}</p>
      </div>

      <img src={props.Poster} alt="" />
      <span>{props.Type}</span>
      <h3>{props.Title}</h3>
    </div>
  );
};

export default MovieCard;