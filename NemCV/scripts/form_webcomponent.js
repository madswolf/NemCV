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

/*
function getShadowRoot(element) {
    console.log(element);
    console.log(FormWebcomponent.shadowRoot);
    if(element.parentNode === FormWebcomponent){
        return element.parentNode;
    }else{
        getShadowRoot(element.parentNode);
    }
}*/

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

let eduList = [];
let workList = [];

function createAccomplishment(event){
    event.preventDefault();
   
    const shadowRoot = event.target.parentNode.getShadowRoot();
    console.log(shadowRoot);
    console.log(shadowRoot.host);
    console.log(shadowRoot.host.children[1]);
    const formElement = shadowRoot.host.children[1];
    const children  = formElement.children;
    const   place   =  children[1].value;
    const   type    =  children[3].value;
    const startYear =  children[5].value;
    const  endYear  =  children[7].value;

    const accomplishment = {
        "name" : place,
        "title": type,
        "from" : startYear,
        "to"   : endYear
    };

    console.log(accomplishment);
    if(formElement.id.includes("work")){
        workList.push(accomplishment);
        updateList("work", workList);
    }else {
        eduList.push(accomplishment);
        updateList("education", eduList);
    }
    
    formElement.reset();
}

function updateList(name, list){
    const ul = document.getElementById(name + "-list");
    let kind = "";
    if(name == "work"){
        kind = "Erfaring";
    }else {
        kind = "Uddannelse";
    }
    ul.innerHTML = "";

    let counter = 0;
    list.forEach(element => {
        const newList = document.createElement("LI");
        const textNode = document.createTextNode(
            kind + ": " + element.name + ", " + element.title 
            + " " + element.from + " - " + element.to);

        const button = document.createElement("button");
        button.innerHTML = "X";
        button.setAttribute("id", name + "-delete-" + counter);
        button.setAttribute("onclick", "deleteListElement(this.id)");

        newList.appendChild(textNode);
        newList.appendChild(button);
        ul.appendChild(newList);

        counter++;
    })
}

function deleteListElement(id){
    if(id.includes("work")){
        workList.splice(id.slice(11,12), 1);
        updateList("work", workList);
    } else{
        eduList.splice(id.slice(11,12), 1);
        updateList("education", eduList);
    }
    
    
}