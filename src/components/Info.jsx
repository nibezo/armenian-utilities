import React from "react";
import styles from "../styles/styles.module.scss";
function Info() {
  return (
    <div className={styles.info__utilities}>
      <div className={styles.utilities__water}>
        <label>Water:</label>
        <input type="number" id="utilities__water" />
      </div>
      <div className={styles.utilities__gas}>
        <label>Gas:</label>
        <input type="number" id="utilities__gas" />
      </div>
      <div className={styles.utilities__electricity}>
        <label>Electricity:</label>
        <input type="number" id="utilities__electricity" />
      </div>
      <div className={styles.info__total}>
        <p>Total:</p>
        <span id="total"></span>
      </div>
      <button className={styles.info__print}></button>
    </div>
  );
}

export default Info;
