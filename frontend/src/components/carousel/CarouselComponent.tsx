import React from "react"
import styles from "./carousel-component.module.scss"
import stat from "../../svg/stat.svg"
import chat from "../../svg/chat.svg"
import navigation from "../../svg/navigation.svg"
import unification from "../../svg/unification.svg"
import { Carousel } from "react-bootstrap"
import { LogoIcon } from "../../svg/icons"

const CarouselComponent = () => {
  return (
    <>
      <div className={styles.right}>
        <Carousel style={{ width: "450px", margin: "auto" }} controls={false}>
          <Carousel.Item interval={3000}>
            <img src={stat} alt="stat" className={styles.carousel__img} />
            <Carousel.Caption>
              <p className={styles.carousel__header}>Наглядная статистика</p>
              <p className={styles.carousel__description}>
                Статистика по бурению скважин, подрядчикам и обществам
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              src={navigation}
              alt="navigation"
              className={styles.carousel__img}
            />
            <Carousel.Caption>
              <p className={styles.carousel__header}>Удобная навигация</p>
              <p className={styles.carousel__description}>
                Просматривайте существующие скважины и добавляйте новые
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img src={chat} alt="chat" className={styles.carousel__img} />
            <Carousel.Caption>
              <p className={styles.carousel__header}>Чат с коллегами</p>
              <p className={styles.carousel__description}>
                Обменивайтесь сообщениями с коллегами в рамках сопровождения
                бурения скважины
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              src={unification}
              alt="unification"
              className={styles.carousel__img}
            />
            <Carousel.Caption>
              <p className={styles.carousel__header}>Унификация данных</p>
              <p className={styles.carousel__description}>
                Данные от подрядчика приводятся к единой системе измерений
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.left}>
        <div className={styles.logo}>
          <LogoIcon style={{ marginRight: "1rem" }} />
          <b>
            {" "}
            ИГиРГИ <span>| Управление замерами</span>
          </b>
        </div>
        <div className={styles.copywrite__span}>
          <p>&copy; 2022 АО “ИГиРГИ”. Все права защищены.</p>
        </div>
      </div>
    </>
  )
}

export default CarouselComponent
