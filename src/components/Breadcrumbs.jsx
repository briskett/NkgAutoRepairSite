import { useLocation } from 'react-router-dom';
import { findPage } from '../data/pages.js';
import classes from '../stylesheets/ServicesPage.module.css';

export function Breadcrumbs() {
    const { pathname } = useLocation();
    const trail = [{ name: 'Home', path: '/' }, ...(findPage(pathname).breadcrumbs ?? [])];

    return (
        <nav aria-label="Breadcrumb" className={classes.breadcrumb}>
            {trail.map((crumb, index) => (
                <span key={crumb.path}>
                    {index > 0 ? ' / ' : null}
                    {index === trail.length - 1 ? (
                        <span aria-current="page">{crumb.name}</span>
                    ) : (
                        <a href={crumb.path}>{crumb.name}</a>
                    )}
                </span>
            ))}
        </nav>
    );
}

export default Breadcrumbs;
