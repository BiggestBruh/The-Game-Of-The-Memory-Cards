function expand(){
    let i=document.getElementsByClassName("rinda").length;
    let divs = document.createElement("DIV"); divs.setAttribute("class","rinda");
    divs.innerHTML=(i+1)+")";
    let ievads1 = document.createElement("INPUT"); ievads1.style="text-align: center";
    let ievads2 = document.createElement("INPUT"); ievads2.style="text-align: center";
    let poga = document.createElement("INPUT"); poga.value="novākt"; poga.type="button";
    poga.onclick=()=>{
       
        poga.parentNode.remove();
    };
    divs.appendChild(ievads1); divs.appendChild(ievads2); divs.appendChild(poga);
    document.getElementById("forma").appendChild(divs);
}


