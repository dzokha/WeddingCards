// Import ảnh của bạn tại đây
import CoDauImg from '@modules/couple1/assets/codau.jpg'
import ChuReImg from '@modules/couple1/assets/chure.jpg'
import HeaderBgImg from '@modules/couple1/assets/codau.jpg' // Nên có 1 ảnh riêng cho header

// Ví dụ về các ảnh trong thư viện
import GalleryImg1 from '@modules/couple1/assets/codau.jpg'
import GalleryImg2 from '@modules/couple1/assets/codau.jpg'
import GalleryImg3 from '@modules/couple1/assets/codau.jpg'
import GalleryImg4 from '@modules/couple1/assets/codau.jpg'
import GalleryImg5 from '@modules/couple1/assets/codau.jpg'
import GalleryImg6 from '@modules/couple1/assets/codau.jpg'


export const weddingData = {
  groom: {
    name: "Bùi Mạnh Hải",
    role: "Chú Rể",
    image: ChuReImg,
  },
  bride: {
    name: "Huỳnh Thị Kim Trang",
    role: "Cô Dâu",
    image: CoDauImg,
  },
  header: {
    image: HeaderBgImg,
    title: "Mạnh Hải & Kim Trang",
    subtitle: "Trân trọng báo tin",
  },
  event: {
    date: "12/10/2025 (Nhằm 21/8 Âm lịch)",
    time: "11:00 sáng",
    location: "Tư gia – Ấp Thắng Lợi, Xã Vĩnh Thạnh, TP. Cần Thơ",
  },
  countdownTargetDate: "2025-10-12T11:00:00",
  galleryImages: [
    { src: GalleryImg1 },
    { src: GalleryImg2 },
    { src: GalleryImg3 },
    { src: GalleryImg4 },
    { src: GalleryImg5 },
    { src: GalleryImg6 },
  ],
  musicFile: "tenderness.mp3",
  footerMessage: "Rất hân hạnh được đón tiếp quý khách!",
};