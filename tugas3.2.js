const restaurants = [
    {
      name: "Emado's Shawarma",
      city: "Tangerang Selatan",
      favoriteDrink: "Lemon Tea",
      favoriteFood: "lamb Nasi Mandhi",
      isVegan: false
    },
    {
      name: "Gacoan",
      city: "Tangerang Selatan",
      favoriteDrink: "Milo",
      favoriteFood: "Mie Gacoan",
      isVegan: false
    }
  ];
  
  for (const restaurant of restaurants) {
    console.log("Nama Restoran:", restaurant.name);
    console.log("Kota:", restaurant.city);
    console.log("Minuman Favorit:", restaurant.favoriteDrink);
    console.log("Makanan Favorit:", restaurant.favoriteFood);
    console.log("Restoran Vegan?", restaurant.isVegan);
    console.log()
  }
  