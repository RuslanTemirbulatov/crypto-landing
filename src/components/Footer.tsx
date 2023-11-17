import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} ${styles.container}`}>
      <div className={styles.title}>
        <div className={styles.titleLeft}>
          <p>Copyright. @ 2023 Corp Name Все права защищены</p>
        </div>
        <div className={styles.titleRight}>
          <p>Пользовательское соглашение</p>
          <span className={styles.column}></span>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
