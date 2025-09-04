export const getMedia = () => {
  const media = localStorage.getItem('media');
  return media ? JSON.parse(media) : [];
};

export const setMedia = (media: any[]) => {
  localStorage.setItem('media', JSON.stringify(media));
};