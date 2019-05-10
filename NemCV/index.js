

function onProgressBarClick(event){
    console.log(event.slice(4));
    const element = document.getElementById(event.slice(4));
    element.scrollIntoView({behavior: "smooth"});
}

