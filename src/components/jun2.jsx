import { layout } from "../style";
import { jun1, jun2, jun3 } from "../assets";

const Jun2 = () => (
    <section className={layout.section}>
        <div className= "flex flex-col justify-center items-center">
        <div className= "flex flex-row justify-center items-center">
        <img src={jun1} alt="billing" className="h-full w-[60%]" />
        <br></br>
        <p>Study 1</p>
        <img src={jun2} alt="billing" className="h-full w-[60%]" />
        </div>
        <br></br>
        <p>Study 2</p>
        <img src={jun3} alt="billing" className="h-full w-[60%]" />
        </div>
    </section>
);

export default Jun2;