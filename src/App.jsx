import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Testimonials, Hero, Conceptual, Conceptual2, Conceptual3, Conceptual4, Conceptual5, SETech, SETech2, SETech3, Roger, Roger2 } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Conceptual />
        <Conceptual2 />
        <Conceptual3 />
        <Conceptual4 />
        <Conceptual5 />
        <SETech />
        <SETech2 />
        <SETech3 />
        <Roger />
        <Roger2 />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
