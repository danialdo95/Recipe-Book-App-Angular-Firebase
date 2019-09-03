import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a recipe', 'https://assets.bonappetit.com/photos/57ae3e611b33404414975c0d/1:1/w_414,h_414,c_limit/roasted-chicken-thighs-with-lemon-and-oregano.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
