import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import logoWhite from "../assets/logo-white.svg";
import styles from "./Layout.module.scss";

export default function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <img className={styles.logo} src={logo} alt="Logo de Kasa" />
          <ul className={styles.navLinks}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                to="/"
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                to="/a-propos"
              >
                A Propos
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
      <footer className={styles.footer}>
        <img className={styles.footerLogo} src={logoWhite} alt="Logo de Kasa" />
        <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}
