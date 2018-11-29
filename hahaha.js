window.onscroll = function(e){
    var ai1 = document.getElementById('ai1');
    var web1 = document.getElementById('web1');
    var home1 = document.getElementById('home1');
    var about1 = document.getElementById('about1');
    var e =e || window.event;
    var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
    var nani = document.getElementsByClassName('nevigation')[0];
    if (scrolltop>630) {
        nani.setAttribute("style","background-color: rgb(220,220,220,0.5)");
    }
    if(scrolltop<=630){
        nani.setAttribute("style","background-color: none");
        home1.setAttribute("style","background-color: rgb(180,180,180,0.5");
        about1.setAttribute("style","background-color: none");
        ai1.setAttribute("style","background-color: none");
        web1.setAttribute("style","background-color: none");
    }
    if((scrolltop>630)&&(scrolltop<=1330)){
        about1.setAttribute("style","background-color: rgb(180,180,180,0.5");
        home1.setAttribute("style","background-color: none");
        ai1.setAttribute("style","background-color: none");
        web1.setAttribute("style","background-color: none");
    }
    if((scrolltop>1330)&&(scrolltop<=2170)){
        ai1.setAttribute("style","background-color: rgb(180,180,180,0.5");
        about1.setAttribute("style","background-color: none");
        home1.setAttribute("style","background-color: none");
        web1.setAttribute("style","background-color: none");
    }
    if((scrolltop>2170)){
        web1.setAttribute("style","background-color: rgb(180,180,180,0.5");
        home1.setAttribute("style","background-color: none");
        about1.setAttribute("style","background-color: none");
        ai1.setAttribute("style","background-color: none");
    }
}