const addBtn = document.getElementById("add-btn");
const recipesList = document.getElementById("recipes");

addBtn.addEventListener("click", () => {
  const name = document.getElementById("recipe-name").value;
  const details = document.getElementById("recipe-details").value;

  if (name && details) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${name}</strong><p>${details}</p>`;
    recipesList.appendChild(li);

    document.getElementById("recipe-name").value = "";
    document.getElementById("recipe-details").value = "";
  } else {
    alert("Please fill in both fields!");
  }
});
