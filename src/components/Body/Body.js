import React from 'react';
import styles from './Body.module.sass'
import Icon from "@mdi/react";
import {mdiForum} from "@mdi/js";
import classNames from 'classnames';
import BodyRightContainer from "../BodyRightContainer/BodyRightContainer";

const Body = () => {
    const classNameButtonPrev = classNames(styles.pictureButton, styles.buttonPrev);
    const classNameButtonNext = classNames(styles.pictureButton, styles.buttonNext);
    const secondBlogContainerTitle = classNames(styles.blogTitle, styles.secondBlogContainerTitle);
    const secondBlogContainerDescription = classNames(styles.blogDescription, styles.secondBlogContainerDescription);
    const thirdBlogContainerTitle = classNames(secondBlogContainerTitle, styles.thirdBlogContainerTitle);
    const thirdBlogContainerDescription = classNames(secondBlogContainerDescription,
        styles.thirdBlogContainerDescription);
    const thirdBlocAuthorWrapper = classNames(styles.notSelectBlogAuthorWrapper, styles.thirdBlocAuthorWrapper);
    const fourthBlogContainerTitle = classNames(styles.blogTitle, styles.fourthBlogContainerTitle);
    const fourthBlogContainerDescription = classNames(styles.blogDescription, styles.fourthBlogContainerDescription);

    return (
        <div className={styles.bodyContainer}>
            <div className={styles.bodyHeader}>
                <div className={styles.bodyHeaderWrapper}>
                    <span>sort blog:</span>
                    <div>
                        <button>all</button>
                        <button>photography</button>
                        <button>lifestyle</button>
                        <button>trip</button>
                        <button>inspiration</button>
                    </div>
                </div>
            </div>

            <div className={styles.bodyMainContentContainer}>
                <div className={styles.bodyCenterContainer}>
                    <div className={styles.blogPictureContainer}>
                        <img src={`/images/Layer_48.png`} alt={"lifestyle"}/>
                        <span className={styles.blogName}>
                            lifestyle
                        </span>
                        <div className={styles.blogCommentsInfo}>
                            <div className={styles.blogCommentsElemWrapper}>
                                <Icon path={mdiForum} title="Comments" className={styles.icons} size={"16px"}/>
                                <span>7</span>
                            </div>
                            <div className={styles.blogCommentsElemWrapper}>
                                <i className="far fa-heart"/>
                                <span>15</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.blogDescriptionContainer}>
                        <h2 className={styles.blogTitle}>
                            10 Things To Do To Change Your Life Forever
                        </h2>
                        <p className={styles.blogDescription}>
                            The one constant thing in our life is change. We cannot avoid it and the more we resist
                            change the tougher our life becomes. I know this because I was very skilled at deflecting
                            change in life.
                        </p>
                    </div>
                    <div className={styles.blogAuthorWrapper}>
                        <div className={styles.blogAuthorContainer}>
                            <img src={`/images/PhotoHenry.png`} alt={"author"}/>
                            <div className={styles.authorInfo}>
                                <span className={styles.authorName}>
                                    Henry Little
                                </span>
                                <span className={styles.creatingDate}>
                                    April 28, 2016   10:15
                                </span>
                            </div>
                        </div>
                        <i className="fas fa-ellipsis-v"/>
                    </div>

                    <div className={styles.notSelectBlogContainer}>
                        <div className={styles.blogPictureContainer}>
                            <img src={`/images/Layer_64_1.png`} className={styles.notSelectBlogPicture} alt={"lifestyle"}/>
                            <span className={styles.blogName}>
                                inspiration
                            </span>
                            <div className={styles.blogCommentsInfo}>
                                <div className={styles.blogCommentsElemWrapper}>
                                    <Icon path={mdiForum} title="Comments" className={styles.icons} size={"16px"}/>
                                    <span>7</span>
                                </div>
                                <div className={styles.blogCommentsElemWrapper}>
                                    <i className="far fa-heart"/>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={styles.notSelectBlogDescriptionContainer}>
                                <h2 className={secondBlogContainerTitle}>
                                    4 Natural Ways To Have Young Skin
                                </h2>
                                <p className={secondBlogContainerDescription}>
                                    Lorem ipsum dolor sit amet, to consectetur  adipi scing elit. Nulla vehicula lorem
                                    and lacus. Vestibulum vitae mauris lorem ipsum doar.
                                </p>
                            </div>

                            <div className={styles.notSelectBlogAuthorWrapper}>
                                <div className={styles.blogAuthorContainer}>
                                    <img src={`/images/PhotoJames.png`} alt={"author"}/>
                                    <div className={styles.authorInfo}>
                                        <span className={styles.authorName}>
                                            James Leman
                                        </span>
                                        <span className={styles.creatingDate}>
                                            April 28, 2016
                                        </span>
                                    </div>
                                </div>
                                <i className="fas fa-ellipsis-v"/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.notSelectBlogContainer}>
                        <div className={styles.blogPictureContainer}>
                            <img src={`/images/Layer_47.png`} className={styles.notSelectBlogPicture} alt={"lifestyle"}/>
                            <span className={styles.blogName}>
                                inspiration
                            </span>
                            <div className={styles.blogCommentsInfo}>
                                <div className={styles.blogCommentsElemWrapper}>
                                    <Icon path={mdiForum} title="Comments" className={styles.icons} size={"16px"}/>
                                    <span>7</span>
                                </div>
                                <div className={styles.blogCommentsElemWrapper}>
                                    <i className="far fa-heart"/>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={styles.notSelectBlogDescriptionContainer}>
                                <h2 className={secondBlogContainerTitle}>
                                    Six Hobbies That Can Help You Beat Stress
                                </h2>
                                <p className={secondBlogContainerDescription}>
                                    Lorem ipsum dolor sit amet, to consectetur  adipi scing elit. Nulla vehicula lorem
                                    and lacus. Vestibulum vitae mauris lorem ipsum doar.
                                </p>
                            </div>

                            <div className={styles.notSelectBlogAuthorWrapper}>
                                <div className={styles.blogAuthorContainer}>
                                    <img src={`/images/PhotoJames1.png`} alt={"author"}/>
                                    <div className={styles.authorInfo}>
                                        <span className={styles.authorName}>
                                            James Leman
                                        </span>
                                        <span className={styles.creatingDate}>
                                            April 28, 2016
                                        </span>
                                    </div>
                                </div>
                                <i className="fas fa-ellipsis-v"/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.notSelectBlogContainer}>
                        <div className={styles.blogPictureContainer}>
                            <img src={`/images/Layer_48_2.png`} className={styles.notSelectBlogPicture}
                                 alt={"lifestyle"}/>
                            <span className={styles.blogName}>
                                inspiration
                            </span>
                            <div className={styles.blogCommentsInfo}>
                                <div className={styles.blogCommentsElemWrapper}>
                                    <Icon path={mdiForum} title="Comments" className={styles.icons} size={"16px"}/>
                                    <span>7</span>
                                </div>
                                <div className={styles.blogCommentsElemWrapper}>
                                    <i className="far fa-heart"/>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={styles.notSelectBlogDescriptionContainer}>
                                <h2 className={secondBlogContainerTitle}>
                                    10 Singals From Your Body Telling You Should Sleep More
                                </h2>
                                <p className={secondBlogContainerDescription}>
                                    Lorem ipsum dolor sit amet, to consectetur  adipi scing elit. Nulla vehicula lorem
                                    and lacus. Vestibulum vitae mauris lorem ipsum doar.
                                </p>
                            </div>

                            <div className={styles.notSelectBlogAuthorWrapper}>
                                <div className={styles.blogAuthorContainer}>
                                    <img src={`/images/Photo_copy_2.png`} alt={"author"}/>
                                    <div className={styles.authorInfo}>
                                        <span className={styles.authorName}>
                                            Benjamin Miller
                                        </span>
                                        <span className={styles.creatingDate}>
                                            April 28, 2016
                                        </span>
                                    </div>
                                </div>
                                <i className="fas fa-ellipsis-v"/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.verticalBlogContainer}>
                        <div className={styles.verticalBlogItem}>
                            <div className={styles.blogPictureContainer}>
                                <img src={`/images/Layer_53.png`} className={styles.blogPicture} alt={"lifestyle"}/>
                                <span className={styles.blogName}>
                                    inspiration
                                </span>
                                <div className={styles.blogCommentsInfo}>
                                    <div className={styles.blogCommentsElemWrapper}>
                                        <Icon path={mdiForum} title="Comments" className={styles.icons} size={"16px"}/>
                                        <span>7</span>
                                    </div>
                                    <div className={styles.blogCommentsElemWrapper}>
                                        <i className="far fa-heart"/>
                                        <span>15</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.verticalBlogDescriptionContainer}>
                                    <h2 className={thirdBlogContainerTitle}>
                                        Food That Actually Taste
                                        Better When You Freeze
                                    </h2>
                                    <p className={thirdBlogContainerDescription}>
                                        Lorem ipsum dolor sit amet, to consectetur  adipi scing elit. Nulla vel
                                        vehicula lorem and lacus. Vestibulum vitae mauris.
                                    </p>
                                </div>

                                <div className={thirdBlocAuthorWrapper}>
                                    <div className={styles.blogAuthorContainer}>
                                        <img src={`/images/PhotoJames.png`} alt={"author"}/>
                                        <div className={styles.authorInfo}>
                                            <span className={styles.authorName}>
                                                James Leman
                                            </span>
                                            <span className={styles.creatingDate}>
                                                April 28, 2016
                                            </span>
                                        </div>
                                    </div>
                                    <i className="fas fa-ellipsis-v"/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.verticalBlogItem}>
                            <div className={styles.blogPictureContainer}>
                                <img src={`/images/Layer_54.png`} className={styles.blogPicture} alt={"lifestyle"}/>
                                <span className={styles.blogName}>
                                    trip
                                </span>
                                <div className={styles.blogCommentsInfo}>
                                    <div className={styles.blogCommentsElemWrapper}>
                                        <Icon path={mdiForum} title="Comments" className={styles.icons} size={"16px"}/>
                                        <span>3</span>
                                    </div>
                                    <div className={styles.blogCommentsElemWrapper}>
                                        <i className="far fa-heart"/>
                                        <span>15</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.verticalBlogDescriptionContainer}>
                                    <h2 className={thirdBlogContainerTitle}>
                                        Why It’s Amazing To Date
                                        People Who Love Traveling
                                    </h2>
                                    <p className={thirdBlogContainerDescription}>
                                        Lorem ipsum dolor sit amet, to consectetur  adipi scing elit. Nulla vel
                                        vehicula lorem and lacus. Vestibulum vitae mauris.
                                    </p>
                                </div>

                                <div className={thirdBlocAuthorWrapper}>
                                    <div className={styles.blogAuthorContainer}>
                                        <img src={`/images/PhotoJames1.png`} alt={"author"}/>
                                        <div className={styles.authorInfo}>
                                            <span className={styles.authorName}>
                                                Benjamin Miller
                                            </span>
                                            <span className={styles.creatingDate}>
                                                April 28, 2016
                                            </span>
                                        </div>
                                    </div>
                                    <i className="fas fa-ellipsis-v"/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.verticalBlogItem}>
                            <div className={styles.blogPictureContainer}>
                                <img src={`/images/Layer_55.png`} className={styles.blogPicture} alt={"lifestyle"}/>
                                <span className={styles.blogName}>lifestyle</span>
                                <div className={styles.blogCommentsInfo}>
                                    <div className={styles.blogCommentsElemWrapper}>
                                        <Icon path={mdiForum} title="Comments" className={styles.icons} size={"16px"}/>
                                        <span>18</span>
                                    </div>
                                    <div className={styles.blogCommentsElemWrapper}>
                                        <i className="far fa-heart"/>
                                        <span>15</span>
                                    </div>
                                </div>
                                <button className={classNameButtonPrev}>
                                    <i className="fas fa-angle-left"/>
                                </button>
                                <button className={classNameButtonNext}>
                                    <i className="fas fa-angle-right"/>
                                </button>
                            </div>

                            <div>
                                <div className={styles.verticalBlogDescriptionContainer}>
                                    <h2 className={thirdBlogContainerTitle}>
                                        5 Useful Tips for Novice
                                        Painters
                                    </h2>
                                    <p className={thirdBlogContainerDescription}>
                                        Lorem ipsum dolor sit amet, to consectetur  adipi scing elit. Nulla vel
                                        vehicula lorem and lacus. Vestibulum vitae mauris.
                                    </p>
                                </div>

                                <div className={thirdBlocAuthorWrapper}>
                                    <div className={styles.blogAuthorContainer}>
                                        <img src={`/images/Photo_copy_2.png`} alt={"author"}/>
                                        <div className={styles.authorInfo}>
                                            <span className={styles.authorName}>
                                                Henry Little
                                            </span>
                                            <span className={styles.creatingDate}>
                                                April 28, 2016
                                            </span>
                                        </div>
                                    </div>
                                    <i className="fas fa-ellipsis-v"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.verticalBlogContainer}>
                        <div className={styles.verticalBlogItem}>
                            <div className={styles.blogPictureContainer}>
                                <img src={`/images/Layer_61_1@2x.png`} className={styles.blogPicture} alt={"lifestyle"}/>
                                <span className={styles.blogName}>lifestyle</span>
                                <div className={styles.blogCommentsInfo}>
                                    <div className={styles.blogCommentsElemWrapper}>
                                        <Icon path={mdiForum} title="Comments" className={styles.icons} size={"16px"}/>
                                        <span>7</span>
                                    </div>
                                    <div className={styles.blogCommentsElemWrapper}>
                                        <i className="far fa-heart"/>
                                        <span>15</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.fourthBlogDescriptionContainer}>
                                    <h2 className={fourthBlogContainerTitle}>
                                        11 Fantastic Ways Passionate
                                    </h2>
                                    <p className={fourthBlogContainerDescription}>
                                        Lorem ipsum dolor sit amet, to consectetur  adipi scing elit. Nulla vel
                                        vehicula lorem and lacus. Vestibulum vitae mauris gravida, ipsu viverra urna
                                        at, dictume nunc fringilla quam.
                                    </p>
                                </div>

                                <div className={styles.fourthBlogAuthorWrapper}>
                                    <div className={styles.blogAuthorContainer}>
                                        <img src={`/images/PhotoJames.png`} alt={"author"}/>
                                        <div className={styles.authorInfo}>
                                            <span className={styles.authorName}>
                                                James Leman
                                            </span>
                                            <span className={styles.creatingDate}>
                                                April 28, 2016
                                            </span>
                                        </div>
                                    </div>
                                    <i className="fas fa-ellipsis-v"/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.verticalBlogItem}>
                            <div className={styles.blogPictureContainer}>
                                <img src={`/images/Layer_6.png`} className={styles.blogPicture} alt={"lifestyle"}/>
                                <span className={styles.blogName}>inspiration</span>
                                <div className={styles.blogCommentsInfo}>
                                    <div className={styles.blogCommentsElemWrapper}>
                                        <Icon path={mdiForum} title="Comments" className={styles.icons} size={"16px"}/>
                                        <span>7</span>
                                    </div>
                                    <div className={styles.blogCommentsElemWrapper}>
                                        <i className="far fa-heart"/>
                                        <span>15</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.fourthBlogDescriptionContainer}>
                                    <h2 className={fourthBlogContainerTitle}>
                                        Art Makes You Mentally Healthy
                                    </h2>
                                    <p className={fourthBlogContainerDescription}>
                                        Lorem ipsum dolor sit amet, to consectetur  adipi scing elit. Nulla vel
                                        vehicula lorem and lacus. Vestibulum vitae mauris gravida, ipsu viverra urna
                                        at, dictume nunc fringilla quam.
                                    </p>
                                </div>

                                <div className={styles.fourthBlogAuthorWrapper}>
                                    <div className={styles.blogAuthorContainer}>
                                        <img src={`/images/PhotoJames1.png`} alt={"author"}/>
                                        <div className={styles.authorInfo}>
                                            <span className={styles.authorName}>
                                                Benjamin Miller
                                            </span>
                                            <span className={styles.creatingDate}>
                                                April 28, 2016
                                            </span>
                                        </div>
                                    </div>
                                    <i className="fas fa-ellipsis-v"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.buttonMoreContainer}>
                        <span className={styles.titleMore}>More</span>
                        <button className={styles.buttonMore}>
                            <i className="fas fa-arrow-right"/>
                        </button>
                    </div>
                </div>

                <div className={styles.bodyRightContainer}>
                    <BodyRightContainer/>
                </div>
            </div>
        </div>
    );
};

export default Body;