import './index.css' // css파일 불러오기

function component() {
    const element = document.createElement("div");

    element.innerHTML = "Hello World";
    element.className = 'test'

    return element;
}

document.body.appendChild(component());