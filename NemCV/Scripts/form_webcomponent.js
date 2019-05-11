class FormWebcomponent extends HTMLElement {
    constructor(){
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <link rel='stylesheet' href='./Styles/form.css' >
            <button class='collapsible'  onclick='showContent(this)' id='button'><slot name='title'></slot></button>
            <div class='content' id='content'>
                <h1 class='title'></h1>
                <slot name='form'></slot>
                <slot name='add-button'></slot>
                <button onclick='dontShowContent(this)'>OK</button>
                <button onclick='dontShowContent(this)'>CANCEL</button>
            </div>`;
    }
}


customElements.define('form-component', FormWebcomponent);
const element = document.createElement("form-component");

function showContent(collapsible) {
    let content = collapsible.nextElementSibling;
    let title = collapsible.firstChild;
    console.log(title);
    content.firstChild.innerHtml = title;

    collapsible.style.display = "none";
    content.style.display = "block";
    content.style.height = "100%";
}

function dontShowContent(goBackButton) {
    var parent = goBackButton.parentElement;
    parent.style.display = "none";
    parent.previousElementSibling.style.display = "block";
}