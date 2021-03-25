import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
 
    this.max();
    
   }
 max(): void{
   let arr =[1050,7,5,9, 12, 50,150, 2050, 1, 50100];
   let curr_max_numb = arr[0];
   let min = arr[0];
   for(let i = 0; i <=arr.length; i++){
  
     if (curr_max_numb < arr[i]){
       // console.log(this.arr[i]);
       curr_max_numb = arr[i];
       
       }
      
 } 
 console.log("CurrMax::  ",curr_max_numb);
 for(let i =0; i <= arr.length; i++){
 if (min > arr[i]){
   min = arr[i];
 }
 }
 console.log("Min number is::  ",min);
 
 }
 }
 
