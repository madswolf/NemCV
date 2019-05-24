class FormWebcomponent extends HTMLElement {
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <link rel='stylesheet' href='./Styles/reset.css' >
            <link rel='stylesheet' href='./Styles/form.css' >
            <style>
                h1{
                    font-family: var(--headline-large);
                    color: var(--primary-color);
                    font-size: var(--headline-large-size);
                    font-weight: var(--headline-large-font-weight) ;
                    letter-spacing: var(--headline-large-letter-spaceing);
                    justify-content: center;
                    align-items: center;
                    display: flex;
                }
                button{
                    font-family: var(--headline-large);
                    font-weight: var(--headline-large-font-weight) ;
                    letter-spacing: var(--headline-large-letter-spaceing);
                    color: var(--secondary-secondary-color);
                    font-size: var(--bodytext-size);
                    text-transform: uppercase;
                    background-color: transparent;
                    border-style: solid;
                    border-radius: 50px;
                    padding-left: 1rem;
                    padding-right: 1rem;
                    width: 400px;
                    margin-top: 10px;
                    }
                    
                button:hover{
                    background-color: rgba(255, 255, 255, 0.50);
                }
                button:focus {
                    outline: 0;
                }
                
                .button-primary{
                    border-color: var(--primary-color);
                    color: var(--primary-color);
                }
                
                .button-primary:hover{
                    background-color: rgba(55, 0, 179, 0.5);
                }
                
                .content {
                    width: 100%;
                    display: none;
                    overflow: hidden;
                    background-color: white;
                }
            </style>

            
            <button onclick='showContent(this)' id='collapsible'><slot name='title' class='title' id='title'></slot></button>
            <div class='content' id='content'>
                <h1 class='title' id='contentTitle'></h1>
                <slot name='form' id="form"></slot>
                <slot name='add-button'></slot>
                <button class="button-primary" onclick='dontShowContent(this)'>OK</button>
                <button class="button-primary" onclick='dontShowContent(this)'>CANCEL</button>
            </div>`;
    }

    getInput(){

        let inputElements = this.querySelectorAll("input-component");
        let input = {};

        for(let i = 0; i < inputElements.length ; i++){
            console.log(inputElements[i].value());
            input[inputElements[i].id] = inputElements[i].value();
        }

        return input;
    }

    reset(){
        let formSlot = this.shadowRoot.getElementById("form");
        let formElement = formSlot.assignedElements()[0];
        formElement.reset();
    }
}


customElements.define('form-component', FormWebcomponent);

/*                                   *\
\*             BEHAVIOUR             */

function showContent(collapsible) {
    let shadowRoot = collapsible.parentNode;
    let content = shadowRoot.getElementById("content");
    let title = shadowRoot.getElementById("title").assignedElements()[0];
    let contentTitle = shadowRoot.getElementById("contentTitle");
    contentTitle.textContent = title.textContent;
    collapsible.style.display = "none";
    content.style.display = "block";
}

function dontShowContent(goBackButton) {
    let shadowRoot = goBackButton.parentElement.parentNode;
    let collapsible = shadowRoot.getElementById("collapsible");
    let content = shadowRoot.getElementById("content");
    content.style.display = "none";
    collapsible.style.display = "inline-block";
}