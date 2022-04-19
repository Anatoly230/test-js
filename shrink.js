let container = 500;
let elements = [350, 200, 250, 300]
let shrinks = [1, 1, 1, 1]

function addToSumm(arr) {
	return arr.reduce(function (accum, item) {
		return accum += item;
	}, 0)
}

function addToSummArr(arr) {
	return Array.isArray(arr) ? addToSumm(arr) : Array.from(addToSumm(arr));
}

function allContainers(elmnts) {
	return addToSumm(elmnts);
};


function getNegativeSpace(cont, elmnts) {
	return cont - addToSumm(elmnts);
};


function totalOfSrihkCoeff(elmnts, shrnks) {
	if (elmnts.length !== shrnks.length) {
		console.log("Количество элементов не соответствует количеству shrink элементов")
	}
	return elmnts.reduce(function (accum, item, index) {
		return accum += shrnks[index] * item
	}, 0);
};


function getCompressionRatio(elmnts, shrnks) {
	return (elmnts * shrnks) / totalCoeff;
};

function getFindShrink(cont, elmnts, shrnks) {
	let totalCoeff = totalOfSrihkCoeff(elmnts, shrnks);
	let negSpace = getNegativeSpace(cont, elmnts);
	for (let i = 0; i < elmnts.length; i++) {
		let normOfcompressionRatio = getCompressionRatio(elmnts[i], shrnks[i]);
		console.log(elmnts[i] - (normOfcompressionRatio * negSpace));

	}

}
getFindShrink(container, elements, shrinks);


























/*����� ������ �����*/

/*������ ������ ������*/


let getTotalSpaceOfElements = (elmnts) => {
	let summOfElments = 0;
	for (let i = 0; i < elements.length; i++) {
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
	if (negatve < 0) {
		return -negatve;
	}
	return negative;
};

getNegativeSpace(container, elements);

let setShareOfSpace = (elementSpace, elmnts) => {
	return elementSpace / getTotalSpaceOfElements(elmnts);
};


elements.forEach((item, i) => {
	console.log(`������ ${i + 1} - �� ����� �������� ${item - getNegativeSpace(container, elements) * setShareOfSpace(item, elements)}px, ��� flex-shrink ${setShareOfSpace(item, elements)}`)
});

for (element of elements) {
	console.log(element - getNegativeSpace(container, elements) * setShareOfSpace(element, elements));
}
console.log(element - getNegativeSpace(container, elements) * setShareOfSpace(element, elements));
};
- 
const getShrinkValues = (cont, elmnts) => {

};