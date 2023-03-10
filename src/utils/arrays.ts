export const PerPage = 50;

/**
 *
 * @param arr
 * @param currentPage
 * @returns
 * starting page index and last page index
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sliceArray = (arr: any[], currentPage: number) => {
  const startIndex = currentPage * PerPage - PerPage;
  const endIndex = currentPage * PerPage;
  console.log("Start", startIndex, endIndex, arr);
  return arr.slice(startIndex, endIndex);
};

/**
 *
 * @param arr
 * @returns
 * number of pages
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getNumberOfPages = (arr: any[]) => {
  return Math.ceil(arr.length / PerPage);
};
