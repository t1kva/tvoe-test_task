import React from "react";
import style from "../scss/MovieCard.module.scss";
import preview from "../assets/indiana.png";
import title from "../assets/title.svg";

const MovieCard: React.FC = () => {
  return (
    <div className={style.container}>
      <img src={preview} alt="" className={style.film__card} />
      <ul className={style.film__list}>
        <li className={style.film__list__item}>
          <img src={title} alt="" className={style.film__title} />
        </li>
        <li className={style.film__list__item}>
          <h3 className={style.film__desc}>
            Неувядающий авантюрист и пытливый <br /> археолог-исследователь
            по‑прежнему в седле.
          </h3>
        </li>
        <li className={style.film__list__item}>
          <button className={style.film__watch}>Смотреть</button>
          <button className={style.film__about}>О фильме</button>
        </li>
      </ul>
    </div>
  );
};

export default MovieCard;
