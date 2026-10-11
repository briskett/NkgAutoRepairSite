import { Button, Container, Group, Text, Title } from '@mantine/core';
import { IconPhone } from '@tabler/icons-react';
import classes from '../stylesheets/ServicesPage.module.css';
import { business } from '../data/business.js';
import { homePath } from '../data/pages.js';
import { localizedServices } from '../data/services.js';
import { useLang, useStrings } from '../i18n.js';

export default function NotFound() {
    const lang = useLang();
    const t = useStrings().notFound;

    return (
        <main className={classes.page}>
            <Container size="lg">
                <section className={classes.hero}>
                    <Text className={classes.kicker}>404</Text>
                    <Title className={classes.title}>{t.title}</Title>
                    <Text className={classes.subtitle}>
                        {t.body}
                    </Text>
                    <Group mt="lg">
                        <Button component="a" href={homePath(lang)} color="orange">{t.home}</Button>
                        <Button component="a" href={lang === 'es' ? '/es/servicios/' : '/services/'} variant="light" color="orange">
                            {t.allServices}
                        </Button>
                        <Button
                            component="a"
                            href={`tel:${business.phone}`}
                            variant="light"
                            color="orange"
                            leftSection={<IconPhone size={16} />}
                        >
                            {business.phoneDisplay}
                        </Button>
                    </Group>
                    <Group mt="xl" gap="lg">
                        {localizedServices(lang).map((service) => (
                            <a key={service.path} href={service.path} className={classes.inlineLink}>
                                {service.name}
                            </a>
                        ))}
                    </Group>
                </section>
            </Container>
        </main>
    );
}
