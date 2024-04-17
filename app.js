let btn=document.querySelector(".btn")
let input=document.querySelector("input")
let div=document.querySelector("div")
let ol=document.querySelector("ol")

btn  .setAttribute("class","btnStyel")
input.setAttribute("class","inpStyel")
div  .setAttribute("class","divStyel")
input.addEventListener("keyup",(e)=>{
if(input.value.length>5){
    btn.disabled=false;
}
 })

 btn.addEventListener("click",()=>{
    //  button add
    let li=document.createElement("li");
    let text=document.createTextNode(input.value);
    li.appendChild(text);
    div.appendChild(li)
    li.setAttribute("class","liStyel")
    input.value=""
    btn.disabled=true;
//  button delete
let del=document.createElement("button")
del.setAttribute("class","btndelStyel")
let dlText=document.createTextNode("x")
li .appendChild(del)
del.appendChild(dlText)
div.appendChild(del)
del.addEventListener("click",()=>{
div.removeChild(li)
div.removeChild(del)
 })
})
