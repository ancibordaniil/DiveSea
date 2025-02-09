import React, { useEffect } from 'react';
import styles from './Menu.module.scss';
import { gsap } from 'gsap';

const Menu: React.FC = () => {
    useEffect(() => {
        // Анимация для всех изображений в .imageContainer
        gsap.fromTo(
            `.${styles.imageContainer} img`,
            { opacity: 0, scale: 0.5 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.out',
            }
        );

        // Анимация для первой и второй кнопки
        gsap.fromTo(
            `.${styles.firstButton}, .${styles.secondButton}`,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: 'power2.out',
            }
        );

        // Анимация для заголовка h1
        gsap.fromTo(
            `.${styles.textColoumn} h1`,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
        );

        // Анимация для подзаголовка h3
        gsap.fromTo(
            `.${styles.textColoumn} h3`,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.3 }
        );

        // Анимация для статистики (430K+, 159K+, 87K+)
        gsap.fromTo(
            `.${styles.gridContainer} .${styles.statistic}`,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3,
                ease: 'power2.out',
            }
        );
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.rowContainer}>
                <div className={styles.column}>
                    <div className={styles.gapImage}>
                        <img src="/icons/line.png" alt="" />
                    </div>
                    <div className={styles.textColoumn}>
                        <div className={styles.textBlock}>
                            <h1>
                                Discover And <br />
                                Create NFTs
                            </h1>
                            <h3>
                                Discover, Create and Sell NFTs On Our NFT
                                Marketplace <br /> With Over Thousands Of NFTs
                                And Get a<span> $20 bonus</span>.
                            </h3>
                        </div>
                        <div className={styles.row}>
                            <button className={styles.firstButton}>
                                EXPLORE MORE
                            </button>
                            <button className={styles.secondButton}>
                                CREATE NFT
                            </button>
                        </div>
                    </div>
                    <div className={styles.gridContainer}>
                        <div className={styles.statistic}>
                            <h1>430K+</h1>
                            <h3>Art Works</h3>
                        </div>
                        <div className={styles.statistic}>
                            <h1>159K+</h1>
                            <h3>Creators</h3>
                        </div>
                        <div className={styles.statistic}>
                            <h1>87K+</h1>
                            <h3>Collections</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img
                        src="/icons/Rectangle 3.png"
                        alt="image"
                        className={styles.Rectangle3}
                    />
                    <img
                        src="/icons/Rectangle 2.png"
                        alt="image"
                        className={styles.Rectangle2}
                    />
                    <img
                        src="/icons/nagigator.png"
                        alt="image"
                        className={styles.nagigator}
                    />
                    <img
                        src="/icons/Arrow 01.png"
                        alt="image"
                        className={styles.Arrow01}
                    />
                    <img
                        src="/icons/blur.png"
                        alt="image"
                        className={styles.blur}
                    />
                    <img
                        src="/icons/blurBackground.png"
                        alt="image"
                        className={styles.blurBackground}
                    />
                    <img
                        src="/icons/dots.png"
                        alt="image"
                        className={styles.dots}
                    />
                </div>
            </div>
        </section>
    );
};

export default Menu;
