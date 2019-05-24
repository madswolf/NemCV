

function onProgressBarClick(event){
    scrollToElement(event.slice(4))
}

function scrollToElement(elementName){
    console.log(elementName);
    const element = document.getElementById(elementName);
    element.scrollIntoView({behavior: "smooth"});
}

const allElements = document.getElementsByClassName("section");
const navButtons = document.getElementsByClassName("item");
let windowHeight = window.innerHeight;
let lastScrollTop = 0;

const checkViewingPort = () => {
    const onScroll = () => {
        lastScrollTop = window.pageYOffset;
        for(let i = 0; i < allElements.length; i++){
            const boundingRect = allElements[i].getBoundingClientRect();
            const  top = boundingRect.top;
            if((top < windowHeight && top > 0) || (boundingRect.bottom >= innerHeight && top <= 0)){
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


let scrollTimeout;
let scrollEndDelay = 500;
let scrollDirection = 0;
window.addEventListener('wheel', (event) => {

    if(scrollTimeout !== null){
        clearTimeout(scrollTimeout);
    }

    scrollDirection = event.deltaY;
    scrollTimeout = setTimeout(scrollEndHandler, scrollEndDelay);

});

const portionOfNewViewForAutoScroll = 0.2;
function scrollEndHandler() {
    let prevElement = null;
    for(let i = 0; i < allElements.length; i++) {
        const boundingRect = allElements[i].getBoundingClientRect();
        const top = boundingRect.top;
        const bottom = boundingRect.bottom;

        if (scrollDirection > 0) {
            if (top < innerHeight && top > 0) {
                if (innerHeight - top >= innerHeight * portionOfNewViewForAutoScroll) {
                    allElements[i].scrollIntoView({behavior: "smooth"});
                    console.log("called");
                    return;
                } else {
                    prevElement.scrollIntoView({behavior: "smooth", block: "end"});
                    return;
                }
            }
        } else{
            if (bottom < innerHeight && bottom > 0) {
                if (innerHeight - bottom >= innerHeight * portionOfNewViewForAutoScroll) {
                    allElements[i].scrollIntoView({behavior: "smooth", block: "end"});
                    console.log("called");
                    return;
                } else {
                    allElements[i+1].scrollIntoView({behavior: "smooth"});
                    return;
                }
            }
        }
        prevElement = allElements[i];
    }

}


const update = () => {
    windowHeight = window.innerHeight;
};

window.addEventListener("resize", update);