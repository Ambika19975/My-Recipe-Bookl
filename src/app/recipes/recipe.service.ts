import { EventEmitter, Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
 
  private  recipes:Recipe[]=[
        new Recipe('Ramen Noodles','This a vegetable ramen noodle recipe',
        'https://peasandcrayons.com/wp-content/uploads/2020/04/spicy-vegetarian-ramen-recipe-3-1024x1536.jpg',[
          new Ingredient('Noodle',1),
          new Ingredient('Veggies',5)
        ])
        ];
constructor(private slService:ShoppingListService){}

 getRecipes(){
     return this.recipes.slice();
 }
 addIngredientsToShoppingList(ingredients:Ingredient[]){
  this.slService.addIngredients(ingredients);
 }
 getRecipe(index:number){
   return this.recipes[index];
 }
}