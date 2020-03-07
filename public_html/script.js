    var i=4;
    var j=3;
    
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
        let buttonup = document.createElement("BUTTON");
        let buttondown = document.createElement("BUTTON");
        let textup = document.createTextNode("Bigger");
        let textdown = document.createTextNode("Smaller");
        buttonup.appendChild(textup);
        buttondown.appendChild(textdown);
        document.body.appendChild(buttonup);
        document.body.appendChild(buttondown);
        buttonup.onclick=()=>{
        sizeup();
        };
        buttondown.onclick=()=>{
        sizedown();
        };
        generate();
    });

function generate(){
    for (let tempj=0; tempj<j; tempj++){
        let divs = document.createElement("DIV"); divs.setAttribute("class","rinda");
        for (let tempi=0; tempi<i; tempi++){
            let pic = document.createElement("IMG");
            pic.src = "img/RV1G.png";
            pic.style.width = "100%";
            pic.style.height = "150%";
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


