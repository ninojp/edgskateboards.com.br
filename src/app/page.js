import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";
import Thumbnails from "@/components/Thumbnails/Thumbnails";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Thumbnails />
        <div className={styles.container}>
          {/* <Banner /> */}
        </div>
      {/* <main className={styles.mainStyled}>
      </main> */}
      <Footer />
    </>
  );
};
