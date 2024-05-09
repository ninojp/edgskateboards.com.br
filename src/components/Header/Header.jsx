import styles from './Header.module.css';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCircleUser } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className={styles.headerStyled}>
      <div>
        <figure className={styles.figureStyled}>
          <Image priority src='/bandeira-brasil_100.png' width={50} height={27} alt="Bandeira do Brasil" />
          <Image priority src='/bandeira-espanha_100.png' width={50} height={27} alt="Bandeira da Espanha" />
        </figure>
      </div>
      <div>
        <Image priority src='/edg logo OG.webp' width={187} height={120} alt="logo edg" />
      </div>
      <div>
        <div className={styles.divIconStyled}>
          <div className={styles.divLoginStyled}>
            <FontAwesomeIcon icon={faCircleUser} className={styles.iconStyled} /> Log in
          </div>
          <div className={styles.divCarrinStyled}>
            <FontAwesomeIcon icon={faCartArrowDown} className={styles.iconStyled} />
            <span className={styles.quantStyled} >0</span>
          </div>
        </div>
      </div>
    </header>
  );
};
