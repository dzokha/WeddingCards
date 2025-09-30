import { useEffect } from 'react';

export const useAnalytics = (slug?: string) => {
  useEffect(() => {
    // Minimal stub: send page view
    if (!slug) return;
    // e.g., window.gtag?.('event', 'page_view', { page: slug });
    console.log('analytics: view', slug);
  }, [slug]);
};

export default useAnalytics;
