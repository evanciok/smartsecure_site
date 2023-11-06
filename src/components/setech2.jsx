import { setech2 } from "../assets";
import styles, { layout } from "../style";

const SETech2 = () => (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Next, the three most common vulnerabilities per language were identified using common weakness enumeration (CWE) codes. This is a framework used to assign relative scores to exploit types based on a combination of likelihood and severity. CWE79 - cross site scripting & and CWE20 - improper input validation are the two main codes of note.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={setech2} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default SETech2;