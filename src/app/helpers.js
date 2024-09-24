export const getEmptyObjFromKeysArray = (keys) => {
    const obj = {};

    for (const key of keys) {
        obj[key] = '';
    }
    return obj;
};

export const getObjFromKeysArray = (keys, query) => {
    const obj = {};

    for (const key of keys) {
        obj[key] = query[key] ?? '';
    }
    return obj;
};
