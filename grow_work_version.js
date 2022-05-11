let container = 900;
let elements = [150, 300, 45, 200];
let growValues = [0, 2, 1, 0];

let allContainers = (elmnts) => {
	let total = 0;
	for (elmnt of elmnts) {
		total += elmnt;
	}
	return total;
};

let getGrowTotal = (grows) => {
	let total = 0;
	for (grow of grows) {
		total += grow;
	}
	return total;
}

let getEmptySpace = (cont, elmnts) => {
	return cont - allContainers(elmnts);
}

let getGrowsViewer = (grows, cont, elmnts) => {
	for (let i = 0; i < elmnts.length; i++) {
		let growValue = grows[i];
		let elementWidth = elmnts[i];
		if (growValue !== undefined && growValue !== 0) {
			console.log((growValue / getGrowTotal(grows)) * getEmptySpace(container, elmnts) + elementWidth);
		} else {

			console.log(elementWidth)
		}

	}
};
getGrowsViewer(growValues, container, elements)
