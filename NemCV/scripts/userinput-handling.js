/*                                      *\
\*           INPUT-HANDLING             */

let info = {};
let description = {};


function getUserInfo(formElement){
    info = formElement.getInput();
}

function getUserDescription(formElement) {
    description =  formElement.getInput();

}

let eduList = [];
let workList = [];
let sectorList = [];
let selectedSectors = [];

function getList(id) {
    if( id.includes("education") ) { return eduList;    }
    else if( id.includes(  "work"   ) ) { return workList;    }
    else if( id.includes( "sector"  ) ) { return sectorList; }
    else { alert("Der gik noget galt"); }
}


function createAccomplishment(formElement){

    const accomplishment = formElement.getInput();

    const list = getList(formElement.id);
    console.log(accomplishment);
    list.push(accomplishment);
    updateList(list);

    formElement.reset();
}


function addSector(formElement){
    if(sectorList.length === 3){
        //Lav metode som alerter brugeren om at listen er fuld
        return;
    }

    const shadowRoot = formElement.shadowRoot;
    const formSlot = shadowRoot.getElementById("form");
    const sectorDropDown = formSlot.assignedElements()[0].querySelector("select");
    const selected = sectorDropDown.options[sectorDropDown.selectedIndex];
    sectorList.push(selected.text);
    selected.disabled = true;
    selectedSectors.push(selected);

    updateList(sectorList);
}


function deleteListElement(id){
    const list = getList(id);
    const index = id.slice(-1);
    list.splice(id.slice(-1), 1 );
    if(list == sectorList){
        deletedSector = selectedSectors[index];
        deletedSector.disabled = false;
        selectedSectors.splice(index,1);
    }

    updateList(list);
}


function updateList(list){
    let name = "";
    if(list == workList){
        name = "work"
    }else if(list == eduList) {
        name = "education";
    }else {
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
            textNode = document.createElement("p");
        }else {
            console.log(element);
            textNode = document.createElement("p");
            textNode.innerHTML =
                element.name + ", " + element.title
                + "<br>" + element.from + " - " + element.to;
        }

        const button = document.createElement("button");
        button.innerHTML = "SLET";
        button.setAttribute("id", name + "-delete-" + counter);
        button.setAttribute("onclick", "deleteListElement(this.id)");

        button.classList.add("delete-btn");
        textNode.classList.add("center-text");

        const div = document.createElement("div");
        div.classList.add("list-div");
        div.appendChild(textNode);
        newList.appendChild(div);
        newList.appendChild(button);
        ul.appendChild(newList);

        counter++;
    }
}