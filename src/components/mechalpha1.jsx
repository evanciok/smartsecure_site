import styles, { layout } from "../style";
import { alpha3 } from "../assets";

const MechAlpha1 = () => (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={alpha3} alt="billing" className="w-[90%] h-[85%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Mechanical <br></br> Alpha Prototype
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The alpha prototype consisted of two subsystems that would send and receive signals from each other to function. In subsystem one, the arduino board is component 1, the breadboard is component 2, the transmitter is component 3, 4 is the receiver, 5 is the NFC module, and 6 is the NFC tag. For subsystem two, 7 corresponds to the solenoid, 8 is the breadboard, 9 is the transmitter, 10 is the battery, 11 is the arduino board, and 12 is the receiver.
      </p>
    </div>
  </section>
);

export default MechAlpha1;
