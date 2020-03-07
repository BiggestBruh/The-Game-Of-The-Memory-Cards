    const picset = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o"
    ];
    
    window.addEventListener("load", function() {
        let sizesmal = document.createElement("BUTTON");
        sizesmal.setAttribute("class", "sbutton");
        let sizemed = document.createElement("BUTTON");
        sizemed.setAttribute("class", "sbutton");
        let sizelarg = document.createElement("BUTTON");
        sizelarg.setAttribute("class", "sbutton");
        let textsmal = document.createTextNode("4 x 3");
        let textmed = document.createTextNode("5 x 4");
        let textlarg = document.createTextNode("6 x 5");
        sizesmal.appendChild(textsmal);
        sizemed.appendChild(textmed);
        sizelarg.appendChild(textlarg);
        document.body.appendChild(sizesmal);
        document.body.appendChild(sizemed);
        document.body.appendChild(sizelarg);
        sizesmal.onclick=()=>{
        generate(4, 3);
        };
        sizemed.onclick=()=>{
        generate(5, 4);
        };
        sizelarg.onclick=()=>{
        generate(6, 5);
        };
    });

function generate(w, h){
    document.getElementById("RV1G-atminas-spele").innerHTML = "";
    for (let temph=0; temph<h; temph++){
        let divs = document.createElement("DIV"); divs.setAttribute("class","rinda");
        for (let tempw=0; tempw<w; tempw++){
            let pic = document.createElement("IMG");
            pic.src = "img/RV1G.png";
            pic.style.width = "10%";
            pic.style.height = "15%";
            pic.style.margin = "25px";
            divs.appendChild(pic);
            document.getElementById("forma").appendChild(divs);
            }
        }
        
    }

function sizeup(){
    if (i<6){
    i=i+1;
    j=j+1;
    generate();
    }
}
function sizedown(){
    if (i>4){
        i=i-1;
        j=j-1;
        generate();
    }
}


