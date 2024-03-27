import { setech1 } from "../assets";
import styles, { layout } from "../style";

const Demo = () => (
    <section id="up" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Recent Update: <br></br> Beta Demo
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        In this demonstration of the beta prototype functionality the two subsystems can be seen working in tandem. The flat blue shield on the top is our NFC reader and the white card is a programmed NDEF NFC tag used for testing. When it scans, it triggers a wireless signal to transmit across to the second system. This triggers the relay to click on for 5 seconds, unlocking the solenoid lock, then clicks off to resecure the door.
     </p>
    </div>

    <div className={layout.sectionImg}>
        <iframe src="https://www.youtube.com/embed/MAyS93ykAaw?si=rg3tM-onfM5JJMuK" className="aspect-video w-full h-full"></iframe>
    </div>
  </section>
);

export default Demo;
