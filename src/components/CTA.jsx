import styles, { layout } from "../style";
import { people02 } from "../assets";

const CTA = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Bill of Materials <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The team's current estimated bill of materials and associated budgeting. This will be updated throughout the project lifecycle to remain accurate.
      </p>
    </div>
    <div className={layout.sectionImg}>
      <img src={people02} alt="billing" className="w-[100%] h-[100%]" />
    </div>    
  </section>
);

export default CTA;
