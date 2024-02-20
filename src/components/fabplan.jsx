import styles, { layout } from "../style";

const Fabplan = () => (
    <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            The fabrication plan for our beta prototype will use our Alpha 2.0 prototype as a basis. Our three main objectives are to connect the NFC reader and integrate it into the current subsystems, test this NFC reader through various door thicknesses and assess the need for signal boosting, and finally to 3D print encasements to turn our project into a sleek product.<br></br> For the software beta prototype, we will be implementing account creation and a personalized Home Screen to the companion app as well as improving the arduino driver code with omnidirectional feedback signals and an evolution of the messaging protocols.
        </p>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Fabrication Plan <br></br> Mechanical & Software
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      </p>
    </div>
  </section>
);

export default Fabplan;