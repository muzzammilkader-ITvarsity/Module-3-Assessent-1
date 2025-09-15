const recipes = [
  // Breakfast
  {name: "Pancakes", category: "Breakfast", image: "https://images.unsplash.com/photo-1584270354949-b192a70e1d1b?auto=format&fit=crop&w=400&q=80", details: "Flour, eggs, milk, sugar, baking powder, butter.\nCook and serve with syrup."},
  {name: "Scrambled Eggs", category: "Breakfast", image: "https://images.unsplash.com/photo-1584270354949-b192a70e1d1b?auto=format&fit=crop&w=400&q=80", details: "Eggs, milk, salt, pepper.\nWhisk eggs and milk, cook in pan until fluffy."},
  {name: "Avocado Toast", category: "Breakfast", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80", details: "Bread, avocado, salt, pepper, lemon juice.\nToast bread, smash avocado, spread on top."},

  // Lunch
  {name: "Grilled Cheese Sandwich", category: "Lunch", image: "https://images.unsplash.com/photo-1604894238410-3efc9f2c75fa?auto=format&fit=crop&w=400&q=80", details: "Bread, cheese, butter.\nGrill until golden brown."},
  {name: "Caesar Salad", category: "Lunch", image: "https://images.unsplash.com/photo-1608756431408-2a9df5e97c8b?auto=format&fit=crop&w=400&q=80", details: "Lettuce, croutons, parmesan, Caesar dressing.\nMix all ingredients."},

  // Dinner
  {name: "Spaghetti Bolognese", category: "Dinner", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80", details: "Spaghetti, minced meat, tomato sauce, onions, garlic.\nCook pasta, make sauce, serve together."},
  {name: "Chicken Curry", category: "Dinner", image: "https://images.unsplash.com/photo-1603079612093-7c71e479f93f?auto=format&fit=crop&w=400&q=80", details: "Chicken, curry powder, coconut milk, onions.\nCook everything together and serve with rice."},

  // Dessert
  {name: "Chocolate Chip Cookies", category: "Dessert", image: "https://images.unsplash.com/photo-1606312611880-7b3fd9d0d0b0?auto=format&fit=crop&w=400&q=80", details: "Flour, sugar, butter, eggs, chocolate chips.\nBake in oven 10-12 minutes."},
  {name: "Chocolate Cake", category: "Dessert", image: "https://images.unsplash.com/photo-1601972568154-0cf52b7e928c?auto=format&fit=crop&w=400&q=80", details: "Flour, cocoa, sugar, eggs, butter.\nMix, bake, and frost."},
  {name: "Ice Cream Sundae", category: "Dessert", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=400&q=80", details: "Ice cream, chocolate syrup, nuts, whipped cream.\nAssemble and serve."}
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
