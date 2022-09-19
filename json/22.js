function click(){
    const click = new Audio('../sound/click.wav');
    click.play();
}

function pon(){
    const pon = new Audio('../sound/碰.wav');
    pon.play();
}

function chi(){
    const chi = new Audio('../sound/吃.wav');
    chi.play();
}

function gun(){
    const gun = new Audio('../sound/槓.wav');
    gun.play();
}

function pe(){
    const pe = new Audio('../sound/拔北.wav');
    pe.play();
}

function lige(){
    const lige = new Audio('../sound/立直.wav');
    lige.play();
}

function lon(){
    const lon = new Audio('../sound/和.wav');
    lon.play();
}

function tsumo(){
    const tsumo = new Audio('../sound/自摸.wav');
    tsumo.play();
}


var btn = document.getElementById("click");
btn.addEventListener("click", click);

