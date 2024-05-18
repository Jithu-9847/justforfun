function tap() {
    x=Math.floor(Math.random() * width);
    y=Math.floor(Math.random() * height);
    
    
    document.getElementById("no").style.left=x+"px";
    document.getElementById("no").style.top=y+"px";
}
let width=0;
let height=0;
let x=0;
let y=0;
let taped=false;
window.onload=()=>{

    width=window.screen.width;
    height=window.screen.availHeight-100;
    

}

document.getElementById("no").addEventListener("mouseover",()=>{
    if(taped==false)
    taped=true;
else
    tap();
})

document.getElementById("no").addEventListener("click",()=>{
     
    taped=true;
    tap();
})
document.getElementById("yes").addEventListener("click",()=>{
     
    document.getElementById("yes").style.display="none";
    document.getElementById("no").style.display="none";
    document.getElementById("ms").style.display="block";
})
