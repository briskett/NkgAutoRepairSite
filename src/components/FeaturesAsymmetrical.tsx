import { IconUsersGroup, IconCoin, IconScan } from '@tabler/icons-react';
import { Container, SimpleGrid, Text } from '@mantine/core';
import classes from '../stylesheets/FeaturesAsymmetrical.module.css';

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
    icon: React.FC<any>;
    title: string;
    description: string;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
    return (
        <div className={classes.feature} {...others}>
            <div className={classes.iconWrap}>
                <Icon size={38} className={classes.icon} stroke={1.5} />
            </div>
            <Text fw={700} fz="lg" mb="xs" mt={14} className={classes.title}>
                {title}
            </Text>
            <Text fz="sm" className={classes.description}>
                {description}
            </Text>
        </div>
    );
}

const mockdata = [
    {
        icon: IconCoin,
        title: 'Affordable Pricing',
        description:
            'We offer a wide range of services at affordable prices, so you can get the care you' +
            ' need without breaking the bank.',
    },
    {
        icon: IconScan,
        title: 'Transparent Estimates',
        description:
            'Clear pricing before any work begins. No pressure, no upsells, and no surprise charges.',
    },
    {
        icon: IconUsersGroup,
        title: 'Local, Family-Owned',
        description:
            'Proudly serving San Francisco with care and integrity since 2009. We are a local, family-owned business.',
    },
];

export function FeaturesAsymmetrical() {
    const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

    return (
        <Container mt={30} mb={30} size="lg">
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
                {items}
            </SimpleGrid>
        </Container>
    );
}