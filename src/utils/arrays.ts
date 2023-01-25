export const PerPage = 50;

export const sliceArray = (arr: any[], currentPage: number) => {
  const startIndex = currentPage * PerPage - PerPage;
  const endIndex = currentPage * PerPage;
  console.log("Start", startIndex, endIndex, arr);
  return arr.slice(startIndex, endIndex);
};

export const getNumberOfPages = (arr: any[]) => {
  return Math.ceil(arr.length / PerPage);
};
