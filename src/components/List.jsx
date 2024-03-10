import React from "react";
import styles from "../styles/styles.module.scss";
function List() {
  return (
    <div className={styles.list__roommates}>
      <div className={styles.list__roommate}>
        <input
          type="text"
          id="list__roommate-name"
          className={styles.list__roommate_name}
          placeholder="name of roommate"
        />
        <input
          type="number"
          className={styles.list__roommate_from}
          id="list__roommate-from"
          placeholder="0"
        />
        <span>-</span>
        <input
          type="number"
          className={styles.list__roommate_to}
          id="list__roommate-to"
          placeholder="31"
        />
        <button className={styles.list__roommate_remove}></button>
      </div>
      <button className={styles.list__add_btn}></button>
    </div>
  );
}

export default List;
