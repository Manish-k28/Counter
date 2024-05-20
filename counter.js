let count = document.querySelector(".count");
// console.log(`count:${count}`);
let countValue = +count.textContent;
// console.log(`countValue : ${countValue}`);
let inputElement = document.getElementById("number");
// console.log(`inputElement :${inputElement}`);
// let input = +inputElement.value;
// console.log(`input : ${input}`);

function add(){
    let input = +inputElement.value;
    // console.log(`input : ${input}`);
    let sum =  input+countValue;
    // console.log(`sum:${sum}`);
    countValue=sum;
    console.log(countValue);
    count.textContent=+countValue;

//    console.log(count.textContent);
};
function sub(){
    let input = Number(inputElement.value);
    let sub = countValue-input;
    countValue=sub;
    count.textContent=+countValue;

    // console.log(sub);
}
function reset(){
    countValue=0;
    count.textContent=+countValue;
    inputElement.value=1
    
}



