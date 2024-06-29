let points=0
let highscore=0
let firstarr = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')
let secondarr=['ArrowUp','ArrowDown','ArrowLeft','ArrowRight']
let keyarr=firstarr.concat(secondarr)
function getrandomnum(max,min){
    return Math.floor(Math.random()*(max-min+1))+min
}
function startassrandomkey(){
    document.getElementById("start_but").setAttribute("hidden","")
    let pntdiv=document.createElement("div")
    pntdiv.className="points"
    pntdiv.innerHTML=`<div>Points:</div> <div id="pnt"></div>`
    document.getElementById("keys").before(pntdiv)
    assrandomkey();
}
function assrandomkey() {
    let rand_num = getrandomnum(0, 39);
    document.getElementById("keys").innerHTML = keyarr[rand_num];

    function keydownHandler(event) {
        if (event.key === document.getElementById("keys").innerHTML) {
            points += 10;
            document.getElementById("pnt").innerHTML = points;
            assrandomkey();
        } else {
            document.body.style.backgroundColor="red"
            gameover();
        }
        document.removeEventListener("keydown", keydownHandler);
    }

    document.addEventListener("keydown", keydownHandler);
}
function gameover() {
    document.body.style.backgroundColor = 'red'; // Set background color to red
    setTimeout(function () {
        alert("The Game is Over\n Your Points are: " + points);
        document.body.style.backgroundColor = ''; // Revert to default background color
        if(highscore<points){
            highscore=points
            document.getElementById("high_score").innerHTML=highscore
        }
        points = 0;
        document.getElementById("pnt").innerHTML = points;
        document.querySelector(".points").remove()
        document.getElementById("start_but").removeAttribute("hidden");
        document.getElementById("keys").innerHTML =""
    }, 1000);
}