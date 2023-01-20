document.getElementById("demo").innerHTML = "Amjad";
let str = "Apple,Banana,Kiwi";
const BananaIndex = str.indexOf("Banana");
console.log("position", BananaIndex);
const newString = str.slice(BananaIndex);
console.log("New string after slice", newString);
const serachIndex = str.search("Banana");
console.log("Search Method Index", serachIndex);
