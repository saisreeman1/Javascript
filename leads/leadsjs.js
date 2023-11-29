let l=[]
let but=document.getElementById("btn")
let inputtg=document.getElementById("input-el")
let message=document.getElementById("msg-el")
let ull=document.getElementById("ul-el")
let deletebtn=document.getElementById("btn1")
let tb=document.getElementById("btn2")
const ll=JSON.parse(localStorage.getItem("l"))
if (ll){
l=ll
render(l)
}
function render(l1){
let t=""
for(let i=0;i<l1.length;i++){
t+=`<li>
<a href='${l1[i]}'>
${l1[i]}
</a>
</li>`
}
ull.innerHTML=t
}
tb.addEventListener("click",function(){
chrome.tabs.query({active:true,currentWindow:true},function(tabs){
l.push(tabs[0].url)
localStorage.setItem("l",JSON.stringify(l))
render(l)
})
})
but.addEventListener("click",function(){
l.push(inputtg.value)
inputtg.value=null
localStorage.setItem("l",JSON.stringify(l))
render(l)
})
deletebtn.addEventListener("dblclick",function(){
localStorage.clear()
l=[]
render(l)
})