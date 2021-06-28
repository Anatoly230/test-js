let btn = document.querySelector('.btn');
let btnBrgr = document.querySelectorAll('.btn-item');
let blockList = document.querySelector('.parent-block__list');

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
})
btn.addEventListener('click', (evt) => {
    btn.classList.toggle(`btn-rotate`)
    addNewItem(`li`, `parent-block__list-item`, `Привет, я новый элемент списка`, blockList);/*добавляю новый элемент */
})
