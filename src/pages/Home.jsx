import {
    Container,
    BackgroundImage,
    Text,
    Button,
    Overlay,
    Box,
    rem,
} from "@mantine/core";

import homeBG from "../assets/DAD.jpg";
import classes from "../stylesheets/Home.module.css";
import {HeroImageBackground} from "../components/HeroImageBackground.tsx";
import {FeaturesAsymmetrical} from "../components/FeaturesAsymmetrical.tsx";
import {FaqWithBg} from "../components/FaqWithBg.tsx";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const redirect_contact = () => {
        navigate("/contact");
    }

    return (
        <div>
            <HeroImageBackground />
            <FeaturesAsymmetrical />
            <FaqWithBg />

        </div>
    );
}

export default Home;
