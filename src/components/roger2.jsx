import { layout } from "../style";
import { roger2, roger3, roger4 } from "../assets";

const Roger2 = () => (
    <section className={layout.section}>
        <div className= "flex flex-col justify-center items-center">
        <img src={roger2} alt="billing" className="h-[25%] w-[80%]" />
        <br></br>
        <p>Study 1</p>
        <img src={roger3} alt="billing" className="h-[25%] w-[80%]" />
        <br></br>
        <p>Study 2</p>
        <img src={roger4} alt="billing" className="h-[25%] w-[80%]" />
        </div>
        
    </section>
);

export default Roger2;