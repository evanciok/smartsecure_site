import styles, { layout } from "../style";
import { adriana1 } from "../assets";

const Adriana = () => (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={adriana1} alt="billing" className="w-[100%] h-[85%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        2nd Mechanical <br></br> Technical Analysis
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Ran a finite element analysis using the preconditions of fixed encasement and a 5N force on bolt lock to simulate the solenoid actuator's force. The stress simulation showed a maximum von mises stress of 5.394 MPa at the point of interaction, which is well below the yield strength of stainless steel (205 MPa). The displacement and strain results demonstrate minimal deformation and strain on the stainless steel lock, meaning the design is not at risk even with heavy operation.
      </p>
    </div>
  </section>
);

export default Adriana;