let tbody = document.getElementById("tbody");
let deleteN;


let notees = "";
let arr = [];
let sn = 1;


show()
function show() {
  if (localStorage.getItem("note") != null) {


    note = localStorage.getItem("note");
   //  console.log(note);
    let note2 = JSON.parse(note);
    // console.log(note2);
    LNote = ""

    let i = 0;

    while (note2.length > i) {

  // console.log("note2")

    LNote += `
<tr>
<th scope="col">${note2[i].sn}</th>
<th scope="col">${note2[i].title.substr(0,30)}</th>
<th scope="col">${note2[i].description.substr(0,30)}</th>
<th scope="col">${note2[i].timeNow}</th>
<th scope="col"><btn class="btn btn-danger" id="del" type="button">Delete </btn> <btn class="btn btn-primary disabled" type="button">View </btn> <btn class="btn btn-secondary disabled" type="button">Edit </btn></th>
</tr>
    
`;
    i++;

    }
    tbody.innerHTML = LNote; 

  }
  deleteN = document.querySelectorAll("#del");
  for (let deletee of deleteN) {
    deletee.addEventListener("click", () => {
      console.log(deletee.parentNode.parentElement)
    })
  }

}

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value.trim() == "" || description.value.trim() == "") {
    alert("You cann't");
  } else {
    addNotes();
  }
});

function addNotes() {
  arr = []
 j = 0;

   tbody.innerHTML = "ok"; 
   let titleD = document.getElementById("title").value.trim();
   let descriptionD = document.getElementById("description").value.trim();

  let time = new Date();
  let timeNow = time.toLocaleTimeString();


  let datas = {
    sn: sn++,
    title: titleD,
    description: descriptionD,
    timeNow: timeNow,
  };

    note = localStorage.getItem("note");
    note2 = JSON.parse(note);
    if (note2 != null) {
    while(j < note2.length){
      datas.sn = note2.length+1
     arr.push(note2[j])
      j++
  }
  
}
arr.push(datas);
  localStorage.setItem("note", JSON.stringify(arr));
  note = localStorage.getItem("note");
show();


}

if (notees > 0) {
  let del = document.querySelectorAll(".btn");
  del.addEventListener("click", () => {
    console.log("del clicked");
  });
}
