import styles, { layout } from "../style";
import { airbnb } from "../assets";

const Conceptual3 = () => (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={airbnb} alt="billing" className="w-[65%] h-[80%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Roger's <br></br> Conceptual Design
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The features in this conceptual design are effective although simple. It delivers on customer needs without sacrificing compatibility or ease of use and installation.
      </p>
    </div>
  </section>
);

export default Conceptual3;