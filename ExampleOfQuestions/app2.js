/*

let dizi = [3,6,9,14,16];

*Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan 
myFunction fonksiyonunu yazın.

*Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir 
eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction (dizi){
// Kodunuzu buraya yazın.
}

myFunction(dizi);

*/
let dizi = [3,6,9,14,16];

function myFunction (dizi){
    let filteredArray = dizi.filter(
        function(sayi){
            return sayi>5;
        });

    if(filteredArray.length>0){
        console.log("5'ten büyük sayı mevcut");
    }else{
        console.log("5'ten büyük sayı mevcut değil");
    }
}
    
myFunction(dizi);
    