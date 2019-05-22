class FormWebcomponent extends HTMLElement {
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <link rel='stylesheet' href='./Styles/reset.css' >
            <link rel='stylesheet' href='./Styles/generic.css' >
            <link rel='stylesheet' href='./Styles/form.css' >
            
            
            <button class="collapsible" onclick='showContent(this)' id='collapsible'><slot name='title' class='title' id='title'></slot></button>
            <div class='content' id='content'>
                <h1 class='title' id='contentTitle'></h1>
                <slot name='form'></slot>
                <slot name='add-button'></slot>
                <button onclick='dontShowContent(this)'>OK</button>
                <button onclick='dontShowContent(this)'>CANCEL</button>
            </div>`;
    }

    getShadowRoot(){
        return this.shadowRoot;
    }
}

customElements.define('form-component', FormWebcomponent);
const element = document.createElement("form-component");


/*                                   *\
\*             BEHAVIOUR             */

function showContent(collapsible) {
    console.log(collapsible.parentNode);
    let shadowRoot = collapsible.parentNode;
    let content = shadowRoot.getElementById("content");
    let title = shadowRoot.getElementById("title").assignedElements()[0];
    let contentTitle = shadowRoot.getElementById("contentTitle");
    contentTitle.textContent = title.textContent;
    collapsible.style.display = "none";
    content.style.display = "block";
    content.style.height = "100%";
}

function dontShowContent(goBackButton) {
    console.log(goBackButton.parentElement.parentNode);
    let shadowRoot = goBackButton.parentElement.parentNode;
    let collapsible = shadowRoot.getElementById("collapsible");
    let content = shadowRoot.getElementById("content");
    content.style.display = "none";
    collapsible.style.display = "block";
}

