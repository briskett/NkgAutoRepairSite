import { Button, Card, Container, Group, List, SimpleGrid, Text, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconMail, IconPhone } from '@tabler/icons-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import classes from '../stylesheets/ServicesPage.module.css';
import { business } from '../data/business.js';
import { useStrings } from '../i18n.js';
import liftSpace1 from '../assets/rental/lift-space-1.jpg';
import liftSpace2 from '../assets/rental/lift-space-2.jpg';

export default function LiftRental() {
    const t = useStrings().liftRental;

    return (
        <main className={classes.page}>
            <Container size="lg">
                <Breadcrumbs />
                <section className={classes.hero}>
                    <Text className={classes.kicker}>{t.kicker}</Text>
                    <Title className={classes.title}>{t.title}</Title>
                    <Text className={classes.subtitle}>
                        {t.subtitle}
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
                                    <img src={liftSpace1} alt={t.liftAlt} className={classes.rentalImage} />
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <img src={liftSpace2} alt={t.floorAlt} className={classes.rentalImage} />
                                </Carousel.Slide>
                            </Carousel>

                            <div>
                                <Title order={2} className={classes.rentalTitle}>{t.includedTitle}</Title>
                                <List className={classes.rentalList} mb="lg">
                                    {t.included.map((item) => (
                                        <List.Item key={item}>{item}</List.Item>
                                    ))}
                                </List>
                                <Text className={classes.rentalPrice} mb="md">{t.price}</Text>
                                <Text className={classes.cardBody} mb="md">
                                    {t.contactText(`${business.streetAddress}, ${business.city}`)}
                                </Text>
                                <Group>
                                    <Button
                                        component="a"
                                        href={`tel:${business.phone}`}
                                        color="orange"
                                        leftSection={<IconPhone size={16} />}
                                    >
                                        {t.call}
                                    </Button>
                                    <Button
                                        component="a"
                                        href={`mailto:${business.email}?subject=${encodeURIComponent(t.emailSubject)}`}
                                        variant="light"
                                        color="orange"
                                        leftSection={<IconMail size={16} />}
                                    >
                                        {t.email}
                                    </Button>
                                </Group>
                            </div>
                        </SimpleGrid>
                    </Card>
                </section>
            </Container>
        </main>
    );
}
