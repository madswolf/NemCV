let info = {};
let description = {};

function getUserInfo(event){
    event.preventDefault();
    const formElement = document.getElementById(event.target.id);
    const children  = formElement.children;
    const name =  children[0].value();
    const age =  children[1].value();
    const email =  children[2].value();
    const city  =  children[3].value();
    const picture = children[4].value();

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