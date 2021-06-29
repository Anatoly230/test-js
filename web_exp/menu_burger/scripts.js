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
    if (evt.target.ariaLabel === `openCloseMenu` || evt.target.className == `btn-item`) {
        btnBrgr.forEach(element => {
            element.classList.toggle('btn-x-tranform');
        });
        btn.classList.toggle(`btn-rotate`)
        addNewItem(`li`, `parent-block__list-item`, `Я ${blockListItems.length}-й элемент списка`, blockList);/*добавляю новый элемент */
    }
})

blockList.addEventListener(`click`, (evt) => {
    if (evt.target.className == `parent-block__list-item`) {
        evt.target.remove()
    }
})