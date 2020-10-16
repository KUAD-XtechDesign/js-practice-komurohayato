$(function(){

let text1 = "おはようございます";
let text２ = "お元気ですか";
let num1 = 20;
let num2 = 32;

$("#button01").on("click",function(){
$("#content").text("こんにちは!")
})  

$("#button02").on("click",function(){
    $("#content").text(text1);
    })  

 $("#button03").on("click",function(){
   $("#content").text(text1 + text２);
        })  

$("#button04").on("click",function(){
 $("#content").text(num1 + num2);
 })  
    
 $("#button05").on("click",function(){
    $("#content").text(num1+"たす"+num2+"は"+(num1+num2)+"です");
 })

})  