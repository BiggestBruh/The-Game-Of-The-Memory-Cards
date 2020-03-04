    var i=4;
    var j=3;
    
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
            pic.style.height = "100%";
            divs.appendChild(pic);
            document.getElementById("forma").appendChild(divs);
            }
        }
        
    }

function sizeup(){
    i=i+1;
    j=j+1;
    generate();
}
function sizedown(){
    i=i-1;
    j=j-1;
    generate();
}


