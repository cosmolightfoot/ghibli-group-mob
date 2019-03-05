export default function renderDetailHtmlTemplate(movieName) {
    const html = /*html*/`
    <section>
        <section class="title-container">
            <dl>Title:</dl>
            <dt>${movieName.title}</dt>
        </section>
        <section class="title-container">
            <dl>Released:</dl>
            <dt>${movieName.release_date}</dt>
        </section>
        <section class="title-container">
            <dl>Description:</dl>
            <dt>${movieName.description}</dt>
        </section>
        <section class="title-container">
            <dl>Director:</dl>
            <dt>${movieName.director}</dt>
        </section>
        <section class="title-container">
            <dl>Producer:</dl>
            <dt>${movieName.producer}</dt>
        </section>
        <section class="title-container">
            <dl>RT Score:</dl>
            <dt>${movieName.rt_score}</dt>
        </section>
    </section>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function loadDetail(movieObject) {
    const dom = renderDetailHtmlTemplate(movieObject);
    const filmDescriptionNode = document.getElementById('film-description');
    filmDescriptionNode.appendChild(dom);
}