import renderIndexHtmlTemplate from '../src/make-ghibli-template.js';
const test = QUnit.test;

QUnit.module('construct html fill list');

const movieName = { 
    "name": "Air Destroyer Goliath",
    "id": "4e09b023-f650-4747-9ab9-eacf14540cfb"
};

test('make dynamic html list', function(assert) {
    //arrange
    //act
    const result = renderIndexHtmlTemplate(movieName);
    const expected = `<li class="film-item"><a href="./film-detail.html?id=4e09b023-f650-4747-9ab9-eacf14540cfb">Air Destroyer Goliath</a></li>`;
    //assert


    assert.htmlEqual(result, expected);
});
