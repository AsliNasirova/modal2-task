// create element
let modal = document.querySelector(".modal");
const image = document.getElementById("image");
const film = document.querySelector("#film");
const imdb = document.getElementById("film_imdb");
const category = document.getElementById("category");
const rejisor = document.getElementById("rejisor");

const table = document.getElementById("userTable");
const add = document.querySelector(".button");
const cancel = document.getElementById("cancel");
const tbody = document.querySelector("tbody");
const edit = document.getElementById("edit");
const save = document.querySelector(".save");
let memoryElement;

add.addEventListener("click", () => {
  modal.classList.toggle("active");
});

save.addEventListener("click", (e) => {
  e.preventDefault();

  let tr = document.createElement("tr");
  let imgInformation = document.createElement("img");
  let addInformation = document.createElement("td");
  let imdInformation = document.createElement("td");
  let categoryInformation = document.createElement("td");
  let rejisorInformation = document.createElement("td");
  let newtd = document.createElement("td");

  let editButton = document.createElement("button");
  let deleteButton = document.createElement("button");

  imgInformation.src = image.value;
  imgInformation.append(image);
  addInformation.textContent = film.value;
  imdInformation.textContent = imdb.value;
  categoryInformation.textContent = category.value;
  rejisorInformation.textContent = rejisor.value;

  editButton.textContent = "Edit";
  deleteButton.textContent = "X";

  editButton.addEventListener("click", () => {
    image.value = imgInformation.src;
    film.value = addInformation.textContent;
    imdb.value = imdInformation.textContent;
    category.value = categoryInformation.textContent;
    rejisor.value = rejisorInformation.textContent;

    save.addEventListener("click", (e) => {
      e.preventDefault();

      tr.remove();
    });
  });

  deleteButton.addEventListener("click", () => {
    e.preventDefault();

    tr.remove();
  });

  newtd.append(editButton, deleteButton);

  tr.append(
    imgInformation,
    addInformation,
    imdInformation,
    categoryInformation,
    rejisorInformation,
    newtd
  );
  tbody.append(tr);

  userForm.reset();
});
