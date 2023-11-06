import styles, { layout } from "../style";
import { binance } from "../assets";

const Conceptual = () => (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={binance} alt="billing" className="w-[85%] h-[85%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Evan's <br></br> Conceptual Design
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        This design featured wireless signal transmitters to allow the NFC to be placed anywhere on the door while interfacing with the arduino system on the lock. While effective against security threats and easy to use, it ultimately fell short in the installation category of the decision matrix.
      </p>
    </div>
  </section>
);

export default Conceptual;
