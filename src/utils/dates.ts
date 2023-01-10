export const dateToDateTimeStr = (timeStamp: number) => {
  const dateObj = new Date(timeStamp);
  const year = dateObj.getFullYear();
  const monthNum = dateObj.getMonth() + 1;
  const month = monthNum < 10 ? `0${monthNum}` : monthNum;
  const dayNum = dateObj.getDate();
  const day = dayNum < 10 ? `0${dayNum}` : dayNum;
  const hour = (dateObj.getHours() < 10 ? "0" : "") + dateObj.getHours();
  const minute = (dateObj.getMinutes() < 10 ? "0" : "") + dateObj.getMinutes();
  return `${year}-${month}-${day}T${hour}:${minute}`;
};

export const getFullYear = (mYear: number = 0) => {
  const fullYear = new Date().getFullYear() - mYear;
  return new Date().setFullYear(fullYear);
};
