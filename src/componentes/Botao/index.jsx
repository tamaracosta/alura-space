import styles from "./Botao.module.scss";

export default function Botao({type,children}) {
  return (
    <button className={styles.button} type={type}>{children}</button>
  )
}
