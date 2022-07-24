const body=document.querySelector("body");
const button=document.querySelector("button");
const colors=["#807c58","#7b55cf","red","yellow","blue","green","#2963ab"];

button.addEventListener("click", changeBackground);

let count=0;

function changeBackground(){
    //rastgele renk değiştirme
    /*
    const randomIndex=Math.floor(Math.random()*colors.length);
    const selectColor = colors[randomIndex];
    body.style.backgroundColor=selectColor;

    */

    //sırası ile renk değiştirme
    console.log(count);
    if(count==colors.length-1){
        count=0;
    }
    const selectColor=colors[count];
    count++;
    body.style.backgroundColor=selectColor;
}