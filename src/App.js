import styles from './App.module.scss';
import { ReactComponent as Icon } from './images/icon.svg';
import { ReactComponent as Logo } from './images/Logo.svg';

export default function App() {
  return (
    <>
      <nav className={`${styles.container} ${styles.navigationBar}`}>
        <Logo />
        <ul>
          <li>
            <a href="/#">Examples</a>
          </li>
          <li>
            <a href="/#">Form Generator</a>
          </li>
          <li>
            <a href="/#">Integrations</a>
          </li>
          <li>
            <a href="/#">Docs</a>
          </li>
          <li>
            <a href="/#">Pricing</a>
          </li>
        </ul>
        <div className={styles.headerButtonsContainer}>
          <a href="/#">Login</a>
          <a href="/#" className={styles.contain}>
            Sign up
          </a>
        </div>
      </nav>
      <div className={`${styles.middlebox} ${styles.middleboxp}`}>
        <h4 className={`${styles.h4} ${styles.colorh4}`}>Form Generator</h4>
        <div className={styles.boxmain}>
          <h1 className={styles.insideh1box}>
            <div className={`${styles.middlebox1} ${styles.middlebox2}`}>
              <span>Free HTML</span>
              <Icon />
              <span>form generator</span>
            </div>
          </h1>
          <p className={styles.pcontainer}>
            Choose a form below, customize and get HTML Code for free. We've
            carefully crafted beautiful forms for you ✨
          </p>
        </div>
      </div>
      <div className={styles.secondbox}>
        <div className={styles.insidesecondbox}>
          <div className={styles.div1}>
            <a href="/#">
              <p className={styles.insidep2}>Contact Form Generator</p>
            </a>
          </div>
          <div className={styles.description}>
            <a href="/#">
              <p>
                Ask only what matters for a contact form; Name, Email and
                Message.
              </p>
            </a>
          </div>
          <div className={styles.boom}>
            <a className={styles.bim}>
              <p className={styles.loli}>Contact Forms</p>
            </a>
          </div>
          <a className={styles.but}>
            <p className={styles.lastp}>Create Contact Form</p>
          </a>
        </div>
      </div>

      <footer>my footer</footer>
    </>
  );
}
