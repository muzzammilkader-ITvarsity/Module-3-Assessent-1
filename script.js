const recipes = [
  // Breakfast
  {name: "Pancakes", category: "Breakfast", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/pancake.jpg", details: "Flour, eggs, milk, sugar, baking powder, butter.\nCook and serve with syrup."},
  {name: "Scrambled Eggs", category: "Breakfast", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/scrambled_eggs.jpg", details: "Eggs, milk, salt, pepper.\nWhisk eggs and cook in pan until fluffy."},
  {name: "Avocado Toast", category: "Breakfast", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/avocado_toast.jpg", details: "Bread, avocado, salt, pepper, lemon juice.\nToast bread, smash avocado, spread on top."},
  {name: "French Toast", category: "Breakfast", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/french_toast.jpg", details: "Bread, eggs, milk, cinnamon, sugar.\nDip bread in mixture and fry."},
  {name: "Omelette", category: "Breakfast", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/omelette.jpg", details: "Eggs, cheese, veggies, salt, pepper.\nWhisk eggs and cook with fillings."},
  {name: "Breakfast Burrito", category: "Breakfast", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/breakfast_burrito.jpg", details: "Tortilla, eggs, beans, cheese, veggies.\nAssemble and wrap."},
  {name: "Smoothie Bowl", category: "Breakfast", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/smoothie_bowl.jpg", details: "Fruits, yogurt, granola, honey.\nBlend fruits, pour in bowl, top with granola."},
  {name: "Bagel with Cream Cheese", category: "Breakfast", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/bagel_with_cream_cheese.jpg", details: "Bagel, cream cheese.\nToast bagel, spread cream cheese."},

  // Lunch
  {name: "Grilled Cheese Sandwich", category: "Lunch", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/grilled_cheese_sandwich.jpg", details: "Bread, cheese, butter.\nGrill until golden brown."},
  {name: "Caesar Salad", category: "Lunch", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/Caesar_Salad.jpg", details: "Lettuce, croutons, parmesan, Caesar dressing.\nMix all ingredients."},
  {name: "BLT Sandwich", category: "Lunch", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/blt_sandwich.jpg", details: "Bacon, lettuce, tomato, bread, mayo.\nAssemble ingredients between toasted bread."},
  {name: "Chicken Wrap", category: "Lunch", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/chicken_wrap.jpg", details: "Tortilla, grilled chicken, lettuce, tomato, sauce.\nWrap and serve."},
  {name: "Veggie Burger", category: "Lunch", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/veggie_burger.jpg", details: "Veggie patty, bun, lettuce, tomato, sauce.\nAssemble and serve."},
  {name: "Sushi Rolls", category: "Lunch", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/sushi_rolls.jpg", details: "Rice, seaweed, veggies, fish.\nRoll ingredients and slice."},
  {name: "Quinoa Salad", category: "Lunch", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/quinoa_salad.jpg", details: "Quinoa, veggies, dressing.\nMix all ingredients."},
  {name: "Caprese Sandwich", category: "Lunch", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/caprese_sandwich.jpg", details: "Bread, mozzarella, tomato, basil, olive oil.\nAssemble ingredients."},

  // Dinner
  {name: "Spaghetti Bolognese", category: "Dinner", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/spaghetti_bolognese.jpg", details: "Spaghetti, minced meat, tomato sauce, onions, garlic.\nCook pasta, make sauce, serve together."},
  {name: "Chicken Curry", category: "Dinner", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/chicken_curry.jpg", details: "Chicken, curry powder, coconut milk, onions.\nCook everything together and serve with rice."},
  {name: "Grilled Salmon", category: "Dinner", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/grilled_salmon.jpg", details: "Salmon fillet, lemon, garlic, herbs.\nGrill until cooked and serve with vegetables."},
  {name: "Beef Stir Fry", category: "Dinner", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/beef_stir_fry.jpg", details: "Beef strips, vegetables, soy sauce.\nStir fry all ingredients quickly."},
  {name: "Veggie Pasta", category: "Dinner", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/veggie_pasta.jpg", details: "Pasta, mixed veggies, olive oil, herbs.\nCook pasta and mix with veggies."},
  {name: "Chicken Alfredo", category: "Dinner", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/chicken_alfredo.jpg", details: "Pasta, chicken, cream, parmesan.\nCook pasta and mix with sauce."},
  {name: "Stuffed Peppers", category: "Dinner", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/stuffed_peppers.jpg", details: "Bell peppers, rice, meat, tomato sauce.\nStuff and bake until cooked."},
  {name: "Shrimp Tacos", category: "Dinner", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/shrimp_tacos.jpg", details: "Tortilla, shrimp, veggies, sauce.\nAssemble tacos and serve."},

  // Dessert
  {name: "Chocolate Chip Cookies", category: "Dessert", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/chocolate_chip_cookies.jpg", details: "Flour, sugar, butter, eggs, chocolate chips.\nBake in oven 10-12 minutes."},
  {name: "Chocolate Cake", category: "Dessert", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/chocolate_cake.jpg", details: "Flour, cocoa, sugar, eggs, butter.\nMix, bake, and frost."},
  {name: "Ice Cream Sundae", category: "Dessert", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/ice_cream_sundae.jpg", details: "Ice cream, chocolate syrup, nuts, whipped cream.\nAssemble and serve."},
  {name: "Apple Pie", category: "Dessert", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/apple_pie.jpg", details: "Apples, sugar, flour, butter.\nPrepare crust, fill with apples, and bake."},
  {name: "Brownies", category: "Dessert", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/brownies.jpg", details: "Chocolate, flour, butter, sugar, eggs.\nMix ingredients and bake."},
  {name: "Cheesecake", category: "Dessert", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/cheesecake.jpg", details: "Cream cheese, sugar, eggs, crust.\nPrepare crust, pour filling, bake and chill."},
  {name: "Lemon Tart", category: "Dessert", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/lemon_tart.jpg", details: "Lemon juice, sugar, eggs, tart crust.\nBake until set and cool."},
  {name: "Fruit Parfait", category: "Dessert", image: "https://raw.githubusercontent.com/muzzammilkader-ITvarsity/Module-3-Assessent-1/main/fruit_parfait.jpg", details: "Yogurt, granola, fruits.\nLayer ingredients in glass."}
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
