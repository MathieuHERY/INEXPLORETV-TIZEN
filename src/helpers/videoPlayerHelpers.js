export const selectVideoFile = (video) => {
  const videoResolution = "720p";
  const videoToPlay = video.fichiers.find(
    (item) => item.rendition === videoResolution
  );
  return videoToPlay;
};
