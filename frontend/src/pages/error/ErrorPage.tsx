import React from "react";
import { Link } from "react-router-dom";
import ReactErrorImage from "../../svg/404.svg";
import styles from "./error-page.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <div className={styles.error__container}>
        <h2 className={styles.error__header}>Упс.. Что-то пошло не так</h2>
        <Link to="/services">
          <button className={styles.error__link}>На главную</button>
        </Link>
      </div>

      <img
        className={styles.error__image}
        src={ReactErrorImage}
        alt="Такой страницы не существует"
      />
    </div>
  );
};

export default ErrorPage;
