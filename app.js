let addBtn = document.getElementById("addbtn");
let myContaier = document.getElementById("cont");
let head = document.getElementById("head");
let navBar = document.getElementById("navbar");
navBar.style.backgroundColor = "#4dddad";
navBar.style.color = "white";
myContaier.style.backgroundColor = "#0fbcf9";
myContaier.style.border = "1px solid #fff";
myContaier.style.color = "#fff";
myContaier.style.boxShadow = "15px 15px 15px #0fbcf9";
head.style.color = "#48dbfb";
myContaier.style.fontFamily = `'Poppins', sans-serif`;
head.style.fontFamily = `'Poppins', sans-serif`;
addBtn.style.backgroundColor = "#4dddad";
addBtn.style.border = "1px solid white";
addBtn.style.color = "#fff";
addBtn.style.padding = "8px";
addBtn.style.borderRadius = "5px";

showText();
addBtn.addEventListener("click", () => {
    let titleNotes = document.getElementById("title");
    let inptNotes = document.getElementById("createnotes");
    let getNotes = localStorage.getItem("Notes");
    if (inptNotes.value === "" || titleNotes.value == "") {
        alert("Fill Input");
    } else {
        if (getNotes === null) {
            objNotes = [];
        } else {
            objNotes = JSON.parse(getNotes);
        }
        objNotes.push({
            title: titleNotes.value,
            notes: inptNotes.value,
        });
        localStorage.setItem("Notes", JSON.stringify(objNotes));
        inptNotes.value = "";
        titleNotes.value = "";
        console.log(objNotes);
        showText();
    }
});

function showText() {
    let getNotes = localStorage.getItem("Notes");
    if (getNotes === null) {
        objNotes = [];
    } else {
        objNotes = JSON.parse(getNotes);
    }
    let textHtml = ``;
    objNotes.forEach((element, index) => {
        textHtml += `<div  class="notecard  mt-5 mx-4 card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title"> ${element.title}</h5>
        <p class="card-text" >${element.notes}</p>
        <button id = "${index}" onclick = "deleteNotes(this.id)" class="btn">Delete</button>
        </div>
        </div>`;
    });
    let para = document.getElementById("textpara");
    if (objNotes.length !== 0) {
        para.innerHTML = textHtml;
    };
    let noteBox = document.querySelectorAll(".notecard");
Array.from(noteBox).forEach(e => {
    e.style.backgroundColor = "#4dddad";
    e.style.color = "#fff";
    e.style.fontFamily = `'Poppins', sans-serif`;
    e.style.boxShadow = "15px 15px 15px #4dddad";
    e.style.marginBottom = "20px";
});
let btn = document.querySelectorAll(".btn");
   Array.from(btn).forEach(e => {
        e.style.backgroundColor = "#0fbcf9";
        e.style.color = "#fff";
        e.style.border = "none";
    });
};

let deleteNotes = (index) => {
    let getNotes = localStorage.getItem("Notes");
    if (getNotes === null) {
        objNotes = [];
    } else {
        objNotes = JSON.parse(getNotes);
    }
    objNotes.splice(index, 1);
    localStorage.setItem("Notes", JSON.stringify(objNotes));
    showText();
};
let searchBox = document.getElementById("searchbox");
searchBox.addEventListener("input", () => {
    let inpValue = searchBox.value;
    let cardNotes = document.getElementsByClassName("notecard");
    Array.from(cardNotes).forEach((element) => {
        let cardPara = element.getElementsByTagName("h5")[0].innerText;
        if (cardPara.includes(inpValue)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})

