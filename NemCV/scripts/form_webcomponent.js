class FormWebcomponent extends HTMLElement {
    constructor(){
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
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
}


customElements.define('form-component', FormWebcomponent);
const element = document.createElement("form-component");

function getShadowRoot(element) {
    console.log(element);
    console.log(FormWebcomponent.shadowRoot);
    if(element.parentNode === FormWebcomponent){
        return element.parentNode;
    }else{
        getShadowRoot(element.parentNode);
    }
}

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
    var shadowRoot = goBackButton.parentElement.parentNode;
    var collapsible = shadowRoot.getElementById("collapsible");
    var content = shadowRoot.getElementById("content");
    content.style.display = "none";
    collapsible.style.display = "block";
}

