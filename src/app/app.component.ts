import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[] = [
    new Recipe("Tomato Soup", ["salt", "pepper", "tomatos"], "boil tomatoes in water for 15 minutes, add salt and pepper to taste, pour that shit in a bowel and sip it bc your a badass and you don't fuck with spoons"),
    new Recipe("Potato Soup", ["salt", "pepper", "potatoes"], "boil potatoes in water for 15 minutes, add salt and pepper to taste, pour that shit in a bowl and sip it bc your a badass and you don't fuck with spoons"),
    new Recipe("Clam Chowder", ["salt", "pepper", "clams", "heavy cream"], "simmer clams in heavy cream for 15 minutes you don't need to do anything else according to Stef. and She knows. So don't mess. ")
  ];
}
