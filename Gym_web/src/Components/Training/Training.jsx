import React, { useState } from "react";
import styles from "./Training.module.css";
import img1 from "../assets/img12.jpg";
import yoga from "../assets/img13.jpg";
import Aerobic from "../assets/img14.jpg";
import Weight from "../assets/Liffting.jpg";
import Weight_Loss from "../assets/img15.jpg";
import Flexiblity from "../assets/img17.jpg";

const cards = [
    {
        title: "Vishnu Mohan’s",
        img: img1,
    },
    {
        title: "Yasmin Karachiwala",
        img: yoga,
    },
    {
        title: "Satyajit Chaurasia",
        img: Aerobic,
    },
    {
        title: "Json Heri",
        img: Weight,
    },
    {
        title: "Prashant Sawant",
        img: Weight_Loss,
    },
    {
        title: "Gautam Kumar",
        img: Flexiblity,
    },
];
export default function Trainer() {
    const [more, setMore] = useState(3);
    const [btnmore, setBtnMore] = useState(true);
    function handleMore() {
        setMore(more + 3);
        setBtnMore(!btnmore);
    }
    function handleLess() {
        setMore(3);
        setBtnMore(!btnmore);
    }

    return (
        <section id="trainer" className={styles.main_section}>
            <br />
            <h1> Meet our Trainer</h1>

            <div className={styles.program_section}>
                {cards.slice(0, more).map((item, id) => (
                    <div className={styles.card_section} key={id}>
                        <div className={styles.image_section}>
                            <img src={item.img} alt="IMG" />
                        </div>
                        <div className={styles.text_cards}>
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.buttons}>
                {btnmore ? (
                    <button onClick={handleMore} className={styles.more_btn}>
                        See More...
                    </button>
                ) : (
                    <button onClick={handleLess} className={styles.more_btn}>
                        See Less
                    </button>
                )}
            </div>
        </section>
    );
}