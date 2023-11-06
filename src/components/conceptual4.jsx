import styles, { layout } from "../style";
import { coinbase } from "../assets";

const Conceptual4 = () => (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={coinbase} alt="billing" className="w-[70%] h-[100%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Junhyuk's <br></br> Conceptual Design
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The main feature of the concept is the cam-driven lock, which brings a lot of quality to the design. The remaining feature setup was also well made, with the main drawback being the hardwired connections.
        </p>
    </div>
  </section>
);

export default Conceptual4;