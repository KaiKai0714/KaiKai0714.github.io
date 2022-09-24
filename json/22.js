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
    if (rstyle == 1){  //1順子
        return "順子"
    }
    else{              //2對子
        return "對子"
    }
}
function rword(min, max){ //字牌
    var word = ["東","南","西","北","中","發","白"];
    return word[Math.round(Math.random()*(max-min)+min)]
}

var play = document.getElementById("play");
play.addEventListener("click", function play(){                   
    var 萬c = {nb:rint(1,9),style:rstyle(1,2)}; var 筒c = {nb:rint(1,9),style:rstyle(1,2)}; 
    var 條c = {nb:rint(1,9),style:rstyle(1,2)}; var 字c = {nb:rword(0,6),style:rstyle(2,2)};
    var 雀c = {nb:rint(1,9),w:rword(0,6),flower:rint(0,1),style:rstyle(2,2)}
    var card = [萬c,筒c,條c,字c,雀c]
    for (let t=0; t<5; t++){
        if ((card[t])["style"] == "順子") {
            if ((card[t])["nb"] == 1) {(card[t])["nb"] = 2}
            else if ((card[t])["nb"] == 9) {(card[t])["nb"] = 8}
            if (t == 0){var 萬 = [萬c["nb"]-1,萬c["nb"],萬c["nb"]+1]}
            else if (t == 1){var 筒 = [筒c["nb"]-1,筒c["nb"],筒c["nb"]+1]}
            else if (t == 2){var 條 = [條c["nb"]-1,條c["nb"],條c["nb"]+1]}
        }
        else if ((card[t])["style"] == "對子") {
            if (t == 0){var 萬 = [萬c["nb"],萬c["nb"],萬c["nb"]]}
            else if (t == 1) {var 筒 = [筒c["nb"],筒c["nb"],筒c["nb"]]}
            else if (t == 2) {var 條 = [條c["nb"],條c["nb"],條c["nb"]]}
            else if (t == 3) {var 字 = [字c["nb"],字c["nb"],字c["nb"]]}
            else if (t == 4) {
                if (雀c["flower"] == 0) {var 雀 = [`${雀c["nb"]}萬`,`${雀c["nb"]}萬`]}
                else {var 雀 = [`${雀c["w"]}字`,`${雀c["w"]}字`]}
            }
        }
    }

    for (let T=1; T<15; T++){
        var c = document.getElementById(`c${T}`);
        if (T >= 1 && T <= 3){
            c.src = `../pic/mjcard/${萬[T-1]}萬.png`
        }
        else if (T >= 4 && T <= 6){
            c.src = `../pic/mjcard/${筒[T-4]}筒.png`
        }
        else if (T >= 7 && T <= 9){
            c.src = `../pic/mjcard/${條[T-7]}條.png`
        }
        else if (T >= 10 && T <= 12){
            c.src = `../pic/mjcard/${字[T-10]}字.png`
        }
        else if (T >= 13 && T <= 14){
            c.src = `../pic/mjcard/${雀[T-13]}.png`
        }
        console.log()
    }
    console.log()
})
