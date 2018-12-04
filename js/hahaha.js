window.onscroll = function(e){
    var ai1 = document.getElementById('ai1');
    var web1 = document.getElementById('web1');
    var home1 = document.getElementById('home1');
    var about1 = document.getElementById('about1');
    var toai1 = document.getElementById('toai');
    var e =e || window.event;
    var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
    var nani = document.getElementsByClassName('nevigation')[0];
    function getabsolute(target) {
        var mytop = 0;
        var e = target;
        while(e != null){
            mytop += e.offsetTop;
            e = e.offsetParent
        }
        return mytop;
    }
    var windowheight = document.documentElement.clientHeight;
    if (scrolltop>windowheight) {
        nani.setAttribute("style","background-color: rgb(180,180,180,0.5)");
    }
    if(scrolltop<=windowheight){
        nani.setAttribute("style","background-color: none");
        home1.setAttribute("style","background-color: rgb(100,100,100,0.5");
        about1.setAttribute("style","background-color: none");
        ai1.setAttribute("style","background-color: none");
        web1.setAttribute("style","background-color: none");
    }
    if((scrolltop>windowheight)&&(scrolltop<=(windowheight * 2.2))){
        about1.setAttribute("style","background-color: rgb(100,100,100,0.5");
        home1.setAttribute("style","background-color: none");
        ai1.setAttribute("style","background-color: none");
        web1.setAttribute("style","background-color: none");
    }
    if((scrolltop>(windowheight * 2.2))&&(scrolltop<=(windowheight * 3.4))){
        ai1.setAttribute("style","background-color: rgb(100,100,100,0.5");
        about1.setAttribute("style","background-color: none");
        home1.setAttribute("style","background-color: none");
        web1.setAttribute("style","background-color: none");
    }
    if((scrolltop>(windowheight * 3.4))){
        web1.setAttribute("style","background-color: rgb(100,100,100,0.5");
        home1.setAttribute("style","background-color: none");
        about1.setAttribute("style","background-color: none");
        ai1.setAttribute("style","background-color: none");
    }
}