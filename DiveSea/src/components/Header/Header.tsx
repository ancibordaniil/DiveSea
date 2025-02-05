import styles from './Header.module.scss';

const Header: React.FC = () => {
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
                        <img src="/icons/stroke.png" alt="stroke" className={styles.icon1} />
                        <img src="/icons/stroke (1).png" alt="stroke 1" className={styles.icon2}/>
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
