export const slugifyString = (str: string) => {
  str.toLowerCase().trim().replace(/$/g, "-");
  return "";
};
