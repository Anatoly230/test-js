let bemxjst = require("bem-xjst")
let bemHtml = bemxjst.bemhtml;

let templates = bemHtml.compile(function () {
    return block("text")({ tag: "span" });
})

// Добавляем данные в формате BEMJSON
var bemjson = [
    { block: 'text', content: 'Первый' },
    { block: 'text', content: 'Второй' }
];

// Применяем шаблоны
var html = templates.apply(bemjson);

