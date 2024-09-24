export const pickFieldsFromObjByKeys = (keys, query) => {
    const obj = {};

    for (const key of keys) {
        obj[key] = query[key] ?? '';
    }
    return obj;
};
