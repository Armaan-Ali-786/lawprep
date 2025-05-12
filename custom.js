let heading = document.querySelectorAll(".heading");
let icon = document.querySelectorAll(".heading i");
let openbar = document.querySelector(".opengame");
let list = document.querySelector(".ulist");
let close = document.querySelector(".closegame");

heading.forEach((element,index)=>{
    element.addEventListener("click",(event)=>{
        

        icon.forEach((e,i)=>{
            let tar = e.parentElement.nextElementSibling;
            console.log(tar)
            if(i == index){
                tar.classList.toggle("active")
                e.classList.toggle("rotate1")
            }
            else{
                tar.classList.remove("active")
                e.classList.remove("rotate1");
            }
        })
    })
})


openbar.addEventListener("click",()=>{
    list.style.left = "0%"
})
close.addEventListener("click",()=>{
    list.style.left = "-100%";
})