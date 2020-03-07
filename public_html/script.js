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
    let pics = [];
    
    window.addEventListener("load", function() {
        generate(4, 3);
    });

function generate(w, h){
    document.getElementById("atminas-spele").innerHTML = "";
    let index = 0;
    for (let temph=0; temph<h; temph++){
        let divs = document.createElement("DIV"); divs.setAttribute("class","rinda");
        for (let tempw=0; tempw<w; tempw++){
            let card = document.createElement("DIV"); card.setAttribute("class","flip");
            let innercard = document.createElement("DIV"); innercard.setAttribute("class", "flipinner");
            inndercard.classList.add(pics[index].substring(0, pics[index].length - 1));
            let backcard = document.createElement("DIV"); backcard.setAttribute("class", "flipback");
            let frontcard = document.createElement("DIV"); frontcard.setAttribute("class", "flip-card-front");
            let pic = document.createElement("IMG");
            pic.src = "img/RV1G.png";
            pic.style = "width:100%; height:100%";
            let image = document.createElement("IMG");
            image.src = "img/" + pics[index] + ".jpg";
            image.style = "width:100%; height:100%";
            cardIn.addEventListener('click', function () {
                let cond = document.getElementsByClassName('flipped')
                if(!cardIn.classList.contains('flipped') && !cardIn.classList.contains('fixed') && cond.length<2) {
                    cardIn.classList.toggle('flipped');
                    setTimeout(Match(),10);
                }
            });
            
            divs.appendChild(pic);
            document.getElementById("atminas-spele").appendChild(divs);
        }
    }
}



