import { beta } from "../assets";
import styles, { layout } from "../style";

const Up2 = () => (
  <section className={layout.section}>
    <div>
      <h2 className={`${styles.heading2} text-center`}>
        Beta Prototype Installation 
      </h2>
      <img src={beta} alt="billing" className="h-50 w-50" />
    </div>

  </section>
);

export default Up2;
