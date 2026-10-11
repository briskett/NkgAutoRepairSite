import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';
import { Box, Stack, Text } from '@mantine/core';
import classes from '../stylesheets/ContactIcons.module.css';
import { useStrings } from '../i18n.js';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon: typeof IconSun;
    title: React.ReactNode;
    description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
    return (
        <div className={classes.wrapper} {...others}>
            <Box mr="md">
                <Icon size={24} />
            </Box>

            <div>
                <Text size="xs" className={classes.title}>
                    {title}
                </Text>
                <Text className={classes.description}>{description}</Text>
            </div>
        </div>
    );
}

export function ContactIconsList() {
    const t = useStrings().contactIcons;
    const contactItems = [
        { title: t.email, description: 'nkgautorepair@gmail.com', icon: IconAt },
        { title: t.phone, description: '+1 (415) 239 7450', icon: IconPhone },
        { title: t.address, description: '1400 Carroll Avenue, San Francisco, CA', icon: IconMapPin },
        { title: t.hours, description: t.hoursValue, icon: IconSun },
    ];
    const items = contactItems.map((item, index) => <ContactIcon key={index} {...item} />);
    return <Stack>{items}</Stack>;
}