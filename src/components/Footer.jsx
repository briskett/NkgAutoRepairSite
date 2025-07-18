import { IconBrandGoogleFilled, IconBrandFacebookFilled, IconBrandGithubFilled } from '@tabler/icons-react';
import { ActionIcon, Container, Group } from '@mantine/core';
import classes from '../stylesheets/Footer.module.css';

export function Footer() {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <img src={"/header/logo.png"} alt={"Logo"} className={classes.logo}/>
                <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle" onClick={() => window.open("https://www.facebook.com/profile.php?id=61562081127971", "_blank")}>
                        <IconBrandFacebookFilled size={18} stroke={1.5} />
                    </ActionIcon>

                    <ActionIcon size="lg" color="gray" variant="subtle" onClick={() => window.open("https://maps.app.goo.gl/zsSmn8gs6WHYn4Gz9", "_blank")}>
                        <IconBrandGoogleFilled size={18} stroke={1.5} />
                    </ActionIcon>

                    <ActionIcon size="lg" color="gray" variant="subtle" onClick={() => window.open("https://github.com/briskett", "_blank")}>
                        <IconBrandGithubFilled size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}

export default Footer;