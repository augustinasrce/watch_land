export * from './aws';
export * from './azure';
export * from './google';

// export const fetchGroups = async (currentPage, pageSize, type) => {
//   let url = `http://localhost:3004/groups?_limit=${pageSize}&_page=${currentPage}`;
//   if (type) {
//     url = `${url}&type=${type}`;
//   }
//   const response = await fetch(url);
//   const json = await response.json();
//   return json;
// };

// export const fetchStreams = async (currentPage, pageSize, type) => {
//   let url = `http://localhost:3004/streams?_limit=${pageSize}&_page=${currentPage}`;
//   if (type) {
//     url = `${url}&type=${type}`;
//   }
//   const response = await fetch(url);
//   const json = await response.json();
//   return json;
// };
