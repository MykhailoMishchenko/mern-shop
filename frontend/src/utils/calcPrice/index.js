export const getLastPrice = price => `₴ ${Math.floor(price)}`;
export const calcSalePrice = (oldPrice, percent) => {
  const discount = (oldPrice * percent) / 100;
  return oldPrice - discount
}
export const calcFinalPrice = (products) => {
  const totalCountWithoutSale = products.reduce((acc,item) => acc + item.qty *  item.price, 0); // сума всех товаров
  const salePrice = products.filter(item => item.sale === true); //добавляем в масив цену на которую должна быть скидка
  const calcSalePrice = salePrice.map(product => (product.price * product.percent) / 100); // считаем скидку
  const splitSalePrice = calcSalePrice.reduce((acc,item) => acc + item, 0);
  return totalCountWithoutSale - splitSalePrice;
}