import { IconBrandGoogleFilled, IconBrandFacebookFilled, IconBrandGithubFilled } from '@tabler/icons-react';
import { ActionIcon, Container, Group } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import classes from '../stylesheets/Footer.module.css';
import { business } from '../data/business.js';
import { findPage, homePath } from '../data/pages.js';
import { localizedServices } from '../data/services.js';
import { useLang, useStrings } from '../i18n.js';

export function Footer() {
    const { pathname } = useLocation();
    const lang = useLang();
    const strings = useStrings();
    const t = strings.footer;
    const home = homePath(lang);
    const liftRentalPath = lang === 'es' ? '/es/renta-de-elevador/' : '/lift-rental/';
    const switchHref = findPage(pathname).alternate ?? homePath(strings.nav.switchLang);

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
                        <span>{strings.hours}</span>
                        <span>{strings.closed}</span>
                    </address>
                </div>

                <nav aria-label={t.services} className={classes.column}>
                    <span className={classes.columnTitle}>{t.services}</span>
                    {localizedServices(lang).map((service) => (
                        <a key={service.slug} href={service.path} className={classes.link}>
                            {service.name}
                        </a>
                    ))}
                </nav>

                <nav aria-label={t.shop} className={classes.column}>
                    <span className={classes.columnTitle}>{t.shop}</span>
                    <a href={liftRentalPath} className={classes.link}>{t.liftRental}</a>
                    <a href={`${home}#faq`} className={classes.link}>{t.faq}</a>
                    <a href={`${home}#contact`} className={classes.link}>{t.contact}</a>
                    <a href={switchHref} hrefLang={strings.nav.switchLang} lang={strings.nav.switchLang} className={classes.link}>
                        {strings.nav.switchLabel}
                    </a>
                    <Group gap={0} mt="xs" className={classes.links}>
                        <ActionIcon component="a" href={business.facebookUrl} target="_blank" rel="noreferrer" aria-label={t.facebook} size="lg" color="orange" variant="subtle">
                            <IconBrandFacebookFilled size={18} stroke={1.5} />
                        </ActionIcon>

                        <ActionIcon component="a" href={business.mapsUrl} target="_blank" rel="noreferrer" aria-label={t.google} size="lg" color="orange" variant="subtle">
                            <IconBrandGoogleFilled size={18} stroke={1.5} />
                        </ActionIcon>

                        <ActionIcon component="a" href="https://github.com/briskett" target="_blank" rel="noreferrer" aria-label={t.github} size="lg" color="orange" variant="subtle">
                            <IconBrandGithubFilled size={18} stroke={1.5} />
                        </ActionIcon>
                    </Group>
                </nav>
            </Container>
        </footer>
    );
}

export default Footer;
