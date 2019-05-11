class FormWebcomponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "<link rel='stylesheet' href='./Styles/form.css' >" +
            "<button class='collapsible'  onclick='showContent(this)' id='button'>hej med dig</button>" +
            "<div class='content' id='content'>" +
            "<slot name='title'></slot>" +
            "<slot name='form'></slot>" +
            "<slot name='add-button'></slot>" +
            "<button onclick='dontShowContent(this)'>OK</button>" +
            "<button onclick='dontShowContent(this)'>CANCEL</button>" +
            "</div>";
    }
}
customElements.define('form-component', FormWebcomponent);
const element = document.createElement("form-component");
const shadowRoot = element.attachShadow({mode: "open"});

function showContent(collapsible) {
    console.log(collapsible);
    let content = collapsible.nextElementSibling;
    console.log(content);
    collapsible.style.display = "none";
    content.style.display = "block";
    content.style.height = "100%";
}

function dontShowContent(goBackButton) {
    var parent =goBackButton.parentElement;
    parent.style.display = "none";
    parent.previousElementSibling.style.display = "block";
}