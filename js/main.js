console.log("hello main.js");
console.log("inventory", inventory);



const sweetspot = document.querySelector("#sweetstuff");
inventory.forEach(function(item, index){
   console.log("sweet item",  index, item);
   sweetspot.innerHTML +=
   `<li class='fancy'>${inventory} ${index + 1} ${item.name}: ${item.flavor} ${item.topping} ${item.topcolor }</li>`;
})

const getFancy = document.querySelectorAll(".fancy");
console.log("getFancy", getFancy);


function howmanySweets(){
    console.log("The sweets total:", inventory.length);
    var numberOfSweets = inventory.length;
    return numberOfSweets;
}

let totalSweets = howmanySweets();
console.log("totalSweets", totalSweets);

const btnGetTotalAmounts = document.querySelector("#btn-getTotalSweets");
btnGetTotalAmounts.addEventListener("click", howmanySweets);







