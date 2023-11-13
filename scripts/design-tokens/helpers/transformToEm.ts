export const transformToEm = (value: any) => {
    if (value.endsWith("%")) {
        const percentValue = value.slice(0, -1);
        return `${percentValue / 100}em`;
    }
    return value;
}