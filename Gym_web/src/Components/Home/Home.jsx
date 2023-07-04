import React from 'react'
import styles from './Home.module.css'
import IMG from '../assets/gyms.png';
import Modals from '../Login-Signup/Modal';

export default function Home() {
    return (
        <section id="#" className={styles.home_section}>
            <div className={styles.home_section_one}>
                <div className={styles.home_content}>
                    <h1> “Take care of your body. It’s the only place you have to live.”  </h1>
                    <button>
                        Welcome
                    </button>
                    <Modals />
                </div>
                <div className={styles.home_image}>
                    <img src={IMG} alt='HOME' />
                </div>
            </div>

        </section>
    )
}