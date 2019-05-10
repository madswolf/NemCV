

function onProgressBarClick(event){
    const element = document.getElementById(event.slice(4));
    element.scrollIntoView({behavior: "smooth"});
}



const allElements = document.getElementsByClassName("section");
const navButtons = document.getElementsByClassName("item");
let windowHeight = window.innerHeight;

const checkViewingPort = () => {
    const onScroll = () => {
        for(let i = 0; i < allElements.length; i++){
            const boundingRect = allElements[i].getBoundingClientRect();
            const  top = boundingRect.top;
            if(top < windowHeight && top >= 0){
                navButtons[i].classList.add("in-viewport");
            } else{
                navButtons[i].classList.remove("in-viewport");
            }
        }
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
};
checkViewingPort();

let lastScrollDirection = 0;
window.addEventListener('wheel', () => {
    const scrollDirection = window.pageYOffset;

    if(scrollDirection < lastScrollDirection){
        const element = Math.floor(scrollDirection / windowHeight);
        console.log(element);
        document.getElementById(allElements[element].id).scrollIntoView({behavior: "smooth"});
        lastScrollDirection = scrollDirection;
    } else {
        const element = Math.ceil(scrollDirection / windowHeight);
        console.log(element);
        document.getElementById(allElements[element].id).scrollIntoView({behavior: "smooth"});
        lastScrollDirection = scrollDirection;
    }

    console.log(window.innerHeight);
    console.log(window.pageYOffset);
});


const update = () => {
    lastScrollDirection = window.pageYOffset;
    windowHeight = window.innerHeight;
};

window.addEventListener("resize", update);