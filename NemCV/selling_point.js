
class selling_point extends HTMLElement {

    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});

        shadow.innerHTML = "<slot name='img' >" +
            "</slot><slot class='text' name='text'></slot>  " +
            "<link rel=\"stylesheet\" type=\"text/css\" href=\"Styles/selling_point.css\">"

    }

}

window.customElements.define('selling-point', selling_point);