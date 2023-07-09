import React from "react";
import styles from "./ContactsScreen.module.css";
import wordsContactsImg from "../../img/wordsContactsImg.svg";
import Arrow from "../../img/arrow.svg";
const ContactsScreen = () => {
  return (
    <section id="contactsSection" className={styles.contactsSection}>
      <div className={styles.headline}>
        <h2>CONTACTS</h2>
        <img src={wordsContactsImg} alt="" />
      </div>

      <div className={styles.form}>
        <div className={styles.inputDiv}>
          <div>
            <p>Name</p>
            <input type="text" />
          </div>
          <div>
            <p>Phone</p>
            <input type="tel" />
          </div>
          <div>
            <p>Email</p>
            <input type="email" />
          </div>
          <div>
            <p>Message</p>
            <input type="text" />
          </div>
          <div>
            <p className={styles.maintext}>Send</p>{" "}
            <img className={styles.sendDiv} src={Arrow} alt="arrow" />
          </div>
        </div>
        <div className={styles.rigtSide}>
          <div>
            <p>Monday - Friday: 7:00 - 22:00</p>
            <p>Saturday - Sunday: 10:00 - 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsScreen;
