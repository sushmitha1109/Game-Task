var p1 = document.getElementById("player1").addEventListener("click", addscore1);
var p2 = document.getElementById("player2").addEventListener("click", addscore2);
// var reset = document.getElementById("reset").addEventListener("click", resetgame);
var p1score= document.querySelector("#p1score")
var p2score= document.querySelector("#p2score")
var score=0 , score1=0;
var gameover=false;
var win=5;
 function addscore1()
    {
        if(!gameover){
        score++; 
       if(p1score===win)
       gameover=true;
       }
       p1score.textContent=score;
    }
    

 function addscore2()
 {
    score1++; 
    p2score.textContent=score1;
 }

//  function resetgame()
//  {
//     document.getElementById("p1score").reset();
//     document.getElementById("p2score").reset();
    
//  }