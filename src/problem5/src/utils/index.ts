export const filterNoneValueObject = (obj: any) => {
    Object.keys(obj).forEach((key) => {
        if (obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    });
    console.log(obj);
    return obj;
}