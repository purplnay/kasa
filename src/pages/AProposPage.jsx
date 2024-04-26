import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import mountain from "../assets/mountain.webp";
import styles from "./AProposPage.module.scss";

export default function AProposPage() {
  return (
    <div>
      <header>
        <Banner url={mountain} alt="Montagnes" />
        <h1 className={styles.title}>A propos</h1>
      </header>

      <section className={styles.content}>
        <article>
          <Collapse title={<h2>Fiabilité</h2>}>
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </Collapse>
        </article>

        <article>
          <Collapse title={<h2>Respect</h2>}>
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </Collapse>
        </article>

        <article>
          <Collapse title={<h2>Service</h2>}>
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </Collapse>
        </article>

        <article>
          <Collapse title={<h2>Sécurité</h2>}>
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l&#39;hôte qu&#39;au locataire, cela permet à nos équipes de
              vérifier que les standards sont bien respectés. Nous organisons
              également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </Collapse>
        </article>
      </section>
    </div>
  );
}
