import React from 'react';
import styles from './About.module.css';
import YouTube from 'react-youtube';

export default function About() {
    const opts = {
        height: '250',
        width: '380',
        playerVars: {
            autoplay: 1,
        },
    };
    const handleReady = (event) => {
    };

    return (
        <section id="about" className={styles.sections} >
            <br />  <br />  <br />
            <div className={styles.section_aboutus}>
                <div className={styles.video_section}>
                    <YouTube videoId="ewwxbpJecx41" opts={opts} onReady={handleReady} />
                </div>
                <div className={styles.text_section}>
                    <h1>About Us</h1>
                    <p>Through our 7-day programme we offer you some useful life questions to think about. We also offer you some answers on these questions but we encourage you to learn more about it yourself. You can read it all at once but we advise you to read and think about your life for the next 7 days. It may become the most valuable week of your life! It can be very valuable in your life. So take some time and invest one week in your life and future!</p>
                    <button>
                        Learn More
                    </button>
                </div>
            </div>

            <div className={styles.second_section}>
                <div className={styles.second_text}>
                    <h1>Why Choose Us ?</h1>
                    <ul>
                        <li>Consultation with expert</li>
                        <p>Plus Fitness franchisee Jacob Awad first started his journey with the brand in 2020 after purchasing Plus Fitness Seven Hills from a previous owner.</p>
                        <li> workout faculitis</li>
                        <p>Knowledgeable and friendly staff can make your gym experience more enjoyable and productive.</p>
                    </ul>
                </div>
                <div className={styles.second_video}>
                    <YouTube videoId="G6YoPYfmPmQ1" opts={opts} onReady={handleReady} />
                </div>
            </div>
        </section>
    );
}