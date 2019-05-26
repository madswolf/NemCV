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

getSectors();

function dropdownError(){
    const select = document.getElementById("sectors");
    select.remove(0);
    const el = document.createElement("option");
    el.text = "Error on loading...";
    el.value = "Error on loading...";
    select.add(el);
}

function createCvForValidation(){

  /*  const education = eduList;
    const employers = workList;
    const sectors = sectorList;
    const userInfo = info;

    const name = userInfo.name;
    const age = userInfo.age;
    const email = userInfo.email;
    const city = userInfo.city;
    const picture = userInfo.picture;



    const cv = {name, age, email, city, picture, description, employers, education, sectors};*/
    const cv = {
        "name": "Hest McHestert",
        "age": 34,
        "email": "hest@hestenettet.dk",
        "city": "Hestved",
        "picture": "https://c8.alamy.com/comp/EJ3JX7/architect-with-blueprints-gesturing-thumbs-up-outdoors-EJ3JX7.jpg",
        "description": "Håber jeg finder det fede arbejde",
        "employers":[
            {
                "name": "Google",
                "title": "Pedel",
                "from": "2012"
            },
            {
                "name": "Stalden",
                "title": "Vallak",
                "from": "2007-01-01",
                "to": "2012-03-01"
            }
        ],"education": [
            {
                "name": "ITU",
                "title": "cand.it",
                "from": "2018",
                "to": "2020"
            }
        ],
        "sectors": [
            "Transport", "Kultur og fritid"
        ]
    };


    if(validateCV(cv)){
        window.location = "cv.html";
        window.localStorage.setItem("cv",JSON.stringify(cv));
    }

    console.log(JSON.stringify(cv));

}

function testCVValidation(){
    const cv = {
        "name": "Hest McHestert",
        "age": 34,
        "email": "hest@hestenettet.dk",
        "city": "Hestved",
        "picture": "http://hest.com/hest.jpg",
        "description": "Håber jeg finder det fede arbejde",
        "employers":[
            {
            "name": "Google",
            "title": "Pedel",
            "from": "2012"
        },
            {
                "name": "Stalden",
                "title": "Vallak",
                "from": "2007-01-01",
                "to": "2012-03-01"
            }
        ],"education": [
            {
                "name": "ITU",
                "title": "cand.it",
                "from": "2018",
                "to": "2020"
            }
        ],
        "sectors": [
            "Transport", "Kultur og fritid"
        ]
    };
    validateCV(cv);
}

async function validateCV(cv){
    fetch(apicv, {
        method: "POST",
        body: JSON.stringify(cv),
        headers:{
            "content-type": "application/json"
        }}).then((response) => {
            if(response.ok === true){
                alert("CV  modtaget")
            } else{
                alert(response.json())
            }
    });

}
