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
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const redirect_contact = () => {
        navigate("/contact");
    }

    return (
        <div style={{ height: "100vh", position: "relative" }}>
            {/* Full-screen Background Image */}
            <BackgroundImage
                src={homeBG}
                style={{
                    height: "100vh", // Cover the entire height of the screen
                    width: "100%", // Cover the entire width of the screen
                    position: "absolute", // Position it behind the content
                    top: 0,
                    left: 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 0,
                }}
            >
                {/* Dark overlay on the background */}
                <Overlay color="black" opacity={0.9} zIndex={1} />

                {/* Container for content */}
                <Container
                    style={{
                        position: "relative", // Make sure the content stays above the overlay
                        zIndex: 2, // Ensure content is above the overlay
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "2rem",
                    }}
                >
                    {/* Header at the top-left */}
                    <Text
                        size={"xl"}
                        fw={1000}
                        lineClamp={1}
                        variant={"gradient"}
                        gradient={{ from:'blue', to: 'cyan', deg: 45 }}
                        //className={classes.nunitoSansCustom}
                        style={{
                            color: "#fff",
                            marginTop: "2rem", // Space from the top
                            marginBottom: "auto", // Push everything else down
                        }}
                    >
                        NKG Auto Repair - Drive with Confidence
                    </Text>

                    {/* Button at the bottom-right */}
                    <Box style={{ textAlign: "right", marginBottom: "2rem" }}>
                        <Button
                            style={{
                                maxWidth: rem(200)
                            }}
                            onClick={redirect_contact}
                        >
                            Contact Us!
                        </Button>
                    </Box>
                </Container>
            </BackgroundImage>
        </div>
    );
}

export default Home;
