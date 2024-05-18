export const generateCharacterImgUrl = (id: string): string => {
  return `${process.env.STAR_WARS_IMAGES_BASE_URL}/characters/${id}.jpg`;
};
