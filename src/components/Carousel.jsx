import { useCallback, useState } from "react";
import previous from "../assets/previous.svg";
import next from "../assets/next.svg";
import styles from "./Carousel.module.scss";

export default function Carousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onButtonClick = useCallback(
    (newIndex) => {
      if (newIndex < 0) {
        setCurrentIndex(pictures.length - 1);
      } else if (newIndex >= pictures.length) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(newIndex);
      }
    },
    [pictures.length]
  );

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${styles.previousButton}`}
        type="button"
        title="Image précédente"
        onClick={() => onButtonClick(currentIndex - 1)}
      >
        <img className={styles.buttonIcon} src={previous} alt="Précédent" />
      </button>
      <ul className={styles.list}>
        {pictures.map((picture, i) => (
          <li
            key={picture}
            className={styles.listItem}
            style={{ display: currentIndex !== i ? "none" : "block" }}
          >
            <img
              className={styles.listItemImage}
              src={picture}
              alt={`Image de "${title}"`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </li>
        ))}
      </ul>
      <button
        className={`${styles.button} ${styles.nextButton}`}
        type="button"
        title="Image suivante"
        onClick={() => onButtonClick(currentIndex + 1)}
      >
        <img className={styles.buttonIcon} src={next} alt="Suivant" />
      </button>
      <div className={styles.counter}>
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  );
}
