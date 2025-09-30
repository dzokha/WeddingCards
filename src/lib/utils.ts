export const formatDateReadable = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleString('vi-VN', { dateStyle: 'full', timeStyle: 'short' });
};
