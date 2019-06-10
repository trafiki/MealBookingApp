import dummyData from '../Utils/dummyData';
import Meal from '../Models/meal.model';

const MealService = {
  fetchAllMeals() {
    // map each item the dummyData to validMeals so we have something like a copy returned when
    // fetchAllMeals is called
    const validMeals = dummyData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      // return newMeal;
    });
    return validMeals;
  },
  addMeal(meal) {
    // get the id of the last item in the dummyData.meals array
    const mealLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealLength - 1];
    const newId = lastId + 1;
    meal.id = newId;
    dummyData.meals.push(meal);
    return meal;
  },
  getMeal(id) {
    // look for the meal with matching id as the parameter
    const meal = dummyData.meals.find(meaL => meaL.id === id);
    return meal || {}; // return the meal if something is returned, else return an empty object
  },

};

export default MealService;
