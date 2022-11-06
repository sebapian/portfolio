import styles from '../styles/Navigation.module.css';
import Link from 'next/link';

function Navigation() {
  return (
    <div className={styles.nav}>
      <h1>Sebastian Pian</h1>
      <ul>
        <li>
          <Link href="#" className={styles.active}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Portfolio</Link>
        </li>
        <li>
          <Link href="#">Resume</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
