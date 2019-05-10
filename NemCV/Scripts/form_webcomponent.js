class FormWebcomponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "<button class='collapsible'>hej med dig</button>" +
        "<div class='content'>" +
            "<p>lorem impsum dolor mucho bueno</p>" +
        "</div>";
    }
}
customElements.define('form-component', FormWebcomponent);
const element = document.createElement("form-component");
const shadowRoot = element.attachShadow({mode: "open"});