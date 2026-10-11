import { IconPlus } from '@tabler/icons-react';
import { Accordion, Container, ThemeIcon, Title } from '@mantine/core';
import classes from '../stylesheets/FaqWithBg.module.css';
import { useStrings } from '../i18n.js';

export function FaqWithBg() {
    const t = useStrings().faq;

    return (
        <div className={classes.wrapper}>
            <Container size="sm">
                <Title order={2} ta="center" className={classes.title}>
                    {t.title}
                </Title>

                <Accordion
                    chevronPosition="right"
                    chevronSize={26}
                    variant="separated"
                    disableChevronRotation
                    styles={{ label: { color: 'var(--mantine-color-gray-0)' }, item: { border: 0 } }}
                    chevron={
                        <ThemeIcon radius="xl" className={classes.gradient} size={26}>
                            <IconPlus size={18} stroke={1.5} />
                        </ThemeIcon>
                    }
                >
                    {t.items.map((item) => (
                        <Accordion.Item key={item.value} className={classes.item} value={item.value}>
                            <Accordion.Control>{item.q}</Accordion.Control>
                            <Accordion.Panel>{item.a}</Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </div>
    );
}
