export const getId = (url: string) => {
  const array = url.split('/');
  return array[array.length - 2];
};
