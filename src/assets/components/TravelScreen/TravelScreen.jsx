import React from "react";
import styles from "./TravelScreen.module.css";
import wordsTravelImg from "../../img/wordsTravelImg.svg";
import wordsTravelI2mg from "../../img/wordsTravelI2mg.svg";
import wordsTravelI3mg from "../../img/wordsTravelI3mg.svg";
import gwanghwamun from "../../img/gwanghwamun-g.jpg";
import world_peace from "../../img/world_peace.jpg";
import traditional from "../../img/traditional.jpg";
import Arrow from "../../img/arrow.svg";

const TravelScreen = () => {
  return (
    <section id="travelSection">
      <div className={styles.headlineDiv}>
        <h2>TRAVEL</h2>
        <img src={wordsTravelImg} alt="wordsTravelImg" />
      </div>
      <div className={styles.about}>
        <div className={styles.date}>
          <p>17 JANUARY</p> <img src={wordsTravelI2mg} alt="" />
        </div>
        <div className={styles.describe}>
          <h2>GWANGHWAMUN GATE</h2>
          <p>
            Gwanghwamun was reconstructed in 1867 along with the rest of
            Gyeongbokgung Palace by the order of regent Daewongun during the
            reign of Emperor Gojong. The gate stood until 1926, when the
            Japanese government had it deconstructed and moved it just to the
            southeast of the current location of the National Folk Museum of
            Korea to mak way for the massive Japanese Governor General Building.
          </p>
          <img src={gwanghwamun} alt="gwanghwamun" />
          <p>
            Gwanghwamun was first constructed in 1395 as the main gate to
            Gyeongbokgung Palace, the main and most important royal palace
            during the Joseon Dynasty. During the 1592 invasion, it was
            destroyed by fire and left in ruins for over 250 years.
          </p>
          <div className={styles.readMoreDiv}>
            <p className={styles.maintext}>Read more</p>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.date}>
          <p>19 JANUARY</p> <img src={wordsTravelI3mg} alt="" />
        </div>
        <div className={styles.describe}>
          <h2>OLYMPIC PARK SEOUL</h2>
          <p>
            Seoul Olympic Park, shortened to Olpark, is an Olympic Park built to
            host the 1988 Summer Olymples. It is located in Bangi-dong,
            Songpa-gu, Seoul, South Korea. The two nearest subway stations are
            Mongchontosgong and Olympic Park. Built between December 31, 1986
            and August 31, 1988, it was designed by the architect Kim Chung up
            to celebrate the spirit of the Sequl Olympic Games (peace and
            harmony) and also te symbolize the ability of the Korean people{" "}
          </p>
          <img src={world_peace} alt="world_peace" />
          <p>
            Alongside the pillars there are structures similar to wings, under
            which there's a mural called "A Painting of Four Spirits". In the
            mural are shown a phoenix, a turtle, a tiger and a dragon (the
            spirits that guard the gate) ascending towards heaven, representing
            the strength of Koreans and their freedom.
          </p>
          <div className={styles.readMoreDiv}>
            <p className={styles.maintext}>Read more</p>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.date}>
          <p>23 JANUARY</p> <img src={wordsTravelImg} alt="" />
        </div>
        <div className={styles.describe}>
          <h2>BUKHANSAN</h2>
          <p>
            Because of its height and the fact that it borders a considerable
            portion of the city, Bukhansan is a major landmark visible from most
            city districts. The name "Bukhansan" means "mountain north of Han
            River, referring to the fact that it is the northern border of the
            city. During the Joseon era, the peaks marked the extreme northern
            boundary of Seoul{" "}
          </p>
          <img src={traditional} alt="traditional" />
          <p>
            Popular throughout the year, Bukhansan, and Bukhansan National Park,
            which was formed in 1983, are renowned for birdwatching, hiking and
            rockclimbing. Bukhansan attracts a large number of hikers; around 5
            million per year.
          </p>
          <div className={styles.readMoreDiv}>
            <p className={styles.maintext}>Read more</p>{" "}
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelScreen;
