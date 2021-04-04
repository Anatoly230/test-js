let container = 500;
let elements = [350, 200, 250,300]
let shrinks = [1,1,1,1]

let allСontainers = (elmnts) => {
let total = 0;
for (elmnt of elmnts) {
total += elmnt;
	}
return total;
};


let getNegativeSpace = (cont, elmnts) => {
let negative =  cont - allСontainers(elmnts);
return -negative;
};


let totalOfSrihkCoeff = (elmnts, shrnks) => {
let total = 0;
elmnts.forEach((elmnt, count)=>{
total += elmnt * shrnks[count]
})
return total; 
};



let getCompressionRatio = (elmnts, shrnks) => {
return (elmnts * shrnks) / totalCoeff;
};

let getFindShrink = (cont, elmnts, shrnks) => {
let totalCoeff = totalOfSrihkCoeff(elmnts, shrnks);
let negSpace = getNegativeSpace(cont, elmnts);
for(let i = 0; i < elmnts.length; i++){
let normOfcompressionRatio = getCompressionRatio(elmnts[i], shrnks[i]);
console.log(elmnts[i] - (normOfcompressionRatio * negSpace));

}

};
getFindShrink(container, elements, shrinks);

console.log(baseSize);
console.log(normOfcompressionRatio);
console.log(negSpace);
console.log( normOfcompressionRatio * negSpace);
console.log(totalOfSrihkCoeff(baseSize, shrnks[i]));




























/*новый способ конец*/

/*старый способ начало*/


let getTotalSpaceOfElements = (elmnts) => {
let summOfElments = 0; 
for (let i = 0; i < elements.length; i++ ) {
summOfElments = summOfElments + (elements[i] * shrinks[i]);
}
/*
for (elmnt of elmnts) {
summOfElments += elmnt;
}
*/
return summOfElments;
};


let getNegativeSpace = (cont, summSpace) => {
var negatve = cont - getTotalSpaceOfElements(summSpace); 
if (negatve < 0 ) {
return -negatve;
}
return negative;
};

getNegativeSpace(container, elements);

let setShareOfSpace = (elementSpace, elmnts) => {
return elementSpace / getTotalSpaceOfElements(elmnts);
};


elements.forEach((item, i) => {
console.log(`размер ${i+1} - го блока составит ${item - getNegativeSpace(container,elements)* setShareOfSpace(item, elements)}px, при flex-shrink ${setShareOfSpace(item, elements)}`)
});

for (element of elements) {
console.log(element - getNegativeSpace(container,elements)* setShareOfSpace(element, elements));
}
console.log(element - getNegativeSpace(container,elements)* setShareOfSpace(element, elements));
};
- 
const getShrinkValues = (cont, elmnts) => {

};