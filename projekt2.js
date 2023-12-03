// // Zadanie 1
// const item = {
//     name: "Candy",
//     value: 2,
// }
// const item2 = {
//     name: "Candy2",
//     value: 3,
// }
// const item3 = {
//     name: "Candy3",
//     value: 4,
// }
// const basket = [];
// basket.push(item);
// basket.push(item2);
// basket.push(item3);
// function enrichWithGrossValue(item, number){
//     let withGrossValue = {...item};
//     withGrossValue.value = {net : item.value, gross : (number+1)*item.value}
//     console.log(withGrossValue);
//     return withGrossValue;
// }
// for (let i = 0; i < basket.length; i++){
// //     enrichWithGrossValue(basket[i], 0.23);
// // }


// // Zadanie 2
// // let basket = [];
// // function addToBasket(basket, item) {
// //     basket.push(item);
// //     console.log(basket);
// //     return basket;
// // }
// // addToBasket(basket, {name: "Lolipop", value: 1.78});

// // Zadanie 3
// const recentOrder = {
//     date: "2023-11-05",
//     products: [{
//         name: "Candy",
//         value: 2,
//     }]
// }
// const basket = [{
//     name: "Lolipop",
//     value: 1.78,
// }]
// function addToBasket(basket, order){
//     basket.push(order.products);
//     console.log(basket);
//     console.log(order);
//     return basket;
// }
// addToBasket(basket, recentOrder);

// // Zadanie 4
// const item = {
//     name: "Candy",
//     value : {
//         net: 1,
//         gross: 1.23,
//     }
// }
// const item2 = {
//     name: "Candy",
//     value : {
//         net: 2,
//         gross: 2.46,
//     }
// }
// const discount = 0.13;
// const basket = [];
// basket.push(item);
// basket.push(item2);
// function finalPrice(basket, discount){
//     let price = 0;
//     for (let i=0; i < basket.length; i++){
//         price = price + basket[i].value.gross;
//     }
//     return (1 - discount)*price;
// }
// console.log(finalPrice(basket, discount));
