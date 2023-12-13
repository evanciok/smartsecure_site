import { app1 } from "../assets";
import styles, { layout } from "../style";

const SoftAlpha1 = () => (
    <section id="p2" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Software <br></br> Alpha Prototype 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The software alpha prototype is an Android app with a simple user interface for managing door lock states. It is coded with Java and leverages Android's navigation components, UI elements, and color coding to visually represent and control the lock status. The app includes a navigation drawer with toggle functionality, providing a user-friendly interface. The options shown when the navigation drawer is selected are Home, Activity, Settings, Emergency, and Log Out.

      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={app1} alt="billing" className="w-[50%] h-[90%]" />
    </div>
  </section>
);

export default SoftAlpha1;
