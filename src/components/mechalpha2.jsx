import styles, { layout } from "../style";
import { alpha1, alpha2} from "../assets";

const MechAlpha2 = () => (
    <section className={layout.section}>
        <p>Study 1</p>
        <p>Study 1</p>
        <p>Study 1</p>
        <div className= "flex flex-row justify-center items-center">
        <img src={alpha1} alt="billing" className="h-[100%] w-[100%]" />
        <br></br>
        <p>Study 1</p>
        <img src={alpha2} alt="billing" className="h-[100%] w-[100%]" />
        <br></br>
        </div>
    </section>
);

export default MechAlpha2;
