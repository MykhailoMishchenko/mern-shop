export const calcSalePrice = (oldPrice, percent) => {
    const discont = (oldPrice * percent) / 100;
    return oldPrice - discont
}