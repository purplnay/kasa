import logements from "../assets/logements.json";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import styles from "./FicheLogementPage.module.scss";
import Collapse from "../components/Collapse";

export default function FicheLogementPage() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  // Diapo a des fleches et un numero

  if (!logement) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <header>
        <Carousel pictures={logement.pictures} title={logement.title} />

        <div className={styles.header}>
          <div className={styles.info}>
            <div>
              <h1 className={styles.title}>{logement.title}</h1>
              <p className={styles.location}>{logement.location}</p>
            </div>
            <ul className={styles.tagsList}>
              {logement.tags.map((tag) => (
                <li key={tag} className={styles.tagItem}>
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.hostAndRating}>
            <div className={styles.host}>
              <p className={styles.hostName}>{logement.host.name}</p>
              <img
                className={styles.hostPicture}
                src={logement.host.picture}
                alt={`Photo de ${logement.host.name}`}
              />
            </div>
            <div>
              <Rating value={logement.rating} />
            </div>
          </div>
        </div>
      </header>

      <section className={styles.content}>
        <article className={styles.contentArticle}>
          <Collapse title={<h2>Description</h2>}>
            <p>{logement.description}</p>
          </Collapse>
        </article>
        <article className={styles.contentArticle}>
          <Collapse title={<h2>Équipements</h2>}>
            <ul className={styles.equipmentList}>
              {logement.equipments.map((equipement) => (
                <li key={equipement}>{equipement}</li>
              ))}
            </ul>
          </Collapse>
        </article>
      </section>
    </div>
  );
}
