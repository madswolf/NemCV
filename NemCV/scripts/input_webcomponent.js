class InputWebComponent extends HTMLElement{
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <link rel='stylesheet' href='./Styles/reset.css' >
            <link rel='stylesheet' href='./Styles/generic.css' >
            
            <style>
                p{
                    color: var(--primary-color);
                    margin-top:-10px;
                    font-family: var(--headline-large);
                    font-weight: var(--headline-large-font-weight) ;
                    letter-spacing: var(--headline-large-letter-spaceing);
                }

                span{
                    background: var(--secondary-secondary-color);
                    padding-right: 3px;
                    padding-left: 3px;
                }
                
                .div-border{
                    border: 2px solid var(--primary-color);
                    border-radius: 5px;
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 5px;
                    padding-right: 5px;
                    display:inline-block
                } 
                
                .div-outside{
                    padding: 10px;
                }
                
                input{
                    background-color: transparent;
                    border-style: none;
                    border-radius: 5px;
                    font-size: 25px;
                    width: 100%;
                    color: var(--primary-color);
                }
                
                input:focus{
                    outline: 0;
                }
                
                select{
                    color: var(--primary-color);
                }
            </style>
            <div class="div-outside">
                <div class="div-border">
                    <p><span><slot name="hint"></slot></span></p>
                    <slot name="input"></slot>
                </div>
            </div>`;
    }






}
customElements.define('input-component', InputWebComponent);