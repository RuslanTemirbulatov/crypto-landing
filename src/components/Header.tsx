"use client";

import Link from "next/link";
import styles from "../styles/Header.module.scss";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    if (window.screen.availWidth <= 700) {
      setOpen((prev) => !prev);
      if (!open)
      document.body.classList.add('active');
      else 
      document.body.classList.remove('active');
    }
  };
  return (
    <header className={`${styles.header} ${styles.container}`}>
      <div className={styles.logo}>
        <img src="img/logo.png" alt="logo" />
        <h1>Canyon Swap</h1>
      </div>
      <div className={styles.burgerBtn} onClick={openMenu}>
        {open ? (
          <AiOutlineClose size={35} color="#ffffff" />
        ) : (
          <AiOutlineMenu size={35} color="#ffffff" />
        )}
      </div>
      <div className={open ? `${styles.burgerMenu} ${styles.active}` : `${styles.burgerMenu}`} onClick={openMenu}>
        <nav className={styles.nav}>
        <div className={styles.burgerMenuContent} onClick={e => e.stopPropagation()}>
          <ul className={styles.ul}>
              <li className={`${styles.li} ${styles.active}`}><Link href="/#"  onClick={openMenu}>Главная</Link></li>
              <li className={styles.li}><Link href="/#"  onClick={openMenu}>Лендинг</Link></li>
              <li className={styles.li}><Link href="/#"  onClick={openMenu}>FAQ</Link></li>
              <li className={styles.li}><Link href="/#"  onClick={openMenu}>Обратная связь</Link></li>
          </ul>
          </div>
        </nav>
      </div>
      <div className={styles.headerButtons}>
        <span className={styles.buttonRu}>
          <img src="img/iconLang.png" alt="icon" /> RU{" "}
          <img src="img/back.png" alt="icon" />
        </span>
        <span className={styles.buttonDecimal}>
          <img src="/img/decimal.png" alt="icon" />
          Decimal
        </span>
        <span className={styles.buttonWallet}>
          <img src="/img/wallet.png" alt="icon" />
          Connect wallet
        </span>
      </div>
    </header>
  );
};

export { Header };
