import Image from "next/image";
import styles from "./page.module.scss";
import "./globals.css";

export default function Home() {
  return (
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.titleBtns}>
            <span className={`${styles.btn1} ${styles.active}`}>Swap</span>
            <span className={styles.btn2}>Pools</span>
          </div>
          <div className={styles.wallet1}>
            <div className={styles.walletContainer}>
              <h3>Вы продаете</h3>
              <div className={styles.walletName}>
                <span>
                  <img className={styles.imgBefore} src="./img/monst.png" alt="" />
                  CRYG <img className={styles.imgAfter} src="./img/back2.png" alt="" />
                </span>
                <h1>1</h1>
              </div>
              <div className={styles.walletSupTitile}>
                <h2>CRYG</h2>
                <h2>~$333.73</h2>
              </div>
            </div>
            <div></div>
          </div>
          <div className={styles.wallet2}>
            <div className={styles.walletContainer}>
              <h3>Вы покупаете</h3>
              <div className={styles.walletName}>
                <span>
                  <img className={styles.imgBefore} src="/img/dec.png" alt="" />
                  DEL <img className={styles.imgAfter} src="/img/back2.png" alt="" />
                </span>
                <h1>714.543016</h1>
              </div>
              <div className={styles.walletSupTitile}>
                <h2>DEL</h2>
                <h2>~$331.62 (-0.63%)</h2>
              </div>
            </div>
          </div>
          <div className={`${styles.exchange} ${styles.walletContainer}`}>
            <img src="/img/error.png" alt="" />
            <p>
              1 CRYG = 714.543 DEL <span>($331.42)</span>
            </p>
          </div>
          <button className={styles.connectBtn}>
            {" "}
            <img src="/img/wallet2.png" alt="" />
            Сonnect walley
          </button>
        </div>
      </main>
  );
}
