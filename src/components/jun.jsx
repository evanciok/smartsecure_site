import styles, { layout } from "../style";

const Jun = () => (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
        <iframe src="https://www.youtube.com/embed/AkefWpqfn0s?si=l29l7Rk1vRuyjnfs&rel=0" className="aspect-video w-full h-full"></iframe>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        3rd Mechanical <br></br> Technical Analysis
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Three part FEA study to obtain stress, displacement, and strain results. Stabilizer, door, and outer door were in fixed positions with a 5lbf torque placed upon the rotating mechanism. 
      </p>
    </div>
  </section>
);

export default Jun;