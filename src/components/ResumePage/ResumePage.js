import React from 'react';
import styles from './ResumePage.module.css';

function ResumePage() {
    return (
        <div className={styles.resumePage}>
            <section className={styles.section}>
                <h1 className={styles.heading}>Professional Summary</h1>
                <p>I design logos for ministries, create robots on global competitions, develop websites using React, organize the largest rocketry competition in Central Asia, and teach children STEM.</p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.heading}>Education</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong>School</strong>, 2018-2024
                        <br />
                        Nazarbayev Intellectual School, Pavlodar
                        <br /><br />
                        Advanced Computer Science and Physics (A-level analogue)
                    </li>
                    <li className={styles.listItem}>
                        <strong>School</strong>, 2016-2018
                        <br />
                        Zhas Daryn Specialized School, Pavlodar
                    </li>
                </ul>
            </section>


            <section className={styles.section}>
                <h2 className={styles.heading}>Languages</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong>Kazakh</strong>, Native, Bilingual
                    </li>
                    <li className={styles.listItem}>
                        <strong>Russian</strong>, Bilingual
                    </li>
                    <li className={styles.listItem}>
                        <strong>English</strong>, Advanced, C1
                    </li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.heading}>Courses</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong>Johns Hopkins CTY</strong>, July 2023
                        <br />
                        Game of Life: The Theory of Strategic Behavior
                    </li>
                    <li className={styles.listItem}>
                        <strong>«Sirius» Educational Centre</strong>, July 2021
                        <br />
                        Fundamentals of 3D Modelling & Printing<br /><br />
                        Designed an autonomous tractor with chef engineer of KAMAZ
                    </li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.heading}>Professional Experience</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong>Founder</strong>, <a href='https://www.instagram.com/sailaukan.agency/'>Sailaukan Agency</a><br />
                        Aug 2023 - Present
                        <br /><br />
                        - Developed a visual identity for Bolashak program, Ministry of Ecology<br />
                        - Worked with Flask Coffee, FIRST, FunCode<br />
                        - Managed the team's work<br />
                    </li>
                    <li className={styles.listItem}>
                        <strong>Event manager, Co-founder, </strong>
                        <a href='https://www.wso.rocks/'>World Space Olympiad</a>
                        <br />
                        Sep 2023 - Present
                        <br /><br />
                        - Authored competition regulations<br />
                        - Promoted the event in media <br />
                        - Negotiated with partners and sponsors<br />
                        - Translated texts from Russian to Kazakh and English <br />
                        - Taught rocket science for 7-11 grade students <br />
                        - Designed graphic materials<br />
                        - Planned offline events<br />
                        - Managed the team's work<br />
                    </li>
                    <li className={styles.listItem}>
                        <strong>Head of Design</strong>, <a href='https://www.instagram.com/ustem_foundation/'>USTEM Foundation</a><br />
                        Sep 2023 - Jan 2024
                        <br /><br />
                        - Created a branding for the fund<br />
                        - Managed a work of designers<br />
                        - Checked the quality of event designs<br />
                        - Designed a visual identity for 3 international robotics competitions<br />
                    </li>
                    <li className={styles.listItem}>
                        <strong>Graphic Designer</strong>, Smart Investor<br />
                        Sep 2022 - Nov 2022
                        <br /><br />
                        - Graphic and social media designer in an investment training company<br />
                        - Designed elements of brand identity, advertisement, presentations and printing products<br />
                        - Learned basics of trading and investing
                    </li>
                    <li className={styles.listItem}>
                        <strong>Graphic Designer</strong>, <a href='https://bc-pf.org/'>Beyond Curriculum PF</a><br />
                        Jun 2020 - May 2023
                        <br /><br />
                        Designed posters, social media posts, web site elements, infographics, etc.
                    </li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.heading}>Roles</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong>Delegate of Kazakhstan</strong>, The 74th International Astronautical Congress, Baku, Azerbaijan<br />
                        Oct 2023
                    </li>
                    <li className={styles.listItem}>
                        <strong>Judge</strong>, Smart Sarbaz, Ministry of Defense<br />
                        Jun 2023
                        <br /><br />
                        - Judged 40+ projects on an international military robotics competition "Smart Sarbaz" in Spassk military camp<br />
                    </li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.heading}>Honors & Awards</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong>Bronze Certificate</strong>, World Robot Olympiad 2022, Germany
                        <br />
                        - Regional and National champion
                        <br />
                        - Future Innovators Senior category
                    </li>
                    <li className={styles.listItem}>
                        <strong>Silver Medalist</strong>, National Science Fair 2022 (selection for ISEF)
                        <br />
                        - Top-4 in Computer Science
                    </li>
                    <li className={styles.listItem}>
                        <strong>Silver Medalist</strong>, National Science Fair 2020 (selection for ISEF)
                        <br />
                        - Top-11 in Computer Science <br />
                        - Competed with 9-12 grades being in 8th grade
                    </li>
                    <li className={styles.listItem}>
                        <strong>First Place</strong>, Burning Heroes Al Hackathon 2024
                        <br />
                        - $5,000 prize winner
                    </li>
                    <li className={styles.listItem}>
                        <strong>First Place</strong>, Zhas Hackathon 2022
                        <br />
                        - Won $2,000 scholarship in a programming school from California
                    </li>
                    <li className={styles.listItem}>
                        <strong>First Place</strong> IT Junior Hackathon
                        <br />
                        - $2,000 prize winner
                    </li>
                    <li className={styles.listItem}>
                        <strong>Thank you letter</strong> from the Minister of Science
                        <br />
                        - For contribution to the development of rocket science in Kazakhstan
                    </li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.heading}>Exams</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong>IELTS</strong>, October 2023
                        <br />
                        Overall: 7.5
                        <br />R:8.5 L:8.5 W:6.5 S:7.0
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default ResumePage;
