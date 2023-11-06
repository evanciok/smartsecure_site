import { setech3 } from "../assets";
import styles, { layout } from "../style";

const SETech3 = () => (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Using the CWE analysis the software team ruled out PHP, Ruby, and Python. This left Java & JavaScript versus looking towards a less used language. The problem with this approach is that the less popular languages are likely to be worse for our compatibility criterion that we rate highly. Due to the integration with Android Studios, the team did more extensive analyses of Java specifically. While it does contain a unique erorr in deserialization, it is not especially critical. Overall, this analysis led us to opt for development in Android Studios using either Java or Kotlin.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={setech3} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default SETech3;