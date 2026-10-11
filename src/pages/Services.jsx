import { Button, Card, Container, Group, SimpleGrid, Text, Title } from '@mantine/core';
import { IconPhone } from '@tabler/icons-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import classes from '../stylesheets/ServicesPage.module.css';
import liftSpace1 from '../assets/rental/lift-space-1.jpg';
import { services, servicePath } from '../data/services.js';

export default function Services() {
    return (
        <main className={classes.page}>
            <Container size="lg">
                <Breadcrumbs />
                <section className={classes.hero}>
                    <Text className={classes.kicker}>NKG Auto Repair - Bayview, San Francisco</Text>
                    <Title className={classes.title}>Auto Repair Services in Bayview</Title>
                    <Text className={classes.subtitle}>
                        Trusted local auto shop offering transparent estimates, honest diagnostics, and quality repairs for drivers across Bayview-Hunters Point and greater San Francisco.
                    </Text>
                    <Group mt="lg">
                        <Button
                            component="a"
                            href="tel:+14152397450"
                            color="orange"
                            leftSection={<IconPhone size={16} />}
                        >
                            Call Now
                        </Button>
                        <Button component="a" href="/#contact" variant="light" color="orange">
                            Request Estimate
                        </Button>
                    </Group>
                </section>

                <section>
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                        {services.map((service) => (
                            <Card key={service.slug} component="a" href={servicePath(service)} className={classes.linkCard}>
                                <Group justify="space-between" mb={6}>
                                    <Text fw={700} className={classes.cardTitle}>{service.cardTitle}</Text>
                                    <Text className={classes.tier}>{service.tier}</Text>
                                </Group>
                                <Text className={classes.cardBody}>{service.summary}</Text>
                                <Text className={classes.learnMore} mt="sm">Learn more →</Text>
                            </Card>
                        ))}
                    </SimpleGrid>
                </section>

                <section className={classes.rentalSection}>
                    <Card className={classes.rentalCard}>
                        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" verticalSpacing="lg">
                            <img src={liftSpace1} alt="Dedicated lift available for rent at NKG Auto Repair" className={classes.rentalImage} />
                            <div>
                                <Text className={classes.kicker}>Shop Space</Text>
                                <Title order={2} className={classes.rentalTitle}>Lift Space for Rent</Title>
                                <Text className={classes.cardBody} mb="md">
                                    We have a dedicated lift open at our Bayview-Hunters Point shop. Great fit for an independent
                                    or mobile mechanic who wants reliable indoor shop space without signing a commercial lease.
                                </Text>
                                <Text className={classes.rentalPrice} mb="md">$150/day or $2,000/month</Text>
                                <Button component="a" href="/lift-rental/" color="orange">
                                    See the lift space
                                </Button>
                            </div>
                        </SimpleGrid>
                    </Card>
                </section>
            </Container>
        </main>
    );
}
