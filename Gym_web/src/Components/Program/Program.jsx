import React, { useRef } from "react";
import styles from "./Program.module.css";
import img1 from "../assets/img1.jpg";
import yoga from "../assets/yoga.jpg";
import Aerobic from "../assets/Aerobic.jpg";
import Weight from "../assets/Liffting.jpg";
import Weight_Loss from "../assets/imgw.jpg";
import Flexiblity from "../assets/Flexiblity.jpg";
import Dance from "../assets/Dance.jpg";

export default function Program() {
    const cards = [
        {
            title: "Bodybuilding",
            img: img1,
        },
        {
            title: "Yoga",
            img: yoga,
        },
        {
            title: "Aerobic",
            img: Aerobic,
        },
        {
            title: "Weight Lifting",
            img: Weight,
        },
        {
            title: "Flexibility",
            img: Flexiblity,
        },
        {
            title: "Weight loss",
            img: Weight_Loss,
        },
        {
            title: "Zumba Dance",
            img: Dance,
        },
    ];

    const programSectionRef = useRef(null);

    const handleLeft = () => {
        const width = programSectionRef.current.clientWidth;
        programSectionRef.current.scrollLeft -= width;
    };

    const handleRight = () => {
        const width = programSectionRef.current.clientWidth;
        programSectionRef.current.scrollLeft += width;
    };

    return (
        <section id="program" className={styles.main_section}>
            <br />
            <h1>Training Program</h1>

            <div className={styles.program_section} ref={programSectionRef}>
                <button onClick={handleLeft} className={styles.first_scroll}>
                    <p>&lt;</p>
                </button>
                <button onClick={handleRight} className={styles.second_scroll}>
                    <p>&gt;</p>
                </button>
                {cards.map((item, id) => (
                    <div className={styles.card_section} key={id}>
                        <div className={styles.image_section}>
                            <img src={item.img} alt="IMG" />
                        </div>
                        <div className={styles.text_card}>
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}