
    var main_boon = document.querySelectorAll('.about .about_cen ul li');
    var main_top = document.querySelector('main .main_top');
    var main_toplis = document.querySelectorAll('.main_top ul li');
    var main_toplisimg = document.querySelectorAll('.main_top ul li figure img');
    var main_toplisa= document.querySelectorAll('.main_top ul li figure figcaption a');
    var main_toplisp = document.querySelectorAll('.main_top ul li figure figcaption p');
    var main_toplisflag = document.querySelectorAll('.main_top ul li figure figcaption .flag');


    console.log(main_boon);
    console.log(main_top);

    console.log(main_toplisimg);
    var mainliimg1 = ['xm/1.png','xm/2.png','xm/3.png','xm/4.png','xm/5.png','xm/6.jpg',]
    var mainliimg2 = ['shouji/hongmi/1.png','shouji/hongmi/2.png','shouji/hongmi/3.png','shouji/hongmi/4.png','shouji/hongmi/5.png','shouji/hongmi/6.png']
    var mainliimg3 = ['shouji/dianshi/1.png','shouji/dianshi/2.png','shouji/dianshi/3.png','shouji/dianshi/4.png','shouji/dianshi/5.png','shouji/dianshi/6.png']
    var mainliimg4 = ['shouji/bijiben/1.png','shouji/bijiben/2.png','shouji/bijiben/3.png','shouji/bijiben/4.png','shouji/bijiben/5.png','shouji/bijiben/6.jpg']
    var mainliimg5 = ['shouji/kongtiao/1.jpg']
    var mainliimg6 = ['shouji/xinpin/1.png','shouji/xinpin/2.png','shouji/xinpin/3.png','shouji/xinpin/4.png','shouji/xinpin/5.png','shouji/xinpin/6.png']
    var mainliimg7 = ['shouji/luyouqi/1.png','shouji/luyouqi/2.png','shouji/luyouqi/3.png','shouji/luyouqi/4.png','shouji/luyouqi/5.png','shouji/luyouqi/6.png']
    var mainliimg8 = ['shouji/zhineng/1.png','shouji/zhineng/2.jpg','shouji/zhineng/3.jpg','shouji/zhineng/4.jpg','shouji/zhineng/5.jpg','shouji/zhineng/6.jpg']
 
    // var mainliimg1 = ['../img/shouji/xiaomishouji/1.png','../img/shouji/xiaomishouji/2.png','../img/shouji/xiaomishouji/3.png','../img/shouji/xiaomishouji/4.png','../img/shouji/xiaomishouji/5.png','../img/shouji/xiaomishouji/6.jpg']
    var mainliname1 = ['小米8','小米8 SE','小米Max 3','小米MIX 2S','小米MIX 2','小米6 x'];
    var mainliname2 = ['红米6 Pro','红米6 ','红米6A','红米Note 5','红米S2','红米5 Plus'];
    var mainliname3 = ['小米电视4 75英寸','小米电视4A 32英寸','小米电视4A 43英寸青春版','小米电视4A 50英寸','小米电视4A 55英寸','查看全部'];
    var mainliname4 = ['小米平板','小米游戏本 8代','小米笔记本15.6" GTX版','小米游戏本','小米笔记本 Pro','小米笔记本 Air 系列'];
    var mainliname5 = ['米家互联网空调'];
    var mainliname6 = [' 小米手环3','小米路由器4','小米小爱音箱mini','米家投影仪','小米VR 一体机','小米米家智能摄像机 云台版'];
    var mainliname7 = ['小米路由器 4',' 小米路由器 4Q','小米路由器 3AS','小米路由器 3G',' 小米路由器 HD/Pro',' 查看全部小米路由器'];
    var mainliname8 = [' 小米小爱音箱mini','小米无人机','小米净水器','  米家扫地机器人','米家压力IH电饭煲',' 查看全部',];

  
    var mainli$1 = ['2699元起','1799元起','1699元起','3299元起','2599元起','1399元起'];
    var mainli$2 = ['999元起','799元起','599元起','1099元起','999元起','9999元起'];
    var mainli$3 = ['8999元起','899元起','1399元起','1799元起','2299元起','查看全部'];
    var mainli$4 = ['1099元起','6699元起','6299元起','5999元起','5599元起','3599元起'];
    var mainli$5 = ['1999元'];
    var mainli$6 = ['169元','199元','169元','3999元','1499元起','199元起'];
    var mainli$7 = ['179元','69元','99元起','199元','499元起','查看全部小米路由器'];
    var mainli$8 = ['169元','2999元','1999元','1699元','999元','智能硬件'];
    


    for(var i = 0;i<main_boon.length-2;i++){
        main_boon[i].index = i;
        main_boon[i].addEventListener('mouseover',function(){
            main_top.style.height = '200px';
            // console.log(main_top.style.height);
            for(var j = 0;j<main_toplisflag.length;j++){
                main_toplisflag[j].innerHTML= '';
                main_toplisflag[j].style.border = 'transparent';   
            }
            switch(this.index){
                case 0:for(var s = 0;s<mainliimg1.length;s++){
                    main_toplisimg[s].src = mainliimg1[s];
                    main_toplisa[s].innerHTML = mainliname1[s];
                    main_toplisp[s].innerHTML = mainli$1[s];
                    if(s <= 2){
                        main_toplisflag[s].innerHTML = '新品';
                        main_toplisflag[s].style.border = '1px solid #ff6700';        
                    }
               
                };break;
                case 1:for(var s = 0;s<mainliimg2.length;s++){
                    main_toplisimg[s].src = mainliimg2[s];
                    main_toplisa[s].innerHTML = mainliname2[s];
                    main_toplisp[s].innerHTML = mainli$2[s];
                    if(s <= 2){
                        main_toplisflag[s].innerHTML = '新品';
                        main_toplisflag[s].style.border = '1px solid #ff6700';          
                    }
                };break;
                case 2:for(var s = 0;s<mainliimg3.length;s++){
                    main_toplisimg[s].src = mainliimg3[s];
                    main_toplisa[s].innerHTML = mainliname3[s];
                    main_toplisp[s].innerHTML = mainli$3[s];
                    if(s == 0){
                        main_toplisflag[s].innerHTML = '新品';
                        main_toplisflag[s].style.border = ' 1px solid #ff6700';  
                        console.log('1')  
                    }
                    if(s == 1){
                        main_toplisflag[s].innerHTML = '热卖';
                        main_toplisflag[s].style.border = ' 1px solid #ff6700';    
                        console.log('1')  

                    }
                    if(s == 2){
                        main_toplisflag[s].innerHTML = '新品';
                        main_toplisflag[s].style.border = ' 1px solid #ff6700';
                        console.log('1')  

                    }
                    if(s == 3){
                        main_toplisflag[s]. innerHTML = '热卖';
                        main_toplisflag[s].style.border = ' 1px solid #ff6700';
                        console.log('1')  

                    }
                    if(s == 4){
                        main_toplisflag[s].innerHTML = '热卖';
                        main_toplisflag[s].style.border = ' 1px solid #ff6700';  
                        console.log('1')  

                    }
                };break;
                case 3:for(var s = 0;s<mainliimg4.length;s++){
                    main_toplisimg[s].src = mainliimg4[s];
                    main_toplisa[s].innerHTML = mainliname4[s];
                    main_toplisp[s].innerHTML = mainli$4[s];
                    if(s != 1 && s!=2){
                        
                        main_toplisflag[s].innerHTML= '';
                        main_toplisflag[s].style.border = 'transparent';  
                    }else{
                        main_toplisflag[s].innerHTML = '新品';
                        main_toplisflag[s].style.border = ' 1px solid #ff6700';
                    }
                };break;
                case 4:for(var s = 0;s<mainliimg5.length;s++){
                    main_toplisimg[s].src = mainliimg5[s];
                    main_toplisa[s].innerHTML = mainliname5[s];
                    main_toplisp[s].innerHTML = mainli$5[s];
                    main_toplisflag[s].innerHTML= '';
                    main_toplisflag[s].style.border = 'transparent';  
                };break;
                case 5:for(var s = 0;s<mainliimg6.length;s++){
                    main_toplisimg[s].src = mainliimg6[s];
                    main_toplisa[s].innerHTML = mainliname6[s];
                    main_toplisp[s].innerHTML = mainli$6[s];
                };break;
                case 6:for(var s = 0;s<mainliimg7.length;s++){
                    main_toplisimg[s].src = mainliimg7[s];
                    main_toplisa[s].innerHTML = mainliname7[s];
                    main_toplisp[s].innerHTML = mainli$7[s];
                    if(s == 0){
                        main_toplisflag[s].innerHTML = '双频双核';
                        main_toplisflag[s].style.border = ' 1px solid #ff6700';
                    }
                    if(s == 3){
                        main_toplisflag[s].innerHTML = '双千兆';
                        main_toplisflag[s].style.border = ' 1px solid #ff6700';
                    }
                    if(s == 4){
                        main_toplisflag[s].innerHTML = '大容量';
                        main_toplisflag[s].style.border = ' 1px solid #ff6700';
                    }   
                };break;
                case 7:for(var s = 0;s<mainliimg8.length;s++){
                    main_toplisimg[s].src = mainliimg8[s];
                    main_toplisa[s].innerHTML = mainliname8[s];
                    main_toplisp[s].innerHTML = mainli$8[s];
                    if(s == 1 ){
                        main_toplisflag[s].innerHTML = '航拍神器';
                        main_toplisflag[s].style.border = ' 1px solid #ff6700';
                    }
                };break;
            }

            for(var j = 0;j < main_toplis.length;j++){
                main_toplis[j].addEventListener('mouseover',function(){
                    main_top.style.height = '200px';

                })
            }

        })
        main_boon[i].addEventListener('mouseout',function(){
            main_top.style.height = '0';
            // console.log(main_top.style.height);
            for(var j = 0;j < main_toplis.length;j++){
                main_toplis[j].addEventListener('mouseout',function(){
                    main_top.style.height = '0';

                })
            }
        })
    }



