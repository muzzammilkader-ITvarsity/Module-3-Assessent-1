const recipes = [
  {
    name: "Spaghetti Bolognese",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
    details: "Ingredients: Spaghetti, minced meat, tomato sauce, onions, garlic, olive oil, salt, pepper.\nInstructions: 1. Cook spaghetti. 2. Sauté onions and garlic. 3. Add minced meat until brown. 4. Add tomato sauce and simmer. 5. Serve over spaghetti."
  },
  {
    name: "Pancakes",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1584270354949-b192a70e1d1b?auto=format&fit=crop&w=400&q=80",
    details: "Ingredients: Flour, eggs, milk, sugar, baking powder, butter.\nInstructions: 1. Mix flour, sugar, and baking powder. 2. Whisk in eggs and milk. 3. Heat butter on a pan. 4. Pour batter and cook both sides until golden. 5. Serve with syrup or fruits."
  },
  {
    name: "Chicken Curry",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1603079612093-7c71e479f93f?auto=format&fit=crop&w=400&q=80",
    details: "Ingredients: Chicken, curry powder, coconut milk, onions, garlic, ginger, salt, oil.\nInstructions: 1. Sauté onions, garlic, and ginger. 2. Add chicken and cook until slightly brown. 3. Add curry powder and coconut milk. 4. Simmer until chicken is cooked. 5. Serve with rice."
  },
  {
    name: "Chocolate Chip Cookies",
    category: "Snack",
    image: "https://images.unsplash.com/photo-1606312611880-7b3fd9d0d0b0?auto=format&fit=crop&w=400&q=80",
    details: "Ingredients: Flour, sugar, butter, eggs, chocolate chips, baking soda, vanilla extract.\nInstructions: 1. Preheat oven to 180°C. 2. Cream butter and sugar. 3. Add eggs and vanilla. 4. Mix in flour and baking soda. 5. Fold in chocolate chips. 6. Bake 10-12 minutes."
  }
];

const recipesList = document.getElementById("recipes");
const searchInput = document.getElementById("search");

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

// Initial display
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
