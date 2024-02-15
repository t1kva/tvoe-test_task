import React from "react";
import style from "../scss/Header.module.scss";
import images from "../assets/Header/images";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <a href="/">
          <img className={style.logo} src={images.logo} alt="" />
        </a>
        <nav className={style.menu}>
          <ul className={style.menu__list}>
            <li className={style.menu__list__item}>
              <img src={images.search} alt="/" className={style.menu__img} />
            </li>
            <li className={style.menu__list__item}>
              <img src={images.home} alt="/" className={style.menu__img} />
            </li>
            <li className={style.menu__list__item}>
              <img src={images.watch} alt="/" className={style.menu__img} />
            </li>
            <li className={style.menu__list__item}>
              <img src={images.tv} alt="/" className={style.menu__img} />
            </li>
            <li className={style.menu__list__item}>
              <img src={images.like} alt="/" className={style.menu__img} />
            </li>
            <li className={style.menu__list__item}>
              <img src={images.user} alt="/" className={style.menu__img} />
            </li>
            <li className={style.menu__list__item}>
              <img src={images.arrow} alt="" className={style.arrow} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
