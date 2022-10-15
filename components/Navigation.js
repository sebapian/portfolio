import styles from '../styles/Navigation.module.css';

function Navigation() {
  return (
    <div className={styles.nav}>
      <h1>Sebastian Pian</h1>
      <ul>
        <li>
          <a href="#" className={styles.active}>
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
