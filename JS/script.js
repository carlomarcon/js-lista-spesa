const Array = ["Mela", "Pera", "Banana", "Insalata"];
let List = document.createElement("ol");
const wrapper = document.querySelector("div");
const Generate = document.querySelector("button");
const Clear = document.querySelector("button:nth-child(3)");
let insert = "";
let i = 0;

wrapper.append(List);

while (i < Array.length) {
  console.log(i);
  insert += "<li>" + Array[i] + "</li>";
  i++;

  //   console.log(List);
}

Generate.addEventListener("click", function () {
  List.innerHTML = insert;
  Clear.classList.remove("Clear");
});

Clear.addEventListener("click", function () {
  location.reload();
});
