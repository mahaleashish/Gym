import React from "react";
import styles from "./Footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
    return (
        <div className={styles.main_footer}>
            <div className={styles.social}>
                <div className={styles.socil_text}>
                    <h1>GYM</h1>
                    <a href="https://www.linkedin.com/" target="_LinkdIn">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/" target="_GitHub">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.facebook.com/" target="_Facebook">
                        <FacebookIcon />
                    </a>
                    <h5>
                        Welcome to our gym! We are dedicated to helping you achieve your
                        fitness.
                    </h5>
                </div>

                <div className={styles.service_first}>
                    <h1>Healthy living</h1>
                    <h5>Regular exercise</h5>
                    <h5>Proper nutrition</h5>
                    <h5>Professional guidance</h5>
                    <h5>Clean and safe environment</h5>
                </div>
            </div>

            <div className={styles.services}>
                <div className={styles.service_scond1}>
                    <h1>Services</h1>
                    <h5>Exercise equipment</h5>
                    <h5>Personal training</h5>
                    <h5>Childcare services</h5>
                    <h5>Group fitness classes</h5>
                </div>
                <div className={styles.service_scond1}>
                    <div className={styles.service_scond1}>
                        <h1>Programs</h1>
                        <h5>Wellness Programs</h5>
                        <h5>Specialty Programs</h5>
                        <h5>Functional Fitness</h5>
                        <h5>Cardiovascular Training</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}