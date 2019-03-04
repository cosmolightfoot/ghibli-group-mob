export default function renderIndexHtmlTemplate(movieName) {
    const html = `<li class="film-item"><a href="./film-detail.html?id=${movieName.id}">${movieName.title}</a></li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
