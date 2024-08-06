const create_note = document.querySelector(".btn");
const notesCon = document.querySelector(".notes-container");

let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesCon.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesCon.innerHTML);
}

create_note.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    console.log("New note");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/del.png";
    notesCon.appendChild(inputBox).appendChild(img);
});

notesCon.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
});


document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("inserLineBreak");
        event.preventDefault();
    }
})