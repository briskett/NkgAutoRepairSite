
import {HeroImageBackground} from "../components/HeroImageBackground.tsx";
import {FeaturesAsymmetrical} from "../components/FeaturesAsymmetrical.tsx";
import {ServicesSection} from "../components/ServicesSection.jsx";
import {FaqWithBg} from "../components/FaqWithBg.tsx";
import {Contact} from "../components/Contact.tsx";
import {GoogleReviewsSection} from "../components/GoogleReviewsSection.jsx";
import {MapSection} from "../components/MapSection.jsx";

function Home() {

    return (
        <div>
            <div id="home">
                <HeroImageBackground/>
            </div>
            <div id="features">
                <FeaturesAsymmetrical/>
            </div>
            <ServicesSection />
            <div id="reviews">
                <GoogleReviewsSection />
            </div>
            <div id="faq">
                <FaqWithBg/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
            <MapSection />
        </div>
    );
}

export default Home;
