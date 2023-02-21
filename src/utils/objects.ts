/**
 *
 * @param message
 * @param isLink
 * @param link
 * @returns
 */
export const tableCellObject = (message: string, link?: string) => {
  return {
    message: message,
    isLink: link ? true : false,
    link: link ? link : ""
  };
};
