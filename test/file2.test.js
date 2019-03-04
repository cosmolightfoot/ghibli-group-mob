import renderDetailHtmlTemplate from '../src/load-detail-page.js';
const test = QUnit.test;

QUnit.module('create moviedetail template');


test('movie detail template', function(assert) {
//arrange
    const movieName = { 
        "title": "Castle in the Sky",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "release_date": "1986",
        "rt_score": "95"
    };

//act
    const result = renderDetailHtmlTemplate(movieName);
    const expected = /*html*/`
    <section>
        <section class="title-container">
            <dl>Title:</dl>
            <dt>Castle in the Sky</dt>
        </section>
        <section class="title-container">
            <dl>Released:</dl>
            <dt>1986</dt>
        </section>
        <section class="title-container">
            <dl>Description:</dl>
            <dt>The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.</dt>
        </section>
        <section class="title-container">
            <dl>Director:</dl>
            <dt>Hayao Miyazaki</dt>
        </section>
        <section class="title-container">
            <dl>Producer:</dl>
            <dt>Isao Takahata</dt>
        </section>
        <section class="title-container">
            <dl>RT Score:</dl>
            <dt>95</dt>
        </section>
    </section>`;
//assert

    assert.htmlEqual(result, expected);
});