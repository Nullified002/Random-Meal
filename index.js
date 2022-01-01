//values at the bottom are first inserted into _courses,

const menu = {
  _courses: { // empty arrays to take in food values
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {//reads the arrays and holds the values
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(apps) {//the parameters for these setter methods could all
    this._courses.appetizers = apps;//be the same and the code would work fine.
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },//the code works without any of these setter methods
  get courses() { // I could just >>return _courses
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },
  addDish(spread, dishN, dishP) { //addDishToCourse //takes manual entries when the function is called
    const dish = {
      name: dishN,
      price: dishP }
      return this._courses[spread].push(dish); 
  },
  genRanDish(spread) {
    const dishes = this.courses[spread];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  genRandMeal() {
    const appetizer = this.genRanDish("appetizers");
    const main = this.genRanDish("mains");
    const dessert = this.genRanDish("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal: ${appetizer.name}, ${main.name}, ${dessert.name}, totaling $${totalPrice}`;
  }
};

menu.addDish("appetizers", "mushrooms", 25.66);
menu.addDish("appetizers", "calamari", 58.48);
menu.addDish("appetizers", "nachos", 8.99);

menu.addDish("mains", "steak", 30.66);
menu.addDish("mains", "lobster", 42.48);
menu.addDish("mains", "lamb chops", 15.99);

menu.addDish("desserts", "cake", 5.66);
menu.addDish("desserts", "ice cream", 9.14);
menu.addDish("desserts", "cake", 4.65);

const meal = menu.genRandMeal();
console.log(meal);
