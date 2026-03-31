import { useEffect, useState } from 'react';
import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from '../stylesheets/HeroImageBackground.module.css';

export function HeroImageBackground() {
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = 3;

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % totalSlides);
        }, 5500);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <div className={classes.wrapper}>
        <div className={`${classes.background} ${classes.bgFamily} ${activeSlide === 0 ? classes.visible : ''}`} />
        <div className={`${classes.background} ${classes.bgCars} ${activeSlide === 1 ? classes.visible : ''}`} />
        <div className={`${classes.background} ${classes.bgDad} ${activeSlide === 2 ? classes.visible : ''}`} />
        <Overlay color="#000" opacity={0.5} zIndex={1} />

    <div className={classes.inner}>
    <Title className={classes.title}>
        NKG Auto Repair, {' '}
                                     <Text component="span" inherit className={classes.highlight}>
        Drive with Confidence!
    </Text>
    </Title>

    <Container size={640}>
    <Text size="lg" className={classes.description}>
        Certified Mechanics. Quality Parts. Transparent pricing. Everything you need to drive stress-free.
    </Text>
    </Container>

    <div className={classes.controls}>
    <Button className={classes.control} size="lg" onClick={() => {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth' });
        }
    }} >
        Contact Us!
    </Button>

    </div>
    </div>
    </div>
);
}