

// src/themes/index.ts (Đã sửa)

// Giả sử bạn có một file định nghĩa kiểu dữ liệu chung
// import { CoupleData } from '@core/types';

// Định nghĩa cấu trúc của một theme entry
// Module<default: CoupleData> là kiểu dữ liệu mà dynamic import trả về
interface Theme {
  data: () => Promise<{ default: any /* CoupleData */ }>;
  style: () => Promise<any>;
}

// Định nghĩa cấu trúc của registry
interface ThemeRegistry {
  [key: string]: Theme;
}

// Thay vì import trực tiếp, chúng ta chỉ định nghĩa các hàm dynamic import.
// Key của object nên là slug của cặp đôi để dễ tra cứu.
export const themes: ThemeRegistry = {
  'hai-trang': { // Slug cho couple1
    data: () => import('@themes/couple1/data'),
    style: () => import('@themes/couple1/style.scss'),
  },
  'client-server': { // Slug cho couple2
    data: () => import('@themes/couple2/data'),
    style: () => import('@themes/couple2/style.scss'),
  },
  'peer-to-peer': { // Slug cho couple2
    data: () => import('@themes/couple3/data'),
    style: () => import('@themes/couple3/style.scss'),
  },
};

export default themes;
