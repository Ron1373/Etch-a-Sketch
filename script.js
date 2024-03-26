const container=document.querySelector("#container");
for (i=0; i<8; i++){
    const row=document.createElement("div");
    row.classList.add("row")
    for (j=0;j<8;j++){
        const div=document.createElement("div");
        div.addEventListener("mouseenter", function(event){
            div.classList.add("clicked");
        })
        div.classList.add("div");
        row.appendChild(div);
    }
    container.appendChild(row);
};

function getDimensionsFromUser(){
    let desiredNumberSquares = prompt("Enter the desired number of squares per side:");
    if (desiredNumberSquares>100){
        getDimensionsFromUser();
    };
    container.innerHTML="";
    const newContainer=document.querySelector("#container");
    for (i=0; i<desiredNumberSquares; i++){
        const row=document.createElement("div");
        row.classList.add("row")
        for (j=0;j<desiredNumberSquares;j++){
            const div=document.createElement("div");
            div.addEventListener("mouseenter", function(event){
                div.classList.add("clicked");
            })
        div.classList.add("div");
        row.appendChild(div);
    }
    newContainer.appendChild(row);
};
};





