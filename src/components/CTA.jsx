import styles, { layout } from "../style";
import { people02 } from "../assets";

const CTA = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Initial Bill of Materials <br className="sm:block hidden" /> 
      </h2>
    </div>
    <div className={layout.sectionImg}>
      <img src={people02} alt="billing" className="w-[100%] h-[100%]" />
    </div>    
  </section>
);

export default CTA;
