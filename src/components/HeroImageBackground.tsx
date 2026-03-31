import * as React from 'react';
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
    <Title order={1} className={classes.title}>
        NKG Auto Repair, Bayview-Hunters Point{' '}
        <Text component="span" inherit className={classes.highlight}>
            Serving Since 2009!
        </Text>
    </Title>

    <Container size={640}>
    <Text size="lg" className={classes.description}>
        Oil changes, brake repair, engine diagnostics, transmission, suspension, and A/C repair—serving San Francisco drivers with transparent estimates since 2009.
    </Text>
    </Container>

    <div className={classes.controls}>
    <Button
        component="a"
        href="tel:+14152397450"
        className={classes.control}
        size="lg"
    >
        Call Now
    </Button>
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