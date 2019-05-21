
eduList = [];
workList = [];

function createAccomplishment(event){
    console.log("Clicked");
    event.preventDefault();
   
    const formElement= document.getElementById(event.target.id);
    let children = formElement.children;
    const place = children[2].value;
    const type = children[4].value;
    const startYear = children[6].value;
    const endYear = children[8].value;

    const accomplishment = {
        "name": place,
        "title": type,
        "from": startYear,
        "to": endYear
    };

    if(formElement.id.includes("work")){
        workList.push(accomplishment);
        updateList("work",workList);
    }else {
        eduList.push(accomplishment);
        updateList("education", eduList);
    }
    
    formElement.reset();
}

function updateList(name, list){
    const ul = document.getElementById(name + "-list");
    let kind = "";
    if(name == "work"){
        kind = "Erfaring";
    }else {
        kind = "Uddannelse";
    }
    ul.innerHTML = "";

    let counter = 0;
    list.forEach(element => {
        const newList = document.createElement("LI");
        const textNode = document.createTextNode(
            kind + ": " + element.name + ", " + element.title + " " + element.from + " - " + element.to);

        const button = document.createElement("button");
        button.innerHTML = "X";
        button.setAttribute("id", name + "-delete-" + counter);
        button.setAttribute("onclick", "deleteListElement(this.id)",);

        newList.appendChild(textNode);
        newList.appendChild(button);
        ul.appendChild(newList);

        counter++;
    })
}

function deleteListElement(id){
    if(id.includes("work")){
        workList.splice(id.slice(11,12), 1);
        updateList("work", workList);
    } else{
        eduList.splice(id.slice(11,12), 1);
        updateList("education", eduList);
    }
    
    
}


