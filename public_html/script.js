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
    

function generate(w, h){
    pics = [];
    let ps = picset.slice(0);
     for (let i=0; i<w*h/2; i++) {
        let r = Math.floor(Math.random() * ps.length);
        pics.push(ps[r] + "1");
        pics.push(ps[r] + "2");
        ps.splice(r, 1);
    }
//    pics = shuffle(pics);
    //----------------------------------------
    document.getElementById("atminas-spele").innerHTML = "";
    let index = 0;
    for (let temph=0; temph<h; temph++){
        let divs = document.createElement("DIV"); divs.setAttribute("class","rinda");
        for (let tempw=0; tempw<w; tempw++){
            let card = document.createElement("DIV"); card.setAttribute("class","flip");
            let innercard = document.createElement("DIV"); innercard.setAttribute("class", "flipinner");
            innercard.classList.add(pics[index].substring(0, pics[index].length - 1));
            let backcard = document.createElement("DIV"); backcard.setAttribute("class", "flipback");
            let frontcard = document.createElement("DIV"); frontcard.setAttribute("class", "flip-card-front");
            let pic = document.createElement("IMG");
            pic.src = "img/RV1G.png";
            pic.style = "width:100px; height:100px";
            let image = document.createElement("IMG");
            image.src = "img/" + pics[index] + ".png";
            image.style = "width:100px; height:100px";
            innercard.addEventListener('click', function () {
                let cond = document.getElementsByClassName('flipped');
                if(!innercard.classList.contains('flipped') && !innercard.classList.contains('fixed') && cond.length<2) {
                    innercard.classList.toggle('flipped');
                    setTimeout(Match(),10);
                }
            });
            
            divs.appendChild(pic);
            document.getElementById("atminas-spele").appendChild(divs);
        }
    }
}



