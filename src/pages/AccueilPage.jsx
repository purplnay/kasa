import logements from "../assets/logements.json";
import seaCoast from "../assets/sea-coast.webp";
import Banner from "../components/Banner";
import HousingCard from "../components/HousingCard";
import styles from "./AccueilPage.module.scss";

export default function HomePage() {
  return (
    <div>
      <header className={styles.header}>
        <Banner url={seaCoast}>
          <h1 className={styles.heading}>Chez vous, partout et ailleurs</h1>
        </Banner>
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
