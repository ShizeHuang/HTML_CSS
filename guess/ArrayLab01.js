var Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
var Prices = [280, 320, 250, 210];
var PricesWithTax = Prices.map(p => p * 1.05);

// console.log(PricesWithTax);

// var sum = 0;
// PricesWithTax.forEach(function (item) {
//     sum += item;
// })
// console.log(sum);
/* 上面那段可以寫成下面這段 */
// var total= PricesWithTax.reduce(function(accumulator, currentValue) {return accumulator + currentValue;})
/* 上面可以簡化成下面 */
var total = PricesWithTax.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(total);