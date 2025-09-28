/**
 * Simple navigation utility for SPA (Single Page Application)
 */

export function navigateTo(url) {
    window.history.pushState({}, '', url);
    // Dispatch a custom event so the app can respond to navigation
    window.dispatchEvent(new Event('navigation'));
}

// Listen for browser navigation (back/forward)
export function onNavigate(callback) {
    window.addEventListener('navigation', callback);
    window.addEventListener('popstate', callback);
}