export function setLS<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getLS<T>(key: string, defaultData: T) {
    const dataString = localStorage.getItem(key);
    if (dataString !== null) defaultData = JSON.parse(dataString);
    return defaultData;
}

