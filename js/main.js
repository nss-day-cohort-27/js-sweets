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

const totalNumberSweets = () => {
   var numberOfSweets = inventory.length;
   return numberOfSweets;
}

let totalSweets = howmanySweets();
console.log("totalSweets", totalSweets);

const btnGetTotalAmounts = document.querySelector("#btn-getTotalSweets");
btnGetTotalAmounts.addEventListener("click", howmanySweets);


// function makeSweetObj(name, kind, flavor, topping, topcolor) {
//    const sweet = Object.create({}, {
//       name: {
//          value: name
//       },
//       kind: {
//          value: kind
//       },
//       flavor: {
//          value: flavor
//       },
//       icing: {
//          value: topping
//       },
//       topcolor: {
//          enumerable: true,
//          writable: true,
//          value: topcolor
//       }
//    })
//    return sweet;
// }

const addGreenSweet = document.getElementById("btn-addGreenSweet");
addGreenSweet.addEventListener("click", addGreenOne);

function addGreenOne() {
   inventory.push(makeSweetObj("Christmas Tree", "cake", "white", "none", "green"));
   console.log(inventory);
   //What about updating the list? and showing all. Look below.
   showSweets();
}


// does one thing really well
function showSweets() {
   inventory.forEach((item, index) => {
      document.getElementById("new-version").innerHTML += `<li>${item.name}: ${item.topcolor}</li>`
   });
}

function makeSweetObj(name, kind, flavor, topping, topcolor) {
   const sweet = Object.create({}, {
      name: {
         value: name
      },
      kind: {
         value: kind
      },
      flavor: {
         value: flavor
      },
      icing: {
         value: topping
      },
      topcolor: {
         enumerable: true,
         writable: true,
         value: topcolor
      },
      bake: {
         value:  () => {
            let ovenTemp = 300; // default value

            if (kind == "cake") {
               ovenTemp = 350;
            } else if (kind == "brownie") {
               ovenTemp = 375;
            }
            return ovenTemp;
         },
         enumerable: false,
         writeable: false,
      }
   })
   return sweet;
}

let newInventory = [];
function makeNewInventory(){
      inventory.forEach((item, index) =>{
         console.log("inventory item", item);
         newInventory.push(makeSweetObj(item.name, item.kind, item.flavor, item.topping, item.topcolor));
      });
}
makeNewInventory();
console.log("NEW INVENTORY", newInventory);

const bakeSweet = () => {
    let item = newInventory[1];
    console.log("item to bake", item);
    let ovenTemp = item.bake();
    console.log("ovenTemp", ovenTemp);
}

const btnBakeSweet = document.getElementById("btn-bakeSweet");
btnBakeSweet.addEventListener("click", bakeSweet);










