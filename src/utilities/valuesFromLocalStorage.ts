export const getDataFromLocalStorage = (storageName: string) => {
  if (typeof window !== "undefined") {
    const localStorageData = localStorage.getItem(`${storageName}`);

    if (localStorageData) {
      const storedKeyValueArrays = JSON.parse(localStorageData);

      return storedKeyValueArrays;
    } else {
      return [];
    }
  }
};
