import { Group, Divider, Box, Burger, Drawer, ScrollArea, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import classes from '../stylesheets/Header.module.css';
import { findPage, homePath } from '../data/pages.js';
import { useLang, useStrings } from '../i18n.js';

const navPaths = {
    en: { services: '/services/', liftRental: '/lift-rental/' },
    es: { services: '/es/servicios/', liftRental: '/es/renta-de-elevador/' },
};

export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const lang = useLang();
    const t = useStrings().nav;
    const home = homePath(lang);

    const handleNavigate = (path) => {
        navigate(path);
        closeDrawer(); // Close drawer if using navigation in mobile
    };

    const navLinks = [
        { label: t.services, href: navPaths[lang].services },
        { label: t.liftRental, href: navPaths[lang].liftRental },
        { label: t.faq, href: `${home}#faq` },
        { label: t.findUs, href: `${home}#location` },
        { label: t.contact, href: `${home}#contact` },
    ];

    // Same page in the other language, or that language's home page if there isn't one.
    const switchHref = findPage(pathname).alternate ?? homePath(t.switchLang);

    const links = (
        <>
            {navLinks.map((link) => (
                <a key={link.href} className={classes.link} onClick={closeDrawer} href={link.href}>
                    {link.label}
                </a>
            ))}
            <a className={`${classes.link} ${classes.langLink}`} href={switchHref} hrefLang={t.switchLang} lang={t.switchLang}>
                {t.switchLabel}
            </a>
        </>
    );

    return (
        <Box pb={120}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%" wrap="nowrap">
                    <button
                        type="button"
                        className={classes.brand}
                        onClick={() => handleNavigate(home)}
                    >
                        <span className={classes.brandTop}>NKG AUTO</span>
                        <span className={classes.brandBottom}>REPAIR</span>
                    </button>

                    <Group h="100%" gap={0} visibleFrom="md" wrap="nowrap">
                        {links}
                    </Group>
                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" aria-label={t.openMenu} />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title={t.menu}
                hiddenFrom="md"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />
                    {links}
                    <Divider my="sm" />
                </ScrollArea>
            </Drawer>
        </Box>
    );
}

export default Header;
