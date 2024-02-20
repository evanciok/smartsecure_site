import styles, { layout } from "../style";

const Fabplan = () => (
    <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
        <iframe src="https://www.youtube.com/embed/AkefWpqfn0s?si=l29l7Rk1vRuyjnfs&rel=0" className="aspect-video w-full h-full"></iframe>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Fabrication Plan <br></br> Mechanical & Software
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      </p>
    </div>
  </section>
);

export default Fabplan;