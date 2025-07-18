
import {HeroImageBackground} from "../components/HeroImageBackground.tsx";
import {FeaturesAsymmetrical} from "../components/FeaturesAsymmetrical.tsx";
import {FaqWithBg} from "../components/FaqWithBg.tsx";
import {Contact} from "../components/Contact.tsx";

function Home() {

    return (
        <div>
            <div id="home">
                <HeroImageBackground/>
            </div>
            <div id="features">
                <FeaturesAsymmetrical/>
            </div>
            <div id="faq">
                <FaqWithBg/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
        </div>
    );
}

export default Home;
