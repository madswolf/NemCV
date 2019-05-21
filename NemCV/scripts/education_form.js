
educationList = [];

function createEducation(event){
    console.log("Clicked");
    event.preventDefault();
    const eduPlace = document.getElementById("edu-place").value;
    const eduType = document.getElementById("edu-type").value;
    const eduStartYear = document.getElementById("edu-startyear").value;
    const eduEndYear = document.getElementById("edu-endyear").value;

    const education = {
        "name": eduPlace,
        "title": eduType,
        "from": eduStartYear,
        "to": eduEndYear
    };

    educationList.push(education);
    updateEducationList();
    document.getElementById("education-form").reset();
}

function updateEducationList(){
    const ul = document.getElementById("education-list");
    ul.innerHTML = "";

    let counter = 0;
    educationList.forEach(element => {
        const newList = document.createElement("LI");
        const textNode = document.createTextNode("Sted: " +
            element.place + " Title: " + element.type + " År: " +
            element.start + " - " + element.end);

        const button = document.createElement("button");
        button.innerHTML = "X";
        button.setAttribute("id", "edu-delete-" + counter);
        button.setAttribute("onclick", "deleteEducation(this.id)");

        newList.appendChild(textNode);
        newList.appendChild(button);
        ul.appendChild(newList);

        counter++;
    })
}

function deleteEducation(id){
    console.log(id);
    educationList.splice(id.slice(11,12), 1);
    updateEducationList();
}


