function doThing() {
    let coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    let content = this.nextElementSibling;
                    if (content.style.display === "block") {
                        content.style.display = "none";
                        content.style.height = "100%";
                        this.style.width = "50%";
                    } else {
                        content.style.display = "block";
                        this.style.width = "100%";
            }
        });
    }
}