import { useRef } from 'react';
import { Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core';
import emailjs from '@emailjs/browser';
import { ContactIconsList } from './ContactIcons';
import classes from '../stylesheets/Contact.module.css';
import { useLang, useStrings } from '../i18n.js';

export function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const lang = useLang();
    const t = useStrings().contact;

    const sendEmail = (e) => {
        e.preventDefault();
        const data = new FormData(form.current);
        const field = (name) => String(data.get(name) ?? '').trim();

        // Phone, vehicle, and language go into the message text so they show up with the
        // existing EmailJS template, which only uses user_name, user_email, subject, and message.
        const details = [
            field('user_phone') && `Phone: ${field('user_phone')}`,
            field('vehicle') && `Vehicle: ${field('vehicle')}`,
            lang === 'es' && 'Language: Spanish (sent from the Spanish page)',
        ].filter(Boolean);

        emailjs.send(
            'service_gxnfe9g',
            'template_lgopqn4',
            {
                user_name: field('user_name'),
                user_email: field('user_email'),
                subject: lang === 'es' ? `[Español] ${field('subject')}` : field('subject'),
                message: details.length ? `${field('message')}\n\n${details.join('\n')}` : field('message'),
                user_phone: field('user_phone'),
                vehicle: field('vehicle'),
            },
            'xwWYr1U5KDdtztF8c'
        ).then(
            () => {
                alert(t.sent);
                form.current.reset();
            },
            (error) => {
                console.error("FAILED...", error);
                alert(t.failed);
            }
        );
    };

    return (
        <Paper shadow="md" radius="lg">
            <div className={classes.wrapper}>
                <div className={classes.contacts} style={{ backgroundImage: `url('${import.meta.env.BASE_URL}bg.svg')` }}
                >
                    <Text fz="lg" fw={700} className={classes.title} c="#fff">
                        {t.infoTitle}
                    </Text>
                    <ContactIconsList />
                </div>

                <form ref={form} className={classes.form} onSubmit={sendEmail}>
                    <Text fz="lg" fw={700} className={classes.title}>
                        {t.formTitle}
                    </Text>

                    <div className={classes.fields}>
                        <SimpleGrid cols={{ base: 1, sm: 2 }}>
                            <TextInput label={t.name} name="user_name" placeholder={t.name} autoComplete="name" required />
                            <TextInput label={t.email} name="user_email" type="email" placeholder="you@example.com" autoComplete="email" required />
                        </SimpleGrid>

                        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="md">
                            <TextInput label={t.phone} name="user_phone" type="tel" placeholder={t.phonePlaceholder} autoComplete="tel" />
                            <TextInput label={t.vehicle} name="vehicle" placeholder={t.vehiclePlaceholder} />
                        </SimpleGrid>

                        <TextInput mt="md" label={t.subject} name="subject" placeholder={t.subject} required />

                        <Textarea
                            mt="md"
                            label={t.message}
                            name="message"
                            placeholder={t.messagePlaceholder}
                            minRows={3}
                            required
                        />

                        <Group justify="flex-end" mt="md">
                            <Button type="submit" className={classes.control}>
                                {t.send}
                            </Button>
                        </Group>
                    </div>
                </form>
            </div>
        </Paper>
    );
}

export default Contact;
