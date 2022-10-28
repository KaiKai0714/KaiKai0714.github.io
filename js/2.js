
    var a=document.getElementById("a");
    var b=document.getElementById("b");
    var c=document.getElementById("c");
    var d=document.getElementById("d");
    var b1=document.getElementById("pre");
    var b2=document.getElementById("next");
    var num=4;
    b1.onclick=function(){
        num--;
        if(num<1)
            num=4;
        panduan();
    }
     b2.onclick=function(){
        num++;
        if(num>4)
            num=1;
        panduan();
     }
     function panduan(){
        if(num==1){
            a.style.display="block"
            b.style.display="none"
            c.style.display="none"
            d.style.display="none"
        }
        if(num==2){
            a.style.display="none"
            b.style.display="block"
            c.style.display="none"
            d.style.display="none"
        }
        if(num==3){
            a.style.display="none"
            b.style.display="none"
            c.style.display="block"
            d.style.display="none"
        }
        if(num==4){
            a.style.display="none"
            b.style.display="none"
            c.style.display="none"
            d.style.display="block"
        }
    }