import React, { useState } from "react";
import styles from "./Navbar.module.css";
import GYM from "../assets/gym.png";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import Modals from "../Login-Signup/Modal";

export default function Navbar() {
    const [click, setClick] = useState(true);
    const [activeNav, setActiveNav] = useState("");

    function handlenav() {
        setClick(!click);
    }

    return (
        <nav>
            <div className={styles.navbar}>
                <div className={styles.image}>
                    <a href="/#">
                        <img src={GYM} alt="GYM" />
                    </a>
                </div>
                <div className={styles.navbar_tems}>
                    <li className={activeNav === "#" ? styles.first_a : ""}>
                        <a onClick={() => setActiveNav("#")} href="/#">
                            Home
                        </a>
                    </li>
                    <li className={activeNav === "#about" ? styles.first_a : ""}>
                        <a onClick={() => setActiveNav("#about")} href="#about">
                            About_Us
                        </a>
                    </li>
                    <li className={activeNav === "#program" ? styles.first_a : ""}>
                        <a onClick={() => setActiveNav("#program")} href="#program">
                            Program
                        </a>
                    </li>
                    <li className={activeNav === "#trainer" ? styles.first_a : ""}>
                        <a onClick={() => setActiveNav("#trainer")} href="#trainer">
                            Trainer
                        </a>
                    </li>
                    <li className={activeNav === "#pricing" ? styles.first_a : ""}>
                        <a onClick={() => setActiveNav("#pricing")} href="#pricing">
                            Pricing
                        </a>
                    </li>
                    <Modals />
                </div>
                <div onClick={handlenav} className={styles.mobile}>
                    {click ? (
                        <DehazeIcon />
                    ) : (
                        <div className={styles.mobile_list}>
                            <CloseIcon className={styles.closeicon} />
                            <div className={styles.mobile_list_ancor}>
                                <li>
                                    <a href="/#">Home</a>
                                </li>
                                <li>
                                    <a href="#about">AboutUs</a>
                                </li>
                                <li>
                                    <a href="#program">Program</a>
                                </li>
                                <li>
                                    <a href="#trainer">Trainer</a>
                                </li>
                                <li>
                                    <a href="#pricing">Pricing</a>
                                </li>
                                <Modals />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}