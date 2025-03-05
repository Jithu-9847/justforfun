let width;
let height;
let x;
let y;

window.onload=()=>{
    width=window.screen.availWidth-100
    height=window.screen.availHeight-100
}

function change() {
    x=Math.floor(Math.random()*width)
    y=Math.floor(Math.random()*height)

    document.getElementById("no").style.left=x+"px"
    document.getElementById("no").style.top=y+"px"
}
document.getElementById("no").addEventListener("mouseover",()=>{
    change()
})

document.getElementById("yes").addEventListener("click",()=>{
    document.getElementById("head").style.display="none"
    document.getElementById("yes").style.display="none"
    document.getElementById("no").style.display="none"
    document.getElementById("ms").style.display="block"
})
