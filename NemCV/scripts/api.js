const apisector = "https://syst-api.azurewebsites.net/sectors";
const apicv = "https://syst-api.azurewebsites.net/cv";

let sectors = [];

async function getSectors(){
    fetch(apisector)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            sectors = myJson;
            populateDropdown();
        }).catch(function () {
            dropdownError();
    });
}

function populateDropdown() {
    const select = document.getElementById("sectors");
    for (let i = 0; i < sectors.length; i++) {
        const sector = sectors[i];
        const el = document.createElement("option");
        el.text = sector;
        el.value = sector;
        select.add(el);
    }
    select.remove(0);
    select.disabled = false;
}

function dropdownError(){
    const select = document.getElementById("sectors");
    select.remove(0);
    const el = document.createElement("option");
    el.text = "Error on loading...";
    el.value = "Error on loading...";
    select.add(el);
}

async function validateCV(cv){

}

