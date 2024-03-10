import React from "react";
import Info from "./Info";
import Main from "./Main";
import List from "./List";
import styles from "../styles/styles.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__info}>
        <Info />
        <Main />
        <List />
      </div>
    </header>
  );
}

export default Header;
