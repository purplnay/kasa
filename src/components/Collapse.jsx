import { useRef, useState } from "react";
import arrowUp from "../assets/arrow-up.svg";
import styles from "./Collapse.module.scss";

export default function Collapse({ title, children }) {
  const contentEl = useRef(null);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <div className={styles.header}>
        {title}
        <button
          className={`${styles.button}${
            isOpened ? ` ${styles.buttonActive}` : ""
          }`}
          type="button"
          title={isOpened ? "Fermer" : "Ouvrir"}
          onClick={() => setIsOpened(!isOpened)}
        >
          <img className={styles.arrow} src={arrowUp} alt="Flèche" />
        </button>
      </div>
      <div
        ref={contentEl}
        className={styles.content}
        style={{
          maxHeight: isOpened ? contentEl.current?.scrollHeight : 0,
        }}
      >
        <div className={styles.innerContent}>{children}</div>
      </div>
    </div>
  );
}
