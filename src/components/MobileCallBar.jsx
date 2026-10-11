import { IconMapPin, IconPhone } from '@tabler/icons-react';
import classes from '../stylesheets/MobileCallBar.module.css';
import { business } from '../data/business.js';
import { useStrings } from '../i18n.js';

// Call and directions buttons pinned to the bottom of the screen on phones (hidden on wider screens).
export function MobileCallBar() {
    const t = useStrings().callBar;

    return (
        <>
            <div className={classes.spacer} aria-hidden="true" />
            <div className={classes.bar}>
                <a href={`tel:${business.phone}`} className={classes.call}>
                    <IconPhone size={18} stroke={2} />
                    {t.call}
                </a>
                <a href={business.mapsUrl} target="_blank" rel="noreferrer" className={classes.directions}>
                    <IconMapPin size={18} stroke={2} />
                    {t.directions}
                </a>
            </div>
        </>
    );
}

export default MobileCallBar;
