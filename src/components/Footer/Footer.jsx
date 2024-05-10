// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footerStyled}>
      <div className={styles.divTextoStyled}>
        <h3>Sobre nós</h3>
        <p>
          &emsp;Por volta de 2008, uma onda Brasileira atingiu Barcelona, focada no skate, CharlieB foi uma delas. Ele trocou a carreira no basquete no Brasil pela vida do skate e do rap de Barcelona: fundou a EDG (Elite do Ganjamento) — o epítome da cultura do skate brasileiro e do estilo de vida de Barcelona. A EDG não apenas incorpora grandes eventos de rap, mas também oferece uma mistura única de nossos próprios skates e streetwear. Eleve o seu estilo com autenticidade EDG.<br /> 🛹&nbsp;👕&nbsp;🎤 &nbsp;#BarcelonaSkateCulture &nbsp;#EDGSkateShop &nbsp;#UrbanStyle"
        </p>
      </div>
      <div className={styles.divfinalStyled}>
        <p>©2024 | ELITEG </p>
        <div className={styles.divSocialStyled}>
          <Image src='/facebook.svg' width={18} height={18} alt='Facebook' />
          <Image src='/instagram.svg' width={20} height={20} alt='Instagram' />
          <Image src='/youtube.svg' width={20} height={20} alt='Youtube' />
          </div>
      </div>
    </footer>
  );
};
