import { useRef } from 'react';
import { Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core';
import emailjs from '@emailjs/browser';
import { ContactIconsList } from './ContactIcons';
import classes from '../stylesheets/Contact.module.css';

export function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_gxnfe9g',
            'template_lgopqn4',
            form.current,
            'xwWYr1U5KDdtztF8c'
        ).then(
            () => {
                alert("Message sent!");
                form.current.reset();
            },
            (error) => {
                console.error("FAILED...", error);
                alert("Something went wrong. Please try again.");
            }
        );
    };

    return (
        <Paper shadow="md" radius="lg">
            <div className={classes.wrapper}>
                <div className={classes.contacts} style={{ backgroundImage: `url('/bg.svg')` }}>
                    <Text fz="lg" fw={700} className={classes.title} c="#fff">
                        Contact information
                    </Text>
                    <ContactIconsList />
                </div>

                <form ref={form} className={classes.form} onSubmit={sendEmail}>
                    <Text fz="lg" fw={700} className={classes.title}>
                        Get in touch!
                    </Text>

                    <div className={classes.fields}>
                        <SimpleGrid cols={{ base: 1, sm: 2 }}>
                            <TextInput label="Your name" name="user_name" placeholder="Your name" required />
                            <TextInput label="Your email" name="user_email" placeholder="you@example.com" required />
                        </SimpleGrid>

                        <TextInput mt="md" label="Subject" name="subject" placeholder="Subject" required />

                        <Textarea
                            mt="md"
                            label="Your message"
                            name="message"
                            placeholder="Please include all relevant information"
                            minRows={3}
                            required
                        />

                        <Group justify="flex-end" mt="md">
                            <Button type="submit" className={classes.control}>
                                Send message
                            </Button>
                        </Group>
                    </div>
                </form>
            </div>
        </Paper>
    );
}

export default Contact;
