import { updatebom, bill, google } from "../assets";
import styles, { layout } from "../style";

const Newbom = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={updatebom} alt="billing" className="w-[85%] h-[85%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Updated <br></br> Bill of Materials
      </h2>
    </div>
  </section>
);

export default Newbom;
