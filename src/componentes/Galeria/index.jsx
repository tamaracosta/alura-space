import styles from "./Galeria.module.scss";
import Tags from "../Tags";
import fotos from "./fotos.json";
import Card from "./Card";
import { useState } from "react";


export default function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((foto) => foto.tag))];

  const filtraFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag
    })
    setItens(novasFotos)
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens}/>
      <Card itens={itens} styles={styles} />
    </section>
  )
}
