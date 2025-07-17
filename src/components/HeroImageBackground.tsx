import cx from 'clsx';
import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from '../stylesheets/HeroImageBackground.module.css';

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
    <Button className={classes.control} variant="white" size="lg">
        Get started
    </Button>

    </div>
    </div>
    </div>
);
}