import React from "react";
import styles from "./Pricing.module.css";

export default function Pricing() {
    return (
        <section id="pricing" className={styles.pricing_section}>
            <div className={styles.main_section}>
                <div className={styles.first_card}>
                    <h1>Day Pass</h1>
                    <h1>$15 /Pass</h1>
                    <ul>
                        <li>1 Day Pass</li>
                        <li>Free Gym Access</li>
                        <li>24 Hour Accces</li>
                    </ul>
                    <button onClick={() => alert("Thankyou for choosing us")} className={styles.buttons}>Get Started</button>
                </div>
                <div className={styles.second_card}>
                    <h1>Months to Month</h1>
                    <h1>$90 /Month</h1>
                    <ul>
                        <li>$99 Joining Fee</li>
                        <li>No Contract</li>
                        <li>Free Gym Access</li>
                        <li>1 Group Class Included</li>
                        <li>24 Hour Accces</li>
                    </ul>
                    <button onClick={() => alert("Thankyou for choosing us")} className={styles.buttons}>Get Started</button>
                </div>
            </div>
            <div className={styles.text_section}>
                <div className={styles.text_div}>
                    <h4>Membership</h4>
                    <h1>From Punch Pass to Monthly or Annual</h1>
                    <p>
                        At gym base ,we offer a wide range of membership with options to
                        suit every budget. Everything from One Day Pass, Punch Pass to
                        Monthly Pass or Annual prepaid memberships. What's more, we won't
                        tie you in a long term Conatract, giving you a greater flexibilty.
                    </p>
                    <h1>Each plan included</h1>
                    <ul>
                        <li>The best Equipments Global Brands</li>
                        <li>The gym is open 24hours a day a week</li>
                        <li>Two safe payment method</li>
                        <li>Group fitness classes in the price of subscription</li>
                        <li>No long-term contract,period</li>
                    </ul>
                </div>
            </div>

        </section>
    );
}