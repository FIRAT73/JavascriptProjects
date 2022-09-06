/*

let dizi = [2,3,4];

-->Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının 
sonucunu (24) veren bir fonksiyon yazınız.

*/

let dizi = [2,3,4];

let mapArray = (x,y) => (x*y);
let multiplyArray = dizi.reduce(mapArray);

console.log(multiplyArray);
