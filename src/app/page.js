import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

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
      <Footer />
    </>
  );
};
