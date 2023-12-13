import styles, { layout } from "../style";
import { app2, app3} from "../assets";

const SoftAlpha2 = () => (
    <section className={layout.section}>
        <p>Study 1</p>
        <p>Study 1</p>
        <p>Study 1</p>
        <div className= "flex flex-row justify-center items-center">
        <img src={app2} alt="billing" className="h-[100%] w-[100%]" />
        <br></br>
        <p>Study 1</p>
        <img src={app3} alt="billing" className="h-[100%] w-[100%]" />
        <br></br>
        </div>
    </section>
);

export default SoftAlpha2;
