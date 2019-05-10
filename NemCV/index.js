

function onProgressBarClick(event){
    document.getElementById(event).classList.add("in-viewport");
    const element = document.getElementById(event.slice(4));
    const  bounding = element.getBoundingClientRect();
    console.log(bounding);
    element.scrollIntoView({behavior: "smooth"});
}



window.addEventListener('scroll', () => {

});

