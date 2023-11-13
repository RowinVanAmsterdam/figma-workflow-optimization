export const transformToPixels = (value: string) => {
    if (value.endsWith("px")) {
        return value;
    }
    return value + "px";
}