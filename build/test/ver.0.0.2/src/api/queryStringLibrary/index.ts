export const useQueryString = (queryFullString: string) => {
  const queryString = new Map<string, string>();

  queryFullString
    .slice(1)
    .split('&')
    .map((item) => {
      const queryData = item.split('=');
      queryString.set(queryData[0], queryData[1]);
    });

  return queryString;
};
