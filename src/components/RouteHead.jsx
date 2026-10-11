import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { findPage } from '../data/pages.js';
import { applyHead, buildHead } from '../seo.js';

export function RouteHead() {
    const { pathname } = useLocation();

    useEffect(() => {
        applyHead(buildHead(findPage(pathname)));
    }, [pathname]);

    return null;
}

export default RouteHead;
