import styles from "./ClientReview.module.css";
import imge1 from "../assets/images/image-emily.jpg";
import imge2 from "../assets/images/image-thomas.jpg";
import imge3 from "../assets/images/image-jennie.jpg";
const ClientReview = () => {
  return (
    <section className={styles.mainDiv}>
      <h1> Client testimonials</h1>
      <div>
        <img src={imge1} alt="emily" />
        <div>
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </div>
        <div>
          <h2>Emily R.</h2>
          <p> Marketing Director</p>
        </div>
      </div>
      <div>
        <img src={imge2} alt="thomas" />
        <div>
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
          success made it a satisfying and enjoyable experience.
        </div>
        <div>
          <h2> Thomas S.</h2>
          <p> Chief Operating Officer</p>
        </div>
      </div>
      <div>
        <img src={imge3} alt="jennie" />
        <div>
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </div>
        <div>
          <h2> Jennie F.</h2>
          <p>Business Owner</p>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
