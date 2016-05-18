function LineMarquee(C,A,B){

this.container=C;this.dur=A||3000;this.num=B||1;
BBEvent.observe(window,"beforeunload",function(){this.container.scrollTop=0;}.$bind(this));
BBEvent.observe(this.container,"mouseout",this.run.$bind(this));
BBEvent.observe(this.container,"mouseover",function(){if(this.intId){clearInterval(this.intId);this.intId=null;}}.$bind(this));
}

LineMarquee.prototype=(function(){return{move:function(F){F=F||"up";var C=this.container.getElementsByTagName("li");

var A=this.container.offsetHeight,E=[],B=C.length;
if(B<=this.num){return ;}
for(var D=0;D<this.num;D++){E.push(C[F=="up"?D:B-D-1]);}
if(F=="down"||this.container.getAttribute("f")){Array.toArray(E).each(function(I){var H=this.container;if(H.tagName!="UL"){H=H.getElementsByTagName("ul")[0];}F=="up"?H.appendChild(I):H.insertBefore(I,C[0]);}.$bind(this));}

new BBEffect(null,function(H){this.container.scrollTop=parseInt((F=="up"?H:(1-H))*A);}.$bind(this),3000).play();

this.container.setAttribute("f",1);},run:function(){if(this.intId){return ;}

this.intId=setInterval(function(){this.move("up");}.$bind(this),this.dur);}};})();

var lm1=new LineMarquee(G("new-item"),5000,4);
lm1.run();

BBEvent.observe(Dom.getElementsByClassName("scroll-up",G("new-item"))[0],"click",function(){lm1.move("down");});

BBEvent.observe(Dom.getElementsByClassName("scroll-down",G("new-item"))[0],"click",function(){lm1.move("up");});