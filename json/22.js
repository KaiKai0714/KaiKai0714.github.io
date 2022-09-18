function click(){
    const click = new Audio('../sound/button.wav');
    click.play();
}

var btn = document.getElementById("pon");
btn.addEventListener("click", click);

