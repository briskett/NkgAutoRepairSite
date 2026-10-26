import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from '../stylesheets/HeroImageBackground.module.css';
import { business } from '../data/business.js';
import heroTeam from '../assets/hero-family.jpg';
import heroCars from '../assets/bg2.jpg';
import heroShop from '../assets/DAD.jpg';

// Real <img> elements (not CSS backgrounds) so the first slide is in the prerendered HTML,
// fetched at high priority, and has alt text.
const slides = [
    {
        src: heroTeam,
        className: classes.bgFamily,
        width: 1000,
        height: 750,
        alt: 'Two members of the NKG Auto Repair team inside the shop in Bayview-Hunters Point, San Francisco',
    },
    { src: heroCars, className: classes.bgCars, width: 1206, height: 543, alt: '' },
    {
        src: heroShop,
        className: classes.bgDad,
        width: 678,
        height: 527,
        alt: 'NKG Auto Repair shop entrance with the N-K-G Auto Repair sign and phone number',
    },
];

export function HeroImageBackground() {
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = slides.length;

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % totalSlides);
        }, 5500);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <div className={classes.wrapper}>
        {slides.map((slide, index) => (
            <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                // Lowercase: React 18 doesn't recognize the camelCase fetchPriority prop.
                {...{ fetchpriority: index === 0 ? 'high' : 'low' }}
                className={`${classes.background} ${slide.className} ${activeSlide === index ? classes.visible : ''}`}
            />
        ))}
        <Overlay color="#000" opacity={0.5} zIndex={1} />

    <div className={classes.inner}>
    <Title order={1} className={classes.title}>
        Auto Repair in Bayview-Hunters Point, San Francisco{' '}
        <Text component="span" inherit className={classes.highlight}>
            Family-Owned Since 2009
        </Text>
    </Title>

    <Container size={640}>
    <Text size="lg" className={classes.description}>
        {business.name} is a family-owned auto repair shop at {business.streetAddress} in San Francisco’s{' '}
        {business.neighborhood} neighborhood. Oil changes, brake repair, engine diagnostics, transmission,
        suspension, and A/C repair, with a clear estimate before any work begins. Walk-ins welcome Monday
        through Saturday, 8 a.m. to 5 p.m.
    </Text>
    </Container>

    <div className={classes.controls}>
    <Button
        component="a"
        href={`tel:${business.phone}`}
        className={classes.control}
        size="lg"
    >
        Call Now
    </Button>
    <Button component="a" href="#contact" className={classes.control} size="lg" onClick={(event) => {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
            event.preventDefault();
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