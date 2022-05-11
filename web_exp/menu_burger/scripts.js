let btn = document.querySelector('.btn');
let btnBrgr = document.querySelectorAll('.btn-item');
let blockList = document.querySelector('.parent-block__list');
let blockListItems = blockList.children;

let getCountListItem = () => {
    console.log(blockListItems)
}

let addNewItem = (tagName, className, text, parentBlock) => {
    let element = document.createElement(tagName);
    element.classList.add(className);
    element.textContent = text;
    parentBlock.appendChild(element);

}

btn.addEventListener('click', (evt) => {

    btnBrgr.forEach(element => {
        element.classList.toggle('btn-x-tranform');
    });
    btn.classList.toggle(`btn-rotate`)
    addNewItem(`li`, `parent-block__list-item`, `Я ${blockListItems.length + 1}-й элемент списка`, blockList);/*добавляю новый элемент */

})

btn.addEventListener('click', (evt) => {
    btnBrgr.forEach(element => {

        if (element.classList.contains(`btn-x-tranform`)) {
            element.classList.remove('btn-x-tranform')
        } else {
            element.classList.add('btn-x-tranform')
        }
    })
});


blockList.addEventListener(`click`, (evt) => {
    if (evt.target.className == `parent-block__list-item`) {
        evt.target.remove()
    }
})

// эксперименты с методами массива

let expArr = [1, 2, 3, `Hello world`, `строчный элемент`, { id: 1, name: `Tolya` }, { id: 2, name: `Rita` }];
let numArr = [1, 58, 41, 38, 15, 17, 2, 6, 76, 3];
// expArr.forEach((elem) => console.log(typeof elem))
let mapRes = numArr.map((elem, index) => elem * index);
let inclRes = expArr.includes(2)
let findRes = expArr.find(elem => elem.id === 2)
let findIRes = expArr.findIndex(elem => elem.id === 2)
let filtRes = expArr.filter(elem => elem <= 3)
let sortRes = numArr.sort((a, b, c) => console.log(a, b, c))

console.log(sortRes)
