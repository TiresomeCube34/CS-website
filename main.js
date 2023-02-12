var inProgress = false;

//window.addEventListener ("load",()=>{}) will only run the code in the brakcets once the page is laoded
window.addEventListener("load",()=>{
    let i_button = document.getElementById("invert_button");
    i_button.addEventListener("click", (e)=>{
        if(inProgress){return;}
        inProgress = true;
        let body = document.querySelector("body");
        body.classList.toggle("invertColors");
        setTimeout(()=>{
            body.style = "background-color: blue;";
            setTimeout(()=>{
                body.classList.toggle("invertColors");
                body.style = "";
                inProgress = false;
            }, 3000);
        }, 2000 );
    });
});
