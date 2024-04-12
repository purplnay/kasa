import logements from "../assets/logements.json";
import seaCoast from "../assets/sea-coast.webp";
import HousingCard from "../components/HousingCard";
import styles from "./AccueilPage.module.scss";

export default function HomePage() {
  return (
    <div>
      <header className={styles.header}>
        <img
          className={styles.background}
          src={seaCoast}
          alt="Côte en bord de mer"
        />
        <div className={styles.overlay}></div>
        <h1 className={styles.heading}>Chez vous, partout et ailleurs</h1>
      </header>
      <main>
        <ul className={styles.housingList}>
          {logements.map((logement) => (
            <li key={logement.id}>
              <HousingCard housing={logement} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
