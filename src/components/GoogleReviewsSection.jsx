import { useEffect, useMemo, useState } from 'react';
import { Button, Card, Container, Group, Loader, SimpleGrid, Text, Title } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import classes from '../stylesheets/GoogleReviewsSection.module.css';

function buildStars(rating = 0) {
    const fullStars = Math.round(rating);
    return '★'.repeat(fullStars) + '☆'.repeat(Math.max(0, 5 - fullStars));
}

export function GoogleReviewsSection() {
    const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
    const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [details, setDetails] = useState(null);

    useEffect(() => {
        if (!apiKey || !placeId) {
            setError('Google reviews are not configured yet.');
            setLoading(false);
            return;
        }

        const loadReviews = async () => {
            try {
                setLoading(true);
                setError('');

                const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Goog-Api-Key': apiKey,
                        'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Google Places request failed: ${response.status}`);
                }

                const payload = await response.json();
                setDetails(payload);
            } catch (err) {
                setError('Unable to load Google reviews right now.');
                // Keep logging for quick debugging in dev.
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadReviews();
    }, [apiKey, placeId]);

    const topReviews = useMemo(() => {
        const reviews = details?.reviews ?? [];
        return [...reviews]
            .filter((review) => (review.rating ?? 0) >= 4)
            .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
            .slice(0, 3);
    }, [details]);

    return (
        <section className={classes.section} id="reviews">
            <Container size="lg">
                <Group justify="space-between" align="end" mb="lg">
                    <div>
                        <Title order={2} className={classes.title}>Customer Reviews</Title>
                        <Text className={classes.subtitle}>Pulled live from Google</Text>
                    </div>
                    {details?.rating ? (
                        <div className={classes.summary}>
                            <Group gap={6} align="center">
                                <IconStarFilled size={20} className={classes.starIcon} />
                                <Text fw={700} size="xl">{details.rating.toFixed(1)}</Text>
                            </Group>
                            <Text size="sm" c="dimmed">
                                {details.userRatingCount ?? 0} Google reviews
                            </Text>
                        </div>
                    ) : null}
                </Group>

                {loading ? (
                    <Group justify="center" py="xl"><Loader color="orange" /></Group>
                ) : null}

                {!loading && error ? (
                    <Card className={classes.fallbackCard}>
                        <Text>{error}</Text>
                        <Text size="sm" c="dimmed" mt={6}>
                            Add `VITE_GOOGLE_PLACES_API_KEY` and `VITE_GOOGLE_PLACE_ID` to your `.env` file.
                        </Text>
                    </Card>
                ) : null}

                {!loading && !error ? (
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                        {topReviews.map((review, index) => (
                            <Card key={`${review.publishTime || review.authorAttribution?.displayName || 'review'}-${index}`} className={classes.reviewCard}>
                                <Text className={classes.reviewStars}>
                                    {buildStars(review.rating)}
                                </Text>
                                <Text className={classes.reviewText}>
                                    {(review.originalText?.text || review.text?.text || '').slice(0, 260)}
                                    {(review.originalText?.text || review.text?.text || '').length > 260 ? '...' : ''}
                                </Text>
                                <Text className={classes.reviewer}>
                                    - {review.authorAttribution?.displayName || 'Google User'}
                                </Text>
                                <Text size="xs" c="dimmed">
                                    {review.relativePublishTimeDescription || ''}
                                </Text>
                            </Card>
                        ))}
                    </SimpleGrid>
                ) : null}

                <Group justify="center" mt="xl">
                    <Button
                        component="a"
                        target="_blank"
                        rel="noreferrer"
                        href="https://maps.app.goo.gl/zsSmn8gs6WHYn4Gz9"
                        color="orange"
                        variant="light"
                    >
                        Read more on Google
                    </Button>
                </Group>
            </Container>
        </section>
    );
}

export default GoogleReviewsSection;
