window.onload=function(){
//3、写一个函数 在页面中用定位创建28个div,放到一div中，用定位；
//第一层一个div  到第7层7个div； top 1:0 2:30 7:180
document.onmousedown=function(e){e.preventDefault()}
$('#angyou2').click(function(){
   $('#box-on').addClass('animated bounceOut');
   setTimeout(function(){
      $('#box-on').hide();
   },800)
});
$(function(){
var tishi=document.getElementsByClassName('tishi-a');
var xia=document.getElementsByClassName('tishi-a');
var shuoming=document.getElementById('shuoming');
var guan=document.getElementsByClassName('guanbi');
var index=0;
for(var i=0;i<xia.length;i++){
    xia[i].index=i;
    xia[i].onclick=function(){
        index++;
        tishi[this.index].style.display='none';
        if(index>=5){
          shuoming.style.display='none';
          $('.div-box').each(function(i){
            $($('.div-box')[i]).addClass('animated zoomIn')
          })
        }
    }
}
for(var i=0;i<guan.length;i++){
    guan[i].index=i;
    guan[i].onclick=function(){
        shuoming.style.display='none';
        $('.div-box').each(function(i){
            $($('.div-box')[i]).addClass('animated zoomIn')
          })
    }
}
});
var puke=function(){
var box=document.getElementById('box');
var dady=document.getElementById('opd');
var row=7;
for(var i=0;i<row;i++){
	for(var j=0;j<i+1;j++){
        var div=document.createElement('div');
            div.style.position='absolute';
            div.style.top=i*50+'px';
            div.style.left=((6-i)*60+20)+j*125+'px';
            div.setAttribute('id',i+'_'+j);
            div.setAttribute('class','div-box');
            box.appendChild(div);
	}
};
var pushPk=document.getElementById('push');
var opPk=document.getElementById('opd');
  for(var j=0;j<24;j++){
        var div2=document.createElement('div');
        div2.style.position='absolute';
        div2.style.bottom='0px';
        div2.style.left='0px';
        div2.setAttribute('id','a_'+j);
        div2.setAttribute('class','div-box');
        opPk.appendChild(div2);
    }
var divs=document.getElementsByClassName('div-box');
var dict={1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'};
var type=['red','bk','fk','mh']
var rand=function(){
    var zidian={},poker=[],hs,num;
    while(poker.length!==52){
        var hs=type[Math.floor(Math.random()*4)];
        var num=dict[Math.floor(1+Math.random()*13)];
        var pai={huase:hs,number:num};
        if(!zidian[hs+num]){
            poker.push(pai);
            zidian[hs+num]=true;
        } 
    } 
    return poker;
    div.innerHTML(poker);
};
var puke=rand();
var  els=document.getElementsByClassName('div-box');
var arrHs=['']

for(var i=0;i<puke.length;i++){
    els[i].innerHTML=puke[i].number;
    var hua2=function(){
    if(puke[i].number>=2&&puke[i].number<=10){
       if(puke[i].huase=='red'){
            els[i].style.backgroundImage='url(./images/a1.jpg)';
        }
        if(puke[i].huase=='bk'){
            els[i].style.backgroundImage='url(./images/a2.jpg)';
        }
        if(puke[i].huase=='fk'){
            els[i].style.backgroundImage='url(./images/a3.jpg)';
        }
        if(puke[i].huase=='mh'){
            els[i].style.backgroundImage='url(./images/a4.jpg)';
        }
    }
  }
  hua2();
};
for(var i=0;i<puke.length;i++){
    els[i].innerHTML=puke[i].number;
    var hua=function(num,url,url2,url3,url4){
    if(puke[i].number==num){
       if(puke[i].huase=='red'){
            els[i].style.backgroundImage=url;
        }
        if(puke[i].huase=='bk'){
            els[i].style.backgroundImage=url2;
        }
        if(puke[i].huase=='fk'){
            els[i].style.backgroundImage=url3;
        }
        if(puke[i].huase=='mh'){
            els[i].style.backgroundImage=url4;
        }
    }
};
var aa,bb;
var huan=document.getElementById('text'),fan=document.getElementById('start');
hua('A','url(./images/a1.jpg)','url(./images/a2.jpg)','url(./images/a3.jpg)','url(./images/a4.jpg)');
hua('J','url(./images/j1.jpg)','url(./images/j2.jpg)','url(./images/j3.jpg)','url(./images/j4.jpg)');
hua('Q','url(./images/q1.jpg)','url(./images/q2.jpg)','url(./images/q3.jpg)','url(./images/q4.jpg)');
hua('K','url(./images/k1.jpg)','url(./images/k2.jpg)','url(./images/k3.jpg)','url(./images/k4.jpg)');
var pore=null;
var cishu=0;
var shuzi={A:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',J:'11',Q:'12'},
     one='',tow='',shen='',shen2='',kaiguan=true;
box.onclick=function(e){
    var el=e.target;
    if(el==this){ return}
    var id=el.getAttribute('id');
    var x=Number(id.split('_')[0]);
    var y=Number(id.split('_')[1]);
    var newx=document.getElementById((x+1)+'_'+y);
    var newy=document.getElementById((x+1)+'_'+(y+1));
    if(newx||newy){return}
        if(kaiguan){
            one=shuzi[el.innerHTML];
            aa=el;
            shen=el.getAttribute('id');
            aa.style.boxShadow='0px 2px 12px rgba(165,161,161,0.6)';
            aa.style.border='1px solid #fff';
            kaiguan=false;
        }else{
            tow=shuzi[el.innerHTML];
            shen2=el.getAttribute('id');
            bb=el;
            bb.style.boxShadow='0px 2px 12px rgba(165,161,161,0.6)';
            bb.style.border='1px solid #fff';
            kaiguan=true;
        }; 
        console.log(shen);
        if(one!=''&&tow!=''){
            if(Number(one)+Number(tow)==13){
                setTimeout(function(){
                    aa.setAttribute('class','div-box animated rotateOut');
                    bb.setAttribute('class','div-box animated rotateOut');
                },700);
                setTimeout(function(){
                    aa.parentElement.removeChild(aa);
                    bb.parentElement.removeChild(bb); 
                    one='';tow='';aa='';bb='';shen='';shen2='';
                },1400);
            }else{
                aa.style.boxShadow='';
                aa.style.border='';
                bb.style.boxShadow='';
                bb.style.border='';
                one='';tow='';aa='';bb='';shen='';shen2='';
            }
        }
        if(el.innerHTML=='K'){
            var cc=el;
            setTimeout(function(){
                    cc.setAttribute('class','div-box animated rotateOut');
                },600);
                setTimeout(function(){
                    cc.parentElement.removeChild(cc);
                },1200);
        }
        if(id=='text'){
            if(opPk.length<0){
                return;
            }
            pushPk.appendChild(opPk.removeChild(opPk.lastElementChild));
        };
        if(id=='start'){
            while(pushPk.lastElementChild){
                opPk.appendChild(pushPk.removeChild(pushPk.lastElementChild));
            }
            cishu++; 
            if(cishu>3){
             $('.yingle2').addClass('animated bounceInDown')    
            $('.yingle2').show();
            }
        }
      }

      $('#en2').click(function(){
          $('.yingle2').hide();
            location.reload();
      });
      if(divs.length<0){
         $('.yingle').addClass('animated bounceInDown')    
         $('.yingle').show();
      }
      $('#en').click(function(){
          $('.yingle').hide();
            location.reload();
      });
   }
}
puke();














}
