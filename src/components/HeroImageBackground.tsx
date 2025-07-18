import cx from 'clsx';
import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from '../stylesheets/HeroImageBackground.module.css';
import {useNavigate} from 'react-router-dom';

export function HeroImageBackground() {

    return (
        <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />

    <div className={classes.inner}>
    <Title className={classes.title}>
        NKG Auto Repair, {' '}
                                     <Text component="span" inherit className={classes.highlight}>
        Drive with Confidence!
    </Text>
    </Title>

    <Container size={640}>
    <Text size="lg" className={classes.description}>
        Certified Mechanics, Quality Parts. Transparent pricing. Everything you need to drive stress-free.
    </Text>
    </Container>

    <div className={classes.controls}>
    <Button className={classes.control} variant="white" size="lg"  onClick={() => {
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