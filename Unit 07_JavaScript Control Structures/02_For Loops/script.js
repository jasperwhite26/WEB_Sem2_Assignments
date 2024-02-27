const pets = ["cat", "dog", "fish", "bird"];

let text = "";
for(let x of pets){
    text += x + " ";
}

document.getElementById("forof").innerHTML = text;
const date = {month:"February", day:27, year:2024};

let txt = "";
for(let x in date){
    txt += date[x] + " ";
}
document.getElementById("forin").innerHTML = txt;