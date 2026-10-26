import { Container, Text, Title } from '@mantine/core';
import classes from '../stylesheets/MapSection.module.css';
import { business, nearbyNeighborhoods } from '../data/business.js';

const address = `${business.streetAddress}, ${business.city}, ${business.region} ${business.postalCode}`;

export function MapSection() {
    return (
        <section className={classes.section} id="location">
            <Container size="lg">
                <Title order={2} className={classes.title}>Find Us</Title>
                <Text className={classes.subtitle}>
                    {business.name} is at {address}, in {business.neighborhood}, a short drive from{' '}
                    {nearbyNeighborhoods}. We’re open Monday through Saturday, 8 a.m. to 5 p.m., and closed
                    Sunday. Walk in, or call <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>.
                </Text>
                <div className={classes.mapWrap}>
                    <iframe
                        title="NKG Auto Repair location"
                        className={classes.map}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps?q=${encodeURIComponent(`${business.name}, ${address}`)}&output=embed`}
                    />
                </div>
            </Container>
        </section>
    );
}

export default MapSection;
