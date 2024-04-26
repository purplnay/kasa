import styles from "./Banner.module.scss";

export default function Banner({ url, children }) {
  return (
    <div className={styles.container}>
      <img className={styles.background} src={url} alt="Côte en bord de mer" />
      {children && (
        <>
          <div className={styles.overlay}></div>
          {children}
        </>
      )}
    </div>
  );
}
