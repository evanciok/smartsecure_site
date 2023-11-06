import styles, { layout } from "../style";
import { roger1 } from "../assets";

const Roger = () => (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={roger1} alt="billing" className="w-[90%] h-[55%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        1st Mechanical <br></br> Technical Analysis
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Conducted an FEA study which puts force on the motor to simulate the torque that allows the belt mechanism to rotate and push or pull the slide lock. The stress and strain almost entirely affects the small area around the motor. The results indicate it would require an abnormally high level of stress or strain to deform the motor, which is a positive outcome for the design.
      </p>
    </div>
  </section>
);

export default Roger;
