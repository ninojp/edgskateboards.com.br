import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.navStyled}>
      <ul>
        <li>INÍCIO</li>
        <li>PRODUTOS</li>
        <li>MUSICAS</li>
        <li>TIME</li>
        <li>HISTÓRIA</li>
        <li>CONTATO</li>
      </ul>
    </nav>
  );
};
