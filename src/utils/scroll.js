import { isBrowser } from './is-browser';

const getDetailsElement = () => isBrowser() && document.querySelector('#release-details');

export const scrollToTop = () => isBrowser() && window.scrollTo({ top: 0, behavior: 'smooth' });
export const scrollToDetails = () =>
  isBrowser() && getDetailsElement().scrollIntoView({ behavior: 'smooth', block: 'center' });
