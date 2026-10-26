import { Container, Title } from '@mantine/core';
import classes from '../stylesheets/FaqWithBg.module.css';
import { homeFaqs } from '../data/faqs.js';

// Native <details>/<summary> instead of Mantine's Accordion: the Accordion server-renders every
// answer with display:none and aria-hidden="true", and puts each question inside a <button>, so
// text extractors (for example Mozilla Readability) drop both. Closed <details> content stays in
// the extracted text, and the same data feeds the FAQPage JSON-LD in src/seo.js.
export function FaqWithBg() {
    return (
        <section className={classes.wrapper} aria-labelledby="faq-title">
            <Container size="sm">
                <Title order={2} ta="center" className={classes.title} id="faq-title">
                    Frequently Asked Questions
                </Title>

                {homeFaqs.map((faq) => (
                    <details key={faq.q} className={classes.item}>
                        <summary className={classes.control}>{faq.q}</summary>
                        <p className={classes.content}>{faq.a}</p>
                    </details>
                ))}
            </Container>
        </section>
    );
}
