class Dessert {
  constructor(
    id,
    title,
    color,
    recipe,
    duration,
    ingredients,
    personQuantity,
    imageUrl
  ) {
    this.id = id;
    this.title = title;
    this.color = color;
    this.recipe = recipe;
    this.duration = duration;
    this.ingredients = ingredients;
    this.personQuantity = personQuantity;
    this.imageUrl = imageUrl;
  }
}

export default Dessert;
