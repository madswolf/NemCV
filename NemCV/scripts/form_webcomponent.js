class FormWebcomponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "<link rel='stylesheet' href='./styles/form.css' >" +
            "<button class='collapsible'  onclick='showContent(this)' id='button'>hej med dig</button>" +
            "<p class='content' id='content'>asdw</p>";
    }
}
customElements.define('form-component', FormWebcomponent);
const element = document.createElement("form-component");
const shadowRoot = element.attachShadow({mode: "open"});

function showContent(collapsible) {
    console.log(collapsible);
    let content = collapsible.nextElementSibling;
    console.log(content);
    if (content.style.display === "block") {
        content.style.display = "none";
        content.style.height = "100%";
        collapsible.style.width = "50%";
    } else {
        content.style.display = "block";
        collapsible.style.width = "100%";
    }
}