const recipes = [
  // Breakfast
  {name: "Pancakes", category: "Breakfast", image: "https://picsum.photos/400/300?random=1", details: "Flour, eggs, milk, sugar, baking powder, butter.\nCook and serve with syrup."},
  {name: "Scrambled Eggs", category: "Breakfast", image: "https://picsum.photos/400/300?random=2", details: "Eggs, milk, salt, pepper.\nWhisk eggs and milk, cook in pan until fluffy."},
  {name: "Avocado Toast", category: "Breakfast", image: "https://picsum.photos/400/300?random=3", details: "Bread, avocado, salt, pepper, lemon juice.\nToast bread, smash avocado, spread on top."},

  // Lunch
  {name: "Grilled Cheese Sandwich", category: "Lunch", image: "https://picsum.photos/400/300?random=4", details: "Bread, cheese, butter.\nGrill until golden brown."},
  {name: "Caesar Salad", category: "Lunch", image: "https://picsum.photos/400/300?random=5", details: "Lettuce, croutons, parmesan, Caesar dressing.\nMix all ingredients."},
  {name: "BLT Sandwich", category: "Lunch", image: "https://picsum.photos/400/300?random=6", details: "Bacon, lettuce, tomato, bread, mayo.\nAssemble ingredients between toasted bread."},

  // Dinner
  {name: "Spaghetti Bolognese", category: "Dinner", image: "https://picsum.photos/400/300?random=7", details: "Spaghetti, minced meat, tomato sauce, onions, garlic.\nCook pasta, make sauce, serve together."},
  {name: "Chicken Curry", category: "Dinner", image: "https://picsum.photos/400/300?random=8", details: "Chicken, curry powder, coconut milk, onions.\nCook everything together and serve with rice."},
  {name: "Grilled Salmon", category: "Dinner", image: "https://picsum.photos/400/300?random=9", details: "Salmon fillet, lemon, garlic, herbs.\nGrill until cooked and serve with vegetables."},

  // Dessert
  {name: "Chocolate Chip Cookies", category: "Dessert", image: "https://picsum.photos/400/300?random=10", details: "Flour, sugar, butter, eggs, chocolate chips.\nBake in oven 10-12 minutes."},
  {name: "Chocolate Cake", category: "Dessert", image: "https://picsum.photos/400/300?random=11", details: "Flour, cocoa, sugar, eggs, butter.\nMix, bake, and frost."},
  {name: "Ice Cream Sundae", category: "Dessert", image: "https://picsum.photos/400/300?random=12", details: "Ice cream, chocolate syrup, nuts, whipped cream.\nAssemble and serve."}
];

const recipesList = document.getElementById("recipes");
const searchInput = document.getElementById("search");
const categoryButtons = document.querySelectorAll("#category-buttons button");

function displayRecipes(filteredRecipes) {
  recipesList.innerHTML = "";
  filteredRecipes.forEach(recipe => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <div>
        <h3>${recipe.name}</h3>
        <p><strong>Category:</strong> ${recipe.category}</p>
        <p>${recipe.details.replace(/\n/g, "<br>")}</p>
      </div>
    `;
    recipesList.appendChild(li);
  });
}

// Show all recipes initially
displayRecipes(recipes);

// Search functionality
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = recipes.filter(r =>
    r.name.toLowerCase().includes(searchTerm) ||
    r.category.toLowerCase().includes(searchTerm)
  );
  displayRecipes(filtered);
});

// Category buttons functionality
categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    if(category === "All") {
      displayRecipes(recipes);
    } else {
      const filtered = recipes.filter(r => r.category === category);
      displayRecipes(filtered);
    }
  });
});
