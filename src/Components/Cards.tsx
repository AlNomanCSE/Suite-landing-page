import egg from "../assets/images/desktop/image-transform.jpg";
import cup from "../assets/images/desktop/image-stand-out.jpg";
import styles from "./Cards.module.css";
const Cards = () => {
  return (
    <section className={styles.card}>
      <div className={styles.divDetails}>
        <h1>Transform your brand</h1>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <h4>
          <span>Learn more</span>
        </h4>
      </div>

      <img src={egg} alt="egg" className={styles.image} />

      <img src={cup} alt="cup" className={styles.image} />

      <div className={styles.divDetails}>
        <h1>Stand out to the right audience</h1>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <h4>
          <span>Learn more</span>
        </h4>
      </div>

      <div className={styles.imageDiv1}>
        <div>
          <h1> Graphic design</h1>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>

      <div className={styles.imageDiv2}>
        <div style={{ position: "absolute" }}>
          <h1> Photography</h1>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
