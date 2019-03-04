const test = QUnit.test;

QUnit.module('construct html fill list');
    function renderIndexHtmlTemplate() {
        const html = `<li class="film-item"><a href="./assets/alchemy-logo.png">TBD</a></li>`;
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content;
    }
test('make dynamic html list', function(assert) {
    //arrange
    const json = { 'title': 'My Neighbor Totoro' };
    //act
    const result = renderIndexHtmlTemplate();
    const expected = `<li class="film-item"><a href="./assets/alchemy-logo.png">TBD</a></li>`;
    //assert


    assert.htmlEqual(result, expected);
});
