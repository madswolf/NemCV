/*                                      *\
\*           INPUT-HANDLING             */


let info = {};
let description = {};

function getUserInfo(event){
    event.preventDefault();

    const shadowRoot  = event.target.parentNode.getShadowRoot();
    const formElement = shadowRoot.host.children[1];

    const children = formElement.children;
    const name    = children[1].value;
    const age     = children[3].value;
    const email   = children[5].value;
    const city    = children[7].value;
    const picture = children[9].value;

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



let eduList = [];
let workList = [];
let sectorList = [];


function getList(id) {
         if( id.includes("education") ) { return eduList;    }
    else if( id.includes(  "work"   ) ) { return workList;    }   
    else if( id.includes( "sector"  ) ) { return sectorList; }
    else { alert("Der gik noget galt"); }
}


function createAccomplishment(event){
    event.preventDefault();
   
    const shadowRoot = event.target.parentNode.getShadowRoot();
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

    const list = getList(formElement.id);
    list.push(accomplishment);
    updateList(list);

    formElement.reset();
}


function addSector(event){
    event.preventDefault();
    if(sectorList.length === 3){
        //Lav metode som alerter brugeren om at listen er fuld
        return;
    }

    const shadowRoot = event.target.parentNode.getShadowRoot();
    const sectorDropDown = shadowRoot.host.children[1].children[1];
    const selected = sectorDropDown.options[sectorDropDown.selectedIndex];
    sectorList.push(selected);
    selected.disabled = true;
    
    updateList(sectorList);
}


function deleteListElement(id){
    const list = getList(id);
    const removed = list.splice(id.slice(id.lastIndexOf("-"),id.lastIndexOf("-")+1), 1 );
    if(list == sectorList){ removed[0].disabled = false; }

    updateList(list);
}


function updateList(list){
    let kind = "";
    let name = "";
    if(list == workList){
        kind = "Erfaring";
        name = "work"
    }else if(list == eduList) {
        kind = "Uddannelse";
        name = "education";
    }else {
        kind = "Sektor";
        name = "sector";
    }

    const ul = document.getElementById(name + "-list");
    ul.innerHTML = "";

    let counter = 0;

    for(let i = 0; i < list.length; i++) {
        const element = list[i];
        const newList = document.createElement("LI");
        let textNode = undefined;
        if(list == sectorList){
            textNode = document.createTextNode(element.text)
        }else {
            textNode = document.createTextNode(
            kind + ": " + element.name + ", " + element.title 
            + " " + element.from + " - " + element.to);
        }

        const button = document.createElement("button");
        button.innerHTML = "X";
        button.setAttribute("id", name + "-delete-" + counter);
        button.setAttribute("onclick", "deleteListElement(this.id)");

        newList.appendChild(textNode);
        newList.appendChild(button);
        ul.appendChild(newList);

        counter++;
    }
}