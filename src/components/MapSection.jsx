import { Container, Text, Title } from '@mantine/core';
import classes from '../stylesheets/MapSection.module.css';

export function MapSection() {
    return (
        <section className={classes.section} id="location">
            <Container size="lg">
                <Title order={2} className={classes.title}>Find Us</Title>
                <Text className={classes.subtitle}>NKG Auto Repair, 1400 Carroll Ave, San Francisco, CA</Text>
                <div className={classes.mapWrap}>
                    <iframe
                        title="NKG Auto Repair location"
                        className={classes.map}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=NKG%20Auto%20Repair%2C%201400%20Carroll%20Ave%2C%20San%20Francisco%2C%20CA&output=embed"
                    />
                </div>
            </Container>
        </section>
    );
}

export default MapSection;
