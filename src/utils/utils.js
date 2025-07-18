export const scrollToHash = () => {
    const hash = window.location.hash;
    if (hash) {
        const el = document.querySelector(hash);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
};
