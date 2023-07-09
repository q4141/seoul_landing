import React from "react";
import styles from "./HistoryScreen.module.css";
import historyImg from "../../img/historyImg.png"

const HistoryScreen = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.headline}>CITY HISTORY</h2>
      <p className={styles.historyText}>
        The history of the city of Seoul dates back approximately 2,000 years,
        10 Chen Wiryeseong, the capital of Baekje, was located on the banks of
        the Hangang River in the southeastern part of what is now Seoul.
        Development of the city began in earnest once it was appointed the
        capital of the Joseon Dynasty (1392 - 1910) in 1394.
      </p>
      <img className={styles.historyImg} src={historyImg} alt="historyImg" />
    </section>
  );
};

export default HistoryScreen;
