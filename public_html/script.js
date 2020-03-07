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
        generate(4, 3);
    });

function generate(w, h){
    document.getElementById("atminas-spele").innerHTML = "";
    for (let temph=0; temph<h; temph++){
        let divs = document.createElement("DIV"); divs.setAttribute("class","rinda");
        for (let tempw=0; tempw<w; tempw++){
//            let pic = document.createElement("IMG");
//            pic.src = "img/RV1G.png";
//            pic.style.width = "100px";
//            pic.style.height = "150px";
//            pic.style.margin = "25px";
//            divs.appendChild(pic);
            document.getElementById("atminas-spele").appendChild(divs);
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


