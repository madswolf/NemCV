function createCV() {
    let cv = JSON.parse(window.localStorage.getItem("cv"));

    let sectorElement = document.getElementById("sector");
    sectorElement.innerText = "";

    let sectorCV = getAndDelete(cv,"sectors");
    for(let i = 0 ; i < sectorCV.length ; i++){
        let list = document.createElement("LI",);
        let text = document.createElement("P");
        text.innerText = sectorCV[i];
        list.appendChild(text);
        sectorElement.appendChild(list);
    }

    let currentWorkElement = document.getElementById("current-work");
    let workElement = document.getElementById("work");
    const workList = getAndDelete(cv,"employers");
    for(let i = 0 ; i < workList.length ; i++){
        const work = workList[i];

        let listElement = document.createElement("LI");
        let text = document.createElement("P");
        listElement.appendChild(text);
        if(work.to === undefined){
            text.innerText = work.name + ", " + work.title + " (" + work.from + ")";
            currentWorkElement.appendChild(listElement);
        }else{
            text.innerText = work.name + ", " + work.title + " (" + work.from + " - " + work.to + ")";
            workElement.appendChild(listElement);
        }
    }

    let educationElement = document.getElementById("education");
    const educationList = getAndDelete(cv,"education");
    for(let i = 0 ; i < educationList.length ; i++){
        const education = educationList[i];
        let listElement = document.createElement("LI");
        let text = document.createElement("P");
        text.innerText = education.name + ", " + education.title + " (" + education.from + " - " + education.to + ")";
        listElement.appendChild(text);
        educationElement.appendChild(listElement);
    }

    let imgElement = document.getElementById("picture");
    imgElement.src = getAndDelete(cv,"picture");

    //the rest is just swapping out text, so a for-each loop is sufficient
    Object.keys(cv).forEach((key) =>{
        let element = document.getElementById(key);
        element.innerText = cv[key];
    });
}
function getAndDelete(cv,key) {
let element = cv[key];
delete cv[key];
return element;
}