const pEl = document.querySelector("p");
const saveCountEl =document.querySelector(".save-count");
const increasmentBtn = document.querySelector(".increamentbtn");

let count = 0;
let days = 1;
function increament(){
    count++;
    pEl.innerText = `PASSAGER : ${count}`;
}

increasmentBtn.addEventListener("click",()=>{
    increament();
})
const removeCountBtn = document.querySelector(".remove-count");
function removeCount(){
    count--;
    pEl.innerText = `PASSAGER : ${count}`;
}
removeCountBtn.addEventListener("click",()=>{
    removeCount();
})


const savebtn = document.querySelector(".save-btn");
function saveCount(){
    pEl.innerText;
    saveCountEl.innerHTML +=`<ul>
        <li style="color:#004a00">Day ${days++}: ${count} Passager</li>
        </ul>`;    
    pEl.innerText = `PASSAGER : ${0}`;
    count =0;
}
savebtn.addEventListener("click",()=>{
    saveCount();    
})



