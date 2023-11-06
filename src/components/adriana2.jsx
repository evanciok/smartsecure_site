import { layout } from "../style";
import { adriana2, adriana3, adriana4 } from "../assets";

const Adriana2 = () => (
    <section className={layout.section}>
        <div className= "flex flex-row justify-center items-center">
        <img src={adriana2} alt="billing" className="h-[80%] w-[90%]" />
        <br></br>
        <p>Study 1</p>
        <img src={adriana3} alt="billing" className="h-[80%] w-[90%]" />
        <br></br>
        <p>Study 2</p>
        <img src={adriana4} alt="billing" className="h-[80%] w-[90%]" />
        </div>
        
    </section>
);

export default Adriana2;