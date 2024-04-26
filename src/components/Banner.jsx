import styles from "./Banner.module.scss";

export default function Banner({ url, children }) {
  return (
    <div className={styles.container}>
      <img className={styles.background} src={url} alt="Côte en bord de mer" />
      <div
        className={styles.overlay}
        style={{ opacity: children ? 0.6 : 0.3 }}
      ></div>
      {children}
    </div>
  );
}
