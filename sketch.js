var ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx;
let lets = ["L","R","U","D","B","F","L'","R'","U'","D'","B'","F'"]
;
var c1;
var ts=0;
var s=0;
var m=0;
var a=false;
var state;
var b1;
function setup() {
 c1= createCanvas(580, 300);
 b1=createButton("open savepad");
}

function draw() {
  background("red");
  b1.mousePressed(ha);
  if(keyDown("r")){
  ts=0;
  s=0;
  m=0;
  }
  if(keyWentDown("space")){
    a=false
  }
  if(keyWentUp("1")&&keyWentUp("0")){
    frameRate(20);
    a=true;
  }
  Scramble();
  if(a==true){
  ts+=5;
  }
  textSize(40);
  text(m+":"+s+":"+ts,200,150)
    
  if(ts==100){
    ts=0
    ts+=5;
    s+=1
   }
  if(s==60){
    s=0;
    m+=1
  }
}

function Scramble(){
    if(keyCode==ENTER){
  ca=Math.round(random(0,5));
  cb=Math.round(random(0,11));
  cc=Math.round(random(0,11));
  cd=Math.round(random(0,11));
  ce=Math.round(random(0,11));
  cf=Math.round(random(0,11));
  cg=Math.round(random(0,5));
  ch=Math.round(random(0,11));
  ci=Math.round(random(0,11));
  cj=Math.round(random(0,11));
  ck=Math.round(random(0,11));
  cl=Math.round(random(0,11));
  cm=Math.round(random(0,5));
  cn=Math.round(random(0,11));
  co=Math.round(random(0,11));
  cp=Math.round(random(0,11));
  cq=Math.round(random(0,11));
  cr=Math.round(random(0,11));
  cs=Math.round(random(0,5));
  ct=Math.round(random(0,11));
  cu=Math.round(random(0,11));
  cv=Math.round(random(0,11));
  cw=Math.round(random(0,11));
  cx=Math.round(random(0,11));
  }
  fill("lime");
  textSize(20);
  text(lets[ca]+"2"+","+lets[cb]+","+lets[cc]+","+lets[cd]+","+lets[ce]+","+lets[cf]+","+lets[cg]+"2"+","+lets[ch]+","+lets[ci]+","+lets[cj]+","+lets[ck]+","+lets[cl]+","+lets[cm]+"2"+","+lets[cn]+","+lets[co]+","+lets[cp]+","+lets[cq]+","+lets[cr]+","+lets[cs]+"2"+","+lets[ct]+","+lets[cu]+","+lets[cv]+","+lets[cw]+","+lets[cx],10,40);
  textSize(15);
  text("Press enter to start scaramble and Space to stop it",200,50,600,50);
}
function ha(){
  window.open("https://realparamesh.github.io/Text-editor/");
}