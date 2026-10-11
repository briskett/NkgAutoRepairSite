import { useLocation } from 'react-router-dom';
import { langFromPath } from './data/pages.js';
import { strings } from './data/strings.js';

export function useLang() {
    return langFromPath(useLocation().pathname);
}

export function useStrings() {
    return strings[useLang()];
}
