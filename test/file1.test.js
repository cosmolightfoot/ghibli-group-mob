import renderIndexHtmlTemplate from '../src/make-ghibli-template.js';
const test = QUnit.test;

QUnit.module('construct html fill list');

const movieName = { 
    "title": "Castle in the Sky",
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
};

test('make dynamic html list', function(assert) {
    //arrange
    //act
    const result = renderIndexHtmlTemplate(movieName);
    const expected = `<li class="film-item"><a href="./film-detail.html?id=2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky</a></li>`;
    //assert


    assert.htmlEqual(result, expected);
});
