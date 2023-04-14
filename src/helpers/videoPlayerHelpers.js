export const selectVideoFile = (video) => {
  const videoResolution = "720p";
  const file = video.fichiers.find(
    (item) => item.rendition === videoResolution
  );
  return {file:file, titre:video.titre, vid:video.vid};
};


