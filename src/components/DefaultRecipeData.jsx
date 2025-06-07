
const RecipeData = [
  {
    id: "r1",
    title: "Paneer Butter Masala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRQMKHs5qBBmBwVN6e7UTPlt3PpK2c6T8XA&s",
    category: "Lunch",
    chef: "Chef Arjun",
    ingredients: ["Paneer", "Tomatoes", "Butter", "Cream", "Spices"],
    instructions: "Cook tomatoes, add spices, blend, add paneer and cream. Simmer and serve.",
    difficulty: "Medium",
    cookingTime: "40 mins"
  },
  {
    id: "r2",
    title: "Chocolate Brownie",
    image: "https://images.unsplash.com/photo-1612078960206-1709f1f0c969?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Dessert",
    chef: "Chef Neha",
    ingredients: ["Cocoa powder", "Flour", "Butter", "Sugar", "Eggs"],
    instructions: "Mix all ingredients, pour into tray, and bake for 30 minutes at 180°C.",
    difficulty: "Easy",
    cookingTime: "35 mins"
  },
  {
    id: "r3",
    title: "Masala Dosa",
    image: "https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg?semt=ais_hybrid&w=740",
    category: "Breakfast",
    chef: "Chef Ravi",
    ingredients: ["Dosa batter", "Potatoes", "Onions", "Spices", "Oil"],
    instructions: "Spread batter on tawa, add potato filling, fold and serve hot.",
    difficulty: "Medium",
    cookingTime: "30 mins"
  },
  {
    id: "r4",
    title: "Rajma Chawal",
    image: "https://media.istockphoto.com/id/1214464511/photo/rajma-chawal-indian-vegan-food-directly-above-stock-photo.jpg?s=612x612&w=0&k=20&c=HbW81gCaNmrhLPgeG54jJr8aGThC9D9ymdFdKMpL1KI=",
    category: "Lunch",
    chef: "Chef Simran",
    ingredients: ["Rajma", "Rice", "Onions", "Tomatoes", "Spices"],
    instructions: "Cook rajma with masala, serve hot with steamed rice.",
    difficulty: "Hard",
    cookingTime: "1 hr"
  },
  {
    id: "r5",
    title: "Veg Biryani",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/veg-biryani-vegetable-biryani.webp",
    category: "Dinner",
    chef: "Chef Akash",
    ingredients: ["Rice", "Mixed veggies", "Yogurt", "Spices", "Mint"],
    instructions: "Layer cooked rice and veggies, simmer with biryani masala.",
    difficulty: "Medium",
    cookingTime: "50 mins"
  },
  {
    id: "r6",
    title: "Mango Smoothie",
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/04/Mango-Smoothie-Recipe.jpg",
    category: "Breakfast",
    chef: "Chef Tanya",
    ingredients: ["Mango", "Milk", "Yogurt", "Honey", "Ice"],
    instructions: "Blend all ingredients until smooth. Serve chilled.",
    difficulty: "Easy",
    cookingTime: "10 mins"
  },
  {
    id: "r7",
    title: "Chole Bhature",
    image: "https://assets.gqindia.com/photos/5e13119f28dff200080a598d/16:9/w_2560%2Cc_limit/top-image.jpg",
    category: "Lunch",
    chef: "Chef Aman",
    ingredients: ["Chickpeas", "Flour", "Onions", "Tomatoes", "Spices"],
    instructions: "Prepare chole with masala, fry bhature and serve together.",
    difficulty: "Hard",
    cookingTime: "1 hr"
  },
  {
    id: "r8",
    title: "Pasta Alfredo",
    image: "https://t3.ftcdn.net/jpg/03/88/35/68/360_F_388356842_278zLt0yP5IWihvItePWqXojQaF8GQo8.jpg",
    category: "Dinner",
    chef: "Chef Maria",
    ingredients: ["Pasta", "Cream", "Cheese", "Garlic", "Butter"],
    instructions: "Cook pasta, prepare Alfredo sauce, mix and serve hot.",
    difficulty: "Easy",
    cookingTime: "25 mins"
  },
  {
    id: "r9",
    title: "Fruit Salad",
    image: "https://media.istockphoto.com/id/511622035/photo/heallthy-organic-fruit-salad.jpg?s=612x612&w=0&k=20&c=Nl3vuD8QLVCWCzFqiHBvRQzeoY2p0chmhzuPsW2hNBA=",
    category: "Dessert",
    chef: "Chef Rahul",
    ingredients: ["Apple", "Banana", "Grapes", "Orange", "Honey"],
    instructions: "Chop fruits, drizzle honey, mix gently and serve fresh.",
    difficulty: "Easy",
    cookingTime: "15 mins"
  },
  {
    id: "r10",
    title: "Aloo Paratha",
    image: "https://t3.ftcdn.net/jpg/09/45/46/72/360_F_945467264_13rCx2nGR9wb9wrVt2g2FEFB4tE4b8sW.jpg",
    category: "Breakfast",
    chef: "Chef Kiran",
    ingredients: ["Wheat flour", "Potatoes", "Onions", "Spices", "Butter"],
    instructions: "Prepare dough, make spicy potato filling, stuff, roll, and cook on tawa with butter.",
    difficulty: "Medium",
    cookingTime: "35 mins"
  },
  {
    id: "r11",
    title: "Gulab Jamun",
    image: "https://rakskitchen.net/wp-content/uploads/2021/09/gulab-jamun.jpg",
    category: "Dessert",
    chef: "Chef Priya",
    ingredients: ["Khoya", "Flour", "Sugar", "Cardamom", "Oil"],
    instructions: "Make dough balls, deep fry, and soak in cardamom-flavored sugar syrup.",
    difficulty: "Medium",
    cookingTime: "45 mins"
  },
  {
    id: "r12",
    title: "Tandoori Chicken",
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg",
    category: "Dinner",
    chef: "Chef Farhan",
    ingredients: ["Chicken", "Yogurt", "Spices", "Lemon juice", "Oil"],
    instructions: "Marinate chicken in spiced yogurt, grill or bake until cooked and charred.",
    difficulty: "Hard",
    cookingTime: "1 hr 15 mins"
  }
]



 export default RecipeData;