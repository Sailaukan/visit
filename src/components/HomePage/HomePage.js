import styles from "./HomePage.module.css";
import React, { useState, useEffect } from "react";
import "./Quiz.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import supabase from "../../client.js";

const questions = [
  {
    questionText: "My favorite color",
    answerOptions: [
      { answerText: "Red", isCorrect: false },
      { answerText: "White", isCorrect: false },
      { answerText: "Blue", isCorrect: true },
      { answerText: "Orange", isCorrect: false },
    ],
  },
  {
    questionText: "My favorite type of juice",
    answerOptions: [
      { answerText: "Apple", isCorrect: false },
      { answerText: "Orange", isCorrect: true },
      { answerText: "Grape", isCorrect: false },
      { answerText: "Pineapple", isCorrect: false },
    ],
  },
  {
    questionText: "My favorite car",
    answerOptions: [
      { answerText: "BMW", isCorrect: false },
      { answerText: "Aston Marin", isCorrect: false },
      { answerText: "Toyota", isCorrect: false },
      { answerText: "Mercedes", isCorrect: true },
    ],
  },
  {
    questionText: "The first Olympiad I participated in",
    answerOptions: [
      { answerText: "Programming", isCorrect: false },
      { answerText: "Math", isCorrect: true },
      { answerText: "Chemistry", isCorrect: false },
      { answerText: "Robotics", isCorrect: false },
    ],
  },
  {
    questionText: "My score in Brawl Stars",
    answerOptions: [
      { answerText: "12 000", isCorrect: false },
      { answerText: "29 000", isCorrect: true },
      { answerText: "8 000", isCorrect: false },
      { answerText: "34 000", isCorrect: false },
    ],
  },
];

function HomePage() {
  const [ipAddress, setIPAddress] = useState("");
  const { width, height } = useWindowSize();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [animateTitle, setAnimateTitle] = useState(false);

  // Trigger title animation on component mount
  useEffect(() => {
    setAnimateTitle(true);
  }, []);

  async function sendIp() {
    try {
      const { error } = await supabase
        .from("Quiz")
        .insert({
          ip: ipAddress,
          answers: score,
        })
        .single();
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    if (showScore) {
      sendIp().catch(console.error);
    }
  }, [showScore]);

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIPAddress(data.ip))
      .catch((error) => console.log(error));
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.heroSection}>
        <h1
          className={`${styles.title} ${
            animateTitle ? styles.animateTitle : ""
          }`}
        >
          Wanna know more
          <br />
          about me?
        </h1>
        <div className={styles.decorativeLine}></div>
      </div>

      <div className={styles.bioSection}>
        <div className={styles.bio}>
          <div className={styles.bioHeader}>
            <img
              src="/sailaukan.jpg"
              alt="Shakhnazar"
              className={styles.avatarPlaceholder}
            />
            <h2 className={styles.bioName}>Shakhnazar</h2>
          </div>
          <p>
            I develop websites and design for big companies. In past, I built
            robots for global competitions, organized Central Asia's largest
            rocketry event, and taught STEM in rural schools
          </p>
        </div>
        <div className={styles.quote}>
          <p>"My projects are the proof that I have lived"</p>
        </div>
        <div className={styles.info}>
          <div className={styles.infoHeader}>
            <span className={styles.infoIcon}>📌</span>
            <h3>Personal Info</h3>
          </div>
          <div className={styles.info_item}>
            <div className={styles.location_title}>Name</div>
            <div className={styles.location_content}>Shakhnazar</div>
          </div>
          <div className={styles.info_item}>
            <div className={styles.location_title}>Surname</div>
            <div className={styles.location_content}>Sailaukan</div>
          </div>
          <div className={styles.info_item}>
            <div className={styles.location_title}>Age</div>
            <div className={styles.location_content}>19</div>
          </div>
          <div className={styles.info_item}>
            <div className={styles.location_title}>Personality</div>
            <div className={styles.location_content}>ENFJ-A</div>
          </div>
          <div className={styles.info_item}>
            <div className={styles.location_title}>Location</div>
            <div className={styles.location_content}>Astana, Kazakhstan</div>
          </div>
          <div className={styles.info_item}>
            <div className={styles.location_title}>Email</div>
            <div className={styles.location_content}>
              sajlaukansahnazar at gmail.com
            </div>
          </div>
          <div className={styles.info_item}>
            <div className={styles.location_title}>Find me</div>
            <div className={styles.location_content}>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.instagram.com/ssailaukan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 64 64"
                    className={styles.icon}
                  >
                    <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                  </svg>
                </a>

                <a
                  href="https://wa.me/77714264067"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 64 64"
                    className={styles.icon}
                  >
                    <path d="M 32 8 C 18.745 8 8 18.297 8 31 C 8 35.509 9.3592187 39.711719 11.699219 43.261719 L 10 56 L 25.400391 53.111328 C 27.497391 53.685328 29.71 54 32 54 C 45.255 54 56 43.703 56 31 C 56 18.297 45.255 8 32 8 z M 32 11.429688 C 37.802 11.370688 43.591453 13.937797 47.439453 18.341797 C 51.323453 22.721797 53.027062 28.950328 51.914062 34.736328 C 50.849062 40.554328 46.923047 45.673609 41.748047 48.474609 C 36.692047 51.185609 30.484922 51.702016 25.044922 49.791016 L 15.263672 51.964844 L 13.734375 52.304688 L 14.023438 50.783203 L 14.023438 50.78125 L 15.373047 42.560547 C 14.511047 41.180547 13.781562 39.733609 13.226562 38.224609 C 12.614562 36.480609 12.2085 34.673703 12.0625 32.845703 C 11.9905 31.931703 11.975828 31.016469 12.048828 30.105469 C 12.065828 29.189469 12.221953 28.286719 12.376953 27.386719 C 12.768953 25.607719 13.316266 23.845141 14.197266 22.244141 C 15.040266 20.632141 16.076563 19.106734 17.351562 17.802734 C 17.947563 17.110734 18.668797 16.544641 19.341797 15.931641 C 20.079797 15.398641 20.785891 14.814953 21.587891 14.376953 C 24.691891 12.444953 28.354 11.501688 32 11.429688 z M 31.996094 14 C 28.803094 14.024 25.583078 14.795031 22.830078 16.457031 C 22.117078 16.830031 21.494937 17.339875 20.835938 17.796875 C 20.240938 18.331875 19.588406 18.814734 19.066406 19.427734 C 17.935406 20.568734 17.022437 21.909266 16.273438 23.322266 C 14.783437 26.167266 14.210203 29.447094 14.533203 32.621094 C 14.895203 35.790094 16.296266 38.815844 18.447266 41.089844 L 18.447266 41.091797 L 18.912109 41.662109 L 18.728516 42.316406 L 16.832031 49.046875 L 24.908203 46.427734 L 24.910156 46.425781 L 25.347656 46.285156 L 25.8125 46.46875 C 30.4305 48.28775 35.818422 47.956875 40.232422 45.671875 C 44.627422 43.360875 48.009703 39.080781 48.970703 34.175781 C 49.971703 29.284781 48.613266 23.975203 45.322266 20.158203 C 42.058266 16.325203 37.078094 14.017 31.996094 14 z M 24.392578 21.248047 C 24.958578 21.250047 26.5625 21.248047 26.5625 21.248047 L 28.732422 26.671875 C 27.960422 27.880875 27.166797 28.555844 26.591797 29.214844 C 26.912797 29.996844 28.228156 31.947406 29.785156 33.316406 C 31.792156 35.076406 33.531437 35.898625 34.773438 36.140625 C 35.423437 35.656625 37.063109 33.699641 37.412109 33.181641 L 42.835938 35.351562 C 42.835937 36.436562 42.695906 37.008797 42.253906 38.216797 C 41.819906 39.424797 39.726844 40.528828 38.714844 40.673828 C 37.812844 40.809828 36.673063 40.861703 35.414062 40.470703 C 34.657063 40.232703 33.679688 39.916859 32.429688 39.380859 C 27.173687 37.135859 23.738609 31.913453 23.474609 31.564453 C 23.219609 31.224453 21.339844 28.757844 21.339844 26.214844 C 21.339844 23.671844 22.690781 22.413531 23.175781 21.894531 C 23.651781 21.375531 24.044578 21.246047 24.392578 21.248047 z"></path>
                  </svg>
                </a>

                <a
                  href="https://github.com/Sailaukan"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={styles.icon}
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/sailaukan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 64 64"
                    className={styles.icon}
                  >
                    <path d="M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M24,47h-5V27h5 V47z M24.029,23.009C23.382,23.669,22.538,24,21.5,24c-1.026,0-1.865-0.341-2.519-1.023S18,21.458,18,20.468 c0-1.02,0.327-1.852,0.981-2.498C19.635,17.323,20.474,17,21.5,17c1.038,0,1.882,0.323,2.529,0.969 C24.676,18.615,25,19.448,25,20.468C25,21.502,24.676,22.349,24.029,23.009z M47,47h-5V35.887C42,32.788,40.214,31,38,31 c-1.067,0-2.274,0.648-2.965,1.469S34,34.331,34,35.594V47h-5V27h5v3.164h0.078c1.472-2.435,3.613-3.644,6.426-3.652 C44.5,26.5,47,29.5,47,34.754V47z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.behance.net/legomaster1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Behance"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 64 64"
                    className={styles.icon}
                  >
                    <path d="M 16 8 C 11.582 8 8 11.582 8 16 L 8 48 C 8 52.418 11.582 56 16 56 L 48 56 C 52.418 56 56 52.418 56 48 L 56 16 C 56 11.582 52.418 8 48 8 L 16 8 z M 36 23 L 46 23 L 46 25.570312 L 36 25.570312 L 36 23 z M 17.146484 23.001953 L 25.759766 23.001953 C 26.694766 23.001953 31.751953 22.941797 31.751953 27.591797 C 31.751953 30.063797 30.065406 30.897672 29.316406 31.263672 C 30.439406 31.631672 32.498047 32.673469 32.498047 35.855469 C 32.499047 40.787469 26.882766 40.999 26.134766 41 L 17.146484 41 L 17.146484 23.001953 z M 20.986328 26.121094 L 20.986328 30.345703 L 25.107422 30.345703 C 25.668422 30.345703 27.539062 30.029578 27.539062 28.142578 C 27.539062 26.255578 25.105422 26.121094 24.732422 26.121094 L 20.986328 26.121094 z M 41.298828 27 C 46.257828 27 47.603734 30.869969 47.802734 31.792969 C 47.999734 32.715969 48 33.532672 48 34.638672 L 37.945312 34.638672 C 37.945312 35.744672 38.533141 38.240234 41.494141 38.240234 C 42.283141 38.240234 42.875797 38.053547 43.466797 37.685547 C 44.057797 37.315547 44.254172 36.947125 44.451172 36.578125 L 47.802734 36.578125 C 47.211734 38.052125 46.423281 39.159484 45.238281 39.896484 C 44.056281 40.633484 42.675609 41 41.099609 41 C 40.113609 41 39.125625 40.815313 38.140625 40.445312 C 37.351625 40.075313 36.564609 39.526656 35.974609 38.972656 C 35.382609 38.422656 34.98775 37.684672 34.59375 36.763672 C 34.19875 36.027672 34 34.92 34 34 C 34 33.081 34.368828 27 41.298828 27 z M 41.115234 29.462891 C 38.220234 29.462891 37.746094 32.2535 37.746094 32.4375 L 44.087891 32.4375 C 43.889891 31.5095 43.057234 29.462891 41.115234 29.462891 z M 20.945312 32.919922 L 20.945312 37.876953 L 25.253906 37.876953 C 25.627906 37.876953 28.248047 37.754234 28.248047 35.490234 C 28.249047 33.223234 26.189906 32.919922 25.253906 32.919922 L 20.945312 32.919922 z"></path>
                  </svg>
                </a>

                <a
                  href="https://dribbble.com/Shahnazar126"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Dribbble"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 64 64"
                    className={styles.icon}
                  >
                    <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26c14.359,0,26-11.641,26-26C58,17.641,46.359,6,32,6z M49.488,18.673 c2.739,3.586,4.399,8.035,4.5,12.862c-4.48-0.847-9.661-1.261-15.157-0.152c-0.656-1.523-1.345-3.041-2.086-4.547 C43.212,24.131,47.332,20.779,49.488,18.673z M46.766,15.706c-1.871,1.808-5.719,4.956-11.907,7.499 c-2.369-4.366-5.073-8.602-8.059-12.578C28.468,10.22,30.208,10,32,10C37.677,10,42.859,12.162,46.766,15.706z M22.824,12.013 c3.056,3.954,5.819,8.188,8.23,12.563c-5.393,1.703-12.17,2.839-20.502,2.548C12.079,20.4,16.694,14.839,22.824,12.013z M10,32 c0-0.3,0.011-0.599,0.023-0.896c1.112,0.046,2.208,0.076,3.271,0.076c7.911,0,14.417-1.22,19.684-2.948 c0.691,1.389,1.337,2.789,1.953,4.193c-6.267,2.099-12.812,6.412-19.101,14.473C12.214,42.976,10,37.743,10,32z M18.803,49.59 c5.859-7.593,11.865-11.596,17.655-13.475c2.097,5.409,3.593,10.831,4.384,16.024C38.227,52.695,35.187,53,32,53 C27.136,53,22.591,51.775,18.803,49.59z M44.961,50.559c-0.856-4.818-2.248-9.814-4.188-14.809 c4.847-0.771,9.498-0.438,13.487,0.285C53.438,42.264,49.945,47.463,44.961,50.559z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.quizSection}>
        <div className={styles.quizHeader}>
          <h2 className={styles.quizTitle}>How well do you know me?</h2>
          <p className={styles.subtitle}>Take this quick quiz to find out!</p>
        </div>

        <div className="quiz-container">
          {showScore ? (
            <div className="score-section">
              {score === 5 && (
                <>
                  <Confetti width={width} height={height} />
                  <div className={styles.perfectScore}>
                    <span className={styles.scoreEmoji}>🎉</span>
                    <p>
                      Wow, you got a perfect score! You know me like the back of
                      your hand. We're practically kindred spirits!
                    </p>
                  </div>
                </>
              )}
              {score === 4 && (
                <div>
                  <span className={styles.scoreEmoji}>😊</span>
                  <p>
                    Great job! You got 4 out of 5 right. You really know a lot
                    about me. We must be great friends!
                  </p>
                </div>
              )}
              {score === 3 && (
                <div>
                  <span className={styles.scoreEmoji}>👍</span>
                  <p>
                    You scored 3 out of 5. Not bad at all! You know me pretty
                    well, but there's always room to learn more about each
                    other.
                  </p>
                </div>
              )}
              {score === 2 && (
                <div>
                  <span className={styles.scoreEmoji}>🤔</span>
                  <p>
                    You got 2 out of 5 right. Looks like you have some more to
                    learn about me. Let's hang out more!
                  </p>
                </div>
              )}
              {score === 1 && (
                <div>
                  <span className={styles.scoreEmoji}>😅</span>
                  <p>
                    You got 1 out of 5. Seems like you might not know me very
                    well yet, but that's okay! There's plenty of time to change
                    that.
                  </p>
                </div>
              )}
              {score === 0 && (
                <div>
                  <span className={styles.scoreEmoji}>🙈</span>
                  <p>
                    Oh, it looks like you didn't get any right this time. We
                    definitely need to spend more time together!
                  </p>
                </div>
              )}
              <button
                className={styles.restartButton}
                onClick={() => {
                  setShowScore(false);
                  setCurrentQuestion(0);
                  setScore(0);
                }}
              >
                Restart Quiz
              </button>
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                      key={index}
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2025 Shakhnazar</p>
          <p>Made with ❤️ using React</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
