import { people01, bill, google } from "../assets";
import styles, { layout } from "../style";

const Clients = () => (
  <section id="clients" className={layout.section}>
    <div>
      <h2 className={`${styles.heading2} text-center`}>
        Gantt Chart 
      </h2>
      <p className={`${styles.paragraph} text-center mt-5`}>
        Red: All Members, Yellow: Mechanical Team, Blue: Software Team
      </p>
      <img src={people01} alt="billing" className="h-50 w-50" />
    </div>

  </section>
);

export default Clients;
