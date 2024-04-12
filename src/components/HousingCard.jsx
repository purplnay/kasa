import { Link } from "react-router-dom";
import styles from "./HousingCard.module.scss";

export default function HousingCard({ housing }) {
  return (
    <div className={styles.container}>
      <Link
        className={styles.link}
        to={`/fiche-logement/${housing.id}`}
        title="Voir le logement"
      >
        <span className={styles.linkText}>Voir le logement</span>
      </Link>
      <img
        className={styles.image}
        src={housing.cover}
        alt="Image du logement"
      />
      <div className={styles.overlay}>
        <p className={styles.title}>{housing.title}</p>
      </div>
    </div>
  );
}
