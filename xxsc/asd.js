var btn = document.querySelector('aside li:nth-of-type(4)');
var clientHeight=document.documentElement.clientHeight;

var timer=null;
var istop=true;
window.onscroll=function(){
    if(!istop){
        clearInterval(timer);
    }
    istop=false;

    var high=document.documentElement.scrollTop||document.body.scrollTop;
    if(high>=clientHeight){
        btn.style.display='block';
    }else{
        btn.style.display='none';
    }
}
btn.onclick=function(){

    timer=setInterval(function() {

    var high=document.documentElement.scrollTop||document.body.scrollTop;

    var speed=Math.floor(-high/6);
    document.documentElement.scrollTop=document.body.scrollTop=high+speed;
  
    istop=true;
    if(high==0){
        clearInterval(timer);
    }
    },30);

    
}
