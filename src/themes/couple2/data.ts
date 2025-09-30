import type { CoupleData } from '@core/types';
import { formatDateReadable } from '@lib/utils';

// Import ảnh của bạn tại đây
import BrideIMG from '@themes/couple1/assets/codau.jpg'
import GroomIMG from '@themes/couple1/assets/chure.jpg'
import CoupleIMG from '@themes/couple1/assets/headbg.jpg'

// Các ảnh trong thư viện
import GalleryImg1 from '@themes/couple1/assets/001.jpg'
import GalleryImg2 from '@themes/couple1/assets/002.jpg'
import GalleryImg3 from '@themes/couple1/assets/003.jpg'
import GalleryImg4 from '@themes/couple1/assets/004.jpg'
import GalleryImg5 from '@themes/couple1/assets/005.jpg'
import GalleryImg6 from '@themes/couple1/assets/006.jpg'

const dateISO = '2025-10-12T11:00:00'

const couple1: CoupleData = {
  id: 2,
  slug: 'hai-trang-2',
  title: 'Mạnh Hải & Kim Trang',
  subtitle: 'Trân trọng báo tin',
  brideName: 'Kim Trang',
  brideFullName: 'Huỳnh Thị Kim Trang',
  brideRole: 'Cô Dâu',
  brideImage: BrideIMG,
  groomName: 'Mạnh Hải',
  groomFullName: 'Bùi Mạnh Hải',
  groomRole: 'Chú Rể',
  groomImage: GroomIMG,
  weddingDate: formatDateReadable(dateISO),
  countdownTargetDate: dateISO,
  date: '12/10/2025 (Nhằm 21/8 Âm lịch)',
  time: '11:00 sáng',
  location: 'Tư gia – Ấp Thắng Lợi, Xã Vĩnh Thạnh, TP. Cần Thơ',
  notes: 'Vui lòng mặc trang phục lịch sự.',
  imageUrl: CoupleIMG,
  gallery: [
    { src: GalleryImg1 },
    { src: GalleryImg2 },
    { src: GalleryImg3 },
    { src: GalleryImg4 },
    { src: GalleryImg5 },
    { src: GalleryImg6 },
  ],
  music: '/tenderness.mp3',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.011403516329!2d105.41723097503355!3d10.179727989934971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDEwJzQ3LjAiTiAxMDXCsDI1JzExLjMiRQ!5e0!3m2!1sen!2s!4v1758701390888!5m2!1sen!2s',
  footerMessage: 'Rất hân hạnh được đón tiếp quý khách!',
};

export default couple1;
