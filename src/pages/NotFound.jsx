import { Button, Container, Group, Text, Title } from '@mantine/core';
import { IconPhone } from '@tabler/icons-react';
import classes from '../stylesheets/ServicesPage.module.css';
import { business } from '../data/business.js';
import { services, servicePath } from '../data/services.js';

export default function NotFound() {
    return (
        <main className={classes.page}>
            <Container size="lg">
                <section className={classes.hero}>
                    <Text className={classes.kicker}>404</Text>
                    <Title className={classes.title}>Page not found</Title>
                    <Text className={classes.subtitle}>
                        We couldn’t find that page. Here’s where you can go instead:
                    </Text>
                    <Group mt="lg">
                        <Button component="a" href="/" color="orange">Home</Button>
                        <Button component="a" href="/services" variant="light" color="orange">All Services</Button>
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
                        {services.map((service) => (
                            <a key={service.slug} href={servicePath(service)} className={classes.inlineLink}>
                                {service.name}
                            </a>
                        ))}
                    </Group>
                </section>
            </Container>
        </main>
    );
}
