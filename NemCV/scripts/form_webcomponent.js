class FormWebcomponent extends HTMLElement {
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <link rel='stylesheet' href='./Styles/reset.css' >
            <link rel='stylesheet' href='./Styles/form.css' >
            <style>
            
            
                .font{
                    font-family: var(--headline-large);
                    color: var(--primary-color);
                    font-weight: var(--headline-large-font-weight);
                    letter-spacing: var(--headline-large-letter-spaceing);
                }
                
                h1{
                    font-size: var(--headline-large-size);
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    margin-top: 20px;
                    margin-bottom: 20px;
                }
                
                .btn{
                    font-size: var(--bodytext-size);
                    text-transform: uppercase;
                    background-color: transparent;
                    border-style: solid;
                    border-radius: 50px;
                    width: 300px;
                    margin-bottom: 20px;
                    cursor: pointer;
                    padding: 10px;
                    }
                
                    
                .btn:hover{
                    background-color: rgba(255, 255, 255, 0.50);
                }
                .btn:focus {
                    outline: 0;
                }
                
                .button-close{
                    font-size: var(--bodytext-size);
                    background-color: transparent;
                    position: absolute;
                    color: var(--primary-color);
                    border-style: none;
                    bottom: 0;
                    right: 0;
                    margin-bottom: 25px;
                    margin-right: 50px;
                }
                
                .button-close:hover{
                    cursor: pointer;
                }
                
                .button-close:focus {
                    outline: 0;
                }
                
                
                .content {
                    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.5);
                    display: none;
                    overflow: hidden;
                    background-color: white;
                    left: 3%;
                    right: 3%;
                    top: 15%;
                    bottom: 15%;
                    position:absolute;
                    margin: auto;
                    flex-direction: column;
                    align-items: center;
                    border-radius: 50px;
                }
                
                @media only screen and (min-width: 700px) {
                .content{
                    max-width: 500px;
                    min-width: 500px;
                    left: 10%;
                    right: 10%;
                    top: 20%;
                    bottom: 20%;
                    }
                }
                
                @media only screen and (max-height: 700px) {
                .content{
                      top: 3%;
                        bottom: 3%;  
                    }
                }
                
                @keyframes scale-up {
                    from {
                      transform: scale(0.1);
                      transform-origin: 50% 50%;
                    }
                    to {
                      transform: scale(1);
                      transform-origin: 50% 50%;
                    }
                    
                }
                
                @keyframes scale-down {
                from {
                      transform: scale(1);
                      transform-origin: 50% 50%;
                    }
                    to {
                      transform: scale(0.0);
                      transform-origin: 50% 50%;
                    }
                }
                
                .scale-up {
                animation: scale-up 250ms linear forwards;
                }
            </style>

            
            <button class="font btn" onclick='showContent(this)' id='collapsible'><slot name='title' class='title' id='title'></slot></button>
            <div class='content scale-up' id='content'>
                <h1 class='font' id='contentTitle'></h1>
                <slot name='form' id="form"></slot>
                <slot name='add-button'></slot>
                <button class="font button-close" onclick='dontShowContent(this)'>Luk</button>
                <slot name="list"></slot>
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
    content.style.display = "flex";
}



function dontShowContent(goBackButton) {
    let shadowRoot = goBackButton.parentElement.parentNode;
    let content = shadowRoot.getElementById("content");
    content.style.animation = "scale-down 250ms linear forwards";
    setTimeout(swapAnimations, 250, content);
}

function swapAnimations(content){
    content.style.display = "none";
    content.style.animation = "scale-up 250ms linear forwards";

}