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
    
function shuffle(array) {
    var ci = array.length, tv, ri;

    while (0 !== ci) {

        ri = Math.floor(Math.random() * ci);
        ci -= 1;
        tv = array[ci];
        array[ci] = array[ri];
        array[ri] = tv;
    }

    return array;
}
    

function generate(w, h){
    pics = [];
    let ps = picset.slice(0);
     for (let i = 0; i < w*h / 2; i++) {
         
        let r = Math.floor(Math.random() * ps.length);
        pics.push(ps[r] + "1");
        pics.push(ps[r] + "2");
        ps.splice(r, 1);
    }
    pics = shuffle(pics);
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
            let frontcard = document.createElement("DIV"); frontcard.setAttribute("class", "flipfront");
            let pic = document.createElement("IMG");
            pic.src = "img/RV1G.png";
            pic.style = "width:100%; height:100%";
            let image = document.createElement("IMG");
            image.src = "img/" + pics[index] + ".png";
            image.style = "width:100%; height:100%";
            innercard.addEventListener('click', function () {
                let cond = document.getElementsByClassName('flipped');
                if(!innercard.classList.contains('flipped') && !innercard.classList.contains('fixed') && cond.length<2) {
                    innercard.classList.toggle('flipped');
                    setTimeout(match(),10);
                }
            });
            frontcard.appendChild(pic);
            backcard.appendChild(image);
            innercard.appendChild(backcard);
            innercard.appendChild(frontcard);
            card.appendChild(innercard);
            divs.appendChild(card);
            index++;
            
            document.getElementById("atminas-spele").appendChild(divs);
        }
    }
}

function match(){
    let flips = document.getElementsByClassName("flipped");
    
    if (flips.length > 1) {
        let meme = testClass(flips[0]);
        let pair = document.getElementsByClassName(meme);
        if(pair[0].classList.contains("flipped") && pair[1].classList.contains("flipped")) {
            setTimeout(function() {
                pair[0].classList.add('fixed');
                pair[1].classList.add('fixed');
                pair[0].classList.toggle('flipped');
                pair[1].classList.toggle('flipped');
                checkWin();
            }, 500);

        } else {
            setTimeout(function() {
                const len = flips.length;
                for(let j= 0; j < len; j++) {
                    flips[0].classList.toggle('flipped');
                }
            }, 1000);
        }

    }
}

function testClass(elem) {
    let value;
    for (let i = 0; i < picset.length; i++) {
        if (elem.classList.contains(picset[i])) {
            value = picset[i];
        }
    }
    return value;
}



