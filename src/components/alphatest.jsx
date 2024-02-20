import { setech1 } from "../assets";
import styles, { layout } from "../style";

const Alphatest = () => (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Testing & <br></br> Evaluation
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Signal testing for the mechanical subsystems was a success. There were over 50 trials with a 100% success rate of the signal being properly received. The experimental setup for this involved a button acting as the trigger signal and a buzzer to signal a success. A live demo of this setup can be seen to the right. A messaging protocol was established with functionality to handle different signals. <br></br> On the software side, the Firebase account setup was evaluated and complies with the following industry standards: ISO27001, ISO27017, ISO27018, SOC1, SOC2, and SOC3.
     </p>
    </div>

    <div className={layout.sectionImg}>
        <iframe src="https://www.youtube.com/embed/tJ7xUWcs3tE?si=P_xgdHD_MPYlkozG" className="aspect-video w-full h-full"></iframe>
    </div>
  </section>
);

export default Alphatest;
