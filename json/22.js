var btn = document.getElementById("click");
btn.addEventListener("click", function click(){
    const click = new Audio('../sound/click.wav');
    click.play();
});

var btn = document.getElementById("pon");
btn.addEventListener("click", 
function pon(){
    const pon = new Audio('../sound/碰.wav');
    pon.play();
});

var btn = document.getElementById("chi");
btn.addEventListener("click", function chi(){
    const chi = new Audio('../sound/吃.wav');
    chi.play();
});

var btn = document.getElementById("gun");
btn.addEventListener("click", function gun(){
    const gun = new Audio('../sound/槓.wav');
    gun.play();
});

var btn = document.getElementById("pe");
btn.addEventListener("click", function pe(){
    const pe = new Audio('../sound/拔北.wav');
    pe.play();
});

var btn = document.getElementById("lige");
btn.addEventListener("click", function lige(){
    const lige = new Audio('../sound/立直.wav');
    lige.play();
});

var btn = document.getElementById("lon");
btn.addEventListener("click", function lon(){
    const lon = new Audio('../sound/和.wav');
    lon.play();
});

var btn = document.getElementById("tsumo");
btn.addEventListener("click", function tsumo(){
    const tsumo = new Audio('../sound/自摸.wav');
    tsumo.play();
});

function rint(min, max){ //隨機取min到max的整數
    return Math.round(Math.random()*(max-min)+min);
}
function rstyle(min, max){ //順子或對子
     var rstyle = Math.round(Math.random()*(max-min)+min);
    if (rstyle == 1){
        return "順子"
    }
    else{
        return "對子"
    }
}
function rword(min, max){ //字牌
    var word = ["東","南","西","北","中","發","白"]
    return word[Math.round(Math.random()*(max-min)+min)]
}

var play = document.getElementById("play");
play.addEventListener("click", function play(){                   
    var 萬 = {nb:rint(1,9),style:rstyle(1,2)}; var 筒 = {nb:rint(1,9),style:rstyle(1,2)}; 
    var 條 = {nb:rint(1,9),style:rstyle(1,2)}; var 字 = {nb:rword(1,7),style:rstyle(2,2)};
    var card = [萬,筒,條,字]
    for (let t=0; t<3; t++){
        if ((card[t])["nb"] == 1) {(card[t])["nb"] = 2}
        else if ((card[t])["nb"] == 9) {(card[t])["nb"] = 8}
        var 萬c = [萬["nb"]-1,萬["nb"],萬["nb"]+1]


        console.log((card[t])["nb"])
    }
    console.log()

   
})
