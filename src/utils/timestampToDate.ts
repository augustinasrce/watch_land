const timestampToDate = (timestamp: number | string) => {
  const dateObject = new Date(timestamp);
  return dateObject.toLocaleDateString("en-us", {
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric"
  });
};

export { timestampToDate };
