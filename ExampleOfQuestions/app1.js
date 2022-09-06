/*

let dizi = [2,5,8,11,15,17];

Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 
10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)

*/

let dizi = [2,5,8,11,15,17]

const filteredArray = dizi.filter(
    function(sayi){
        return sayi>10;
    }
);
const mapArray = filteredArray.map(
    function(sayi){
        return sayi*5;
    }
);
console.log(mapArray);


