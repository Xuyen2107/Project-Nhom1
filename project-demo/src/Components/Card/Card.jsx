import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ addClassName, nowPlaying, link, image, name, id, isItemSlide }) => {
   return (
      <li
         key={id}
         className={`${styles.card} ${isItemSlide ? `${styles.card_1_slide_item}` : ""} ${
            addClassName ? `${styles.card_1}` : ""
         }`}
      >
         <label className={styles.card_label}>{nowPlaying}</label>
         <NavLink to={`/gioi-thieu-phim/${id}_${link}`} title={name} className={styles.card_link}>
            <img
               className={styles.card_img}
               src={require(`../../Image/Movie-Item/${image}`)}
               alt={name}
            />
            <p className={styles.card_title}>{name}</p>
            <i className={`fa-solid fa-circle-play ${styles.card_icon_play}`}></i>
         </NavLink>
      </li>
   );
};

export default Card;
