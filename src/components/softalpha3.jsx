import { duino } from "../assets";
import styles, { layout } from "../style";

const SoftAlpha1 = () => (
    <section id="p2" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Arduino <br></br> Alpha Prototype 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      First, the libraries Servo for motor usage and Virtual Wire for message sending protocol are included, then the constants for pins and motor object are initialized. In the setup function, virtual wire is initialized at a bitrate of 2000 Bits per second and the pins are attached to their objects. In the main loop, the system resides in a default state of listening, awaiting a non-empty message signal through the receiver. Once it gets this signal, the motor is triggered for a default value of five seconds then turned off. The final section, receiveSignal() processes the receiver input buffer to search for a message, recording and returning it if it exists or returning an empty string by default. 


      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={duino} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default SoftAlpha1;
