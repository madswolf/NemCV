let info = {};
let description = {};

function getUserInfo(event){
    event.preventDefault();
    const formElement = document.getElementById(event.target.id);
    const children  = formElement.children;
    const name =  children[2].value;
    const age =  children[4].value;
    const email =  children[6].value;
    const city  =  children[8].value;
    const picture = children[10].value;

    info = {name, age, email, city, picture};

    console.log(info);
}

function getUserDescription(event) {
    event.preventDefault();
    const formElement = document.getElementById(event.target.id);
    const children  = formElement.children;
    description =  children[1].value;

    console.log(description);
}