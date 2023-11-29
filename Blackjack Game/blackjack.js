
let message=document.getElementById("msg-el")
let carddisp=document.getElementById("cards-el")
let sum=document.getElementById("sum-el")
let ssd=document.getElementById("sum-l")
function  startgame(){
let player={
name:"sai",

}


let firstcard=Math.floor(Math.random()*13)+1
let secondcard=Math.floor(Math.random()*13)+1
carddisp.textContent=firstcard+" "+secondcard
ssum=firstcard+secondcard
 sum.textContent=ssum
rendergame()
}
function rendergame(){

if(ssum===21){
message.textContent="Blackjack !, you won the game"

}else if(ssum<21){
message.textContent="you are in the game,pick a card"

}else{
message.textContent="Sorry! you have lost the game"
}
}
function newcard(){
if(ssum>=21){
}else{
let thirdcard=Math.floor(Math.random()*13)+1
ssum+=thirdcard
sum.textContent=ssum
carddisp.textContent+=" "+thirdcard
rendergame()}
}