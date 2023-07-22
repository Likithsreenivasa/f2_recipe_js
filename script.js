// Sample JSON array of recipes
const recipes =[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

// Function to create a UI card for each recipe
function createRecipeCard(recipe) {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    const image = document.createElement("img");
    image.src = recipe.imageSrc;
    image.alt = recipe.name;
    recipeCard.appendChild(image);

    const name = document.createElement("h2");
    name.textContent = recipe.name;
    recipeCard.appendChild(name);

    const type = document.createElement("p");
    type.textContent = recipe.type === "veg" ? "Vegetarian" : "Non-Vegetarian";
    recipeCard.appendChild(type);

    const time = document.createElement("p");
    time.textContent = recipe.time;
    recipeCard.appendChild(time);

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${recipe.rating}`;
    recipeCard.appendChild(rating);

    const likeButton = document.createElement("button");
    likeButton.classList.add("like-button");
    likeButton.textContent = recipe.isLiked ? "Liked" : "Like";
    likeButton.addEventListener("click", () => {
        recipe.isLiked = !recipe.isLiked;
        likeButton.textContent = recipe.isLiked ? "Liked" : "Like";
    });
    recipeCard.appendChild(likeButton);

    return recipeCard;
}

// Function to display the recipes
function displayRecipes(recipesArray) {
    const recipeContainer = document.getElementById("recipe-container");
    recipeContainer.innerHTML = "";

    recipesArray.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipeContainer.appendChild(recipeCard);
    });
}

// Initial display of all recipes
displayRecipes(recipes);

// Search functionality
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
    displayRecipes(filteredRecipes);
});

// Toggle recipe type functionality
const showAllButton = document.getElementById("showAll");
const showVegButton = document.getElementById("showVeg");
const showNonVegButton = document.getElementById("showNonVeg");

showAllButton.addEventListener("click", () => {
    displayRecipes(recipes);
});

showVegButton.addEventListener("click", () => {
    const vegRecipes = recipes.filter(recipe => recipe.type === "veg");
    displayRecipes(vegRecipes);
});

showNonVegButton.addEventListener("click", () => {
    const nonVegRecipes = recipes.filter(recipe => recipe.type === "non-veg");
    displayRecipes(nonVegRecipes);
});

// Filter by Rating functionality
const ratingAbove4_5 = document.getElementById("ratingAbove4_5");
const ratingBelow4_0 = document.getElementById("ratingBelow4_0");

ratingAbove4_5.addEventListener("change", () => {
    const filteredRecipes = recipes.filter(recipe => recipe.rating >= 4.5);
    displayRecipes(filteredRecipes);
});

ratingBelow4_0.addEventListener("change", () => {
    const filteredRecipes = recipes.filter(recipe => recipe.rating < 4.0);
    displayRecipes(filteredRecipes);
});

// Responsive Design - Toggle drawer for mobile screens
const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenuDrawer = document.getElementById("mobileMenuDrawer");

mobileMenuButton.addEventListener("click", () => {
    mobileMenuDrawer.classList.toggle("open");
});

