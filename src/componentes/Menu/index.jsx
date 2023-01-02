import styles from "./Menu.module.scss";
import inicio from "../../assets/home-ativo.png";
import maisCurtidas from "../../assets/mais-curtidas-inativo.png";
import maisVistas from "../../assets/mais-vistas-inativo.png";
import novas from "../../assets/novas-inativo.png";
import surpreenda from "../../assets/surpreenda-me-inativo.png";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={inicio} alt="logo home" />
          <a href="./">Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidas} alt="logo mais curtidas" />
          <a href="./">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVistas} alt="logo mais vistas" />
          <a href="./">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt="logo novas" />
          <a href="./">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreenda} alt="logo surpreenda"/>
          <a href="./">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}
