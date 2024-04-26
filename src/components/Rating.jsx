import { useRef } from "react";
import star from "../assets/star.svg";
import starActive from "../assets/star-active.svg";
import styles from "./Rating.module.scss";

export default function Rating({ value }) {
  const rating = useRef(Array(5).fill(false).fill(true, 0, Number(value)));

  return (
    <ul className={styles.container}>
      {rating.current.map((val, i) =>
        val ? (
          <img
            className={styles.star}
            key={i}
            src={starActive}
            alt="Étoile rouge"
          />
        ) : (
          <img className={styles.star} key={i} src={star} alt="Étoile grise" />
        )
      )}
    </ul>
  );
}
