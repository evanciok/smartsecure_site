import styles, { layout } from "../style";
import { people03 } from "../assets";

const Conceptual2 = () => (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={people03} alt="billing" className="w-[65%] h-[80%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Yashwi's <br></br> Conceptual Design
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        This design featured a unique twist lock that would have smooth operation and good aesthetics. Unfortunately, this also means that the solution has limited compatibility with pre-existing doors and their varying lock types.
      </p>
    </div>
  </section>
);

export default Conceptual2;