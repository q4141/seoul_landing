import React from "react";
import styles from "./FirstScreen.module.css";
import FirstImage from "../../img/FirstScreen.jpg";
import WordsImg from "../../img/wordsImg.svg";
import Arrow from "../../img/arrow.svg";

const FirstScreen = () => {
  return (
    //test 2
    <section className={styles.wrapper}>
      <div className={styles.leftSideMainScreen}>
        <ul className={styles.navbar}>
          <li className={styles.red}>HOMEEEEEEEEE</li>
          <li>
            <a href="#travelSection">TRAVEL</a>
          </li>
          <li>
            <a href="#gallerySection">GALLERY</a>
          </li>
          <li>
            <a href="#contactsSection">CONTACTS</a>
          </li>
        </ul>
        <div className={styles.centerText}>
          <h1 className={styles.headText}>TRAVEL TO SEOUL</h1>
          <p className={styles.maintext}>
            spend 1 month of comfort in another culture
          </p>
          <div className={styles.readMoreDiv}>
            <p className={styles.maintext}>Read more</p>{" "}
            <img src={Arrow} alt="arrow" />
          </div>
        </div>

        <img className={styles.wordsImg} src={WordsImg} alt="홍익인간" />
      </div>

      <img
        className={styles.imageFirstScreen}
        src={FirstImage}
        alt="building"
      />
    </section>
  );
};

export default FirstScreen;
