import React from 'react';
import styles from './FooterWidgetContainer.module.sass'

const FooterWidgetContainer = () => {
    return (
        <div className={styles.footerWidgetContainer}>
            <div className={styles.footerWidgetWrapper}>
                <div className={styles.footerWidgetElem}>
                    <span className={styles.elemTitle}>pages widget</span>
                    <div className={styles.boxContainer}>
                        <div className={styles.widgetBox}>
                            <span>home</span>
                            <span>+</span>
                        </div>

                        <div className={styles.openBox}>
                            <div className={styles.widgetOpenBox}>
                                <span>pages</span>
                                <span>-</span>
                            </div>
                            <div className={styles.box}>
                                <span>Service</span>
                                <span>FAQ</span>
                                <span>About</span>
                            </div>
                        </div>

                        <div className={styles.widgetBox}>
                            <span>portfolio</span>
                            <span>+</span>
                        </div>

                        <div className={styles.widgetBox}>
                            <span>blog</span>
                            <span>+</span>
                        </div>

                        <div className={styles.widgetBox}>
                            <span>shop</span>
                            <span>+</span>
                        </div>
                    </div>
                </div>

                <div className={styles.footerWidgetElem}>
                    <span className={styles.elemTitle}>twitter widget</span>
                    <div className={styles.twitterPost}>
                        <div className={styles.post}>
                            <i className="fab fa-twitter"/>
                            <p>
                                @LOGO, Duis commodo elit sed nisi molestie
                            </p>
                        </div>
                        <p className={styles.postFooter}>
                            2 hours ago  →  Reply    Retweet    Favorite
                        </p>
                    </div>

                    <div className={styles.twitterPost}>
                        <div className={styles.post}>
                            <i className="fab fa-twitter"/>
                            <p>
                                @LOGO, Duis commodo elit sed nisi molestie
                            </p>
                        </div>
                        <p className={styles.postFooter}>
                            2 hours ago  →  Reply    Retweet    Favorite
                        </p>
                    </div>

                    <div className={styles.twitterPost}>
                        <div className={styles.post}>
                            <i className="fab fa-twitter"/>
                            <p>
                                @LOGO, Duis commodo elit sed nisi molestie
                            </p>
                        </div>
                        <p className={styles.postFooter}>
                            2 hours ago  →  Reply    Retweet    Favorite
                        </p>
                    </div>
                    <span className={styles.elemTitleBottom}>social widget</span>
                    <div className={styles.socialIconsContainer}>
                        <i className="fab fa-facebook-f"/>
                        <i className="fab fa-twitter"/>
                        <i className="fab fa-vk"/>
                        <i className="fab fa-pinterest-p"/>
                        <i className="fab fa-tumblr"/>
                        <i className="fab fa-dribbble"/>
                    </div>
                </div>

                <div className={styles.footerWidgetElem}>
                    <span className={styles.elemTitle}>flickr widget</span>
                    <div className={styles.pictureContainer}>
                        <img src={`/images/Layer_33.png`} alt={"Layer"}/>
                        <img src={`/images/Layer_34.png`} alt={"Layer"}/>
                        <img src={`/images/Layer_43.png`} alt={"Layer"}/>
                        <img src={`/images/Layer_39.png`} alt={"Layer"}/>
                        <img src={`/images/Layer_37.png`} alt={"Layer"}/>
                        <img src={`/images/Layer_38.png`} alt={"Layer"}/>
                        <img src={`/images/Layer_41.png`} alt={"Layer"}/>
                        <img src={`/images/Layer_42.png`} alt={"Layer"}/>
                        <img src={`/images/Layer_35.png`} alt={"Layer"}/>
                    </div>
                </div>



                <div className={styles.footerWidgetElem}>
                    <span className={styles.elemTitle}>news letter</span>
                    <div className={styles.boxContainer}>
                        <div className={styles.widgetBox}>
                            <span className={styles.letterField}>Name</span>
                        </div>
                        <div className={styles.widgetBox}>
                            <span className={styles.letterField}>Email Address</span>
                        </div>
                        <div className={styles.widgetBox}>
                            <span className={styles.letterField}>Message</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterWidgetContainer;