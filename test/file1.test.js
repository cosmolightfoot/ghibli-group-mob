const test = QUnit.test;

QUnit.module('construct html fill list');

test('make dynamic html list', function(assert) {
    //arrange
    const json = { "title": "My Neighbor Totoro" };
    //act
    const result = renderIndexHtmlTemplate(json);
    const expected = `<li class="film-item"><a href="./assets/alchemy-logo.png">TBD</a></li>`;
    //assert


    assert.equal(result, expected);
});
