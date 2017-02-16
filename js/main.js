
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var sun1 = document.getElementById('sun1');
var box = document.getElementById('boxLine');
var cp1 = document.getElementById('cp1');
var line = document.querySelectorAll('.line');
var l1 = document.getElementById('l1');
var rainBox = document.getElementById('rainBox');
var rain = document.querySelectorAll('.rain');
var dots = document.getElementById('dots');
var dotsG = document.querySelectorAll('.dots');

var cloud_tl_1 =  new TimelineMax({   paused: true,repeat:0,repeatDelay:1.2 });
 cloud_tl_1//.from(sun1,0.4,{x:30,y:30,ease: Back.easeOut.config(2)},"+=0.4").from(c1,0.2,{ease: Back.easeOut.config(1.4),x:20,y:5},"-=0.4")
 .to(c1,0.4,{x:-100},1).to(c1,0,{opacity:0},"-=0.2").to(c1,0,{opacity:0,x:15,y:15},"-=0.2")//.to(c1,0.1,{})
.to(c3,0.4,{x:50,opacity:1},"-=0.3").to(c4,0.3,{x:100,  y:20},"-=0.2").to(c4,0.5,{x:91,opacity:1,y:-25},"+1.4")
.to(c3,0.3,{scale:1.2,transformOrigin:'left top'},"+=0.5")
.to(c4,0.3,{scale:1.2,x:101,y:-28,transformOrigin:'left top'},"-=0.3")
.to(sun1,0.4,{x:65,y:70,opacity:1,ease: Back.easeOut.config(1.9)},"+=0.7")
.to(c5,0.3,{x:-13,y:-17,ease: Back.easeOut.config(1.7),opacity:1},"-=0.3")
.to(c3,0.5,{y:-18,ease: Back.easeOut.config(1.9),opacity:1},"+=0.5")
.to(c5,0.3,{x:-8,y:-10,opacity:0},"-=0.5").to(c4,0.4,{x:90,y:-20,opacity:0},"-=0.5").to(sun1,0.1,{opacity:0},"-=0.5").to(sun1,0,{y:-20,x:10},"+=0.1")
.to(box,0.3,{opacity:1,y:10},"+=0.3")
.staggerTo(line,0.3,{y:10,opacity:1},0.1)
.to(box,0.1,{y:-50,opacity:0},"+=1")
.to(cp1,0.3,{fill:'rgb(180, 187, 193)'},"+=0.1")
.to(l1,0.25,{x:-8,y:55,ease: Back.easeOut.config(2)},"-=0.2")
.to(l1,0.1,{opacity:1},"-=0.2")
.to(l1,0.2,{x:-12,y:70,ease: Back.easeIn.config(3)},"+=0.4")
.to(l1,0.1,{opacity:0},"-=0")
.to(rainBox,0.1,{opacity:1},"+=0.2")
.staggerTo(rain,0.3,{y:90,ease: Back.easeOut.config(1.4)},-0.2)
.staggerTo(rain,0.3,{y:170,ease: Back.easeOut.config(1.4),delay:1},0.1)
.to(rainBox,0.1,{opacity:0},"-=0.2")
.to(rainBox,0,{opacity:0},"-=0.3")
.staggerTo(rain,0.3,{y:0,background:'#fff',delay:'-=0.2'},0)
.to(rainBox,0.1,{opacity:1},"+=0.2")
.staggerTo(rain,0.3,{y:90,ease: Back.easeOut.config(1.4)},-0.2)
.staggerTo(rain,0.3,{y:170,ease: Back.easeOut.config(1.4),delay:1},0.1)
.to(dots,0.1,{opacity:1},"-=0.1")
.staggerTo(dotsG,0.5,{y:90,x:-25,repeat:4,repeatDelay:0.3,opacity:0,background:'#fff'},-0.1)
.to(cp1,0.3,{fill:'rgb(255, 255, 255)'},"-=1.8")
.to(cp1,0.3,{y:-10,opacity:0},"+=0.3")
.to(sun1,0.3,{x:20,y:30,opacity:1},"-=0.2")
.to(c1,0.6,{ease: Back.easeOut.config(1.4),x:0,y:0,opacity:1},"+=0.6")
.to(sun1,0.3,{ease: Back.easeOut.config(2),x:6,y:0},"-=0.4")

cloud_tl_1.play();
