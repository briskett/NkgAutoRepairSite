import { Group, Divider, Box, Burger, Drawer, ScrollArea, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import classes from '../stylesheets/Header.module.css';

const navLinks = [
    { label: 'Services', href: '/services/' },
    { label: 'Lift Rental', href: '/lift-rental/' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Find Us', href: '/#location' },
    { label: 'Contact', href: '/#contact' },
];

export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        closeDrawer(); // Close drawer if using navigation in mobile
    };

    const links = navLinks.map((link) => (
        <a key={link.href} className={classes.link} onClick={closeDrawer} href={link.href}>
            {link.label}
        </a>
    ));

    return (
        <Box pb={120}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <a
                        href="/"
                        aria-label="NKG Auto Repair home"
                        className={classes.brand}
                        onClick={(event) => {
                            event.preventDefault();
                            handleNavigate('/');
                        }}
                    >
                        <span className={classes.brandTop}>NKG AUTO</span>
                        <span className={classes.brandBottom}>REPAIR</span>
                    </a>

                    <Group h="100%" gap={0} visibleFrom="sm">
                        {links}
                    </Group>
                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" aria-label="Open menu" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Explore"
                hiddenFrom="sm"
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
