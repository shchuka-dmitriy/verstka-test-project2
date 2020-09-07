import React from 'react';
import styles from './BodyRightContainer.module.sass'
import {mdiForum} from "@mdi/js";
import Icon from "@mdi/react";

const BodyRightContainer = () => {
    return (
        <div className={styles.mainContainer}>
            <input placeholder={"Search"} className={styles.searchInput}/>
            <button className={styles.buttonSearch}>
                <i className="fas fa-search"/>
            </button>

            <div className={styles.categoriesContainer}>
                <h2 className={styles.categoriesTitle}>categories</h2>
                <div className={styles.categoriesItem}>
                    <span className={styles.categoryName}>Photography</span>
                    <span className={styles.categoryCount}>195</span>
                </div>
                <div className={styles.categoriesItem}>
                    <span className={styles.categoryName}>Illustration</span>
                    <span className={styles.categoryCount}>15</span>
                </div>
                <div className={styles.categoriesItem}>
                    <span className={styles.categoryName}>Graphic Design</span>
                    <span className={styles.categoryCount}>36</span>
                </div>
                <div className={styles.categoriesItem}>
                    <span className={styles.categoryName}>Web design</span>
                    <span className={styles.categoryCount}>220</span>
                </div>
                <div className={styles.categoriesItem}>
                    <span className={styles.categoryName}>Videography</span>
                    <span className={styles.categoryCount}>17</span>
                </div>
            </div>

            <div className={styles.subscribeContainer}>
                <div className={styles.formContainer}>
                    <h2 className={styles.subscribeTitle}>subscribe</h2>
                    <label className={styles.inputLabel}>Name</label>
                    <input placeholder={"Igor Ten"} className={styles.formInput}/>
                    <label className={styles.inputLabel}>Email</label>
                    <input placeholder={"email@adress.com"} className={styles.formInput}/>
                    <button className={styles.formButtonSubmit}>subscribe</button>
                </div>
            </div>

            <div className={styles.orContainer}>
                <span className={styles.line}/>
                <span className={styles.or}>or</span>
                <span className={styles.line}/>
            </div>

            <div className={styles.socialIconsContainer}>
                <i className="fab fa-facebook-f"/>
                <i className="fab fa-twitter"/>
                <i className="fab fa-vk"/>
                <i className="fab fa-pinterest-p"/>
                <i className="fab fa-tumblr"/>
                <i className="fab fa-dribbble"/>
            </div>

            <div className={styles.postWidgetContainer}>
                <h2 className={styles.categoriesTitle}>tab post widget</h2>
                <div className={styles.buttonsContainer}>
                    <button className={styles.recentPostButton}>recent post</button>
                    <button className={styles.popularPostButton}>popular post</button>
                </div>

                <div className={styles.widgetsContainer}>
                    <div className={styles.widgetItem}>
                        <img src={`/images/Layer_65.png`} alt={"layer"}/>
                        <div className={styles.widgetDescriptionContainer}>
                            <div className={styles.widgetItemHeader}>
                                <span className={styles.widgetDate}>April 28, 2016</span>
                                <div>
                                    <Icon path={mdiForum} title="Comments" className={styles.icons} size={"14px"}/>
                                    <span className={styles.commentsCount}>17</span>
                                </div>
                            </div>
                            <p className={styles.widgetDescription}>
                                Duis commodo elit sed nisi molestie
                            </p>
                        </div>
                    </div>

                    <div className={styles.widgetItem}>
                        <img src={`/images/Layer_62.png`} alt={"layer"}/>
                        <div className={styles.widgetDescriptionContainer}>
                            <div className={styles.widgetItemHeader}>
                                <span className={styles.widgetDate}>April 28, 2016</span>
                                <div>
                                    <Icon path={mdiForum} title="Comments" className={styles.icons} size={"14px"}/>
                                    <span className={styles.commentsCount}>17</span>
                                </div>
                            </div>
                            <p className={styles.widgetDescription}>
                                Duis commodo elit sed nisi molestie
                            </p>
                        </div>
                    </div>

                    <div className={styles.widgetItem}>
                        <img src={`/images/Layer_46.png`} alt={"layer"}/>
                        <div className={styles.widgetDescriptionContainer}>
                            <div className={styles.widgetItemHeader}>
                                <span className={styles.widgetDate}>April 28, 2016</span>
                                <div>
                                    <Icon path={mdiForum} title="Comments" className={styles.icons} size={"14px"}/>
                                    <span className={styles.commentsCount}>17</span>
                                </div>
                            </div>
                            <p className={styles.widgetDescription}>
                                Duis commodo elit sed nisi molestie
                            </p>
                        </div>
                    </div>

                    <div className={styles.widgetItem}>
                        <img src={`/images/Layer_47_1.png`} alt={"layer"}/>
                        <div className={styles.widgetDescriptionContainer}>
                            <div className={styles.widgetItemHeader}>
                                <span className={styles.widgetDate}>April 28, 2016</span>
                                <div>
                                    <Icon path={mdiForum} title="Comments" className={styles.icons} size={"14px"}/>
                                    <span className={styles.commentsCount}>17</span>
                                </div>
                            </div>
                            <p className={styles.widgetDescription}>
                                Duis commodo elit sed nisi molestie
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.postWidgetContainer}>
                <h2 className={styles.categoriesTitle}>tags</h2>
                <div className={styles.tagContainer}>
                    <span className={styles.tag}>Photography</span>
                    <span className={styles.tag}>Webdesign</span>
                    <span className={styles.tag}>Youtube</span>
                    <span className={styles.tag}>Envato</span>
                    <span className={styles.tag}>Art</span>
                    <span className={styles.tag}>Themefotest</span>
                    <span className={styles.tag}>Illustration</span>
                </div>
            </div>
        </div>
    );
};

export default BodyRightContainer;