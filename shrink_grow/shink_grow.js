// grow version

let container = 1000;
let elements = [300, 400, 800];
let growValues = [1, 2, 1];

let allContainers = (elmnts) => {
    let total = 0;
    for (elmnt of elmnts) {
        total += elmnt;
    }
    return total;
}

let getGrowTotal = (grows) => {
    if (grows.length < 1) {
        return 0;
    }
    let total = 0;
    for (grow of grows) {
        total += grow;
    }
    return total;
}

let getEmptySpace = (cont, elmnts) => {
    return cont - allContainers(elmnts);
}

let getGrowsViewer = (grows, elmnts, container) => {

    let result = {
        container: container,
        elements: elmnts,
        grows: grows,
        growTotal: getGrowTotal(grows),
        emptySpace: getEmptySpace(container, elmnts),
        enterValues: [],
    },
        growValue = 0,
        elementWidth = 0;

    for (let i = 0; i < elmnts.length; i++) {

        growValue = result.grows[i] === undefined ? 0 : result.grows[i];
        elementWidth = result.elements[i];
        result.enterValues.push((growValue / result.growTotal) * result.emptySpace + elementWidth);
    }
    return result.enterValues;
}

getGrowsViewer(growValues, elements, container)


// class GrowShrink(){
//     constructor(){
//         this.contaner = [];
//         this.elements = [];
//         this.growValues = [];
//         this.shrinkValues = [];
//         this.result = {
//             allContainers: 0,
//             growTotal: 0,
//             emptySpace: 0
//         }

//     }
//     get allContainers(elmnts) {
//         let total = 0;
//         for (elmnt of elmnts) {
//             total += elmnt;
//         }
//         return total;
//     }
// get growTotal(grows){
//         let total = 0;
//         for (grow of grows) {
//             total += grow;
//         }
//         return total;
//     }
// }

// grow version


// shrink version


// shrink version

let fullfom = document.querySelector(".form");
let fullSpace = fullfom.querySelector(".container");
let changes = fullfom.querySelector(".changes");

function collect(pseudoArr) {
    let arr = Array.from(pseudoArr);
    let nwArr = [];
    arr.forEach(function (item) {
        nwArr.push(Number(item.value))
    });
    return nwArr;
}

function upload() {
    let elmArr = fullfom.querySelectorAll(".output");
    let elements = collect(fullfom.querySelectorAll(".element"));
    let changer = collect(fullfom.querySelectorAll(".change"));
    let fullSpace = fullfom.querySelector(".container").value;

    let changeArr = getGrowsViewer(changer, elements, fullSpace);

    let i = 0;

    while (elmArr.length > i) {
        elmArr[i].textContent = changeArr[i]
        i++;
    }
}

changes.addEventListener('change', function (e) {
    upload();
})



// shrink

function getNegativeSpace(cont, elmnts) {
    return cont - allContainers(elmnts);
};

function addToSumm(arr) {
    return arr.reduce(function (accum, item) {
        return accum += item;
    }, 0)
}


function addToSummArr(arr) {
    return Array.isArray(arr) ? addToSumm(arr) : Array.from(addToSumm(arr));
}


function totalOfSrihkCoeff(elmnts, shrnks) {
    if (elmnts.length !== shrnks.length) {
        console.log("Количество элементов не соответствует количеству shrink элементов")
    }
    return elmnts.reduce(function (accum, item, index) {
        return accum += shrnks[index] * item
    }, 0);
}

function getCompressionRatio(elmnts, shrnks) {
    return (elmnts * shrnks) / totalOfSrihkCoeff(elmnts, shrnks);
}

function getFindShrink(cont, elmnts, shrnks) {
    for (let i = 0; i < elmnts.length; i++) {
        console.log(elmnts[i] - (getCompressionRatio(elmnts[i], shrnks[i]) * getNegativeSpace(cont, elmnts)));
    }

}


// shrink