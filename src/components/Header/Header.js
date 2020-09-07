import React from 'react';
import styles from './Header.module.sass';
import { mdiWeb, mdiAccountCircle, mdiForum } from '@mdi/js';
import Icon from '@mdi/react'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.topMenuContainer}>
                <div className={styles.topMenuWrapper}>
                    <div className={styles.socialIconsContainer}>
                        <i className="fab fa-facebook-f"/>
                        <i className="fab fa-twitter"/>
                        <i className="fab fa-pinterest-p"/>
                        <i className="fab fa-vk"/>
                        <i className="fab fa-google-plus-g"/>
                        <i className="fab fa-behance"/>
                        <i className="fab fa-dribbble"/>
                        <i className="fab fa-instagram"/>
                    </div>
                    <div className={styles.topUserMenuContainer}>
                        <div className={styles.signInContainer}>
                            <Icon path={mdiAccountCircle} title="User Profile" className={styles.icons} size={"16px"}/>
                            <span className={styles.label}>sign in</span>
                        </div>
                        <div className={styles.languageContainer}>
                            <Icon path={mdiWeb} title="language" className={styles.icons} size={"16px"}/>
                            <span className={styles.label}>eng</span>
                            <i className="fas fa-angle-down"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.titleContainer}>
                <div className={styles.titleWrapper}>
                    <div className={styles.titleHeader}>
                        <span className={styles.logo}>logo</span>
                        <div className={styles.headerMenu}>
                            <div className={styles.menuItem}>
                                <span>Home</span>
                                <i className="fas fa-angle-down"/>
                            </div>
                            <div className={styles.menuItem}>
                                <span>Portfolio</span>
                                <i className="fas fa-angle-down"/>
                            </div>
                            <div className={styles.menuItem}>
                                <span>Blog</span>
                                <i className="fas fa-angle-down"/>
                            </div>
                            <div className={styles.menuItem}>
                                <span>Pages</span>
                                <i className="fas fa-angle-down"/>
                            </div>
                            <div className={styles.menuItem}>
                                <span>shop</span>
                                <i className="fas fa-angle-down"/>
                            </div>
                            <div className={styles.menuItem}>
                                <span>components</span>
                                <i className="fas fa-angle-down"/>
                            </div>
                            <div className={styles.menuItem}>
                                <span>Features</span>
                                <i className="fas fa-angle-down"/>
                            </div>
                        </div>
                        <div className={styles.iconsMenu}>
                            <i className="fas fa-search"/>
                            <i className="far fa-heart"/>
                            <i className="fas fa-shopping-cart"/>
                        </div>
                    </div>

                    <div className={styles.titleContent}>
                        <span className={styles.titleContentHeader}>
                            inspiration
                        </span>
                        <div className={styles.titleContentBody}>
                            <i className="fas fa-angle-left"/>
                            <p>
                                Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry
                            </p>
                            <i className="fas fa-angle-right"/>
                        </div>
                        <button className={styles.readMoreButton}>
                            <span>
                                read more
                            </span>
                        </button>

                        <img src={`/images/Photo_copy_3.png`} alt={"account"}/>

                        <span className={styles.titleName}>
                            Henry Little
                        </span>
                        <span className={styles.titleDate}>
                            April 28, 2016   10:15
                        </span>

                        <div className={styles.titleFooterContainer}>
                            <div className={styles.titleFooterElemWrapper}>
                                <Icon path={mdiForum} title="Comments" className={styles.icons} size={"16px"}/>
                                <span>Comments (28) </span>
                            </div>
                            <div className={styles.titleFooterElemWrapper}>
                                <i className="far fa-heart"/>
                                <span>Likes (07)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;