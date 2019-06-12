// Deconstruct Router from express
// instead of import express from 'express' | const router = express.Router();
import { Router } from 'express';
// Controller
import mealController from '../Controllers/meal.controller';

// An instance of router
const router = Router();

// '/api/v1/meals/'
router.get('/', mealController.fetchAllMeals);
router.post('/', mealController.addAMeal);
router.get('/:id', mealController.getSingleMeal);

export default router;
