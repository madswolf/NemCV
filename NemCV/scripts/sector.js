let sectorList = [];

function addSector(event){
    event.preventDefault();
    if(sectorList.length == 3){
        //Lav metode som alerter brugeren om at listen er fuld
        return;
    }
    const sectorDropDown = document.getElementById("sectors");
    let selected = sectorDropDown.options[sectorDropDown.selectedIndex];
    sectorList.push(selected);
    selected.disabled = true;
    
    updateSectorList();
    
}

function updateSectorList(){
    const ul = document.getElementById("sector-list");
    ul.innerHTML = "";

    let counter = 0;
    sectorList.forEach(element => {
        const newList = document.createElement("LI");
        const textNode = document.createTextNode(element.text);

        const button = document.createElement("button");
        button.innerHTML = "X";
        button.setAttribute("id", "sector-delete-" + counter);
        button.setAttribute("onclick", "deleteSectorElement(this.id)");

        newList.appendChild(textNode);
        newList.appendChild(button);
        ul.appendChild(newList);

        counter++;
    })
}

function deleteSectorElement(id){
    const removedSector = sectorList.splice(id.slice(14,15), 1);
    removedSector[0].disabled = false;
    updateSectorList();
}