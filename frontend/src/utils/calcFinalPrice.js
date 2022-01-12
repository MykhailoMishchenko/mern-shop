
// finalPrice = products.reduce((acc,item) => acc + item.qty *  item.price, 0),
// priceWithSale = products.filter(item => item.sale === true),
// calcNewPriceForSale = priceWithSale.map(product => (product.price * product.percent) / 100),
// splitNewPriceForSale = calcNewPriceForSale.reduce((acc, item) => acc + item),
// newFinalPrice = finalPrice - splitNewPriceForSale;

export const calcFinalPrice = (products) => {
    const totalCountWithoutSale = products.reduce((acc,item) => acc + item.qty *  item.price, 0); // сума всех товаров
    const salePrice = products.filter(item => item.sale === true); //добавляем в масив цену на которую должна быть скидка
    const calcSalePrice = salePrice.map(product => (product.price * product.percent) / 100); // считаем скидку
    const splitSalePrice = calcSalePrice.reduce((acc,item) => acc + item, 0);
    return totalCountWithoutSale - splitSalePrice;
}