import styles from "./Populares.module.scss";
import fotosPopulares from "./populares.json"
import Botao from "componentes/Botao";

export default function Populares() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {fotosPopulares.map((fotoPopular) => {
          return (
            <li key={fotoPopular.id}>
              <img src={fotoPopular.path} alt={fotoPopular.alt} />
            </li>
          );
        })}
      </ul>
      <Botao type="button">Ver mais fotos</Botao>
    </aside>
  )
}
