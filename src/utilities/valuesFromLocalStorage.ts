export const getDataFromLocalStorage = (storageName: string) => {
  if (typeof window !== "undefined") {
    const localStorageData = localStorage.getItem(`${storageName}`);

    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);

      return parsedData;
    } else {
      return [];
    }
  }
};
