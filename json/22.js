function click(){
    const click = new Audio('../sound/click.wav');
    click.play();
}

var btn = document.getElementById("click");
btn.addEventListener("click", click);

