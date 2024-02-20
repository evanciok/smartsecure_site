import { phase4gantt, bill, google } from "../assets";
import styles, { layout } from "../style";

const Gantt = () => (
  <section id="p2" className={layout.section}>
    <div>
      <h2 className={`${styles.heading2} text-center`}>
        Phase IV-VI Gantt Chart 
      </h2>
      <img src={phase4gantt} alt="billing" className="h-50 w-50" />
    </div>

  </section>
);

export default Gantt;
