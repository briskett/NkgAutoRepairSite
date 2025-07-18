import { IconPlus } from '@tabler/icons-react';
import { Accordion, Container, ThemeIcon, Title } from '@mantine/core';
import classes from '../stylesheets/FaqWithBg.module.css';

const placeholder =
    'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export function FaqWithBg() {
    return (
        <div className={classes.wrapper}>
            <Container size="sm">
                <Title ta="center" className={classes.title}>
                    Frequently Asked Questions
                </Title>

                <Accordion
                    chevronPosition="right"
                    defaultValue="reset-password"
                    chevronSize={26}
                    variant="separated"
                    disableChevronRotation
                    styles={{ label: { color: 'var(--mantine-color-black)' }, item: { border: 0 } }}
                    chevron={
                        <ThemeIcon radius="xl" className={classes.gradient} size={26}>
                            <IconPlus size={18} stroke={1.5} />
                        </ThemeIcon>
                    }
                >
                    <Accordion.Item className={classes.item} value="services-offered">
                        <Accordion.Control>What services do you offer?</Accordion.Control>
                        <Accordion.Panel>We handle everything from oil changes and brake repairs to engine diagnostics,
                            transmission work, suspension, and more. If your car needs it,
                            chances are we do it.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="appointment">
                        <Accordion.Control>Do I need an appointment or can I just show up?</Accordion.Control>
                        <Accordion.Panel>We operate mostly on a first-come, first-serve basis.
                            You're welcome to walk in any time during business hours.
                            We do accept appointments for convenience, but they're not required.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="sameday-repair">
                        <Accordion.Control> Can you do same-day repairs?</Accordion.Control>
                        <Accordion.Panel>Yes, for many common services like oil changes, brake pad replacements,
                            battery swaps and inspections, we can usually get you in and out the same day.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="cost">
                        <Accordion.Control>How much will it cost?</Accordion.Control>
                        <Accordion.Panel>Every job is different. We offer estimates and always explain your options before
                            starting any work. No surprises, no pressure.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="vehicles-offered">
                        <Accordion.Control>What types of vehicles do you work on?</Accordion.Control>
                        <Accordion.Panel>We service most gas-powered cars, SUVS, small vans, hybrids
                            and light-duty pickup trucks. We do not currently work on fully electric vehicles
                            or commercial heavy duty trucks </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="payment-methods">
                        <Accordion.Control>What forms of payment do you accept?</Accordion.Control>
                        <Accordion.Panel> We accept cash, credit/debit cards, and mobile payments like
                            Apple Pay and Google pay</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="store-hours">
                        <Accordion.Control>What are your hours of operation?</Accordion.Control>
                        <Accordion.Panel>
                            We’re open Monday through Saturday, 8 AM to 5 PM.
                            We are closed on Sundays.
                        </Accordion.Panel>
                    </Accordion.Item>


                </Accordion>
            </Container>
        </div>
    );
}