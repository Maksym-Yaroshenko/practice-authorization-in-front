import css from "./Gleb.module.css";

export default function Gleb() {
  return (
    <div className={css.container}>
      <div className={css.background}>
        <p className={css.text}>
          Любий Міксімка дядя! <br></br>
          Запрошую тебе на День народження,<br></br> який відбудеться 24 березня
          о 17:00
          <br></br>в кафе Coffee Island.<br></br> Гліб ❤️
        </p>
      </div>
    </div>
  );
}
