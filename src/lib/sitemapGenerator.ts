import type { CoupleData } from '../core/types';

export const generateSitemap = (couples: CoupleData[]) => {
  const urls = couples.map(c => `<url><loc>https://yourdomain.com/card/${c.slug}</loc></url>`).join('');
  return `<?xml version="1.0" encoding="UTF-8"?><urlset>${urls}</urlset>`;
};
