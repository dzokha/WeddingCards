
import type { CoupleData } from '@core/types';

type ThemeLoader = {
  data: () => Promise<{ default: CoupleData }>;
  style?: () => Promise<unknown>;
};

const themeLoaders: Record<string, ThemeLoader> = {
  'hai-trang': {
    data: () => import('@themes/couple1/data'),
    style: () => import('@themes/couple1/style.scss'),
  },
  'hai-trang-2': {
    data: () => import('@themes/couple2/data'),
    style: () => import('@themes/couple2/style.scss'),
  },
  'hai-trang-3': {
    data: () => import('@themes/couple3/data'),
    style: () => import('@themes/couple3/style.scss'),
  },
};

export const getAllThemeSlugs = (): string[] => Object.keys(themeLoaders);

export const fetchCoupleBySlug = async (slug: string): Promise<CoupleData | null> => {
  const loader = themeLoaders[slug];
  if (!loader) {
    console.warn(`[Service] Không tìm thấy theme với slug: "${slug}"`);
    return null;
  }

  try {
    const [dataModule] = await Promise.all([
      loader.data(),
      loader.style?.(), // load CSS song song nếu có
    ]);

    return dataModule.default;
  } catch (error) {
    console.error(`[Service] Lỗi khi load theme "${slug}":`, error);
    throw new Error(`Failed to load data for theme: ${slug}`);
  }
};

export const fetchAllCouples = async (): Promise<CoupleData[]> => {
  const slugs = getAllThemeSlugs();
  const results = await Promise.allSettled(
    slugs.map(slug => fetchCoupleBySlug(slug))
  );

  return results
    .filter(r => r.status === 'fulfilled' && r.value)
    .map(r => (r as PromiseFulfilledResult<CoupleData>).value!);
};
