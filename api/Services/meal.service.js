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
      return newMeal;
    });
    return validMeals;
  },
  addMeal(newMeal) {
    // get the id of the last item in the dummyData.meals array
    const mealLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    newMeal.id = newId;
    dummyData.meals.push(newMeal);
    return newMeal;
  },
  getMeal(id) {
    // look for the meal with matching id as the parameter
    // used Number(id) because id evaluates as a string
    const foundMeal = dummyData.meals.find(meaL => meaL.id === Number(id));
    return foundMeal || {}; // return the meal if something is returned, else return an empty object
  },

};

export default MealService;
