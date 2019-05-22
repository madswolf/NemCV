let sectorList = [];

function addSector(event){
    event.preventDefault();
    if(sectorList.length === 3){
        //Lav metode som alerter brugeren om at listen er fuld
        return;
    }
    const sectorDropDown = document.getElementById("sectors");
    const selected = sectorDropDown.options[sectorDropDown.selectedIndex];
    sectorList.push(selected.label);
    selected.disabled = true;
    
    updateSectorList();
    
}

function updateSectorList(){
    const ul = document.getElementById("sector-list");
    ul.innerHTML = "";

    let counter = 0;
    for(let i = 0; i < sectorList.length; i++) {
        const newList = document.createElement("LI");
        const textNode = document.createTextNode(sectorList[i]);

        const button = document.createElement("button");
        button.innerHTML = "X";
        button.setAttribute("id", "sector-delete-" + counter);
        button.setAttribute("onclick", "deleteSectorElement(this.id)");

        newList.appendChild(textNode);
        newList.appendChild(button);
        ul.appendChild(newList);

        counter++;
    }
}

function deleteSectorElement(id){
    const removedSector = sectorList.splice(id.slice(14,15), 1);
    removedSector[0].disabled = false;
    updateSectorList();
}