var blocks;

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
    blocks = h*w;
    golbalh = h;
    globalw = w;
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

function checkWin() {
    const guessed = document.getElementsByClassName('fixed');
    if(guessed.length == blocks) {
        alert("I hate Jojo's Bizarre Adventure. I immediately lose respect for anyone who watches it, and especially those who praise it. Here's why:Name 20 successful people that watches it.Popular series basically run the show when it comes to anime.This includes shows like Dragon Ball Z, Bleach, Sailor Moon, Death Note, Attack On Titan, Sword Art Online, Love Live!, Nichijou, Clannad et al.Popular series has shows making significant contributions to the entire anime industry.Jojo's Bizarre Adventure on the other hand pulls most of the heavy weight packaging from teenage angst with each season. They then lay basic fight scenes and a joke of a protagonist on it. It generally lags behind popular series by a mile or two in inventiveness. I never seen the show on TV or been mentioned by anyone over the age of 25.So tell me again, how exactly do Jojo's Bizarre Adventure innovate? It's team even struggle to release a new theme with each season, and character design is about the only original thing with this show.Yes, Jojo's Bizarre Adventure is stable because they are standing on the shoulders of socially awkward teenagers. Most of the hard work is hashed out before it's creators ever start making anime.This is fine, and what anime is all about, but I prefer to be in with the leaders rather than the followers.What really irks me and what has really brewed my hatred are Jojo's Bizarre Adventure fans. They seem to think Jojo's Bizarre Adventure is responsible for all that is good in the anime world.I have just proven how false this is.In my experience, Jojo's Bizarre Adventure fans (virgins, teenagers, and manchildren) are much less helpful than the alternative.If you want nice fight scenes, watch Dragon Ball Z or One Punch Man.If you like music, K - ON.If you prefer, Clannad or Anohana.But please, don't feed the idiot magnet that is Jojo's Bizarre Adventure!");
    }
}
