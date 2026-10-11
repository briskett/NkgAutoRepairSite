import { IconBrandGoogleFilled, IconBrandFacebookFilled, IconBrandGithubFilled } from '@tabler/icons-react';
import { ActionIcon, Container, Group } from '@mantine/core';
import classes from '../stylesheets/Footer.module.css';
import { business } from '../data/business.js';
import { services, servicePath } from '../data/services.js';

export function Footer() {
    return (
        <footer className={classes.footer}>
            <Container size="lg" className={classes.inner}>
                <div className={classes.column}>
                    <div className={classes.brand}>
                        <span className={classes.brandTop}>NKG AUTO</span>
                        <span className={classes.brandBottom}>REPAIR</span>
                    </div>
                    <address className={classes.address}>
                        <a href={business.mapsUrl} target="_blank" rel="noreferrer">
                            {business.streetAddress}
                            <br />
                            {business.city}, {business.region} {business.postalCode}
                        </a>
                        <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
                        <a href={`mailto:${business.email}`}>{business.email}</a>
                        <span>{business.hours}</span>
                        <span>{business.closed}</span>
                    </address>
                </div>

                <nav aria-label="Services" className={classes.column}>
                    <span className={classes.columnTitle}>Services</span>
                    {services.map((service) => (
                        <a key={service.slug} href={servicePath(service)} className={classes.link}>
                            {service.name}
                        </a>
                    ))}
                </nav>

                <nav aria-label="Shop" className={classes.column}>
                    <span className={classes.columnTitle}>Shop</span>
                    <a href="/lift-rental" className={classes.link}>Lift Rental</a>
                    <a href="/#faq" className={classes.link}>FAQ</a>
                    <a href="/#contact" className={classes.link}>Contact</a>
                    <Group gap={0} mt="xs" className={classes.links}>
                        <ActionIcon component="a" href={business.facebookUrl} target="_blank" rel="noreferrer" aria-label="NKG Auto Repair on Facebook" size="lg" color="orange" variant="subtle">
                            <IconBrandFacebookFilled size={18} stroke={1.5} />
                        </ActionIcon>

                        <ActionIcon component="a" href={business.mapsUrl} target="_blank" rel="noreferrer" aria-label="NKG Auto Repair on Google Maps" size="lg" color="orange" variant="subtle">
                            <IconBrandGoogleFilled size={18} stroke={1.5} />
                        </ActionIcon>

                        <ActionIcon component="a" href="https://github.com/briskett" target="_blank" rel="noreferrer" aria-label="Site developer on GitHub" size="lg" color="orange" variant="subtle">
                            <IconBrandGithubFilled size={18} stroke={1.5} />
                        </ActionIcon>
                    </Group>
                </nav>
            </Container>
        </footer>
    );
}

export default Footer;
