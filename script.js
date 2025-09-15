const recipes = [
  // Breakfast
  {name: "Pancakes", category: "Breakfast", image: "https://picsum.photos/400/300?random=1", details: "Flour, eggs, milk, sugar, baking powder, butter.\nCook and serve with syrup."},
  {name: "Scrambled Eggs", category: "Breakfast", image: "https://picsum.photos/400/300?random=2", details: "Eggs, milk, salt, pepper.\nWhisk eggs and milk, cook in pan until fluffy."},
  {name: "Avocado Toast", category: "Breakfast", image: "https://picsum.photos/400/300?random=3", details: "Bread, avocado, salt, pepper, lemon juice.\nToast bread, smash avocado, spread on top."},
  {name: "French Toast", category: "Breakfast", image: "https://picsum.photos/400/300?random=4", details: "Bread, eggs, milk, cinnamon, sugar.\nDip bread in mixture and fry."},
  {name: "Omelette", category: "Breakfast", image: "https://picsum.photos/400/300?random=5", details: "Eggs, cheese, veggies, salt, pepper.\nWhisk eggs and cook with fillings."},
  {name: "Breakfast Burrito", category: "Breakfast", image: "https://picsum.photos/400/300?random=6", details: "Tortilla, eggs, beans, cheese, veggies.\nAssemble and wrap."},
  {name: "Smoothie Bowl", category: "Breakfast", image: "https://picsum.photos/400/300?random=7", details: "Fruits, yogurt, granola, honey.\nBlend fruits, pour in bowl, top with granola."},
  {name: "Bagel with Cream Cheese", category: "Breakfast", image: "https://picsum.photos/400/300?random=8", details: "Bagel, cream cheese.\nToast bagel, spread cream cheese."},

  // Lunch
  {name: "Grilled Cheese Sandwich", category: "Lunch", image: "https://picsum.photos/400/300?random=9", details: "Bread, cheese, butter.\nGrill until golden brown."},
  {name: "Caesar Salad", category: "Lunch", image: "https://picsum.photos/400/300?random=10", details: "Lettuce, croutons, parmesan, Caesar dressing.\nMix all ingredients."},
  {name: "BLT Sandwich", category: "Lunch", image: "https://picsum.photos/400/300?random=11", details: "Bacon, lettuce, tomato, bread, mayo.\nAssemble ingredients between toasted bread."},
  {name: "Chicken Wrap", category: "Lunch", image: "https://picsum.photos/400/300?random=12", details: "Tortilla, grilled chicken, lettuce, tomato, sauce.\nWrap and serve."},
  {name: "Veggie Burger", category: "Lunch", image: "https://picsum.photos/400/300?random=13", details: "Veggie patty, bun, lettuce, tomato, sauce.\nAssemble and serve."},
  {name: "Sushi Rolls", category: "Lunch", image: "https://picsum.photos/400/300?random=14", details: "Rice, seaweed, veggies, fish.\nRoll ingredients and slice."},
  {name: "Quinoa Salad", category: "Lunch", image: "https://picsum.photos/400/300?random=15", details: "Quinoa, veggies, dressing.\nMix all ingredients."},
  {name: "Caprese Sandwich", category: "Lunch", image: "https://picsum.photos/400/300?random=16", details: "Bread, mozzarella, tomato, basil, olive oil.\nAssemble ingredients."},

  // Dinner
  {name: "Spaghetti Bolognese", category: "Dinner", image: "https://picsum.photos/400/300?random=17", details: "Spaghetti, minced meat, tomato sauce, onions, garlic.\nCook pasta, make sauce, serve together."},
  {name: "Chicken Curry", category: "Dinner", image: "https://picsum.photos/400/300?random=18", details: "Chicken, curry powder, coconut milk, onions.\nCook everything together and serve with rice."},
  {name: "Grilled Salmon", category: "Dinner", image: "https://picsum.photos/400/300?random=19", details: "Salmon fillet, lemon, garlic, herbs.\nGrill until cooked and serve with vegetables."},
  {name: "Beef Stir Fry", category: "Dinner", image: "https://picsum.photos/400/300?random=20", details: "Beef strips, vegetables, soy sauce.\nStir fry all ingredients quickly."},
  {name: "Veggie Pasta", category: "Dinner", image: "https://picsum.photos/400/300?random=21", details: "Pasta, mixed veggies, olive oil, herbs.\nCook pasta and mix with veggies."},
  {name: "Chicken Alfredo", category: "Dinner", image: "https://picsum.photos/400/300?random=22", details: "Pasta, chicken, cream, parmesan.\nCook pasta and mix with sauce."},
  {name: "Stuffed Peppers", category: "Dinner", image: "https://picsum.photos/400/300?random=23", details: "Bell peppers, rice, meat, tomato sauce.\nStuff and bake until cooked."},
  {name: "Shrimp Tacos", category: "Dinner", image: "https://picsum.photos/400/300?random=24", details: "Tortilla, shrimp, veggies, sauce.\nAssemble tacos and serve."},

  // Dessert
  {name: "Chocolate Chip Cookies", category: "Dessert", image: "https://picsum.photos/400/300?random=25", details: "Flour, sugar, butter, eggs, chocolate chips.\nBake in oven 10-12 minutes."},
  {name: "Chocolate Cake", category: "Dessert", image: "https://picsum.photos/400/300?random=26", details: "Flour, cocoa, sugar, eggs, butter.\nMix, bake, and frost."},
  {name: "Ice Cream Sundae", category: "Dessert", image: "https://picsum.photos/400/300?random=27", details: "Ice cream, chocolate syrup, nuts, whipped cream.\nAssemble and serve."},
  {name: "Apple Pie", category: "Dessert", image: "https://picsum.photos/400/300?random=28", details: "Apples, sugar, flour, butter.\nPrepare crust, fill with apples, and bake."},
  {name: "Brownies", category: "Dessert", image: "https://picsum.photos/400/300?random=29", details: "Chocolate, flour, butter, sugar, eggs.\nMix ingredients and bake."},
  {name: "Cheesecake", category: "Dessert", image: "https://picsum.photos/400/300?random=30", details: "Cream cheese, sugar, eggs, crust.\nPrepare crust, pour filling, bake and chill."},
  {name: "Lemon Tart", category: "Dessert", image: "https://picsum.photos/400/300?random=31", details: "Lemon juice, sugar, eggs, tart crust.\nBake until set and cool."},
  {name: "Fruit Parfait", category: "Dessert", image: "https://picsum.photos/400/300?random=32", details: "Yogurt, granola, fruits.\nLayer ingredients in glass."}
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
