import { useRef, useState } from 'react';
import { Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core';
import emailjs from '@emailjs/browser';
import { ContactIconsList } from './ContactIcons';
import classes from '../stylesheets/Contact.module.css';
import { business } from '../data/business.js';

const SENT_MESSAGE = 'Thanks! Your message was sent to NKG Auto Repair. We’ll reply by email.';
const FAILED_MESSAGE = `Something went wrong and your message was not sent. Please try again or call ${business.phoneDisplay}.`;

export function Contact() {
    const form = useRef();
    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const result = emailjs
            .sendForm('service_gxnfe9g', 'template_lgopqn4', form.current, 'xwWYr1U5KDdtztF8c')
            .then(
                () => {
                    setStatus('sent');
                    form.current.reset();
                    return SENT_MESSAGE;
                },
                (error) => {
                    console.error('FAILED...', error);
                    setStatus('failed');
                    return FAILED_MESSAGE;
                },
            );

        // WebMCP (Chrome origin trial): when an AI agent submitted the form, report the outcome back
        // to it. Both properties are undefined in browsers without WebMCP, so this is a no-op there.
        const native = e.nativeEvent;
        if (native.agentInvoked && typeof native.respondWith === 'function') {
            native.respondWith(result);
        }
    };

    return (
        <Paper shadow="md" radius="lg">
            <div className={classes.wrapper}>
                <div className={classes.contacts} style={{ backgroundImage: `url('${import.meta.env.BASE_URL}bg.svg')` }}
                >
                    <Text fz="lg" fw={700} className={classes.title} c="#fff">
                        Contact information
                    </Text>
                    <ContactIconsList />
                </div>

                <form
                    ref={form}
                    className={classes.form}
                    onSubmit={sendEmail}
                    toolname="send_message_to_nkg_auto_repair"
                    tooldescription="Send NKG Auto Repair, an auto repair shop in San Francisco, a message, such as a request for a repair estimate or a question. The shop replies by email. This does not book an appointment."
                >
                    <Text fz="lg" fw={700} className={classes.title}>
                        Get in touch!
                    </Text>

                    <div className={classes.fields}>
                        <SimpleGrid cols={{ base: 1, sm: 2 }}>
                            <TextInput
                                label="Your name"
                                name="user_name"
                                autoComplete="name"
                                placeholder="Your name"
                                required
                                toolparamdescription="Full name of the person sending the message"
                            />
                            <TextInput
                                type="email"
                                label="Your email"
                                name="user_email"
                                autoComplete="email"
                                placeholder="you@example.com"
                                required
                                toolparamdescription="Email address where the shop should send its reply"
                            />
                        </SimpleGrid>

                        <TextInput
                            mt="md"
                            label="Subject"
                            name="subject"
                            placeholder="Subject"
                            required
                            toolparamdescription="Short summary, such as the service needed"
                        />

                        <Textarea
                            mt="md"
                            label="Your message"
                            name="message"
                            placeholder="Please include your vehicle's year, make, and model, and what it needs"
                            minRows={3}
                            required
                            toolparamdescription="Vehicle year, make, and model, the problem or service needed, and any questions"
                        />

                        <Group justify="flex-end" mt="md">
                            <Button type="submit" className={classes.control} loading={status === 'sending'}>
                                Send message
                            </Button>
                        </Group>

                        <Text role="status" aria-live="polite" mt="sm">
                            {status === 'sent' ? SENT_MESSAGE : status === 'failed' ? FAILED_MESSAGE : null}
                        </Text>
                    </div>
                </form>
            </div>
        </Paper>
    );
}

export default Contact;
