import React, { useEffect } from 'react';
import styles from './Header.module.scss';
import { gsap } from 'gsap';

const Header: React.FC = () => {
    useEffect(() => {
        // Анимация для логотипа
        gsap.fromTo(
            `.${styles.logo}`,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
        );

        // Анимация для навигационных ссылок
        gsap.fromTo(
            `.${styles.navText}`,
            { opacity: 0, x: -20 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
            }
        );
    }, []);

    return (
        <header>
            <img src="/icons/Logo.png" alt="Logo" className={styles.logo} />
            <nav className={styles.headerNav}>
                <a className={styles.navText} href="#discover">
                    DISCOVER
                </a>
                <a className={styles.navText} href="#creators">
                    CREATORS
                </a>
                <a className={styles.navText} href="#sell">
                    SELL
                </a>
                <a className={styles.navText} href="#stats">
                    STATS
                </a>
            </nav>
            <div className={styles.Container}>
                <form className={styles.searchForm}>
                    <div className={styles.searchInputWrapper}>
                        <img
                            src="/icons/stroke.png"
                            alt="stroke"
                            className={styles.icon1}
                        />
                        <img
                            src="/icons/stroke (1).png"
                            alt="stroke 1"
                            className={styles.icon2}
                        />
                        <input
                            className={styles.searchInput}
                            type="text"
                            placeholder="Search Art Work / Creator"
                        />
                    </div>
                </form>
                <button className={styles.button}>CONNECT WALLET</button>
            </div>
        </header>
    );
};

export default Header;
