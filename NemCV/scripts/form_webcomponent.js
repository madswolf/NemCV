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
                    margin-bottom: 10px;
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
                    width: 125px;
                }
                
                .button-primary:hover{
                    background-color: rgba(55, 0, 179, 0.5);
                }
                
                .content {
                    display: none;
                    overflow: hidden;
                    background-color: white;
                    position:absolute;
                    z-index:100;
                    left:10%;
                    top:10%;
                    bottom: 10%;
                    right: 10%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50px;
                    border-color: #03DAC6;
                    border-style: solid;
                    border-width: 5px;
                }
                
                @keyframes scale-up-center {
                    from {
                      transform: scale(0.1);
                      transform-origin: 50% 50%;
                    }
                    to {
                      transform: scale(1);
                      transform-origin: 50% 50%;
                    }
                    
                }
                
                .scale-up-center {
                animation-name: scale-up-center;
                animation-duration: 0.5s;
                animation-timing-function: cubic-bezier(0.390, 0.575, 0.565, 1.000);
                animation-direction: normal;
                animation-fill-mode: forwards;
                }
            </style>

            
            <button onclick='showContent(this)' id='collapsible'><slot name='title' class='title' id='title'></slot></button>
            <div class='content scale-up-center' id='content'>
                <h1 class='title' id='contentTitle'></h1>
                <slot name='form'></slot>
                <slot name='add-button'></slot>
                <button class="button-primary" onclick='dontShowContent(this)'>OK</button>
                <button class="button-primary" onclick='dontShowContent(this)'>CANCEL</button>
            </div>`;
    }

    getShadowRoot(){
        return this.shadowRoot;
    }
}

customElements.define('form-component', FormWebcomponent);


function showContent(collapsible) {
    let shadowRoot = collapsible.parentNode;
    let content = shadowRoot.getElementById("content");
    let title = shadowRoot.getElementById("title").assignedElements()[0];
    let contentTitle = shadowRoot.getElementById("contentTitle");
    contentTitle.textContent = title.textContent;
    content.style.display = "flex";
}

function dontShowContent(goBackButton) {
    let shadowRoot = goBackButton.parentElement.parentNode;
    let content = shadowRoot.getElementById("content");
    content.style.display = "none";
}