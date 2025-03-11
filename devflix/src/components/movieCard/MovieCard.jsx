import styles from "./MovieCard.module.css";

const MovieCard = (props) => {
// props: propriedades ou argumentos que são passados para um componente
  return (
    <div className={styles.movies}>
      <div>
        <p>{props.Year}</p>
      </div>

      <img src={props.Poster} alt="" />
      <h4>{props.Type}</h4>
      <h3>{props.Title}</h3>
    </div>
  );
};

export default MovieCard;