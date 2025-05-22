var a=0;
var b=['a','a','a','a','a','a','a','a','a'];
var c;
var y=document.getElementsByClassName('diva');
var v=document.getElementById('bod');
var z=document.getElementById('head');
function display(value) {
  c="a"+value;
  let x=document.getElementById(c);
  if (x.innerHTML!='X' && x.innerHTML!='O') {
    a++;
    if(a%2==0)
    x.innerHTML='O';
    else
    x.innerHTML='X';

      b[value]=x.innerHTML;
  }
  var d=check('X');
  var e=check('O');
  if(d==1)
  {

for(var i=0;i<y.length;i++)
y[i].style.animation="rotate 1s .5s forwards";
z.classList.add("won");
z.innerHTML="Congratulations X won!!!";
v.classList.add("back");
  }
  else if (e==1) {
    for(var i=0;i<y.length;i++)
    y[i].style.animation="rotate 1s .5s forwards";
    z.classList.add("won");
    z.innerHTML="Congratulations O won!!!";
    v.classList.add("back");
  }
}



function check(val) {

  for(var i=0;i<9;i+=3){
         var f=0;
         console.log('i is'+ i);
    for (var j = i; j<i+3 ; j++) {


    if(b[j]==val)
    {    f++;}
  }
       if(f==3)
     return 1;
  }

  for(var i=0;i<3;i++){
         var f=0;
    for (var j = i; j<i+9 ; j+=3) {

       if(b[j]==val)
    {   f++;}
  }
       if(f==3)
     return 1;
  }
var a1=0;
var a2=0;
  for(var i=0;i<9;i+=4)
  {
     if(b[i]==val)
  {    a1++;}
}
     if(a1==3)
   return 1;

  for(var i=2;i<7;i+=2)
  {
  if(b[i]==val)
  {    a2++;}
}
     if(a2==3)
   return 1;

return -1;
}

function resetGame() {
  // Iterate through all game cells and clear their innerHTML and animations
  for (var i = 0; i < y.length; i++) {
    y[i].innerHTML = '';
    y[i].style.animation = ''; // Reset animation
  }

  // Reset the internal representation of the game board
  b = ['a','a','a','a','a','a','a','a','a'];

  // Reset the turn counter
  a = 0;

  // Reset the heading
  z.innerHTML = "Tic-Tac-Toe";
  z.classList.remove("won");

  // Remove the background class from the body
  v.classList.remove("back");
}

// Add event listener to the reset button
var resetButton = document.getElementById("resetBtn");
if (resetButton) {
  resetButton.addEventListener("click", resetGame);
}
