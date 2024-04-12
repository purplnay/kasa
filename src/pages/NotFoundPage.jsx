import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

export default function NotFoundPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>
        Oups! La page que vous demandez n&#39;existe pas.
      </p>
      <Link className={styles.link} to="/">
        Retourner sur la page d&#39;accueil
      </Link>
    </main>
  );
}
