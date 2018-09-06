window.onload = function () {
    var nav_right1 = document.querySelector('.nav_right1');
    var cart_menu = document.querySelector('.cart_menu');
    var nav_ls = document.querySelector('.nav_ls');
    nav_right1.onmouseover = function () {
        cart_menu.style.height = '100px';
        nav_ls.style.background = '#FFF';
        nav_ls.style.color = '#FF6700';
    }
    nav_right1.onmouseout = function(){
        cart_menu.style.height = '0px';
        nav_ls.style.background = null;
        nav_ls.style.color = null;
    }
    /************************************************/
    var about_form = document.querySelector('.about_form');
    var form_l = document.querySelector('.form_l');
    var form_r = document.querySelector('.form_r');
    var about_hot = document.querySelector('.about_hot');
    var about_list = document.querySelector('.about_list');
 
    about_list.style.display = "none";
    form_l.onclick = function () {
        about_hot.style.display = 'none';
        form_l.style.borderColor = '#ff6700';
        form_r.style.borderColor = '#ff6700';
        about_list.style.display = "block";
    }
    document.onclick = function (event) {

        var e = event || window.event;
        var aim = e.srcElement || e.target;

        if (e.srcElement) {
            var aim = e.srcElement;
            if (aim != form_l && aim != about_list) {
                about_list.style.display = "none";
                about_hot.style.display = 'block';
                form_l.style.borderColor = '';
                form_r.style.borderColor = '';

            }
        } else {
            var aim = e.target;
            if (aim != form_l && aim != about_list) {
                about_list.style.display = "none";
            }
        }


    } 
    

    var breen_no = document.querySelectorAll('.breen_one ul .breen_no');
    var breen_tow = document.querySelectorAll('.breen_one ul li .breen_tow');
    var len = breen_no.length;
    var tame;
    for(var l=0;l<len;l++){
        breen_no[l].index = l;
        breen_no[l].onmouseover = function(){
            for(var k=0;k<len;k++){
                breen_no[this.index].className = 'active';
                breen_tow[k].style.display = 'none';
            }
            breen_tow[this.index].style.display = 'block';
            breen_tow[0].style.width = '993px';
            breen_tow[1].style.width = '993px';
            breen_tow[2].style.width = '993px';
            breen_tow[3].style.width = '745px';
            breen_tow[4].style.width = '497px';
            breen_tow[5].style.width = '248px';
            breen_tow[6].style.width = '745px';
            breen_tow[7].style.width = '497px';
            breen_tow[8].style.width = '248px';
            breen_tow[9].style.width = '993px';
        }
        breen_no[l].onmouseout = function () {
            breen_no[this.index].className = '';
            for(var o = 0;o<breen_tow.length;o++){
                breen_tow[o].style.width = '0px';
            }
        
        }
    }
    /*****************************************/
    var itemLiFirst = document.querySelector('.box .box_bd .box_list ul li .box_time').innerHTML;
    itemLiFirst = parseInt(itemLiFirst);
    var itemLiTime = document.querySelectorAll('.box .box_bd .box_list .box_timer .box_box');
    var timer = null;
    function time() {
        var myDate = new Date();
        var myMonth = myDate.getMonth() + 1;
        var setDate = new Date(myDate.getFullYear() + ' '  + myMonth + ' '  + myDate.getDate() + ' ' + itemLiFirst + ':00:00');
        var Time = setDate - myDate;
        // 获取秒数
        var second =  Math.floor(Time / 1000 % 60);
        //获取分钟数
        var minute = Math.floor(Time / 1000 / 60 % 60);
        // 获取小时数
        var hour = Math.floor(Time / 1000 / 60 / 60 % 24);
        if(second <= 0 && minute <= 0 && hour <= 0){
            clearInterval(timer);
            itemLiTime[0].innerHTML = '00';
            itemLiTime[1].innerHTML = '00';
            itemLiTime[2].innerHTML = '00';
        }else {
            hour = hour < 10 ? '0' + hour : hour;
            minute = minute < 10 ? '0' + minute : minute;
            second = second < 10 ? '0' + second : second;
            itemLiTime[0].innerHTML = hour;
            itemLiTime[1].innerHTML = minute;
            itemLiTime[2].innerHTML = second;
        }
    }
    timer = setInterval (time,1000)
// 。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
    var box_a = document.querySelector('.box_hd .box_move .box_a');
    var box_b = document.querySelector('.box_hd .box_move .box_b');
    var box_ul = document.querySelector('.box_bd .box_list .box_lox .box_ul');
    var num = 0;
    box_b.onclick = function () {
        if (num > -510){
            num = num - 730;
            box_ul.style.marginLeft = num + 'px';
        }
    }
    box_a.onclick = function () {
        if (num < 0){
            num = num + 730;
            box_ul.style.marginLeft = num + 'px';
        }
    }

    var home = document.querySelectorAll('.page_two');
    function query(num1,num2) {
        for(var i=0;i<num1.length;i++){
            num1[i].index = i;
            num1[i].onmouseover = function () {
                for(var j=0;j<num1.length;j++){
                    num1[j].className = '';
                    num2[j].style.display = 'none';
                }
                num1[this.index].className = 'active';
                num2[this.index].style.display = 'block';
            }
        }
    }
    for(var m=0;m<home.length;m++){
        var homeLi = home[m].querySelectorAll('.page_hd .page_more .page_list li');
        var homeUl = home[m].querySelectorAll('.page_bd .span16 .page_cont ul');
        query(homeLi,homeUl)
    }
/*******************************/
    var page_a = document.querySelector('.page_three .page_move .page_a');
    var page_b = document.querySelector('.page_three .page_move .page_b');
    var page_ul = document.querySelector('.page_three .page_lb .page_xm ul');
    page_b.onclick = function () {
        if (num > -3720){
            num = num - 1240;
            page_ul.style.marginLeft = num + 'px';
        }
    }
    page_a.onclick = function () {
        if (num < 0){
            num = num + 1240;
            page_ul.style.marginLeft = num + 'px';
        }
    }

    //第一个
    var page_prev = document.querySelector('.page_prev');
    var page_next = document.querySelector('.page_next');
    var page_lk = document.querySelector('.page_lk');
    var pager = document.querySelectorAll('.pager1');
    var num1 = 0;
    var str1 = 0;
    for(var i=0;i<pager.length;i++){
        pager[i].index = i;
        pager[i].onclick = function () {
            str1 = this.index;
            if(this.index == 0){
                num1 = 296;
            }
            if(this.index == 1){
                num1 = 0;
            }
            if(this.index == 2){
                num1 = -296;
            }
            ontemer();
        }
    }
    var ontemer = page_next.onclick = function () {
        for(var i=0;i<pager.length;i++){
            pager[i].classList.remove('pager-active');
        }
        if (num1 > -592){
            num1 = num1 - 296;
            page_lk.style.marginLeft = num1 + 'px';
        }
        if(num1 == 0){
            str1 = 0;
        }
        if(num1 == -296){
            str1 = 1;
        }
        if(num1 == -592){
            str1 = 2;
        }
        pager[str1].classList.add('pager-active');
    }
    page_prev.onclick = function () {
        for(var i=0;i<pager.length;i++){
            pager[i].classList.remove('pager-active');
        }
        if (num1 < 0){
            num1 = num1 + 296;
            page_lk.style.marginLeft = num1 + 'px';
        }
        if(num1 == 0){
            str1 = 0;
        }
        if(num1 == -296){
            str1 = 1;
        }
        if(num1 == -592){
            str1 = 2;
        }
        pager[str1].classList.add('pager-active');
    }

    //第二个
    var page_prev1 = document.querySelector('.page_prev2');
    var page_next1 = document.querySelector('.page_next2');
    var page_lk1 = document.querySelector('.page_lk2');
    var pager1 = document.querySelectorAll('.pager2');
    var num2 = 0;
    var str2 = 0;
    for(var i=0;i<pager1.length;i++){
        pager1[i].index = i;
        pager1[i].onclick = function () {
            str2 = this.index;
            if(this.index == 0){
                num2 = 296;
            }
            if(this.index == 1){
                num2 = 0;
            }
            if(this.index == 2){
                num2 = -296;
            }
            if(this.index == 3){
                num2 = -592;
            }
            ontemer1();
        }
    }
    var ontemer1 = page_next1.onclick = function () {
        for(var i=0;i<pager1.length;i++){
            pager1[i].classList.remove('pager-active');
        }
        if (num2 > -888){
            num2 = num2 - 296;
            page_lk1.style.marginLeft = num2 + 'px';
        }
        if(num2 == 0){
            str2 = 0;
        }
        if(num2 == -296){
            str2 = 1;
        }
        if(num2 == -592){
            str2 = 2;
        }
        if(num2 == -888){
            str2 = 3;
        }
        pager1[str2].classList.add('pager-active');
    }
    page_prev1.onclick = function () {
        for(var i=0;i<pager1.length;i++){
            pager1[i].classList.remove('pager-active');
        }
        if (num2 < 0){
            num2 = num2 + 296;
            page_lk1.style.marginLeft = num2 + 'px';
        }
        if(num2 == 0){
            str2 = 0;
        }
        if(num2 == -296){
            str2 = 1;
        }
        if(num2 == -592){
            str2 = 2;
        }
        if(num2 == -888){
            str2 = 3;
        }
        pager1[str2].classList.add('pager-active');
    }

    //第三个
    var page_prev2 = document.querySelector('.page_prev3');
    var page_next2 = document.querySelector('.page_next3');
    var page_lk2 = document.querySelector('.page_lk3');
    var pager2 = document.querySelectorAll('.pager3');
    var num3 = 0;
    var str3 = 0;
    for(var i=0;i<pager2.length;i++){
        pager2[i].index = i;
        pager2[i].onclick = function () {
            str3 = this.index;
            if(this.index == 0){
                num3 = 296;
            }
            if(this.index == 1){
                num3 = 0;
            }
            if(this.index == 2){
                num3 = -296;
            }
            if(this.index == 3){
                num3 = -592;
            }
            ontemer2();
        }
    }
    var ontemer2 = page_next2.onclick = function () {
        for(var i=0;i<pager2.length;i++){
            pager2[i].classList.remove('pager-active');
        }
        if (num3 > -888){
            num3 = num3 - 296;
            page_lk2.style.marginLeft = num3 + 'px';
        }
        if(num3 == 0){
            str3 = 0;
        }
        if(num3 == -296){
            str3 = 1;
        }
        if(num3 == -592){
            str3 = 2;
        }
        if(num3 == -888){
            str3 = 3;
        }
        pager2[str3].classList.add('pager-active');
    }
    page_prev2.onclick = function () {
        for(var i=0;i<pager2.length;i++){
            pager2[i].classList.remove('pager-active');
        }
        if (num3 < 0){
            num3 = num3 + 296;
            page_lk2.style.marginLeft = num3 + 'px';
        }
        if(num3 == 0){
            str3 = 0;
        }
        if(num3 == -296){
            str3 = 1;
        }
        if(num3 == -592){
            str3 = 2;
        }
        if(num3 == -888){
            str3 = 3;
        }
        pager2[str3].classList.add('pager-active');
    }

    //第四个
    var page_prev3 = document.querySelector('.page_prev4');
    var page_next3 = document.querySelector('.page_next4');
    var page_lk3 = document.querySelector('.page_lk4');
    var pager3 = document.querySelectorAll('.pager4');
    var num4 = 0;
    var str4 = 0;
    for(var i=0;i<pager3.length;i++){
        pager3[i].index = i;
        pager3[i].onclick = function () {
            str4 = this.index;
            if(this.index == 0){
                num4 = 296;
            }
            if(this.index == 1){
                num4 = 0;
            }
            if(this.index == 2){
                num4 = -296;
            }
            if(this.index == 3){
                num4 = -592;
            }
            ontemer3();
        }
    }
    var ontemer3 = page_next3.onclick = function () {
        for(var i=0;i<pager3.length;i++){
            pager3[i].classList.remove('pager-active');
        }
        if (num4 > -888){
            num4 = num4 - 296;
            page_lk3.style.marginLeft = num4 + 'px';
        }
        if(num4 == 0){
            str4 = 0;
        }
        if(num4 == -296){
            str4 = 1;
        }
        if(num4 == -592){
            str4 = 2;
        }
        if(num4 == -888){
            str4 = 3;
        }
        pager3[str4].classList.add('pager-active');
    }
    page_prev3.onclick = function () {
        for(var i=0;i<pager3.length;i++){
            pager3[i].classList.remove('pager-active');
        }
        if (num4 < 0){
            num4 = num4 + 296;
            page_lk3.style.marginLeft = num4 + 'px';
        }
        if(num4 == 0){
            str4 = 0;
        }
        if(num4 == -296){
            str4 = 1;
        }
        if(num4 == -592){
            str4 = 2;
        }
        if(num4 == -888){
            str4 = 3;
        }
        pager3[str4].classList.add('pager-active');
    }
}
