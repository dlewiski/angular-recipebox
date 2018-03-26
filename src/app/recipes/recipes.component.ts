import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe: Recipe = {
    title: "Clam Chowder",
    ingredients: ["salt", "pepper", "clams"],
    direction: "simmer clams in heavy cream for 15 minutes you don't need to do anything else according to Stef. and She knows. So don't mess. "
  };

  recipes = RECIPES;

  selectedRecipe: Recipe;

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
  constructor() { }

  ngOnInit() {
  }

}
