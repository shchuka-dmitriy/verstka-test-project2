import React from 'react';
import styles from "./Footer.module.sass";
import FooterWidgetContainer from "../FooterWidgetContainer/FooterWidgetContainer";
import Icon from "@mdi/react";
import {mdiWeb} from "@mdi/js";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div>
                <img src={`/images/Layer_68.png`} alt={"layer"}/>
                <img src={`/images/Layer_32.png`} alt={"layer"}/>
                <img src={`/images/Layer_31_1.png`} alt={"layer"}/>
                <img src={`/images/Layer_21_1.png`} alt={"layer"}/>
                <img src={`/images/Layer_22.png`} alt={"layer"}/>
                <img src={`/images/Layer_23.png`} alt={"layer"}/>
                <img src={`/images/Layer_24.png`} alt={"layer"}/>
                <img src={`/images/Layer_26.png`} alt={"layer"}/>
            </div>

            <div className={styles.subscribeContainer}>
                <div className={styles.subscribeContent}>
                    <span className={styles.title}>
                        Subscribe to our newsletter
                    </span>
                    <input placeholder={"Email Address"} className={styles.formInput}/>
                    <button className={styles.subscribeButton}>subscribe</button>
                </div>
            </div>

            <FooterWidgetContainer/>

            <div className={styles.footerBottom}>
                <div className={styles.bottom}>
                    <span>Home</span>
                    <span>Portfolio</span>
                    <span>Blog</span>
                    <span>Pages</span>
                    <span>Shop</span>
                    <span>components</span>
                    <span>Features</span>
                </div>

                <input placeholder={"Search"} className={styles.searchInput}/>


                <div className={styles.languageContainer}>
                    <Icon path={mdiWeb} title="language" className={styles.icons} size={"16px"}/>
                    <span className={styles.label}>eng</span>
                    <i className="fas fa-angle-down"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;