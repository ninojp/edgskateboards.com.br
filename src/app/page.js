import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Nav from "@/components/Nav/Nav";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <main className={styles.mainStyled}>
        <div>
          BANNER
        </div>
      </main>
      <footer className={styles.footerStyled}>
        <h3>Sobre nós</h3>
        <p>
          Por volta de 2008, uma onda brasileira atingiu Barcelona, focada no skate, CharlieB foi uma delas. Ele trocou a carreira no basquete no Brasil pela vida do skate e do rap de Barcelona: fundou a EDG (Elite do Ganjamento) — o epítome da cultura do skate brasileiro e do estilo de vida de Barcelona. A EDG não apenas incorpora grandes eventos de rap, mas também oferece uma mistura única de nossos próprios skates e streetwear. Eleve o seu estilo com autenticidade EDG. 🛹👕🎤 #BarcelonaSkateCulture #EDGSkateShop #UrbanStyle"
        </p>
        <div>
          <p>©2024 | ELITEG </p>
        </div>
      </footer>
    </>
  );
}
