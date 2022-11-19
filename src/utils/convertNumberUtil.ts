export const convertNumber = (num: number | undefined) => {
    return String(num).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}