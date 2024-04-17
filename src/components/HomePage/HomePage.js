import React from 'react';
import styles from './HomePage.module.css';

function HomePage() {

    return (
        <div className={styles.homePage}>
            <h1 className={styles.title}>Wanna know more about me?</h1>
            <p className={styles.intro}>
                This is a personal website of Shakhnazar
            </p>
            <div className={styles.bio}>
                <strong style={{ fontSize: "18px" }}>
                    About me
                </strong><br />
                Creator
            </div>
            
            <div className={styles.info}>
                <div className={styles.info_item}>
                    <div className={styles.location_title}>
                        Location
                    </div>
                    <div className={styles.location_content}>
                        Pavlodar, Kazakhstan
                    </div>
                </div>
                <div className={styles.info_item}>
                    <div className={styles.location_title}>
                        Email
                    </div>
                    <div className={styles.location_content}>
                        sajlaukansahnazar@gmail.com
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
