export interface GalleryItem { src: string; alt?: string; }
export interface CoupleData {
  id:number;
  slug: string;
  title: string;
  subtitle: string;
  brideName: string;
  brideFullName: string;
  brideRole: string;
  brideImage: string;
  groomName: string;
  groomFullName: string;
  groomRole: string;
  groomImage: string;
  weddingDate: string;
  countdownTargetDate: string;
  date: string;
  time: string;
  location: string;
  notes?: string;
  imageUrl: string;
  gallery?: GalleryItem[];
  music?: string;
  mapUrl?: string;
  footerMessage: string;
}