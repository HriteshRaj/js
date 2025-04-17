const heroes=["thor","ironman","spidermane"]
const dc=["batman","flash","supermane"]

//dc.push(heroes)
console.log(dc);
//console.log(dc[3][2]);

const newheroes=heroes.concat(dc)
console.log(newheroes);

const newheroes2 = [...heroes,...dc]
console.log(newheroes2);

console.log(Array.isArray("hritesh"));
console.log(Array.from("hritesh"));
