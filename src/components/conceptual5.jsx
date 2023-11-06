import styles, { layout } from "../style";
import { dropbox } from "../assets";

const Conceptual5 = () => (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={dropbox} alt="billing" className="w-[70%] h-[100%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Adriana's <br></br> Conceptual Design
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        While the features of this design are similar to some of the others, this was the most fleshed out and thorough by far. The team chose this design to be our basis for the alpha prototype moving forward, and any additional features would be appended onto this base.
      </p>
    </div>
  </section>
);

export default Conceptual5;