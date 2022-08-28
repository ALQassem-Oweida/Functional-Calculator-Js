let Result = document.getElementById("Result");

function RemoveAll(){Result.innerHTML=""}
document.getElementById("del").addEventListener("click",function(){RemoveAll() });

function printNum(number){ 
    Result.innerHTML += number;
}
document.getElementById("1").addEventListener("click",function(){ printNum(1) });
document.getElementById("2").addEventListener("click",function(){ printNum(2) });
document.getElementById("3").addEventListener("click",function(){ printNum(3) });
document.getElementById("4").addEventListener("click",function(){ printNum(4) });
document.getElementById("5").addEventListener("click",function(){ printNum(5) });
document.getElementById("6").addEventListener("click",function(){ printNum(6) });
document.getElementById("7").addEventListener("click",function(){ printNum(7) });
document.getElementById("8").addEventListener("click",function(){ printNum(8) });
document.getElementById("9").addEventListener("click",function(){ printNum(9) });
document.getElementById("0").addEventListener("click",function(){ printNum(0) });
document.getElementById("sum").addEventListener("click",function(){ printNum('+') });
document.getElementById("sub").addEventListener("click",function(){ printNum('-') });
document.getElementById("mult").addEventListener("click",function(){ printNum('*') });
document.getElementById("divaied").addEventListener("click",function(){ printNum('/') });


function Math(){
MathResult=eval(Result.innerHTML);
Result.innerHTML=MathResult;
}
document.getElementById("eq").addEventListener("click",function(){ Math(); });






