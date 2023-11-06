import { setech1 } from "../assets";
import styles, { layout } from "../style";

const SETech = () => (
    <section id="p2" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Software <br></br> Technical Analysis 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The first stage of our software technical analysis involved compiling data from the National Vulernability Database (NVD) on the exploits that occur annually on projects using the top 7 most common open source languages (C, C++, Java, JavaScript, PHP, Python, Ruby). This preliminary analysis immediately eliminated the use of C based languages in our system development.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={setech1} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default SETech;
