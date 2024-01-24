import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utlis/reducer/reducer.utilis";

export const setCategories = (categoriesArray) =>
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)