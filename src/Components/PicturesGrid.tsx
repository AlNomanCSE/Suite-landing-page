import styles from "./PicturesGrid.module.css";
import image1 from "../assets/images/desktop/image-gallery-cone.jpg";
import image2 from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import image3 from "../assets/images/desktop/image-gallery-orange.jpg";
import image4 from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

const PicturesGrid = () => {
  return (
    <section className={styles.GridView}>
      <img src={image1} alt="cone" />
      <img src={image3} alt="orange" />
      <img src={image2} alt="milkbottles" />
      <img src={image4} alt="sugercubes" />
    </section>
  );
};

export default PicturesGrid;
