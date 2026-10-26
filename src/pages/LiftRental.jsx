import { Button, Card, Container, Group, List, SimpleGrid, Text, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconMail, IconPhone } from '@tabler/icons-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import classes from '../stylesheets/ServicesPage.module.css';
import { business } from '../data/business.js';
import { liftRentalFaqs } from '../data/faqs.js';
import liftSpace1 from '../assets/rental/lift-space-1.jpg';
import liftSpace2 from '../assets/rental/lift-space-2.jpg';

export default function LiftRental() {
    return (
        <main className={classes.page}>
            <Container size="lg">
                <Breadcrumbs />
                <section className={classes.hero}>
                    <Text className={classes.kicker}>Shop Space - Bayview-Hunters Point, San Francisco</Text>
                    <Title className={classes.title}>Mechanic Lift Rental in San Francisco</Title>
                    <Text className={classes.subtitle}>
                        Need a lift without signing a commercial lease? We have a dedicated lift open at our
                        Bayview-Hunters Point shop, a good fit for an independent or mobile mechanic who wants
                        reliable indoor space to work.
                    </Text>
                </section>

                <section>
                    <Card className={classes.rentalCard}>
                        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" verticalSpacing="lg">
                            <Carousel
                                withIndicators
                                withControls
                                loop
                                className={classes.rentalCarousel}
                                classNames={{ indicator: classes.carouselIndicator }}
                            >
                                <Carousel.Slide>
                                    <img src={liftSpace1} alt="Dedicated lift available for rent at NKG Auto Repair" width={1000} height={750} className={classes.rentalImage} />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={liftSpace2} alt="Shop floor at NKG Auto Repair, Bayview-Hunters Point" width={1000} height={750} loading="lazy" className={classes.rentalImage} />
                                </Carousel.Slide>
                            </Carousel>

                            <div>
                                <Title order={2} className={classes.rentalTitle}>What you get</Title>
                                <List className={classes.rentalList} mb="lg">
                                    <List.Item>Dedicated lift, full-time access</List.Item>
                                    <List.Item>Power, air compressor, and lighting included</List.Item>
                                    <List.Item>Monday-Saturday, 8am-5pm</List.Item>
                                    <List.Item>Bring your own tools</List.Item>
                                    <List.Item>No commercial lease</List.Item>
                                </List>
                                <Text className={classes.rentalPrice} mb="md">$150/day or $2,000/month</Text>
                                <Text className={classes.cardBody} mb="md">
                                    Call or text to ask about availability or to come see the space at{' '}
                                    {business.streetAddress}, {business.city}.
                                </Text>
                                <Group>
                                    <Button
                                        component="a"
                                        href={`tel:${business.phone}`}
                                        color="orange"
                                        leftSection={<IconPhone size={16} />}
                                    >
                                        Call or Text
                                    </Button>
                                    <Button
                                        component="a"
                                        href={`mailto:${business.email}?subject=Lift%20rental`}
                                        variant="light"
                                        color="orange"
                                        leftSection={<IconMail size={16} />}
                                    >
                                        Email
                                    </Button>
                                </Group>
                            </div>
                        </SimpleGrid>
                    </Card>
                </section>

                <section className={classes.section}>
                    <Title order={2} className={classes.sectionTitle}>Common questions</Title>
                    <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
                        {liftRentalFaqs.map((faq) => (
                            <div key={faq.q}>
                                <Title order={3} className={classes.faqQuestion}>{faq.q}</Title>
                                <Text className={classes.cardBody}>{faq.a}</Text>
                            </div>
                        ))}
                    </SimpleGrid>
                </section>
            </Container>
        </main>
    );
}
