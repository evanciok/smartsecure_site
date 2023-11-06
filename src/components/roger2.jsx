import styles, { layout } from "../style";
import { roger2, roger3, roger4 } from "../assets";

const Roger2 = () => (
    <section className={layout.section}>
        <div flex-col>
        <img src={roger2} alt="billing" className="h-[25%] w-[100%]" />
        <br></br>
        <p>study1</p>
        <img src={roger3} alt="billing" className="h-[25%] w-[100%]" />
        <br></br>
        <p>study2</p>
        <img src={roger4} alt="billing" className="h-[25%] w-[100%]" />
        </div>
        
    </section>
);

export default Roger2;