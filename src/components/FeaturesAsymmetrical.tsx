import { IconUsersGroup, IconCoin, IconScan } from '@tabler/icons-react';
import { Container, SimpleGrid, Text } from '@mantine/core';
import classes from '../stylesheets/FeaturesAsymmetrical.module.css';
import { useStrings } from '../i18n.js';

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

const icons = [IconCoin, IconScan, IconUsersGroup];

export function FeaturesAsymmetrical() {
    const items = useStrings().features.map((item, index) => (
        <Feature {...item} icon={icons[index]} key={item.title} />
    ));

    return (
        <Container mt={30} mb={30} size="lg">
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
                {items}
            </SimpleGrid>
        </Container>
    );
}